import { Shape } from "./Shape";

const PI = Math.PI;
export class Circle extends Shape {
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

export class Square extends Shape {
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
