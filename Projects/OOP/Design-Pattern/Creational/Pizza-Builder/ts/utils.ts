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
export interface PizzaMenuItem {
  type: string;
  price: number;
}
// Function to find the price of a specific item type within a category
// This function takes the category (e.g., "Cheese") and item type (e.g., "mozzarella")
// as arguments. It checks if the category exists, then uses the `find` method
// to locate the item with the matching type within that category. If found,
// it returns the price of the item, otherwise it returns undefined.
export function findPriceByType(category: string, itemType: string): number | undefined {
  if (category in (data as PizzaMenu)) {
    const menu = loadPizzaMenu(category); // Currently not used, could be used for efficiency
    const priceInfo = menu?.find((item: PizzaMenuItem) => item?.type === itemType);
    return priceInfo?.price;
  }
  return undefined;
}
// Function to list all item types within a specific category
// This function takes the category as an argument and checks if it exists.
// If found, it uses the `map` method to create an array containing just the
// "type" property of each item within that category. This array is then returned.
// If the category is not found, it returns an undefined value.
export function listCategory(category: string):[]|undefined {
  if (category in (data as PizzaMenu)) {
    const menu = loadPizzaMenu(category); // Currently not used, could be used for efficiency
    const Info = menu?.map((f: PizzaMenuItem) => f?.type);
    return Info;
  }
}