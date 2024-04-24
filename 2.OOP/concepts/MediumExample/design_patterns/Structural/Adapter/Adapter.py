from abc import ABC,abstractmethod
import math
class Shape(ABC):
  """Abstract class representing a shape"""
  @abstractmethod
  def getArea(self) -> int:
    """Abstract method to calculate the area of the shape"""
    pass

class AreaMeasurable(ABC):
  """Abstract class defining interface for getting area in cm"""
  @abstractmethod
  def getAreaInCm(self) -> int:
    """Abstract method to get the area in centimeters"""
    pass

class Square(Shape):
    def __init__(self,side):
        self.side =side
    def getArea(self) -> int:
        return self.side * self.side

class Circle(Shape):
    def __init__(self,radius):
        self.radius = radius
    def getArea(self) -> int:
        return math.pi * self.radius * self.radius

class ShapeAreaCalculator(AreaMeasurable):
    def __init__(self,shape):
        self.shape = shape
    def getAreaInCm(self) -> int:
        return self.shape.getArea() * 2.54 # This factor is used to convert the area from inches (assumed unit) to centimeters.

square = Square(5)
circle = Circle(3)
square_adapter = ShapeAreaCalculator(square)
circle_adapter = ShapeAreaCalculator(circle)

print(f'Area of square in cm: {square_adapter.getAreaInCm()}')
print(f'Area of circle in cm: {circle_adapter.getAreaInCm()}')