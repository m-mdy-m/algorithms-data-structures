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
        (item: PizzaMenuItem) => item?.type === this.type
      );
      return priceInfo?.price;
    }
    return undefined;
  }
  protected listCategory(category: string): [] | undefined {
    if (category in (data as PizzaMenu)) {
      const menu = loadPizzaMenu(category);
      const Info = menu?.map((f: PizzaMenuItem) => f?.type);
      if (Info.includes(this.type)) {
        return Info;
      }
      return undefined;
    }
  }
  abstract createCheeseMethod(cheeseType: string): Function;
}
export abstract class PizzaTopping extends PizzaBase {
  readonly price: number;
  readonly category: string;
  constructor(type: string, category: string) {
    super(type);
    this.category = category;
    this.price = this.getPrice(category) ?? 250;
  }
  override listMenu(): { [key: string]: Function } {
    const toppingList = this.listCategory(this.category);
    if (!toppingList) {
      throw new Error("Failed to retrieve available topping options.");
    }

    const methods: { [key: string]: Function } = {};
    for (const topping of toppingList) {
      methods[topping] = this.createCheeseMethod(topping);
    }
    return methods;
  }
  override createCheeseMethod(cheeseType: string): Function {
    return () => ({ type: cheeseType, price: this.price });
  }
}
