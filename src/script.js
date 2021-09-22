import "./style.css";

let curry = function (func) {
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

let areEqualArrays = curry((array1, array2) => {
	if (array1.length != array2.length) return false;
	return array1.every((item, index) => item === array2[index]);
});

let isHit = function (shot, positions) {
	return positions.some(areEqualArrays(shot));
};

let getMatch = function (shot, boats) {
	let result = boats.find((boat) => isHit(shot, boat.positions));
	return result ? result.name : undefined;
};

let getPossiblePositions = function (step, origin, boatLength) {
	let coordinate = origin;
	let array = [coordinate];
	while (array.length < boatLength) {
		coordinate = increment(coordinate, step);
		array.push(coordinate);
	}
	return array;
};

function increment(current, step) {
	return [current[0] + step[0], current[1] + step[1]];
}

export { curry, areEqualArrays, isHit, getMatch, getPossiblePositions };
