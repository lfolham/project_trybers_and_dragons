type EnergyType = 'mana' | 'stamina';

interface Energy {
  amount: number,
  type: EnergyType,
}

export default Energy;

export {
  EnergyType,
};