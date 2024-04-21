import { PizzaIngredient } from "./Pizza";
export class CheeseOption extends PizzaIngredient {
  constructor(type: string) {
    super(type, "Cheese");
  }
}