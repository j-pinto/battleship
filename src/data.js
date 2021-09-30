import { randomBoatPlacement } from "./logic.js";

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

	//other public methods (are included in returned object)
	const addHit = function (shot, boatName) {
		previousHits.push(shot);
		previousShots.push(shot);

		let boat = boats.find((boat) => boat.name == boatName);
		boat.hits++;
		boat.hits >= boat.length ? (boat.sunk = true) : (boat.sunk = false);
	};

	const addMiss = function (shot) {
		previousMisses.push(shot);
		previousShots.push(shot);
	};

	const placeSingleBoat = (boatName, positionSet) => {
		let boat = boats.find((boat) => boat.name == boatName);
		boat.positions = positionSet;
	};

	const placeAllBoatsRandomly = () => {
		let boats = getAllBoats();
		boats.forEach((boat) => {
			boat.positions = randomBoatPlacement(boats, boat.length);
		});
	};

	return {
		getAllBoats,
		getPrevHits,
		getPrevMisses,
		getPrevShots,
		addHit,
		addMiss,
		placeSingleBoat,
		placeAllBoatsRandomly,
	};
};

const computerFactory = function () {
	let computer = playerFactory();

	//additional private properties for computer object
	//(not inherited, not included in return object)
	let investigating = false;
	let investigationSets = [];

	//public methods (are included in returned object)
	const isInvestigating = () => investigating;

	const startInvestigation = function (newSets) {
		investigationSets = newSets;
		investigating = true;
	};

	const endInvestigation = function () {
		investigationSets = [];
		investigating = false;
	};

	const switchInvestigationDirection = () => investigationSets.shift();

	return {
		...computer,
		isInvestigating,
		startInvestigation,
		endInvestigation,
		switchInvestigationDirection,
	};
};

export { boatFactory, playerFactory, computerFactory };
