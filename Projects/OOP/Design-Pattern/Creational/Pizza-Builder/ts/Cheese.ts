import { PizzaTopping } from "./Pizza";
export class CheeseOption extends PizzaTopping {
  constructor(type: string) {
    super(type, "Cheese");
  }
}
