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
	const addHit = function (shot) {
		previousHits.push(shot);
		previousShots.push(shot);
	};

	const addMiss = function (shot) {
		previousMisses.push(shot);
		previousShots.push(shot);
	};

	return {
		getAllBoats,
		getPrevHits,
		getPrevMisses,
		getPrevShots,
		addHit,
		addMiss,
	};
};

const computerFactory = function () {
	let computer = playerFactory();
	computer.investigating = false;
	computer.investigationSets = [];

	computer.switchInvestigationDirection = function () {
		computer.investigationSets.shift();
	};

	computer.endInvestigation = function () {
		computer.investigationSets = [];
		computer.investigating = false;
	};

	return computer;
};

export { boatFactory, playerFactory, computerFactory };
