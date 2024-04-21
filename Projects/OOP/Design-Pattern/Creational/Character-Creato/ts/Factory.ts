import { CharacterFactory } from "./CharacterFactory";
import { InfoSoldier } from "./helper";
import { ArcherSoldier, MageSoldier, Soldier, WarriorSoldier } from "./interface";
function base ():Soldier{
    return {
      name: InfoSoldier.NameSoldier(),
      age: InfoSoldier.randomAge(),
      health: 100,
    };
}
class MageFactory extends CharacterFactory  {
    base :Soldier;
  constructor() {
    super();
    this.base = this.createCommonSoldierProps()
  }
  override createMage(): MageSoldier {
    return {
        ...this.base,
      bookWitchcraft: InfoSoldier.randomBookWitchcraft(),
      cane: InfoSoldier.randomBool(),
      name_cane: InfoSoldier.randomNameCane(),
    };
  }
  createArcher(): ArcherSoldier {
    return {
        ...this.base,
      arrows: Math.random()* (40 - 200) + 40,
      bow: InfoSoldier.randomOldWeaponName(),
    };
  }
  createWarrior(): WarriorSoldier {
    return {
        ...this.base,
      sword: InfoSoldier.randomSwordName(),
    };
  }
}
// class WarriorFactory extends CharacterFactory {
//   createWarrior(): WarriorSoldier {}
// }

// class ArcherFactory extends CharacterFactory {
//   createArcher(): ArcherSoldier {}
// }
const m = new MageFactory();
const a = m.createMage();
console.log("a:", a);
