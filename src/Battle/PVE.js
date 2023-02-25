"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = __importDefault(require("./Battle"));
class PVE extends Battle_1.default {
    constructor(_player, _monster) {
        super(_player);
        this.player = _player;
        this.monsters = _monster;
    }
    fight() {
        this.monsters.forEach((monst) => {
            this.player.attack(monst);
            monst.attack(this.player);
        });
        return this.player.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVE;
