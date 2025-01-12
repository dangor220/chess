import { Cell } from '../Cell';
import { Colors } from '../colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/images/chess-pieces/black-king.png';
import whiteLogo from '../../assets/images/chess-pieces/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
}
