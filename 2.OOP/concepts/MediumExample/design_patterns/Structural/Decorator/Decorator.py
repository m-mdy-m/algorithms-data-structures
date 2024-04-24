from abc import ABC,abstractmethod
class Beverage:
    def __init__(self):
        pass
    @abstractmethod
    def getDescription(self) -> str:
        pass
    @abstractmethod
    def getCost(self)->int:
        pass

class Coffee(Beverage):
    def __init__(self):
        pass
    def getCost(self):
        return 1.5
    def getDescription(self):
        return "Coffee"

class CondimentDecorator(Beverage):
    def __init__(self,beverage):
        super().__init__(beverage)
    def getCost(self):
        return self.beverage.getCost()
    def getDescription(self):
        return self.beverage.getDescription() + ","

class Milk(CondimentDecorator):
    def __init__(self,beverage):
        super().__init__(beverage)
    def getCost(self):
        return self.beverage.getCost() + 0.5
    def getDescription(self):
        return self.beverage.getDescription() + "MILK"

class Sugar(CondimentDecorator):
    def __init__(self,beverage):
        super().__init__(beverage)
    def getCost(self):
        return self.beverage.getCost() +0.25
    def getDescription(self):
        return self.beverage.getDescription() + "Sugar"

beverage = Coffee()
print(beverage.getDescription() + "-$" + beverage.getCost())
beverage = Milk(beverage)
print(beverage.getDescription() + "-$" + beverage.getCost())
beverage = Sugar(beverage)
print(beverage.getDescription() + "-$" + beverage.getCost())