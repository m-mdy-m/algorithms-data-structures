import { Cheese } from "./Cheese";
import { Crust } from "./Crust";
import { Pizza, PizzaOption } from "./Pizza";
import { Sauce } from "./Sauce";
import { Topping } from "./Topping";
interface CheeseType {
  mozzarella: string;
  cheddar: string;
  vegan: string;
}
interface CrustType {
  thin: string;
  thick: string;
  stuffed: string;
}
interface SauceType {
  tomato: string;
  pesto: string;
  white: string;
}
interface ToppingType {
  pepperoni: string;
  mushrooms: string;
  onions: string;
}

export class PizzaBuilder {
  private crust: PizzaOption;
  private sauce: PizzaOption;
  private cheese: PizzaOption;
  private toppings: PizzaOption;

  setCrust(crustType: keyof CrustType): void {
    this.crust = new Crust(crustType);
  }

  setSauce(sauceType: keyof SauceType): void {
    this.sauce = new Sauce(sauceType);
  }

  setCheese(cheeseType: keyof CheeseType): void {
    this.cheese = new Cheese(cheeseType);
  }

  addTopping(toppingType: keyof ToppingType): void {
    this.toppings = new Topping(toppingType);
  }
  private totalPrice(): number {
    return (
      this.cheese.price +
      this.sauce.price +
      this.toppings.price +
      this.crust.price
    );
  }
  build(): Pizza {
    return {
      size: this.crust,
      toppings: this.toppings,
      cheese: this.cheese,
      sauce: this.sauce,
      calculatePrice: this.totalPrice(),
    };
  }
}

const a = new PizzaBuilder().setCrust("thick");
console.log("a:", a);
