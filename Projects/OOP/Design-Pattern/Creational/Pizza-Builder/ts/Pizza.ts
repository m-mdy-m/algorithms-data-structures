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
function loadPizzaMenu(category: string):any {
  if (category in (data as PizzaMenu)) {
    const typedData = data as PizzaMenu;
    return Object.getOwnPropertyDescriptor(typedData, category)?.value;
  }
  return undefined;
}
// Interface defining the structure of a single Pizza Menu item
// This specifies the properties expected for each item within a category
interface PizzaMenuItem {
  type: string;
  price: number;
}
export interface Crust {
  type: string;
  price: number;
}

export interface Sauce {
  type: string;
  price: number;
}

export interface Cheese {
  type: string;
  price: number;
}

export interface Topping {
  type: string;
  price: number;
}

export interface Pizza {
  size: Crust;
  sauce?: Sauce;
  cheese?: Cheese;
  toppings: Topping[];
  calculatePrice: number;
}
export abstract class PizzaBase {
  readonly type: string;
  constructor(type:string) {
    this.type = type
  }
  abstract listMenu(): { [key: string]: Function };
  // Function to find the price of a specific item type within a category
  // This function takes the category (e.g., "Cheese") and item type (e.g., "mozzarella")
  // as arguments. It checks if the category exists, then uses the `find` method
  // to locate the item with the matching type within that category. If found,
  // it returns the price of the item, otherwise it returns undefined.
  protected getPrice(category: string) {
    if (category in (data as PizzaMenu)) {
      const menu = loadPizzaMenu(category);
      const priceInfo = menu?.find(
        (item: PizzaMenuItem) => item?.type === this.type
      );
      return priceInfo?.price;
    }
  }
  protected listCategory(category: string) {
    if (category in (data as PizzaMenu)) {
      const menu = loadPizzaMenu(category);
      const Info = menu?.map((f: PizzaMenuItem) => f?.type);
      return Info;
    }
  }
  abstract createCheeseMethod(cheeseType: string): Function 
}
