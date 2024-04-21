const PI = Math.PI;
abstract class Shape {
  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;
  getInfo(): string {
    if (isNaN(this.getSideLength()) || this.getSideLength() <= 0) {
      throw new Error(
        "Invalid side length. Side length must be a positive number."
      );
    }

    const shapeName = this.getName();
    const formattedPerimeter = this.formatNumber(this.calculatePerimeter(), 2);
    const formattedArea = this.formatNumber(this.calculateArea(), 2);

    return `Shape Information:
        - Name: ${shapeName}
        - Side Length: ${this.getSideLength().toFixed(2)}
        - Perimeter: ${formattedPerimeter}
        - Area: ${formattedArea}`;
  }
  formatNumber(value: number, decimals: number): string {
    return value.toFixed(decimals);
  }

  abstract getName(): string;
  abstract getSideLength(): number;
}
class Circle extends Shape {
  constructor(public radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return PI * this.radius * 2;
  }

  getName(): string {
    return "Circle";
  }
  getSideLength(): number {
    return this.radius;
  }
}

class Square extends Shape {
  private length: number;
  constructor(length: number) {
    super();
    this.length = length;
  }

  calculateArea(): number {
    return this.length * this.length;
  }

  calculatePerimeter(): number {
    return this.length * 4;
  }
  getName(): string {
    return "Square";
  }
  getSideLength(): number {
    return this.length;
  }
}
// Create a circle object
const circle = new Circle(5);

// Get information about the circle
const circleInfo = circle.getInfo();
console.log(circleInfo); // Output: Shape Information:
                          //        - Name: Circle
                          //        - Radius: 5.00
                          //        - Perimeter: 31.42
                          //        - Area: 78.54