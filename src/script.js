"use strict";
import "./style.css";
import { game } from "./game.js";
import { printBoats } from "./ui.js";

let g = game();
g.init();
let boats = g.player.getAllBoats();
printBoats(boats);
