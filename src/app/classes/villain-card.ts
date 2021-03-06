import { Ability } from './ability';
import { BaseCard } from './base-card';
import { GameBoxEnum } from './game-boxes/game-box-enum';

export class VillainCard extends BaseCard {
  constructor(
    gameBoxEnum: GameBoxEnum,
    name: string,
    readonly maxHealths: number,
    readonly abilities: Ability[] = [],
  ) {
    super(name, gameBoxEnum);
  }
}
