interface Name {
  name: string;
  displayName(): string;
}
interface Age {
  age: number;
  displayAge(): string;
}

interface UserInformation {
  createName(name: string): Name;
  createAge(age: number): Age;
}

abstract class UserFactory implements UserInformation{
    public abstract createName(name:string):Name
    public abstract createAge(age:number):Age
}

class AddName implements Name{
    constructor(public readonly name:string) { }
    displayName(): string {
        return `Your Name is :${this.name}`
    }
}
class AddAge implements Age{
    constructor(public readonly age:number) {}
    displayAge(): string {
        return `Your Age is ${this.age}`
    }
}
class User extends UserFactory{
    createName(name: string): Name {
        return new AddName(name)
    }
    createAge(age: number): Age {
        return new AddAge(age)
    }
}

function createUserInfo(factory:UserInformation, name:string,age:number):void{
    const userName :Name = factory.createName(name)
    const userAge:Age = factory.createAge(age)
    console.log(userName.displayName());
    console.log(userAge.displayAge());
}
createUserInfo(new User(),'mahdi',20)