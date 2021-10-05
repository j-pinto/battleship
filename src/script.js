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

	const takeTurn = function () {
		// turn setup
		let currentPlayer = getCurrentPlayer();
		let prevShots = currentPlayer.getPrevShots();
		let enemyPlayer = getEnemyPlayer();
		let enemyBoats = enemyPlayer.getAllBoats();

		let shot = undefined;
		let hit = false;
		let sink = false;

		////////// IGNORE THIS BLOCK FOR NOW ///////
		/*
		if computers turn
      determine if investigating
        next inv shot if investigating
		  else random shot
		else if players turn
		  take shot input (implement later, random shot for now)
    */
		////////////////////////////////////////////

		// "determine shot"
		shot = makeRandomShot(prevShots);

		// update hit data or miss data
		hit = isHit(shot, enemyBoats);
		let hitBoatName;
		if (hit) {
			currentPlayer.addPrevHit(shot);
			hitBoatName = getBoatNameIfHit(shot, enemyBoats);
			enemyPlayer.registerHit(hitBoatName);
			sink = boatSunk(hitBoatName, enemyBoats);
		} else {
			currentPlayer.addPrevMiss(shot);
		}

		// update sink data
		if (sink) {
			enemyPlayer.sinkBoat(hitBoatName);
		}

		/*
		update investigation
      if sink
        end inv
      if miss
        switch dir  
    */

		turnCount++;
	};

	return { player, computer, init, takeTurn };
})();

export { game };
