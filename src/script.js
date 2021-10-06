"use strict";
import "./style.css";
import { playerFactory, computerFactory } from "./data.js";
import {
	makeRandomShot,
	getBoatNameIfHit,
	boatSunk,
	isHit,
	outOfBounds,
} from "./logic.js";

const game = function () {
	const player = playerFactory();
	const computer = computerFactory();
	let turnCount = 0;

	const init = function () {
		player.placeAllBoatsRandomly();
		computer.placeAllBoatsRandomly();
	};

	const playerTurn = function () {
		let currentPlayer = player;
		let enemyPlayer = computer;
		let prevShots = currentPlayer.getPrevShots();

		// "determine shot" - will eventually use player input
		let shot = makeRandomShot(prevShots);

		updateData(currentPlayer, enemyPlayer, shot);
	};

	const computerTurn = function () {
		let currentPlayer = computer;
		let enemyPlayer = player;

		if (currentPlayer.isInvestigating()) {
			investigate();
			return;
		} else {
			let prevShots = currentPlayer.getPrevShots();
			let shot = makeRandomShot(prevShots);
			updateData(currentPlayer, enemyPlayer, shot);
		}
	};

	const investigate = function () {
		let currentPlayer = computer;
		let enemyPlayer = player;

		let shot = currentPlayer.getNextInvestigationShot();
		if (outOfBounds(shot) && !currentPlayer.onLastInvestigationPath()) {
			currentPlayer.switchInvestigationDirection();
			shot = currentPlayer.getNextInvestigationShot();
		}
		updateData(currentPlayer, enemyPlayer, shot);
	};

	const updateData = function (currentPlayer, enemyPlayer, shot) {
		let enemyBoats = enemyPlayer.getAllBoats();
		let hit = isHit(shot, enemyBoats);
		let hitBoatName;
		let sink;
		if (hit) {
			currentPlayer.addPrevHit(shot);
			hitBoatName = getBoatNameIfHit(shot, enemyBoats);
			enemyPlayer.registerHit(hitBoatName);
			sink = boatSunk(hitBoatName, enemyBoats);
			if (sink) {
				enemyPlayer.sinkBoat(hitBoatName);
			}
			if (currentPlayer == computer && !currentPlayer.isInvestigating()) {
				currentPlayer.startNewInvestigation(shot);
				return;
			}
		} else {
			currentPlayer.addPrevMiss(shot);
		}

		if (currentPlayer == computer && currentPlayer.isInvestigating()) {
			updateInvestigation(currentPlayer, shot, hit, sink, hitBoatName);
		}
	};

	const updateInvestigation = function (
		currentPlayer,
		shot,
		hit,
		sink,
		hitBoatName
	) {
		if (!hit) {
			currentPlayer.switchInvestigationDirection();
			return;
		}

		if (hit) {
			currentPlayer.addInvestigationHit(shot);
		}

		if (sink) {
			let sunkBoat = currentPlayer.getBoatByName(hitBoatName);
			let futureInv = currentPlayer.determineFutureInv(sunkBoat.length);
			if (futureInv.length > 0) {
				currentPlayer.suspendInvestigation();
			} else {
				currentPlayer.endInvestigation();
			}
		}
	};

	const takeTurn = function () {
		if (turnCount % 2 == 0) {
			computerTurn();
		} else {
			playerTurn();
		}

		turnCount++;
	};

	return {
		player,
		computer,
		init,
		takeTurn,
		playerTurn,
		computerTurn,
		investigate,
		updateData,
		updateInvestigation,
	};
};

export { game };
