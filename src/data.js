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
	const investigationSteps = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	let currentShot = [];
	let currentStep = [];
	let currentInvHits = [];
	let futureInvestigation = [];

	//public methods (are included in returned object)
	const isInvestigating = () => investigating;

	const startNewInvestigation = function (newHit) {
		investigating = true;
		currentShot = newHit;
		currentStep = investigationSteps[0];
		currentInvHits.push(newHit);
	};

	const suspendInvestigation = function (sunkBoatLength) {
		//get all sunkBoat hits
		let invertedStep = [currentStep[0] * -1, currentStep[1] * -1];
		let sunkBoatPositions = [];
		for (let i = 0; i < sunkBoatLength; i++) {
			sunkBoatPositions.push(increment(currentShot, invertedStep));
		}

		//filter sunkBoat hits from invHits, assign to future
		futureInvestigation = currentInvHits.filter((shot) =>
			setContainsMatch(shot, sunkBoatPositions)
		);

		currentShot = [];
		currentStep = [];
		currentInvHits = [];
	};

	const resumeInvestigation = function () {
		currentShot = futureInvestigation.shift();
		currentStep = investigationSteps[0];
	};

	const endInvestigation = function () {
		investigating = false;
		currentShot = [];
		currentStep = [];
		currentInvHits = [];
	};

	const getNextInvestigationShot = function () {
		let currentShot = increment(currentShot, currentStep);
		return currentShot;
	};

	const onLastInvestigationPath = function () {
		return currentStep == investigationSteps[3] ? true : false;
	};

	const switchInvestigationDirection = function () {
		let index = investigationSteps.findIndex((step) => step == currentStep);
		currentStep = investigationSteps[index++];
	};

	return {
		...computer,
		isInvestigating,
		startNewInvestigation,
		suspendInvestigation,
		resumeInvestigation,
		endInvestigation,
		getNextInvestigationShot,
		onLastInvestigationPath,
		switchInvestigationDirection,
	};
};

export { boatFactory, playerFactory, computerFactory };
