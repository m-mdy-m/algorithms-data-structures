import { InfoSoldier } from "./helper";
import { ArcherSoldier, MageSoldier, Soldier, WarriorSoldier } from "./interface";

export abstract class CharacterFactory {
  abstract createWarrior?(): WarriorSoldier;
  abstract createArcher?(): ArcherSoldier;
  abstract createMage?(): MageSoldier;
  protected  CommonProps(): Soldier {
    return {
      name: InfoSoldier.NameSoldier(),
      age: InfoSoldier.randomAge(),
      health: 100,
    };
  }
}
