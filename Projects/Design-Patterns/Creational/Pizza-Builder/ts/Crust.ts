import { PizzaIngredient } from "./Pizza";

export class Crust extends PizzaIngredient {
  constructor(type: string) {
    super(type, "Crust");
  }
}
