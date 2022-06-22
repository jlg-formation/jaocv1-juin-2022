import "./style.css";

import { Board } from "./Board";
import { Command } from "./Command";
import { CommandConfig } from "./interfaces/CommandConfig";

console.log("start");

const board = new Board();

const command = new Command(board.config);
command.onUpdate((config: CommandConfig) => {
  board.config = config;
});

console.log("this", this);
console.log(
  "globalThis.board: ",
  (globalThis as unknown as { board: unknown }).board
);
