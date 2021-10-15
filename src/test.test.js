/* eslint-disable no-undef */
import {
	curry,
	areEqualArrays,
	setContainsMatch,
	isHit,
	getBoatNameIfHit,
	getPositionSet,
	getRandomOrigin,
	outOfBounds,
	positionSetInvalid,
	randomBoatPlacement,
	makeRandomShot,
	gameOver,
} from "./logic.js";

import { game } from "./game.js";

xdescribe("curry", () => {
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

xdescribe("areEqualArrays", () => {
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

xdescribe("setContainsMatch", () => {
	test("returns true if position array contains shot array", () => {
		let positions = [
			[0, 0],
			[1, 1],
			[2, 2],
		];
		let shot = [1, 1];
		expect(setContainsMatch(shot, positions)).toBe(true);
	});

	test("returns false if position array does not contain shot array", () => {
		let positions = [
			[0, 0],
			[1, 1],
			[2, 2],
		];
		let shot = [1, 2];
		expect(setContainsMatch(shot, positions)).toBe(false);
	});

	test("returns false if position array and shot array are different lengths", () => {
		let positions = [
			[0, 0],
			[1, 1],
			[2, 2],
		];
		let shot = [1, 1, 1];
		expect(setContainsMatch(shot, positions)).toBe(false);
	});

	test("returns false if shot array out of order from a position item with same elements", () => {
		let positions = [
			[0, 0],
			[1, 2],
			[2, 2],
		];
		let shot = [2, 1];
		expect(setContainsMatch(shot, positions)).toBe(false);
	});
});

xdescribe("isHit", () => {
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
	test("returns true if shot is a hit", () => {
		let shot = [1, 0];
		expect(isHit(shot, boats)).toBe(true);
	});

	test("returns false if shot is a miss", () => {
		let shot = [0, 3];
		expect(isHit(shot, boats)).toBe(false);
	});
});

xdescribe("getBoatNameIfHit", () => {
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

xdescribe("getPositionSet", () => {
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
		expect(getPositionSet(step, origin, boatLength)).toStrictEqual(answer);
	});
});

xdescribe("getRandomOrigin", () => {
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

xdescribe("outOfBounds", () => {
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

xdescribe("positionsInvalid", () => {
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

xdescribe("randomBoatPlacement", () => {
	test("over many trials, returns valid new boat position", () => {
		let boats = [
			{
				name: "carrier",
				positions: [
					[0, 0],
					[0, 1],
					[0, 2],
					[0, 3],
					[0, 4],
				],
			},
			{
				name: "battleship",
				positions: [
					[4, 8],
					[4, 7],
					[4, 6],
					[4, 5],
				],
			},
			{
				name: "submarine",
				positions: [
					[9, 5],
					[8, 5],
					[7, 5],
				],
			},
			{
				name: "destroyer",
				positions: [
					[7, 3],
					[8, 3],
					[9, 3],
				],
			},
		];

		let boatLength = 3;

		for (let i = 0; i < 500; i++) {
			let result = randomBoatPlacement(boats, boatLength);
			expect(result.length).toBe(boatLength);
			expect(boats[0].positions).not.toContainEqual(result);
			expect(boats[1].positions).not.toContainEqual(result);
			expect(boats[2].positions).not.toContainEqual(result);
			expect(boats[3].positions).not.toContainEqual(result);
		}
	});
});

xdescribe("makeRandomShot", () => {
	test("over many trials, returns random square not contained in previous shot arrays", () => {
		let prevShots = [
			[0, 0],
			[1, 1],
			[2, 2],
			[3, 3],
			[4, 4],
			[9, 0],
			[8, 1],
			[7, 2],
			[6, 3],
			[5, 4],
		];

		for (let i = 0; i < 100; i++) {
			let shot = makeRandomShot(prevShots);
			expect(prevShots).not.toContainEqual(shot);
		}
	});
});

xdescribe("basic investigation", () => {
	// game setup for test
	let g = game();
	g.player.placeSingleBoat("cruiser", [
		[0, 0],
		[1, 0],
		[2, 0],
	]);

	g.computer.addPrevMiss([3, 0]);
	let currentPlayer = g.computer;
	let enemyPlayer = g.player;

	test("correctly triggers investigation upon new hit on cruiser", () => {
		// simulate first shot
		let shot = [2, 0];
		g.updateData(currentPlayer, enemyPlayer, shot);

		let info = currentPlayer.getInvInfo();
		expect(currentPlayer.getPrevHits()).toContainEqual(shot);
		expect(enemyPlayer.getBoatByName("cruiser").hits).toBe(1);
		expect(info.investigating).toBe(true);
		expect(info.origin).toEqual(shot);
		expect(info.currentInvHits).toContainEqual(shot);
		expect(info.currentStep).toEqual([0, 1]);
	});

	test("second shot misses, investigation direction switches", () => {
		g.computerTurn();
		let misses = currentPlayer.getPrevMisses();
		let info = currentPlayer.getInvInfo();

		expect(enemyPlayer.getBoatByName("cruiser").hits).toBe(1);
		expect(misses).toContainEqual([3, 0]);
		expect(misses).toContainEqual([2, 1]);
		expect(info.investigating).toBe(true);
		expect(info.origin).toEqual([2, 0]);
		expect(info.currentInvHits).toContainEqual([2, 0]);
		expect(info.currentStep).toEqual([0, -1]);
	});

	test("third shot hits, but investigation had switched twice more due to south direction being out of bounds and [3,0] being a previous shot prior to investigation", () => {
		g.computerTurn();
		let misses = currentPlayer.getPrevMisses();
		let info = currentPlayer.getInvInfo();

		expect(enemyPlayer.getBoatByName("cruiser").hits).toBe(2);
		expect(misses).toContainEqual([3, 0]);
		expect(misses).toContainEqual([2, 1]);
		expect(info.investigating).toBe(true);
		expect(info.origin).toEqual([2, 0]);
		expect(info.currentInvHits).toContainEqual([2, 0]);
		expect(info.currentInvHits).toContainEqual([1, 0]);
		expect(info.currentStep).toEqual([-1, 0]);
	});

	test("shot 4 sinks cruiser, investigation ended", () => {
		g.computerTurn();
		let info = currentPlayer.getInvInfo();

		expect(enemyPlayer.getBoatByName("cruiser").hits).toBe(3);
		expect(enemyPlayer.getBoatByName("cruiser").sunk).toBe(true);
		expect(info.investigating).toBe(false);
		expect(info.suspended).toBe(false);
	});
});

xdescribe("complex investigation", () => {
	// game setup for test
	let g = game();
	g.player.placeSingleBoat("cruiser", [
		[2, 0],
		[2, 1],
		[2, 2],
	]);
	g.player.placeSingleBoat("battleship", [
		[0, 3],
		[1, 3],
		[2, 3],
		[3, 3],
	]);
	g.player.placeSingleBoat("submarine", [
		[4, 3],
		[4, 4],
		[4, 5],
	]);
	g.player.placeSingleBoat("destroyer", [
		[5, 3],
		[5, 4],
	]);
	let currentPlayer = g.computer;
	let enemyPlayer = g.player;

	test("correctly triggers investigation upon new hit on battleship", () => {
		// simulate first shot
		let shot = [2, 3];
		g.updateData(currentPlayer, enemyPlayer, shot);

		let info = currentPlayer.getInvInfo();
		expect(currentPlayer.getPrevHits()).toContainEqual(shot);
		expect(enemyPlayer.getBoatByName("battleship").hits).toBe(1);
		expect(info.investigating).toBe(true);
		expect(info.origin).toEqual(shot);
		expect(info.currentInvHits).toContainEqual(shot);
		expect(info.currentStep).toEqual([0, 1]);
	});

	test("second shot misses, investigation direction switches", () => {
		g.computerTurn();
		let misses = currentPlayer.getPrevMisses();
		let info = currentPlayer.getInvInfo();

		expect(misses).toContainEqual([2, 4]);
		expect(info.investigating).toBe(true);
		expect(info.origin).toEqual([2, 3]);
		expect(info.currentInvHits).toContainEqual([2, 3]);
		expect(info.currentStep).toEqual([0, -1]);
	});

	test("shots 3,4 and 5 hit & sink cruiser, investigation suspended with correct future info", () => {
		g.computerTurn();
		g.computerTurn();
		g.computerTurn();
		let misses = currentPlayer.getPrevMisses();
		let info = currentPlayer.getInvInfo();

		expect(misses).toContainEqual([2, 4]);
		expect(enemyPlayer.getBoatByName("cruiser").hits).toBe(3);
		expect(enemyPlayer.getBoatByName("cruiser").sunk).toBe(true);
		expect(info.investigating).toBe(true);
		expect(info.suspended).toBe(true);
		expect(info.futureInvestigation).toContainEqual([2, 3]);
	});

	test("shot 6, 7, 8 resumes investigation, hits battleship, submarine, destroyer", () => {
		g.computerTurn();
		g.computerTurn();
		g.computerTurn();
		let info = currentPlayer.getInvInfo();

		expect(enemyPlayer.getBoatByName("battleship").hits).toBe(2);
		expect(enemyPlayer.getBoatByName("submarine").hits).toBe(1);
		expect(enemyPlayer.getBoatByName("destroyer").hits).toBe(1);
		expect(info.investigating).toBe(true);
		expect(info.suspended).toBe(false);
		expect(info.origin).toEqual([2, 3]);
		expect(info.currentShot).toEqual([5, 3]);
		expect(info.currentInvHits).toContainEqual(info.origin);
		expect(info.currentInvHits).toContainEqual([3, 3]);
		expect(info.currentInvHits).toContainEqual([4, 3]);
		expect(info.currentInvHits).toContainEqual(info.currentShot);
		expect(info.currentStep).toEqual([1, 0]);
	});

	test("8th shot misses, investigation direction switches", () => {
		g.computerTurn();
		let misses = currentPlayer.getPrevMisses();
		let info = currentPlayer.getInvInfo();

		expect(misses).toContainEqual([6, 3]);
		expect(info.investigating).toBe(true);
		expect(info.origin).toEqual([2, 3]);
		expect(info.currentStep).toEqual([-1, 0]);
	});

	test("shots 9 and 10 hit & sink battleship, investigation suspended with correct future info", () => {
		g.computerTurn();
		g.computerTurn();
		let info = currentPlayer.getInvInfo();

		expect(enemyPlayer.getBoatByName("battleship").hits).toBe(4);
		expect(enemyPlayer.getBoatByName("battleship").sunk).toBe(true);
		expect(info.investigating).toBe(true);
		expect(info.suspended).toBe(true);
		expect(info.futureInvestigation).toContainEqual([4, 3]);
		expect(info.futureInvestigation).toContainEqual([5, 3]);
	});

	test("shots 11 and 12 hit & sink submarine, investigation suspended with correct future info", () => {
		g.computerTurn();
		g.computerTurn();
		let info = currentPlayer.getInvInfo();

		expect(enemyPlayer.getBoatByName("submarine").hits).toBe(3);
		expect(enemyPlayer.getBoatByName("submarine").sunk).toBe(true);
		expect(info.investigating).toBe(true);
		expect(info.suspended).toBe(true);
		expect(info.futureInvestigation).toContainEqual([5, 3]);
	});

	test("shots 13 sinks destroyer, investigation ended", () => {
		g.computerTurn();
		let info = currentPlayer.getInvInfo();

		expect(enemyPlayer.getBoatByName("destroyer").hits).toBe(2);
		expect(enemyPlayer.getBoatByName("destroyer").sunk).toBe(true);
		expect(info.investigating).toBe(false);
		expect(info.suspended).toBe(false);
	});
});

describe("autoplay full game", () => {
	test("should always produce a winner", () => {
		let g = game();
		g.init();

		do {
			g.takeTurn();
		} while (
			!gameOver(g.computer.getAllBoats()) &&
			!gameOver(g.player.getAllBoats())
		);

		let results = ["player", "computer"];
		let winner;
		if (gameOver(g.computer.getAllBoats())) {
			winner = "player";
		} else if (gameOver(g.player.getAllBoats())) {
			winner = "computer";
		}

		expect(results).toContain(winner);
	});
});
