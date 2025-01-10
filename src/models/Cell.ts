import { Board } from './Board';
import { Colors } from './colors';
import { Figure } from './figures/Figure';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.figure = figure;
    this.color = color;
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }
}
