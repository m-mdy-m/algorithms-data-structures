class Name:
    def __init__(self,name):
        self.name = name
    def display_name(self):
        return f"Your Name is {self.name}" 
class Age:
    def __init__(self,age):
        self.age = age
    def display_age(self):
        return f"Your Age is {self.age}"
class UserInformationFactory:
    def create_name(self,name):
        return Name(name)
    def create_age(self,age):
        return Age(age)
def create_user_info(factory, name, age):
    user_name = factory.create_name(name)
    user_age = factory.create_age(age)

    print(user_name.display_name())
    print(user_age.display_age())
factory = UserInformationFactory()
create_user_info(factory, "Mahdi", 20)