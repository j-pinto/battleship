"use strict";
import "./style.css";
import { playerFactory, computerFactory } from "./data.js";
import { makeRandomShot, getBoatNameIfHit, boatSunk } from "./logic.js";

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

	const takeTurn = function () {
		let currentPlayer = getCurrentPlayer();
		let enemyPlayer = getEnemyPlayer();
		let prevShots = currentPlayer.getPrevShots();
		let shot = makeRandomShot(prevShots);
		let enemyBoats = enemyPlayer.getAllBoats();
		let hitBoatName = getBoatNameIfHit(shot, enemyBoats);
		if (hitBoatName) {
			currentPlayer.addPrevHit(shot);
			enemyPlayer.registerHit(hitBoatName);
			let boat = enemyPlayer.getBoatByName(hitBoatName);
			if (boatSunk(boat)) {
				enemyPlayer.sinkBoat(boat);
			}
		} else {
			currentPlayer.addPrevMiss(shot);
		}

		turnCount++;
	};

	return { player, computer, init, takeTurn };
})();
