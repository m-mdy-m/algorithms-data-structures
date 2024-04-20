import { Cheese } from "./Pizza";
export class CheeseMenu implements Cheese {
  readonly price: number;
  readonly type: string;
  mozzarella() {}
  cheddar() {}
  vegan() {}
}
