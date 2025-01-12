import { Figure, FigureNames } from './Figure';
import { Colors } from '../colors';
import { Cell } from '../Cell';

import blackLogo from '../../assets/images/chess-pieces/black-rook.png';
import whiteLogo from '../../assets/images/chess-pieces/white-rook.png';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }
}
