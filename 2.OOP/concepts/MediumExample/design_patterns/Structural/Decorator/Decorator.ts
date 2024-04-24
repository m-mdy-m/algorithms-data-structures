abstract class Beverage {
  abstract getDescription(): string;
  abstract getCost(): number;
}
class Coffee extends Beverage {
  override getCost(): number {
    return 1.5;
  }
  override getDescription(): string {
    return "Coffee";
  }
}
class CondimentDecorator extends Beverage {
  protected beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  override getCost(): number {
    return this.beverage.getCost();
  }
  override getDescription(): string {
    return this.beverage.getDescription() + ",";
  }
}
class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }
  getCost(): number {
    return this.beverage.getCost() + 0.5;
  }
  getDescription(): string {
    return this.beverage.getDescription() + "MILk";
  }
}
class Sugar extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }
  getCost(): number {
    return this.beverage.getCost() + 0.25;
  }
  getDescription(): string {
    return this.beverage.getDescription() + "Sugar";
  }
}
let beverage = new Coffee();
console.log(beverage.getDescription() + "-$" + beverage.getCost());
beverage = new Milk(beverage);
console.log(beverage.getDescription() + "-$" + beverage.getCost());
beverage = new Sugar(beverage);
console.log(beverage.getDescription() + "-$" + beverage.getCost());
