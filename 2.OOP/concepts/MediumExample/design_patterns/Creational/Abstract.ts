interface Name{
    name:string;
    addNewName(name:string):void;
}
interface Age{
    age:number;
    newAge(age:number):void
}

interface UserInformation{
    createName(name:string):Name
    createAge(age:number):Age
}

class AddName implements Name{
    name:string
    constructor(name:string){
        this.name = name
    }
    addNewName(name: string): void {
        this.name = name
        console.log(`new Name ${this.name}`);
    }
}
class AddAge implements Age{
    age: number;
    constructor(age:number){
        this.age = age
    }
    newAge(age: number): void {
        this.age = age
        console.log(`your Age : ${this.age}`);
        
    }
}
class User implements UserInformation{
    createAge(age: number): Age {
        return new AddAge(age)
    }
    createName(name: string): Name {
        return new AddName(name)
    }
}
const user = new User()
user.createName('mahdi')
user.createAge(20)
