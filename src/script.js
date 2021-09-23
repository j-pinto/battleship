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

const isHit = function (shot, positions) {
	return positions.some(areEqualArrays(shot));
};

const getBoatNameIfHit = function (shot, boats) {
	let result = boats.find((boat) => isHit(shot, boat.positions));
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

const getAllSets = function (origin, boatLength) {
	let sets = [];
	sets.push(getPossiblePositions([0, 1], origin, boatLength));
	sets.push(getPossiblePositions([0, -1], origin, boatLength));
	sets.push(getPossiblePositions([1, 0], origin, boatLength));
	sets.push(getPossiblePositions([-1, 0], origin, boatLength));

	return sets;
};

const outOfBounds = function (array) {
	return array[0] < 0 || array[1] < 0 || array[0] > 9 || array[1] > 9;
};

const positionSetInvalid = function (positions, boats) {
	return positions.some((pos) => {
		return getBoatNameIfHit(pos, boats) || outOfBounds(pos) || false;
	});
};

const getValidPositionSets = function (positionSets, boats) {
	let validSets = positionSets.filter((set) => !positionSetInvalid(set, boats));
	return validSets.length == 0 ? undefined : validSets;
};

const pickRandomPositionSet = function (positionSets, boats) {
	let validSets = getValidPositionSets(positionSets, boats);

	if (validSets == undefined) {
		return undefined;
	} else {
		let randomIndex = Math.floor(Math.random() * validSets.length);
		return validSets[randomIndex];
	}
};

const randomBoatPlacement = function (boats, boatLength) {
	let chosenPositionSet;
	do {
		let origin = getRandomOrigin(boats);
		let possiblePositions = getAllSets(origin, boatLength);
		chosenPositionSet = pickRandomPositionSet(possiblePositions, boats);
	} while (chosenPositionSet == undefined);

	return chosenPositionSet;
};

const getUserPossiblePositions = function (userOrigin, boatLength, boats) {
	let possiblePositions = getAllSets(userOrigin, boatLength);
	return getValidPositionSets(possiblePositions, boats);
};

export {
	curry,
	areEqualArrays,
	isHit,
	getBoatNameIfHit,
	getPossiblePositions,
	getAllSets,
	getRandomOrigin,
	outOfBounds,
	positionSetInvalid,
	getValidPositionSets,
	pickRandomPositionSet,
	randomBoatPlacement,
	getUserPossiblePositions,
};
