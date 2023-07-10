import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._createdRacesInstaces += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstaces;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;