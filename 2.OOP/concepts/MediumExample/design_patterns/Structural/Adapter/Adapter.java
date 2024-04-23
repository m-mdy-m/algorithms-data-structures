interface Shape{
    double getArea();
}
interface AreaMeasurable {
  double getAreaInCm();
}
class Square implements Shape{
    private final double side;

    public Square(double side){
        this.side = side;
    }
    @Override
    public double getArea(){
        return this.side * this.side;
    }
}
class Circle implements Shape{
    private final double radius;
    public Circle(double radius){
       this.radius = radius;
    }
    @Override
    public double getArea() {
      return Math.PI * radius * radius;
    }
}
// Adaptor Class : 
class ShapeAreaAdapter  implements AreaMeasurable{
    private final Shape  shape;
    public ShapeAreaAdapter (Shape  shape){
        this.shape = shape;
    }
    @Override
    public double getAreaInCm() {
        double areaInInches = this.shape.getArea();
        return areaInInches * 2.54; 
    }
}
// Usage Example 
public class AdapterDemo {
  static void displayAreaInCm(AreaMeasurable measurable) {
    System.out.println("Area in centimeters: " + measurable.getAreaInCm());
  }

  public static void main(String[] args) {
    Square square = new Square(5);
    Circle circle = new Circle(3);

    ShapeAreaAdapter squareAdapter = new ShapeAreaAdapter(square);
    ShapeAreaAdapter circleAdapter = new ShapeAreaAdapter(circle);

    displayAreaInCm(squareAdapter);
    displayAreaInCm(circleAdapter);
  }
}