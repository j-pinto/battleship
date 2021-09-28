const boatFactory = function (title, len) {
	let name = title;
	let length = len;
	let positions = [];
	let hits = 0;
	let sunk = false;

	return { name, length, positions, hits, sunk };
};

const playerFactory = function () {
	let boats = [
		boatFactory("carrier", 5),
		boatFactory("battleship", 4),
		boatFactory("cruiser", 3),
		boatFactory("submarine", 3),
		boatFactory("destroyer", 2),
	];

	let previousHits = [];
	let previousShots = [];

	const addHit = function (shot) {
		previousHits.push(shot);
		previousShots.push(shot);
	};

	const addMiss = function (shot) {
		previousShots.push(shot);
	};

	return { boats, previousHits, previousShots, addHit, addMiss };
};

const computerFactory = function () {
	let computer = playerFactory();
	computer.investigating = false;
	computer.investigationSets = [];

	return computer;
};

export { boatFactory, playerFactory, computerFactory };
