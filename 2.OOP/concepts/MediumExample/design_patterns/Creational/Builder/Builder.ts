interface User {
  name: string;
  age: number;
  money: number;
  isEmployee: boolean;
  hasJob: boolean;
}
class CreateUser implements User {
  name: string;
  age: number;
  money: number;
  hasJob: boolean;
  isEmployee: boolean;
  constructor(args) {
    this.money = 0;
    this.age = 18;
  }
  makeJob(): CreateUser {
    this.hasJob = true;
    return this;
  }
  makeEmployee(): CreateUser {
    this.hasJob = true;
    this.isEmployee = true;
    return this;
  }
  set addMoney(money: number) {
    this.money = money;
  }
  build() {
    return new CreateUser(this);
  }
  clone(builder: CreateUser) {
    return new CreateUser(builder);
  }
}

class Person {
  name: string;
  number: number;
  isEmployee: boolean;
  hasJob: boolean;
  age: number;
  money: number;
  constructor(builder: CreateUser) {
    this.name = builder.name;
    this.age = builder.age;
    this.money = builder.money;
    this.isEmployee = builder.isEmployee;
  }
}
const person: Person = new Person(
  new CreateUser({
    name: "mahdi",
    age: 20,
  })
);
console.log(person);

