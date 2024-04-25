import { PizzaIngredient } from "./Pizza";
export class Topping extends PizzaIngredient {
  constructor(type: string) {
    super(type, "Topping");
  }
}