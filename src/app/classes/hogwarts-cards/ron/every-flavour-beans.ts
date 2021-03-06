import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from './../hogwarts-card-type';

export class EveryFlavourBeans extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Item,
      0,
      GameBoxEnum.Game1,
      'Every-Flavour Beans',
    );
  }
}
