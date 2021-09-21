import "./style.css";

function compareArrays(array1, array2) {
	if (array1.length != array2.length) return false;
	return array1.every((item, index) => item === array2[index]);
}

export { compareArrays };
