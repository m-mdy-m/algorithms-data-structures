import db from "../price.json";
export class foundPrice {
  type: string;
  option: string;
  constructor(option: string, type: string) {
    this.type = type;
    this.option = option;
  }
  getPrice(): number | undefined {
    const data = db[this.option];
    const priceData = data[this.type];
    if (!priceData) {
      return undefined;
    }
    return data.find((item) => item.type === this.type)?.price;
  }
}
