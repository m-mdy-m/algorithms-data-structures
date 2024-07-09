interface User {
  name: string;
  age: number;
  money: number;
  isEmployee: boolean;
  hasJob: boolean;
}
class UserBuilderTs {
  private name: string = "";
  private age: number = 0;
  private money: number = 0;
  private hasJob: boolean = false;
  private isEmployee: boolean = false;
  setName(name: string): UserBuilderTs {
    this.name = name;
    return this;
  }

  setAge(age: number): UserBuilderTs {
    this.age = age;
    return this;
  }

  setMoney(money: number): UserBuilderTs {
    this.money = money;
    return this;
  }

  makeJob(): UserBuilderTs {
    this.hasJob = true;
    return this;
  }

  makeEmployee(): UserBuilderTs {
    this.hasJob = true;
    this.isEmployee = true;
    return this;
  }
  build(): User {
    return {
      name: this.name,
      age: this.age,
      money: this.money,
      isEmployee: this.isEmployee,
      hasJob: this.hasJob,
    };
  }
}

class Person {
  public name: string;
  public age: number;
  public money: number;
  public isEmployee: boolean;
  public hasJob: boolean;
  constructor(builder: User) {
    this.name = builder.name;
    this.age = builder.age;
    this.money = builder.money;
    this.hasJob = builder.hasJob;
    this.isEmployee = builder.isEmployee;
  }
}
const person: Person = new Person(
  new UserBuilderTs().setName("mahdi").setAge(19).setMoney(200).build()
);
console.log(person);
