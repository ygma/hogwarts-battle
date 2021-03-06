import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class SortingHat extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Item,
      4,
      GameBoxEnum.Game1,
      'Sorting Hat',
    );
  }
}
