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
    this.base = this.CommonProps()
  }
  override createMage(): MageSoldier {
    return {
        ...this.base,
      bookWitchcraft: InfoSoldier.randomBookWitchcraft(),
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
class WarriorFactory extends CharacterFactory {
    base :Soldier;
    constructor() {
      super();
      this.base = this.CommonProps()
    }
    override createMage(): MageSoldier {
      return {
          ...this.base,
        bookWitchcraft: InfoSoldier.randomBookWitchcraft(),
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

class ArcherFactory extends CharacterFactory {
    base :Soldier;
    constructor() {
      super();
      this.base = this.CommonProps()
    }
    override createMage(): MageSoldier {
      return {
          ...this.base,
        bookWitchcraft: InfoSoldier.randomBookWitchcraft(),
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