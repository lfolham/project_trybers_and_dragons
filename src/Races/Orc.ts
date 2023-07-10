import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._createdRacesInstaces += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstaces;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;