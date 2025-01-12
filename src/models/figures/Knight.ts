import { Cell } from '../Cell';
import { Colors } from '../colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/images/chess-pieces/black-knight.png';
import whiteLogo from '../../assets/images/chess-pieces/white-knight.png';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }
}
