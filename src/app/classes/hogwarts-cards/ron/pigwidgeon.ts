import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from './../hogwarts-card-type';

export class Pigwidgeon extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Ally,
      0,
      GameBoxEnum.Game1,
      'Pigwidgeon',
    );
  }
}
