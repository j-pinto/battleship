"use strict";
import "./style.css";

import {
	curry,
	areEqualArrays,
	setContainsMatch,
	getBoatNameIfHit,
	getPositionSet,
	getAllPositionSets,
	filterInvalidSets,
	getRandomOrigin,
	outOfBounds,
	positionSetInvalid,
	pickRandomPositionSet,
	randomBoatPlacement,
	makeRandomShot,
	generateInvestigation,
} from "./logic.js";

import { boatFactory, playerFactory, computerFactory } from "./data.js";

const game = (() => {
	const player = playerFactory();
	const computer = computerFactory();
	let turnCount = 0;

	return { player, computer, turnCount };
})();
