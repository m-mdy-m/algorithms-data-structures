interface Name {
  readonly name: string;
  displayName(): string;
}
interface Age {
  readonly age: number;
  displayAge(): string;
}
// Interface for User Information Factory (more generic)
interface UserInformationFactory {
    createName(name: string): Name;
    createAge(age: number): Age;
  }
abstract class UserFactory implements UserInformationFactory{
  public abstract createName(name: string): Name;
  public abstract createAge(age: number): Age;
}

class AddName implements Name {
  constructor(public readonly name: string) {}
  displayName(): string {
    return `Your Name is :${this.name}`;
  }
}
class AddAge implements Age {
  constructor(public readonly age: number) {}
  displayAge(): string {
    return `Your Age is ${this.age}`;
  }
}
class UserTs extends UserFactory {
  override createName(name: string): Name {
    return new AddName(name);
  }
  override createAge(age: number): Age {
    return new AddAge(age);
  }
}

function createUserInfoTs(factory: UserInformationFactory, name: string, age: number): void {
  const userName: Name = factory.createName(name);
  const userAge: Age = factory.createAge(age);
  console.log(userName.displayName());
  console.log(userAge.displayAge());
}
createUserInfoTs(new UserTs(), "mahdi", 20);
