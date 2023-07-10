import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

class Ranger extends Archetypes {
  private _typeEnergy: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Ranger.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.count;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }
}

export default Ranger;