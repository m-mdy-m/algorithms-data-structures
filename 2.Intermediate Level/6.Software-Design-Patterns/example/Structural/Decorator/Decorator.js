class Beverage {
  getDescription() {}
  getCost() {}
}
class Coffee extends Beverage {
  getCost() {
    return 1.5;
  }
  getDescription() {
    return "Coffee";
  }
}
class CondimentDecorator extends Beverage {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }
  getCost() {
    return this.beverage.getCost();
  }
  getDescription() {
    return this.beverage.getDescription() + ",";
  }
}
class Milk extends CondimentDecorator {
  constructor(beverage) {
    super(beverage);
  }
  getCost() {
    return this.beverage.getCost() + 0.5;
  }
  getDescription() {
    return this.beverage.getDescription() + "MILk";
  }
}
class Sugar extends CondimentDecorator {
  constructor(beverage) {
    super(beverage);
  }
  getCost() {
    return this.beverage.getCost() + 0.25;
  }
  getDescription() {
    return this.beverage.getDescription() + "Sugar";
  }
}
let beverage = new Coffee();
console.log(beverage.getDescription() + "-$" + beverage.getCost());
beverage = new Milk(beverage);
console.log(beverage.getDescription() + "-$" + beverage.getCost());
beverage = new Sugar(beverage);
console.log(beverage.getDescription() + "-$" + beverage.getCost());
