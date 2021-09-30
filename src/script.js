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
