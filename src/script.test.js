/* eslint-disable no-undef */
import {
	curry,
	areEqualArrays,
	isHit,
	getBoatNameIfHit,
	getPossiblePositions,
	getNorthPossiblePositions,
	getSouthPossiblePositions,
	getEastPossiblePositions,
	getWestPossiblePositions,
	getRandomOrigin,
	outOfBounds,
	positionSetInvalid,
	pickRandomPositionSet,
} from "./script.js";

describe("curry", () => {
	test("curried func works with args passed separately", () => {
		let sum = (a, b, c) => a + b + c;
		sum = curry(sum);

		expect(sum(1)(2)(3)).toBe(6);
	});

	test("curried func works with args passed normally", () => {
		let sum = (a, b, c) => a + b + c;
		sum = curry(sum);

		expect(sum(1, 2, 3)).toBe(6);
	});
});

describe("areEqualArrays", () => {
	test("returns true for arrays with same elements, same order", () => {
		let arr1 = [1, 2, 3];
		let arr2 = [1, 2, 3];
		expect(areEqualArrays(arr1, arr2)).toBe(true);
	});

	test("returns false for arrays with same elements, diff order", () => {
		let arr1 = [1, 2, 3];
		let arr2 = [1, 3, 2];
		expect(areEqualArrays(arr1, arr2)).toBe(false);
	});

	test("returns false for arrays with different elements", () => {
		let arr1 = [1, 2, 3];
		let arr2 = [1, 2, 4];
		expect(areEqualArrays(arr1, arr2)).toBe(false);
	});

	test("returns false for arrays with same elements but diff lengths", () => {
		let arr1 = [1, 2, 3];
		let arr2 = [1, 2, 3, 4];
		expect(areEqualArrays(arr1, arr2)).toBe(false);
	});

	test("returns false for arrays with same elements but diff lengths", () => {
		let arr1 = [1, 2, 3, 4];
		let arr2 = [1, 2, 3];
		expect(areEqualArrays(arr1, arr2)).toBe(false);
	});
});

describe("isHit", () => {
	test("returns true if position array contains shot array", () => {
		let positions = [
			[0, 0],
			[1, 1],
			[2, 2],
		];
		let shot = [1, 1];
		expect(isHit(shot, positions)).toBe(true);
	});

	test("returns false if position array does not contain shot array", () => {
		let positions = [
			[0, 0],
			[1, 1],
			[2, 2],
		];
		let shot = [1, 2];
		expect(isHit(shot, positions)).toBe(false);
	});

	test("returns false if position array and shot array are different lengths", () => {
		let positions = [
			[0, 0],
			[1, 1],
			[2, 2],
		];
		let shot = [1, 1, 1];
		expect(isHit(shot, positions)).toBe(false);
	});

	test("returns false if shot array out of order from a position item with same elements", () => {
		let positions = [
			[0, 0],
			[1, 2],
			[2, 2],
		];
		let shot = [2, 1];
		expect(isHit(shot, positions)).toBe(false);
	});
});

describe("getBoatNameIfHit", () => {
	let boats = [
		{
			name: "carrier",
			positions: [
				[0, 0],
				[0, 1],
				[0, 2],
			],
		},
		{
			name: "destroyer",
			positions: [
				[1, 0],
				[1, 1],
				[1, 2],
			],
		},
	];

	test("returns boat name if hit", () => {
		let shot = [1, 0];
		expect(getBoatNameIfHit(shot, boats)).toBe("destroyer");
	});

	test("returns undefined if miss", () => {
		let shot = [0, 3];
		expect(getBoatNameIfHit(shot, boats)).toBe(undefined);
	});
});

describe("getPossiblePositions", () => {
	test("returns correct array of positions given boatLength and origin", () => {
		let step = [0, 1],
			origin = [2, 3],
			boatLength = 4,
			answer = [
				[2, 3],
				[2, 4],
				[2, 5],
				[2, 6],
			];
		expect(getPossiblePositions(step, origin, boatLength)).toStrictEqual(
			answer
		);
	});
});

describe("Curried getPossiblePositions", () => {
	test("North returns correct array of positions given boatLength and origin", () => {
		let origin = [2, 3],
			boatLength = 3,
			answer = [
				[2, 3],
				[2, 4],
				[2, 5],
			];
		expect(getNorthPossiblePositions(origin, boatLength)).toStrictEqual(answer);
	});

	test("South returns correct array of positions given boatLength and origin", () => {
		let origin = [2, 3],
			boatLength = 3,
			answer = [
				[2, 3],
				[2, 2],
				[2, 1],
			];
		expect(getSouthPossiblePositions(origin, boatLength)).toStrictEqual(answer);
	});

	test("East returns correct array of positions given boatLength and origin", () => {
		let origin = [2, 3],
			boatLength = 3,
			answer = [
				[2, 3],
				[3, 3],
				[4, 3],
			];
		expect(getEastPossiblePositions(origin, boatLength)).toStrictEqual(answer);
	});

	test("West returns correct array of positions given boatLength and origin", () => {
		let origin = [4, 4],
			boatLength = 3,
			answer = [
				[4, 4],
				[3, 4],
				[2, 4],
			];
		expect(getWestPossiblePositions(origin, boatLength)).toStrictEqual(answer);
	});
});

