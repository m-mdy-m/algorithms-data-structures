import { Cheese } from "./Pizza";
export class CheeseOption implements Cheese {
  readonly price: number;
  readonly type: string;
  constructor(type: string) {
    this.type = type;
    this.price =2
  }
  mozzarella() {}
  cheddar() {}
  vegan() {}
}
