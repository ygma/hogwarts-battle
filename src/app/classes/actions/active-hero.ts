import { ActionInterface } from '../action';
import { ActionResult } from '../action-result';
import { GamePlay } from '../game-play';
import { HeroStatus } from '../game-play/hero-status';

export class ActiveHero implements ActionInterface {
  readonly description = 'Active Hero';

  do(gamePlay: GamePlay): ActionResult<HeroStatus> {
    return new ActionResult(true, gamePlay.activeHero.heroCard.name, gamePlay.activeHero);
  }
}
