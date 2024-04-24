class red_circle:
    def __init__(self):
        pass
    def draw(self):
        return "Drawing a red circle"
class blue_square:
    def __init__(self):
        pass
    def draw(self):
        return "Drawing a blue square"

def create_shape(shape_type):
    if(shape_type=='red-circle'):
        return red_circle()
    else:
        return  blue_square()

class Drawing:
    def __init__(self,shape):
        self.shape = shape
    def render(self):
        return self.shape.draw()

redCircle = create_shape("red-circle")
blueSquare = create_shape('blue-square')

redDrawing = Drawing(redCircle)
print("Red Circle says :",redDrawing.render())

blueDrawing = Drawing(blueSquare)
print("Blue Square says : ", blueDrawing.render())