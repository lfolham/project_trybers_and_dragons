import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

class Necromancer extends Archetypes {
  private _typeEnergy: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Necromancer.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.count;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }
}

export default Necromancer;