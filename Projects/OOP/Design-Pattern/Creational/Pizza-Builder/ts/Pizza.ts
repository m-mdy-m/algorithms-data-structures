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
  calculatePrice(): number;
}