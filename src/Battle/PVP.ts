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
    let lifePoints = 0;
    while (this.firstPlayer.lifePoints >= 0
      && this.secondPlayer.lifePoints >= 0) {
      this.firstPlayer.attack(this.secondPlayer);
      this.secondPlayer.attack(this.firstPlayer);
      if (this.firstPlayer.lifePoints === -1) {
        lifePoints = -1;
      } else {
        lifePoints = 1;
      }
    }
    return lifePoints;
  }
}