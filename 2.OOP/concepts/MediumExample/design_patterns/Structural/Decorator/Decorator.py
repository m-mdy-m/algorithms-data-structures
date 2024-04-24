from abc import ABC,abstractmethod
class Beverage:
    def __init__(self):
        pass
    @abstractmethod
    def getDescription(self) -> str:
        pass
    @abstractmethod
    def getCost(self)->float:
        pass

class Coffee(Beverage):
    def __init__(self):
        pass
    def getCost(self)->float:
        return 1.5
    def getDescription(self)  -> str:
        return "Coffee"

class CondimentDecorator(Beverage):
    def __init__(self,beverage):
        super().__init__()
        self.beverage = beverage
    def getCost(self)->float:
        return self.beverage.getCost()
    def getDescription(self)  -> str:
        return self.beverage.getDescription() + ","

class Milk(CondimentDecorator):
    def __init__(self,beverage):
        super().__init__(beverage)
    def getCost(self)->float:
        return self.beverage.getCost() + 0.5
    def getDescription(self)  -> str:
        return self.beverage.getDescription() + "MILK"

class Sugar(CondimentDecorator):
    def __init__(self,beverage):
        super().__init__(beverage)
    def getCost(self)->float:
        return self.beverage.getCost() +0.25
    def getDescription(self) -> str:
        return self.beverage.getDescription() + "Sugar"

beverage = Coffee()
print(f"{beverage.getDescription()} - ${beverage.getCost():.2f}")

beverage = Milk(beverage)
print(f"{beverage.getDescription()} - ${beverage.getCost():.2f}")

beverage = Sugar(beverage)
print(f"{beverage.getDescription()} - ${beverage.getCost():.2f}")