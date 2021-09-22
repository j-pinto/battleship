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

const getMatch = function (shot, boats) {
	let result = boats.find((boat) => isHit(shot, boat.positions));
	return result ? result.name : undefined;
};

const getRandomOrigin = function (boats) {
	let origin = [];
	do {
		origin[0] = Math.floor(Math.random() * 10);
		origin[1] = Math.floor(Math.random() * 10);
	} while (getMatch(origin, boats));

	return origin;
};

const increment = function (current, step) {
	return [current[0] + step[0], current[1] + step[1]];
};

const getPossiblePositions = curry((step, origin, boatLength) => {
	let coordinate = origin;
	let array = [coordinate];
	while (array.length < boatLength) {
		coordinate = increment(coordinate, step);
		array.push(coordinate);
	}
	return array;
});

const getNorthPossiblePositions = getPossiblePositions([0, 1]);
const getSouthPossiblePositions = getPossiblePositions([0, -1]);
const getEastPossiblePositions = getPossiblePositions([1, 0]);
const getWestPossiblePositions = getPossiblePositions([-1, 0]);

export {
	curry,
	areEqualArrays,
	isHit,
	getMatch,
	getPossiblePositions,
	getNorthPossiblePositions,
	getSouthPossiblePositions,
	getEastPossiblePositions,
	getWestPossiblePositions,
	getRandomOrigin,
};
