import { Cell } from '../Cell';
import { Colors } from '../colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/images/chess-pieces/black-pawn.png';
import whiteLogo from '../../assets/images/chess-pieces/white-pawn.png';

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }
}
