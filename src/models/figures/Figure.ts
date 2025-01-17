import logo from '../../assets/images/chess-pieces/black-king.png';
import { Cell } from '../Cell';
import { Colors } from '../colors';

export enum FigureNames {
  'FIGURE' = 'Фигура',
  'KING' = 'Король',
  'KNIGHT' = 'Конь',
  'PAWN' = 'Пешка',
  'QUEEN' = 'Ферзь',
  'ROOK' = 'Ладья',
  'BISHOP' = 'Слон',
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }
  moveFigure(target: Cell) {}
}
