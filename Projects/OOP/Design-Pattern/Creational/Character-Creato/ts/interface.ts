export interface Soldier {
  name: string;
  age: number;
  health: number;
}
export interface MageSoldier extends Soldier {
  bookWitchcraft: string;
  nameCane: string;
}

export interface WarriorSoldier extends Soldier {
  gun?: string;
  sword: string;
}

export interface ArcherSoldier extends Soldier {
  bow: string;
  arrows: number;
}
export interface Soldiers {
  Mage: MageSoldier;
  Warrior: WarriorSoldier;
  Archer: ArcherSoldier;
}
export interface SoldierData {
  randomAge: Function;
  nameSoldier: Function;
  randomBool: Function;
  randomGunName: Function;
  randomMagicWandName: Function;
  randomSwordName: Function;
  randomOldWeaponName: Function;
  randomBookWitchcraft: Function;
  randomNameCane: Function;
}
