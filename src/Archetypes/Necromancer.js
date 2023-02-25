"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = __importDefault(require("./Archetype"));
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        this._instances += 1;
        return this._instances;
    }
}
exports.default = Necromancer;
Necromancer._instances = 0;
