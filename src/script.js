"use strict";
import "./style.css";
import { playerFactory, computerFactory } from "./data.js";
import { makeRandomShot, getBoatNameIfHit, boatSunk, isHit } from "./logic.js";

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

	const updateData = function (currentPlayer, enemyPlayer, shot) {
		let enemyBoats = enemyPlayer.getAllBoats();
		let hit = isHit(shot, enemyBoats);
		let hitBoatName;
		if (hit) {
			currentPlayer.addPrevHit(shot);
			hitBoatName = getBoatNameIfHit(shot, enemyBoats);
			enemyPlayer.registerHit(hitBoatName);
			if (boatSunk(hitBoatName, enemyBoats)) {
				enemyPlayer.sinkBoat(hitBoatName);
			}
		} else {
			currentPlayer.addPrevMiss(shot);
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

	return { player, computer, init, takeTurn };
})();

export { game };
