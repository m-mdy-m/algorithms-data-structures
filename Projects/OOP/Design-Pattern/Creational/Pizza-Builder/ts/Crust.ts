import { PizzaTopping } from "./Pizza";

export class Crust extends PizzaTopping {
  constructor(type: string) {
    super(type, "Crust");
  }
}
