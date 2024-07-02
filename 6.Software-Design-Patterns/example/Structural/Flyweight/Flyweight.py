from abc import ABC,abstractmethod
# Flyweight Interface (Abstract Class):
class Font(ABC):
    @abstractmethod
    def get_name(self)-> str:
        pass

# concrete flyweights (Fonts)
class DefaultFont(Font):
    def get_name(self)->str:
        return "Default"

class BoldFont(Font):
    def get_name(self)-> str:
        return "Bold"

class FontFactory:
    def __init__(self):
        self.fonts = {}
    def get_font(self, font_name: str) -> Font:
        if font_name not in self.fonts:
            if font_name == "Default":
                self.fonts[font_name] = DefaultFont()
            elif font_name == "Bold":
                self.fonts[font_name] = BoldFont()
            else:
                raise ValueError("Font not supported:", font_name)
        return self.fonts[font_name]


class Text :
    def __init__(self,content:str,font_factory:FontFactory):
        self.content = content
        self.font = font_factory.get_font("Default")  # Default font

    def render(self) -> str:
        return f"{self.font.get_name()}: {self.content}"

factory = FontFactory()

text1 = Text("This is some text", factory)
text2 = Text("This is bold text", factory)
text2.font = factory.get_font("Bold")

print(text1.render())
print(text2.render())