describe("getRandomOrigin", () => {
	let boats = [
		{
			name: "carrier",
			positions: [
				[0, 0],
				[1, 1],
				[2, 2],
			],
		},
		{
			name: "destroyer",
			positions: [
				[3, 3],
				[4, 4],
				[5, 5],
			],
		},
	];

	test("over many trials, returns 2-item array not equal to any existing position", () => {
		for (let i = 0; i < 500; i++) {
			let result = getRandomOrigin(boats);
			expect(Array.isArray(result)).toBe(true);
			expect(result.length).toBe(2);
			expect(result).not.toEqual([0, 0]);
			expect(result).not.toEqual([1, 1]);
			expect(result).not.toEqual([2, 2]);
			expect(result).not.toEqual([3, 3]);
			expect(result).not.toEqual([4, 4]);
			expect(result).not.toEqual([5, 5]);
		}
	});
});

describe("outOfBounds", () => {
	test("returns true if array has element outside range 0...9", () => {
		let array1 = [-1, 8],
			array2 = [3, 10];
		expect(outOfBounds(array1)).toBe(true);
		expect(outOfBounds(array2)).toBe(true);
	});

	test("returns false if array elements all inside range 0...9", () => {
		let array1 = [1, 8],
			array2 = [3, 1];
		expect(outOfBounds(array1)).toBe(false);
		expect(outOfBounds(array2)).toBe(false);
	});
});

describe("positionsInvalid", () => {
	let boats = [
		{
			name: "carrier",
			positions: [
				[0, 0],
				[1, 1],
				[2, 2],
			],
		},
		{
			name: "destroyer",
			positions: [
				[3, 3],
				[4, 4],
				[5, 5],
			],
		},
	];

	test("returns true if array contains any existing boat position", () => {
		let positions = [
			[7, 5],
			[6, 5],
			[5, 5],
			[4, 5],
		];
		expect(positionSetInvalid(positions, boats)).toBe(true);
	});

	test("returns true if array contains any out of bounds", () => {
		let positions = [
			[0, 2],
			[0, 1],
			[0, 0],
			[0, -1],
		];
		expect(positionSetInvalid(positions, boats)).toBe(true);
	});

	test("returns false if array contains no existing boat position and all in bounds", () => {
		let positions = [
			[7, 6],
			[6, 6],
			[5, 6],
			[4, 6],
		];
		expect(positionSetInvalid(positions, boats)).toBe(false);
	});
});

describe("pickRandomPositionSet", () => {
	test("over many trials, returns a position set that has no conflicts with existing boat positions", () => {
		let boats = [
			{
				name: "carrier",
				positions: [
					[0, 0],
					[0, 1],
					[0, 2],
				],
			},
			{
				name: "destroyer",
				positions: [
					[2, 2],
					[2, 3],
					[2, 4],
				],
			},
		];
		let positionSets = [
			[
				[1, 1], //north
				[1, 2],
				[1, 3],
			],
			[
				[1, 1], //south - invalid
				[1, 0],
				[1, -1],
			],
			[
				[1, 1], //east
				[2, 1],
				[3, 1],
			],
			[
				[1, 1], //west - invalid
				[0, 1],
				[-1, 1],
			],
		];

		let correctAnswers = [positionSets[0], positionSets[2]];
		for (let i = 0; i < 100; i++) {
			let result = pickRandomPositionSet(positionSets, boats);
			expect(result).not.toStrictEqual(positionSets[1]);
			expect(result).not.toStrictEqual(positionSets[3]);
			expect(correctAnswers).toContainEqual(result);
		}
	});

	test("returns undefined if all position sets conflict or out of bounds", () => {
		let boats = [
			{
				name: "carrier",
				positions: [
					[0, 1],
					[0, 2],
					[0, 3],
				],
			},
			{
				name: "destroyer",
				positions: [
					[1, 0],
					[1, 1],
					[1, 2],
				],
			},
		];
		let positionSets = [
			[
				[0, 0],
				[0, 1],
				[0, 2],
			],
			[
				[0, 0],
				[0, -1],
				[0, -2],
			],
			[
				[0, 0],
				[1, 0],
				[2, 0],
			],
			[
				[0, 0],
				[-1, 0],
				[-2, 0],
			],
		];

		let result = pickRandomPositionSet(positionSets, boats);
		expect(result).toBe(undefined);
	});
});
