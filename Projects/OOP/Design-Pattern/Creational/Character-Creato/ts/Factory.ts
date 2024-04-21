import { CharacterFactory } from "./CharacterFactory";
import { ArcherSoldier, MageSoldier, Soldiers, WarriorSoldier } from "./interface";
export class MageFactory extends CharacterFactory<MageSoldier> {
  override createSoldierImpl(): any {
    return {
      bookWitchcraft: this.infoSoldier.randomBookWitchcraft(),
      nameCane: this.infoSoldier.randomNameCane(),
    };
  }
}
export class WarriorFactory extends CharacterFactory<WarriorSoldier> {
  override createSoldierImpl(): any {
    return {
      sword: this.infoSoldier.randomSwordName(),
    };
  }
}

export class ArcherFactory extends CharacterFactory<ArcherSoldier> {
  override createSoldierImpl(): any {
    return {
      bow: this.infoSoldier.randomOldWeaponName(),
      arrows: Math.floor(Math.random() * (200 - 40 + 1)) + 40,
    };
  }
}