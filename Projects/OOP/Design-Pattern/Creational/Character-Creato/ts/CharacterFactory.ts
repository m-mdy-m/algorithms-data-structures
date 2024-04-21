import { ArcherSoldier, MageSoldier, WarriorSoldier } from "./interface";

export abstract class CharacterFactory {
  abstract createWarrior?(): WarriorSoldier;
  abstract createArcher?(): ArcherSoldier;
  abstract createMage?(): MageSoldier;
}
