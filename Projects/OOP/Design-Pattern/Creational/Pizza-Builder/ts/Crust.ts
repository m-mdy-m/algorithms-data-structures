import { PizzaBase } from "./Pizza";

export class Crust extends PizzaBase {
  readonly price: number;
  readonly type: string;
  readonly category: string = "Crust";
  constructor(type: string) {
    super(type);
    this.price = this.getPrice(this.category) ?? 250;
  }
  override listMenu(): { [key: string]: Function } {
    const cheeseTypes = this.listCategory(this.category) ?? [];
    const methods: { [key: string]: Function } = {};
    for (const cheeseType of cheeseTypes) {
      methods[cheeseType as string] = this.createCheeseMethod(cheeseType);
    }
    return methods;
  }
  override createCheeseMethod(cheeseType: string): Function {
    return () => ({ type: cheeseType, price: this.price });
  }
}
