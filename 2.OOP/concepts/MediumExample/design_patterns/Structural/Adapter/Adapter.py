import math
class Square:
    def __init__(self,side):
        self.side =side
    def getArea(self):
        return self.side * self.side

class Circle:
    def __init__(self,radius):
        self.radius = radius
    def getArea(self):
        return math.pi * self.radius * self.radius

class ShapeAreaCalculator:
    def __init__(self,shape):
        self.shape = shape
    def getAreaInCm(self):
        return self.shape.getArea() * 2.54 # This factor is used to convert the area from inches (assumed unit) to centimeters.

square = Square(5)
circle = Circle(3)
square_adapter = ShapeAreaCalculator(square)
circle_adapter = ShapeAreaCalculator(circle)

print(f'Area of square in cm: {square_adapter.getAreaInCm()}')
print(f'Area of circle in cm: {circle_adapter.getAreaInCm()}')