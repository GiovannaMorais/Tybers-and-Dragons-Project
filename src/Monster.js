"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor() {
        this._lifePoints = 85;
        this._strength = 63;
    }
    get lifePoints() { return this._lifePoints; }
    get strength() { return this._strength; }
    receiveDamage(attackPoints) {
        const damages = attackPoints - this._lifePoints;
        if (damages > 0)
            this._lifePoints -= damages;
        if (this._lifePoints <= 0)
            this._lifePoints = -1;
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
}
exports.default = Monster;
