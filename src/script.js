import "./style.css";

let areEqualArrays = function (array1, array2) {
	if (array1.length != array2.length) return false;
	return array1.every((item, index) => item === array2[index]);
};

let isHit = function (shot, positions) {
	return positions.some((item) => areEqualArrays(item, shot));
};

export { areEqualArrays, isHit };
