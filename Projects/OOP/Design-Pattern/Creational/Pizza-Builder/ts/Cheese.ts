import { PizzaIngredient } from "./Pizza";
export class Cheese extends PizzaIngredient {
  constructor(type: string) {
    super(type, "Cheese");
  }
}