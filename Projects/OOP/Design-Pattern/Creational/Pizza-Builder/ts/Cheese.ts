import { Cheese } from "./Pizza";
import { PizzaMenuItem, findPriceByType } from "./utils";
export class CheeseOption implements Cheese {
  readonly price: number;
  readonly type: string;
  constructor(type: string) {
    this.type = type;
    this.price = findPriceByType("Cheese", type) ?? 25;
    this.executeCheeseMethod(type)
  }
  private get availableCheeseTypes(): { [key: string]: Function } {
    return {
      method: this.method
    };
  }
  private executeCheeseMethod(method: string): void {
    if (method in this.availableCheeseTypes) {
      this.availableCheeseTypes[method]();
    } else {
      console.warn(`Cheese type "${method}" not found.`);
    }
  }
  private method(){
    return CheeseOption.prototype[this.type] = function():PizzaMenuItem{
      return{ type: this.type, price: this.price }; 
    }
  }
}
