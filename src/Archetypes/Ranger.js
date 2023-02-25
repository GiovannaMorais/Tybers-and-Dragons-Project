"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = __importDefault(require("./Archetype"));
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        this._instances += 1;
        return this._instances;
    }
}
exports.default = Ranger;
Ranger._instances = 0;
