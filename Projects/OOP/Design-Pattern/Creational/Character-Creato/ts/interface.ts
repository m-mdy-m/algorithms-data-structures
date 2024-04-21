interface Soldier {
  name: string; // Soldier's name
  health: number & { readonly min: 0; readonly max: 100 };// Soldier's health points
}
export interface MageSoldier extends Soldier {
  cane: string; // Mage's cane
  bookWitchcraft: string; // Mage's book of witchcraft
}
export interface WarriorSoldier extends Soldier {
  gun?: string; // Warrior's gun (optional)
  sword: string; // Warrior's sword
}
export interface ArcherSoldier extends Soldier {
  bow: string; // Archer's bow
  arrows: number; // Archer's arrow count
}
