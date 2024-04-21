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
  private crust?: PizzaOption;
  private sauce?: PizzaOption;
  private cheese?: PizzaOption;
  private toppings: Topping[] = [];

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
    this.toppings.push(new Topping(toppingType));
  }
  private totalPrice(): number {
    const totalToppingsPrice = this.toppings.reduce(
      (acc, topping) => acc + topping.price,
      0
    );
    return (
      (this.crust?.price || 0) +
      (this.sauce?.price || 0) +
      (this.cheese?.price || 0) +
      totalToppingsPrice
    );
  }
  build(): Pizza {
    if (!this.crust) {
      throw new Error("Crust is required to build a pizza.");
    }
    return {
      size: this.crust, // Assuming size is stored in the crust object
      toppings: this.toppings,
      cheese: this.cheese,
      sauce: this.sauce,
      calculatePrice: this.totalPrice(),
    };
  }
}

const pizzaBuilder = new PizzaBuilder();
pizzaBuilder.setCheese("cheddar");
pizzaBuilder.setCrust("thin");
pizzaBuilder.addTopping("pepperoni");
pizzaBuilder.addTopping("mushrooms");

const pizza = pizzaBuilder.build();

console.log("Your pizza:");
console.log(`  Cheese: ${pizza.cheese?.type}`);
console.log(`  Crust: ${pizza.size?.type}`);
console.log(`  Toppings:`);
pizza.toppings.forEach(topping => console.log(`     - ${topping.type} ($${topping.price})`));

console.log(`  Total Price: $${pizza.calculatePrice}`);
`Output:
Your pizza:
  Cheese: cheddar
  Crust: thin
  Toppings:
     - pepperoni ($570)
     - mushrooms ($240)
  Total Price: $1350
`