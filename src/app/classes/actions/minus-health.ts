import { ActionResult } from '../action-result';
import { faHeart } from '../fa-util';
import { RoleStatus } from '../role-status';

export class MinusHealth {
  readonly description: string = `lose(s) ${this.num} ${faHeart}`;

  constructor(
    private num: number,
  ) {

  }

  do(roleStatus: RoleStatus): ActionResult<void> {
    return roleStatus.minusHealth(this.num);
  }
}
