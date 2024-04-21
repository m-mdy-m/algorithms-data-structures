import data from "../price.json";
// Interface defining the structure of the Pizza Menu data
// This specifies the expected format of the JSON data
interface PizzaMenu {
  Cheese: { type: string; price: number }[];
  Crust: { type: string; price: number }[];
  Sauce: { type: string; price: number }[];
  Topping: { type: string; price: number }[];
}
// Function to load a specific menu category (not used in the current implementation)
// This function checks if the requested category exists in the data
// and returns the corresponding data if found. It could be useful if you need to
// access specific categories for other purposes.
function loadPizzaMenu(category: string): any {
  if (category in (data as PizzaMenu)) {
    const typedData = data as PizzaMenu;
    return Object.getOwnPropertyDescriptor(typedData, category)?.value;
  }
  return undefined;
}
// Interface defining a single option within a pizza menu category
// (e.g., cheese type, crust type, etc.)
export interface PizzaOption {
  type: string; // Type of the menu item (e.g., "mozzarella", "thin crust")
  price: number; // Price of the menu item
}

// Type aliases for specific menu category options (improves readability)
type CheeseOption = PizzaOption;
type CrustOption = PizzaOption;
type SauceOption = PizzaOption;
type ToppingOption = PizzaOption;
// Interface for a complete Pizza with size, optional sauce & cheese, and toppings
export interface Pizza {
  size: CrustOption; // Size of the pizza (e.g., "small", "medium", "large")
  sauce?: SauceOption; // Optional sauce for the pizza
  cheese?: CheeseOption; // Optional cheese for the pizza
  toppings: ToppingOption[]; // Array of toppings on the pizza
  calculatePrice: number; // Function to calculate the total price of the pizza
}
abstract class PizzaBase {
  readonly type: string;
  constructor(type: string) {
    this.type = type;
  }
  abstract listMenu(): { [key: string]: Function };
  protected getPrice(category: string): number | undefined {
    if (category in (data as PizzaMenu)) {
      const menu = loadPizzaMenu(category);
      const priceInfo = menu?.find(
        (item: PizzaOption) => item?.type === this.type
      );
      return priceInfo?.price;
    }
    return undefined;
  }
  protected listCategory(category: string): [] | undefined {
    if (category in (data as PizzaMenu)) {
      const menu = loadPizzaMenu(category);
      const Info = menu?.map((f: PizzaOption) => f?.type);
      if (Info.includes(this.type)) {
        return Info;
      }
      return undefined;
    }
  }
  abstract createCheeseMethod(cheeseType: string): Function;
}
export abstract class PizzaIngredient extends PizzaBase {
  readonly price: number;
  readonly category: string;
  constructor(type: string, category: string) {
    super(type);
    this.category = category;
    this.price = this.getPrice(category) ?? 250;
    this.listMenu()
  }
  // return array list 
  override listMenu(): { [key: string]: Function } {
    const toppingList = this.listCategory(this.category);
    if (!toppingList) {
      throw new Error(`"${this.type}" is not a valid ${this.category} option. Please choose from the available options.`);
    }

    const methods: { [key: string]: Function } = {};
    for (const topping of toppingList) {
      methods[topping] = this.createCheeseMethod(topping);
    }
    return methods;
  }
  // create method 
  override createCheeseMethod(cheeseType: string): Function {
    return () => ({ type: cheeseType, price: this.price });
  }
}