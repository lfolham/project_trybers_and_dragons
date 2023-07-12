import Fighter from './Fighter/Fighter';
import Energy from './Energy';
import Race, { Elf } from './Races';
import Archetype from './Archetypes/Archetype';
import getRandomInt from './utils';
import { Mage } from './Archetypes';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      amount: getRandomInt(1, 10),
      type_: this._archetype.energyType,
    }; 
  }

  get dexterity(): number { 
    return this._dexterity; 
  }

  get race(): Race { 
    return this._race; 
  }

  get archetype(): Archetype { 
    return this._archetype; 
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const getRandom = getRandomInt(1, 10);
    const maxPoints = this._maxLifePoints;
    const sum = getRandom + maxPoints;

    if (sum > this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    } else {
      this._maxLifePoints = sum;
    }

    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}

export default Character;