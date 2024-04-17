class Name {
  constructor(name) {
    this.name = name;
  }

  displayName() {
    return `Your Name is ${this.name}`;
  }
}

class Age {
  constructor(age) {
    this.age = age;
  }

  displayAge() {
    return `Your Age is ${this.age}`;
  }
}
class UserInformationFactory {
  createName(name) {
    return new Name(name);
  }

  createAge(age) {
    return new Age(age);
  }
}
class UserJs extends UserInformationFactory {}

function createUserInfoJs(factory, name, age) {
  const userName = factory.createName(name);
  const userAge = factory.createAge(age);
  console.log(userName.displayName());
  console.log(userAge.displayAge());
}
createUserInfoJs(new UserJs(), "mahdi", 20);
