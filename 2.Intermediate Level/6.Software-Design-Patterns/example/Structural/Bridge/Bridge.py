from abc import ABC,abstractmethod
class Shape(ABC):
    @abstractmethod
    def draw(self)->str:
        pass
class RedCircle(Shape):
  """Implementation for drawing a red circle"""
  def draw(self) -> str:
    return "Drawing a red circle"

class BlueSquare(Shape):
  """Implementation for drawing a blue square"""
  def draw(self) -> str:
    return "Drawing a blue square"

def create_shape(shape_type):
  """Factory function to create shapes"""
  if shape_type == "red-circle":
    return RedCircle()
  elif shape_type == "blue-square":
    return BlueSquare()
  else:
    raise ValueError(f"Unsupported shape type: {shape_type}")

class Drawing:
  """Abstraction for drawing shapes"""
  def __init__(self, shape: Shape):
    self.shape = shape

  def render(self) -> str:
    """Delegates drawing to the specific shape implementation"""
    return self.shape.draw()

# Usage
red_circle = create_shape("red-circle")
blue_square = create_shape("blue-square")

red_drawing = Drawing(red_circle)
print(red_drawing.render())  # Output: Drawing a red circle

blue_drawing = Drawing(blue_square)
print(blue_drawing.render())  # Output: Drawing a blue square