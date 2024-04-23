interface Shape {
  getArea(): number;
}
interface AreaMeasurable {
  getAreaInCm(): number;
}
class Square implements Shape {
  private side: number;
  constructor(side: number) {
    this.side = side;
  }
  getArea(): number {
    return this.side * this.side;
  }
}
class Circle implements Shape {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
// Adapter Class
class ShapeAreaCalculator implements AreaMeasurable {
  private shape: Shape;
  constructor(shape: Shape) {
    this.shape = shape;
  }
  getAreaInCm(): number {
    return this.shape.getArea() * 2.54; //This factor is used to convert the area from inches (assumed unit) to centimeters.
  }
}
// usage example :
const square: Square = new Square(5);
const circle: Circle = new Circle(3);
const squareAdapter: ShapeAreaCalculator = new ShapeAreaCalculator(square);
const circleAdapter: ShapeAreaCalculator = new ShapeAreaCalculator(circle);
console.log(`Area in cm : ${circleAdapter.getAreaInCm()}`);
console.log(`Area in cm : ${squareAdapter.getAreaInCm()}`);
