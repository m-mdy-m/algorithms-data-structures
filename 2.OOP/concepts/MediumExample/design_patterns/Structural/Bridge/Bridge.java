public class Bridge {

  // Abstraction (Drawing API)
  public interface Drawable {
    String draw(); // Method to represent drawing behavior
  }

  // Implementations (Drawing with different colors)
  public static class RedCircle implements Drawable {
    @Override
    public String draw() {
      return "Drawing a red circle";
    }
  }

  public static class BlueSquare implements Drawable {
    @Override
    public String draw() {
      return "Drawing a blue square";
    }
  }

  // Abstraction (with reference to implementation)
  public static class Drawing {
    private final Drawable shape;

    public Drawing(Drawable shape) {
      this.shape = shape;
    }

    public String render() {
      return shape.draw();
    }
  }

  // Usage
  public static void main(String[] args) {
    RedCircle redCircle = new RedCircle();
    BlueSquare blueSquare = new BlueSquare();

    Drawing redDrawing = new Drawing(redCircle);
    System.out.println(redDrawing.render()); // Output: Drawing a red circle

    Drawing blueDrawing = new Drawing(blueSquare);
    System.out.println(blueDrawing.render()); // Output: Drawing a blue square
  }
}
