import { PizzaBase } from "./Pizza";
export class CheeseOption extends PizzaBase {
  readonly price: number;
  readonly category: string = "Cheese";
  constructor(type: string) {
    super(type);
    this.price = this.getPrice(this.category) ?? 250; 
    this.listMenu()
  }
  override listMenu(): { [key: string]: Function } {
    const cheeseTypes: any = this.listCategory(this.category);
    if (!cheeseTypes) {
      throw new Error("Failed to retrieve available crust types.");
    }
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