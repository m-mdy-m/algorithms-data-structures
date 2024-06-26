import * as data from "../data.json";
interface GameData {
  first_name: string[];
  last_name: string[];
  gun_names: string[];
  magic_wand_names: string[];
  sword_names: string[];
  old_weapon_names: string[];
  book_names: string[];
  cane_names: string[];
}
function getDataByKey(key: keyof GameData): string[] {
    return data[key] as string[];
  }
export class InfoSoldier {
  static randomAge(min: number = 18, max: number = 40): number {
    return Math.round(Math.random() * (max - min) + min);
  }
  static nameSoldier(): string {
    const first_name = getDataByKey("first_name");
    const last_name = getDataByKey("last_name");
    var random_first_name_index = this.randomAge(0, first_name.length - 1);
    var random_last_name_index = this.randomAge(0, last_name.length - 1);
    const firstName = first_name[random_first_name_index];
    const lastName = last_name[random_last_name_index];
    return `${firstName} ${lastName}`;
  }

  static randomBool(): boolean {
    return Math.random() < 0.5;
  }
  static randomGunName(): string {
    const gun_names = getDataByKey("gun_names");
    return gun_names[Math.floor(Math.random() * gun_names.length)];
  }
  static randomMagicWandName(): string {
    const magic_wand_names = getDataByKey("magic_wand_names");
    return magic_wand_names[
      Math.floor(Math.random() * magic_wand_names.length)
    ];
  }
  static randomSwordName(): string {
    const sword_names = getDataByKey("sword_names");
    return sword_names[Math.floor(Math.random() * sword_names.length)];
  }
  static randomOldWeaponName(): string {
    const old_weapon_names = getDataByKey("old_weapon_names");
    return old_weapon_names[
      Math.floor(Math.random() * old_weapon_names.length)
    ];
  }
  static randomBookWitchcraft() {
    const book_names = getDataByKey("book_names");
    return book_names[Math.floor(Math.random() * book_names.length)];
  }
  static randomNameCane() {
    const cane_names = getDataByKey("cane_names");
    return cane_names[Math.floor(Math.random() * cane_names.length)];
  }
}
