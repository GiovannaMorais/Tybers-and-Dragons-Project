import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  special?(enemy:Fighter):void;
  levelUp():void;
}