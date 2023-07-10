import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special: number;
  private _cost: number;

  constructor(
    private _name: string,
  ) {
    this._special = 0;
    this._cost = 0;
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Archetype;