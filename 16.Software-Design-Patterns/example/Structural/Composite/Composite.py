from abc import ABC,abstractmethod
class Component(ABC):
    def __init__(self,name):
        self.name = name
    @abstractmethod
    def operation(self) -> None:
        pass
class Leaf(Component):
    def operation(self):
        print(f"Leaf {self.name} - Performing operation")

class Composite(Component):
    def __init__(self,name):
        super().__init__(name)
        self.children = []
    def add(self,child)->None :
        self.children.append(child)
    def remove(self, child)-> None:
        self.children.remove(child)
    def operation(self):
        print(f"Composite {self.name} - Preforming operation")
        for child in self.children:
            child.operation()


leaf1 = Leaf("Leaf 1")
leaf2 = Leaf("Leaf 2")

composite1 = Composite("Composite 1")
composite1.add(leaf1)

composite2 = Composite("Composite 2")
composite2.add(leaf2)
composite2.add(composite1)

composite2.operation()