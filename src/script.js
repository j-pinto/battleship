"use strict";
import "./style.css";
import { playerFactory, computerFactory } from "./data.js";

const game = (() => {
	const player = playerFactory();
	const computer = computerFactory();
	let turnCount = 0;

	return { player, computer, turnCount };
})();
