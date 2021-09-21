/* eslint-disable no-undef */
import { curry, areEqualArrays, isHit, getMatch } from "./script.js";

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

describe("getMatch", () => {
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
		expect(getMatch(shot, boats)).toBe("destroyer");
	});

	test("returns undefined if miss", () => {
		let shot = [0, 3];
		expect(getMatch(shot, boats)).toBe(undefined);
	});
});
