/* eslint-disable no-undef */
import { compareArrays } from "./script.js";

describe("compareArrays", () => {
	test("returns true for arrays with same elements, same order", () => {
		let arr1 = [1, 2, 3];
		let arr2 = [1, 2, 3];
		expect(compareArrays(arr1, arr2)).toBe(true);
	});

	test("returns false for arrays with same elements, diff order", () => {
		let arr1 = [1, 2, 3];
		let arr2 = [1, 3, 2];
		expect(compareArrays(arr1, arr2)).toBe(false);
	});

	test("returns false for arrays with different elements", () => {
		let arr1 = [1, 2, 3];
		let arr2 = [1, 2, 4];
		expect(compareArrays(arr1, arr2)).toBe(false);
	});

	test("returns false for arrays with same elements but diff lengths", () => {
		let arr1 = [1, 2, 3];
		let arr2 = [1, 2, 3, 4];
		expect(compareArrays(arr1, arr2)).toBe(false);
	});

	test("returns false for arrays with same elements but diff lengths", () => {
		let arr1 = [1, 2, 3, 4];
		let arr2 = [1, 2, 3];
		expect(compareArrays(arr1, arr2)).toBe(false);
	});
});
