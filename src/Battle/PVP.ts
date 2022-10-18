import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  firstPlayer: Fighter;
  secondPlayer: Fighter;

  constructor(_firstPlayer: Fighter, _secondPlayer:Fighter) {
    super(_firstPlayer);
    this.firstPlayer = _firstPlayer;
    this.secondPlayer = _secondPlayer;
  }

  fight(): number {
    this.firstPlayer.attack(this.secondPlayer);
    this.secondPlayer.attack(this.firstPlayer);

    return this.firstPlayer.lifePoints === -1 ? -1 : 1;
  }
}