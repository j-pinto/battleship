const printBoats = function (boats) {
	boats.forEach((boat) => {
		boat.positions.forEach((pos) => {
			let positionString = pos.toString().replace(/,/g, "");
			let squareID = "b".concat(positionString);
			document.getElementById(squareID).style.backgroundColor = "grey";
			document.getElementById(squareID).innerHTML = `${boat.name}`;
		});
	});
};

export { printBoats };
