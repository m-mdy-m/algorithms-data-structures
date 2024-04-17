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

abstract class UserFactory{
    abstract createName(name:string):Name
    abstract createAge(age:number):Age
}

class AddName implements Name{
    name: string;
    constructor(name:string){
        this.name = name
    }
    displayName(): string {
        return `Your Name is :${this.name}`
    }
}
class AddAge implements Age{
    age :number
    constructor(age:number) {
        this.age = age
    }
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
const userFactory: UserFactory = new User();
const userName: Name = userFactory.createName('Mahdi');
const userAge: Age = userFactory.createAge(20);

console.log(userName.displayName()); 
console.log(userAge.displayAge());