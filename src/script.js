"use strict";
import "./style.css";
import { playerFactory, computerFactory } from "./data.js";
import {
	makeRandomShot,
	getBoatNameIfHit,
	boatSunk,
	gameOver,
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

	const takeTurn = function () {
		// turn setup
		let currentPlayer = getCurrentPlayer();
		let prevShots = currentPlayer.getPrevShots();
		let enemyPlayer = getEnemyPlayer();
		let enemyBoats = enemyPlayer.getAllBoats();

		let shot = undefined;
		let hit = false;
		let sink = false;
		let investigating = false;

		/*
		//determine if investigating

		if computers turn
		  determine shot
		  next inv shot if investigating
		  else random shot

		else if players turn
		  take shot input (implement later, random shot for now)
    
		determine hit

		update hit data or miss data

		update sink data

		update investigation
      next inv shot
      if sink
        end inv
      if miss
        switch dir  
    */

		turnCount++;
	};

	return { player, computer, init, takeTurn };
})();
