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

export { curry, areEqualArrays, isHit, getMatch };
