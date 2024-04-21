import { PizzaIngredient } from "./Pizza";
export class Sauce extends PizzaIngredient {
  constructor(type: string) {
    super(type, "Sauce");
  }
}