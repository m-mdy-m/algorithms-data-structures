// Abstraction (Drawing API)
interface Drawable {
  draw(): string; // Returns a description of the drawing
}

// Implementations (Drawing with different colors)
class RedCircle implements Drawable {
  draw(): string {
    return "Drawing a red circle";
  }
}

class BlueSquare implements Drawable {
  draw(): string {
    return "Drawing a blue square";
  }
}

// Error handling class for potential Shape creation issues
class ShapeCreationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

// Factory function to encapsulate Shape creation (optional)
function createShape(shapeType: string): Drawable {
  switch (shapeType.toLowerCase()) {
    case "redcircle":
      return new RedCircle();
    case "bluesquare":
      return new BlueSquare();
    default:
      throw new ShapeCreationError(`Unsupported shape type: ${shapeType}`);
  }
}

// Abstraction (with reference to implementation)
class Drawing {
  private shape: Drawable;

  constructor(shape: Drawable) {
    this.shape = shape;
  }

  public render(): string {
    return this.shape.draw();
  }
}

// Usage
try {
  const redCircle = createShape("RedCircle"); // Factory can be used for consistency
  const blueSquare = createShape("BlueSquare");

  const redDrawing = new Drawing(redCircle);
  console.log(redDrawing.render()); // Output: Drawing a red circle

  const blueDrawing = new Drawing(blueSquare);
  console.log(blueDrawing.render()); // Output: Drawing a blue square
} catch (error) {
  if (error instanceof ShapeCreationError) {
    console.error("Error creating shape:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}
