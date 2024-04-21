import { CharacterFactory } from "./CharacterFactory";
import { ArcherSoldier, MageSoldier, WarriorSoldier } from "./interface";
class MageFactory extends CharacterFactory {
  createMage(): MageSoldier {}
}
class WarriorFactory extends CharacterFactory {
  createWarrior(): WarriorSoldier {}
}

class ArcherFactory extends CharacterFactory {
  createArcher(): ArcherSoldier {}
}
