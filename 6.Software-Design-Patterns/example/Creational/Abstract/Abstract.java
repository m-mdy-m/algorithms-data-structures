public interface Name {
  String getName();
  String displayName();
}

public interface Age {
  int getAge();
  String displayAge();
}

public interface UserInformationFactory {
  Name createName(String name);
  Age createAge(int age);
}

public abstract class AbstractUserFactory implements UserInformationFactory {
  @Override
  public abstract Name createName(String name);

  @Override
  public abstract Age createAge(int age);
}

public class DefaultName implements Name {
  private final String name;

  public DefaultName(String name) {
    this.name = name;
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public String displayName() {
    return "Your Name is: " + name;
  }
}

public class DefaultAge implements Age {
  private final int age;

  public DefaultAge(int age) {
    this.age = age;
  }

  @Override
  public int getAge() {
    return age;
  }

  @Override
  public String displayAge() {
    return "Your Age is: " + age;
  }
}

public class UserFactory extends AbstractUserFactory {
  @Override
  public Name createName(String name) {
    return new DefaultName(name);
  }

  @Override
  public Age createAge(int age) {
    // Validate age to prevent negative values (optional)
    if (age < 0) {
      throw new IllegalArgumentException("Age cannot be negative");
    }
    return new DefaultAge(age);
  }
}

public class Client {
  public static void main(String[] args) {
    UserInformationFactory factory = new UserFactory();
    String userName = "Mahdi";
    int userAge = 20;

    Name nameObject = factory.createName(userName);
    Age ageObject = factory.createAge(userAge);

    System.out.println(nameObject.displayName());
    System.out.println(ageObject.displayAge());
  }
}