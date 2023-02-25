"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = __importDefault(require("./Battle"));
class PVP extends Battle_1.default {
    constructor(_firstPlayer, _secondPlayer) {
        super(_firstPlayer);
        this.firstPlayer = _firstPlayer;
        this.secondPlayer = _secondPlayer;
    }
    fight() {
        let lifePoints = 0;
        while (this.firstPlayer.lifePoints >= 0
            && this.secondPlayer.lifePoints >= 0) {
            this.firstPlayer.attack(this.secondPlayer);
            this.secondPlayer.attack(this.firstPlayer);
            if (this.firstPlayer.lifePoints === -1) {
                lifePoints = -1;
            }
            else {
                lifePoints = 1;
            }
        }
        return lifePoints;
    }
}
exports.default = PVP;
