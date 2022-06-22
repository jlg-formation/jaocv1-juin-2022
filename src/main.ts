import { Board } from './Board.js';
import { Command } from './Command.js';
import { CommandConfig } from './interfaces/CommandConfig.js';

console.log('start');

const board = new Board();

const command = new Command(board.config);
command.onUpdate((config: CommandConfig) => {
  board.config = config;
});

console.log('this', this);
console.log('globalThis.board: ', globalThis.board);
