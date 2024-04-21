import { CharacterFactory } from "./CharacterFactory";
import { InfoSoldier } from "./helper";
import { ArcherSoldier, MageSoldier, WarriorSoldier } from "./interface";

class MageFactory extends CharacterFactory  {
//   age: number;
//   name: string;
//   health: number;
//   cane: boolean;
//   name_cane: string;
//   bookWitchcraft: string;
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
      age: 20,
      health: 100,
      name: "sj",
      arrows: 2421,
      bow: "scxz",
    };
  }
  createWarrior(): WarriorSoldier {
    return {
      age: 20,
      health: 100,
      name: "sj",
      sword: "scxz",
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
