import { Board } from "./Board.js";
import { Command } from "./Command.js";

console.log("start");

const board = new Board();

const command = new Command(board.config);
command.onUpdate((config) => {
  board.config = config;
});

console.log("this", this);
console.log("globalThis.board: ", globalThis.board);
