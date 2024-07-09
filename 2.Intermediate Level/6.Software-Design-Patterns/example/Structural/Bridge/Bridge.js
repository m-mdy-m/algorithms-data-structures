// Abstraction (Drawing API)
class Drawable {
  constructor() {
    if (this.constructor === Drawable) {
      throw new Error(
        "Drawable is an abstract class and cannot be instantiated directly"
      );
    }
  }

  draw() {
    throw new Error("Abstract method draw() not implemented");
  }
}

// Implementations (Drawing with different colors)
class RedCircle extends Drawable {
  draw() {
    return "Drawing a red circle";
  }
}

class BlueSquare extends Drawable {
  draw() {
    return "Drawing a blue square";
  }
}

// Factory function for creating drawable objects
function createDrawable(type) {
  switch (type) {
    case "red-circle":
      return new RedCircle();
    case "blue-square":
      return new BlueSquare();
    default:
      throw new Error(`Unsupported drawable type: ${type}`);
  }
}

// Abstraction (with reference to implementation)
class Drawing {
  constructor(shape) {
    if (!(shape instanceof Drawable)) {
      throw new Error("Argument must be an instance of Drawable");
    }
    this.shape = shape;
  }

  render() {
    return this.shape.draw();
  }
}

// Usage
const redCircle = createDrawable("red-circle");
const blueSquare = createDrawable("blue-square");

const redDrawing = new Drawing(redCircle);
console.log(redDrawing.render()); // Output: Drawing a red circle

const blueDrawing = new Drawing(blueSquare);
console.log(blueDrawing.render()); // Output: Drawing a blue square
