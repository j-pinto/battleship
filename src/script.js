"use strict";
import "./style.css";

const curry = function (func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
};

const areEqualArrays = curry((array1, array2) => {
	if (array1.length != array2.length) return false;
	return array1.every((item, index) => item === array2[index]);
});

const setContainsMatch = function (shot, positions) {
	return positions.some(areEqualArrays(shot));
};

const getBoatNameIfHit = function (shot, boats) {
	let result = boats.find((boat) => setContainsMatch(shot, boat.positions));
	return result ? result.name : undefined;
};

const getRandomOrigin = function (boats) {
	let origin = [];
	do {
		origin[0] = Math.floor(Math.random() * 10);
		origin[1] = Math.floor(Math.random() * 10);
	} while (getBoatNameIfHit(origin, boats));

	return origin;
};

const increment = function (current, step) {
	return [current[0] + step[0], current[1] + step[1]];
};

const getPossiblePositions = function (step, origin, boatLength) {
	let coordinate = origin;
	let array = [coordinate];
	while (array.length < boatLength) {
		coordinate = increment(coordinate, step);
		array.push(coordinate);
	}
	return array;
};

const getValidPositionSets = function (origin, boatLength, boats) {
	let sets = [];
	sets.push(getPossiblePositions([0, 1], origin, boatLength));
	sets.push(getPossiblePositions([0, -1], origin, boatLength));
	sets.push(getPossiblePositions([1, 0], origin, boatLength));
	sets.push(getPossiblePositions([-1, 0], origin, boatLength));

	let validSets = sets.filter((set) => !positionSetInvalid(set, boats));
	return validSets.length == 0 ? undefined : validSets;
};

const outOfBounds = function (array) {
	return array[0] < 0 || array[1] < 0 || array[0] > 9 || array[1] > 9;
};

const positionSetInvalid = function (positions, boats) {
	return positions.some((pos) => {
		return getBoatNameIfHit(pos, boats) || outOfBounds(pos) || false;
	});
};

const pickRandomPositionSet = function (positionSets) {
	let randomIndex = Math.floor(Math.random() * positionSets.length);
	return positionSets[randomIndex];
};

const randomBoatPlacement = function (boats, boatLength) {
	let positionSets;
	do {
		let origin = getRandomOrigin(boats);
		positionSets = getValidPositionSets(origin, boatLength, boats);
	} while (positionSets == undefined);

	let chosenPositionSet = pickRandomPositionSet(positionSets);
	return chosenPositionSet;
};

const makeRandomShot = function (prevHits, prevMisses) {
	let shot = [];
	do {
		shot[0] = Math.floor(Math.random() * 10);
		shot[1] = Math.floor(Math.random() * 10);
	} while (
		setContainsMatch(shot, prevHits) ||
		setContainsMatch(shot, prevMisses)
	);

	return shot;
};

export {
	curry,
	areEqualArrays,
	setContainsMatch,
	getBoatNameIfHit,
	getPossiblePositions,
	getValidPositionSets,
	getRandomOrigin,
	outOfBounds,
	positionSetInvalid,
	pickRandomPositionSet,
	randomBoatPlacement,
	makeRandomShot,
};
