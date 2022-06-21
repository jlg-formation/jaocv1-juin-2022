import { Board } from "./Board.js";

console.log("start");

var board = new Board();
board.setConfig({
  sampleNbr: 100,
  multiplicationFactor: 2,
});
board.draw();

console.log("this", this);
console.log("globalThis.board: ", globalThis.board);
