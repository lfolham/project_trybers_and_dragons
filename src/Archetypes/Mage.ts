import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

class Mage extends Archetypes {
  private _typeEnergy: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Mage.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }
}

export default Mage;