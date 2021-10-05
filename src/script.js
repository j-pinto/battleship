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

const game = (() => {
	const player = playerFactory();
	const computer = computerFactory();
	let turnCount = 0;

	const init = function () {
		player.placeAllBoatsRandomly();
		computer.placeAllBoatsRandomly();
	};

	const getCurrentPlayer = function () {
		return turnCount % 2 === 0 ? player : computer;
	};

	const getEnemyPlayer = function () {
		return turnCount % 2 === 0 ? computer : player;
	};

	const playerTurn = function (currentPlayer) {
		let prevShots = currentPlayer.getPrevShots();
		let enemyPlayer = getEnemyPlayer();

		// "determine shot" - will eventually use player input
		let shot = makeRandomShot(prevShots);

		updateData(currentPlayer, enemyPlayer, shot);
	};

	const computerTurn = function (currentPlayer) {
		let prevShots = currentPlayer.getPrevShots();
		let enemyPlayer = getEnemyPlayer();
		let shot = makeRandomShot(prevShots);
		updateData(currentPlayer, enemyPlayer, shot);
	};

	const investigate = function (currentPlayer) {
		let enemyPlayer = getEnemyPlayer();

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
		let currentPlayer = getCurrentPlayer();
		if (currentPlayer == computer) {
			computerTurn(currentPlayer);
		} else {
			playerTurn(currentPlayer);
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
})();

export { game };
