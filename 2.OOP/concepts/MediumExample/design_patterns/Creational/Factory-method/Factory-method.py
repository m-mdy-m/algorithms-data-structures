class UserInfo:
    def __init__ (self,username,password,key,address):
        self.username = username
        self.password = password
        self.key = key
        self.address = address
class UserFactory:
     def  create_user(self,role,info):
        creators = {
            "admin": Admin,
            "seller": Seller,
        }
        creator = creators.get(role)
        return creator(info)
class Admin(UserInfo):
    def __init__(self,info):
        super().__init__(**info)
class Seller(UserInfo):
    def __init__(self,info):
        super().__init__(**info)

admin = UserFactory().create_user("admin", {
    "username": "mahdi",
    "password": "2312",
    "key": "my_secret",
})
print("admin:", admin)