export interface Size {
  name: string;
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
  size: Size;
  sauce?: Sauce;
  cheese?: Cheese;
  toppings: Topping[];
  calculatePrice(): number;
}