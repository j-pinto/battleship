import { dummyFunc } from "./script.js";

test("this test should pass", () => {
	expect(dummyFunc()).toBe(1);
});
