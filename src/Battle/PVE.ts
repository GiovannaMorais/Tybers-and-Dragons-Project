import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  player: Fighter;
  monsters: Fighter[] | SimpleFighter[];

  constructor(_player: Fighter, _monster : Fighter[] | SimpleFighter[]) {
    super(_player);
    this.player = _player;
    this.monsters = _monster;
  }

  fight(): number {
    this.monsters.forEach((monst) => {
      this.player.attack(monst);
      monst.attack(this.player);
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}