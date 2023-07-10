export type EnergyType = 'mana' | 'stamina';

export interface Energy {
  amount: number
  type: EnergyType,
}