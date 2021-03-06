import { randomBoatPlacement, increment, setContainsMatch } from "./logic.js";

const boatFactory = function (title, len) {
	let name = title;
	let length = len;
	let positions = [];
	let hits = 0;
	let sunk = false;

	return { name, length, positions, hits, sunk };
};

const playerFactory = function () {
	//private properties (not included in returned object)
	let boats = [
		boatFactory("carrier", 5),
		boatFactory("battleship", 4),
		boatFactory("cruiser", 3),
		boatFactory("submarine", 3),
		boatFactory("destroyer", 2),
	];

	let previousHits = [];
	let previousMisses = [];
	let previousShots = [];

	//public getter methods (are included in returned object)
	const getAllBoats = () => boats;
	const getPrevHits = () => previousHits;
	const getPrevMisses = () => previousMisses;
	const getPrevShots = () => previousShots;
	const getBoatByName = (name) => boats.find((boat) => boat.name == name);

	//other public methods (are included in returned object)
	const addPrevHit = function (shot) {
		previousHits.push(shot);
		previousShots.push(shot);
	};

	const addPrevMiss = function (shot) {
		previousMisses.push(shot);
		previousShots.push(shot);
	};

	const placeSingleBoat = (boatName, positionSet) => {
		let boat = getBoatByName(boatName);
		boat.positions = positionSet;
	};

	const placeAllBoatsRandomly = () => {
		let boats = getAllBoats();
		boats.forEach((boat) => {
			boat.positions = randomBoatPlacement(boats, boat.length);
		});
	};

	const registerHit = function (boatName) {
		let boat = getBoatByName(boatName);
		boat.hits++;
	};

	const sinkBoat = function (boatName) {
		let boat = getBoatByName(boatName);
		boat.sunk = true;
	};

	return {
		getAllBoats,
		getBoatByName,
		getPrevHits,
		getPrevMisses,
		getPrevShots,
		addPrevHit,
		addPrevMiss,
		placeSingleBoat,
		placeAllBoatsRandomly,
		registerHit,
		sinkBoat,
	};
};

const computerFactory = function () {
	let computer = playerFactory();

	//additional private properties for computer object
	//(not inherited, not included in return object)
	let investigating = false;
	let suspended = false;
	const investigationSteps = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	let origin = [];
	let currentShot = [];
	let currentStep = [];
	let currentInvHits = [];
	let futureInvestigation = [];

	//public methods (are included in returned object)
	const isInvestigating = () => investigating;

	const startNewInvestigation = function (newHit) {
		investigating = true;
		origin = newHit;
		currentInvHits.push(newHit);
		currentStep = investigationSteps[0];
	};

	const determineFutureInv = function (sunkBoatLength) {
		//get all sunkBoat hits
		let invertedStep = [currentStep[0] * -1, currentStep[1] * -1];
		let sunkBoatPositions = [currentShot];
		for (let i = 0; i < sunkBoatLength - 1; i++) {
			let nextPos = increment(sunkBoatPositions[i], invertedStep);
			sunkBoatPositions.push(nextPos);
		}

		//filter sunkBoat hits from invHits, assign to future
		let followUps = currentInvHits.filter(
			(shot) => !setContainsMatch(shot, sunkBoatPositions)
		);

		followUps.forEach((shot) => futureInvestigation.push(shot));

		return futureInvestigation;
	};

	const suspendInvestigation = function () {
		suspended = true;
		origin = [];
		currentShot = [];
		currentInvHits = [];
	};

	const resumeInvestigation = function () {
		suspended = false;
		let resumeStartingPoint = futureInvestigation.shift();
		origin = resumeStartingPoint;
		currentInvHits.push(resumeStartingPoint);
	};

	const endInvestigation = function () {
		investigating = false;
		suspended = false;
		origin = [];
		currentShot = [];
		currentStep = [];
		currentInvHits = [];
		futureInvestigation = [];
	};

	const addInvestigationHit = function (shot) {
		currentInvHits.push(shot);
	};

	const getNextInvestigationShot = function () {
		if (currentShot.length == 0) {
			currentShot = origin;
		}
		currentShot = increment(currentShot, currentStep);
		return currentShot;
	};

	const onLastInvestigationPath = function () {
		return currentStep == investigationSteps[3] ? true : false;
	};

	const switchInvestigationDirection = function () {
		currentShot = origin;
		let index = investigationSteps.findIndex((step) => step == currentStep);
		index++;
		if (index > investigationSteps.length - 1) {
			index = 0;
		}
		currentStep = investigationSteps[index];
	};

	const getInvInfo = function () {
		return {
			investigating: investigating,
			suspended: suspended,
			origin: origin,
			currentShot: currentShot,
			currentStep: currentStep,
			currentInvHits: currentInvHits,
			futureInvestigation: futureInvestigation,
		};
	};

	return {
		...computer,
		isInvestigating,
		startNewInvestigation,
		determineFutureInv,
		suspendInvestigation,
		resumeInvestigation,
		endInvestigation,
		addInvestigationHit,
		getNextInvestigationShot,
		onLastInvestigationPath,
		switchInvestigationDirection,
		getInvInfo,
	};
};

export { boatFactory, playerFactory, computerFactory };
