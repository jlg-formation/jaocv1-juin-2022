import { Board } from "./Board.js";

console.log("start");

const board = new Board();

setTimeout(() => {
  board.config = {
    sampleNbr: 50,
    multiplicationFactor: 3,
  };
  console.log("board.config: ", board.config);
}, 2000);

console.log("this", this);
console.log("globalThis.board: ", globalThis.board);
