import { Shape } from "./Shape";
import { Circle, Square } from "./Shapes";

class ShapeFactory {
  static createShape(shapeType: string, ...args: number[]): Shape {
    if (shapeType === "circle") {
      if (args.length !== 1) {
        throw new Error(
          "Circle creation requires exactly one argument (radius)"
        );
      }
      return new Circle(args[0]);
    } else if (shapeType === "square") {
      if (args.length !== 1) {
        throw new Error(
          "Square creation requires exactly one argument (side length)"
        );
      }
      return new Square(args[0]);
    } else {
      throw new Error(`Invalid shape type: ${shapeType}`);
    }
  }
}

// Example usage
const circle = ShapeFactory.createShape("circle", 5);
const square = ShapeFactory.createShape("square", 3);

console.log(circle.getInfo());
console.log(square.getInfo());
