import { Cell } from '../Cell';
import { Colors } from '../colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/images/chess-pieces/black-bishop.png';
import whiteLogo from '../../assets/images/chess-pieces/white-bishop.png';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
}
