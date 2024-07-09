class UserBuilder :
    def __init__(self):
     self._name = ''
     self._age = 0
     self._hasJob = False
     self._money = 0
     self._isEmployee = False
    def setName(self,name):
        self._name = name
        return  self
    def setAge(self,age):
        self._age = age
        return self
    def setMoney(self,money):
        self._money = money
        return self
    def makeEmployee(self):
        self._hasJob = True
        self._isEmployee = True
        return self
    def build(self):
        return {
            "name":self._name,
            "age":self._age,
            "money" : self._money,
            "isEmployee" : self._isEmployee,
            "hasJob" : self._hasJob
        }
class Person:
    def __init__(self,builder):
        self.name = builder.name
        self.age = builder.age
        self.money = builder.money
        self.hasJob = builder.hasJob
        self.isEmployee = builder.isEmployee

person = Person(UserBuilder().setName('mahdi').setAge(25).setMoney(200).build())
print(person)