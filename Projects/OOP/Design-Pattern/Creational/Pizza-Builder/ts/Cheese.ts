import { Cheese } from "./Pizza";
import { PizzaMenuItem, findPriceByType, listCategory } from "./utils";
export class CheeseOption implements Cheese {
  readonly price: number;
  readonly type: string;
  readonly category: string = "Cheese";
  constructor(type: string) {
    this.type = type;
    this.price = findPriceByType(this.category, type) ?? 250;
    this.listMenu();
  }
  private listMenu(): { [key: string]: Function } {
    const cheeseTypes = listCategory(this.category) ?? [];
    const methods: { [key: string]: Function } = {}; 
    for (const cheeseType of cheeseTypes) {
      methods[cheeseType as string] = this.createCheeseMethod(cheeseType);
    }
    return methods;
  }
  private createCheeseMethod(cheeseType: string): Function {
    return () => ({ type: cheeseType, price: this.price });
  }
}