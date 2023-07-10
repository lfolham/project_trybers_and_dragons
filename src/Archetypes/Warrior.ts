import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

class Warrior extends Archetypes {
  private _typeEnergy: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'stamina';
    Warrior.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.count;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }
}

export default Warrior;