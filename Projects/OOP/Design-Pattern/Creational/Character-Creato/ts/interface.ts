export interface Soldier {
  name: string; // Soldier's name
  age: number; // Soldier's age
  health: number; // Soldier's health points
}
export interface MageSoldier extends Soldier {
  name_cane: string;
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
