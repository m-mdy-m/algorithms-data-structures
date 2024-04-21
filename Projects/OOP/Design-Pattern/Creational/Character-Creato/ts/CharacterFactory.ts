import { Soldier } from "./Soldier";
import { InfoSoldier } from "./helper";
import { SoldierData } from "./interface";
export abstract class CharacterFactory<T extends Soldier> {
  protected readonly infoSoldier: SoldierData=InfoSoldier
  protected abstract createSoldierImpl(): T;

  public createSoldier(): T {
    const commonProps = this.createBaseSoldier();
    return { ...commonProps, ...this.createSoldierImpl() };
  }

  private createBaseSoldier(): Soldier {
    return new Soldier(
      this.infoSoldier.nameSoldier(),
      this.infoSoldier.randomAge(),
      100
    );
  }
}
