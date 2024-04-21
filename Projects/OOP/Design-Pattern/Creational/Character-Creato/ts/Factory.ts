import { CharacterFactory } from "./CharacterFactory";
import { InfoSoldier } from "./helper";
import { ArcherSoldier, MageSoldier, WarriorSoldier } from "./interface";
class SoldierFactory extends CharacterFactory {
    protected createSoldier(): MageSoldier | ArcherSoldier | WarriorSoldier {
      return {
        age: InfoSoldier.randomAge(),
        health: 100,
        name: InfoSoldier.NameSoldier(),
      };
    }
  }

class MageFactory extends SoldierFactory {
  constructor() {
    super();
  }
  override createMage(): MageSoldier {
    console.log(this);

    return {
      age: InfoSoldier.randomAge(),
      bookWitchcraft: InfoSoldier.randomBookWitchcraft(),
      cane: InfoSoldier.randomBool(),
      health: 100,
      name: InfoSoldier.NameSoldier(),
      name_cane: InfoSoldier.randomNameCane(),
    };
  }
  createArcher(): ArcherSoldier {
    return {
      age: InfoSoldier.randomAge(),
      health: 100,
      name: InfoSoldier.NameSoldier(),
      arrows: Math.random() * (40 - 200) + 40,
      bow: InfoSoldier.randomOldWeaponName(),
    };
  }
  createWarrior(): WarriorSoldier {
    return {
      age: InfoSoldier.randomAge(),
      health: 100,
      name: InfoSoldier.NameSoldier(),
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
