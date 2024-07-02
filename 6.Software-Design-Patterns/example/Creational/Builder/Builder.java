public class User {
  private final String name;
  private final int age;
  private final int money;
  private final boolean hasJob;
  private final boolean isEmployee;

  private User(Builder builder) {
    this.name = builder.name;
    this.age = builder.age;
    this.money = builder.money;
    this.hasJob = builder.hasJob;
    this.isEmployee = builder.isEmployee;
  }

  public static class Builder {
    private String name;
    private int age;
    private int money; // Optional
    private boolean hasJob = false;
    private boolean isEmployee = false;

    public Builder setName(String name) {
      this.name = name;
      return this;
    }

    public Builder setAge(int age) {
      this.age = age;
      return this;
    }

    public Builder setMoney(int money) {
      this.money = money;
      return this;
    }

    public Builder makeJob() {
      this.hasJob = true;
      return this;
    }

    public Builder makeEmployee() {
      this.hasJob = true;
      this.isEmployee = true;
      return this;
    }

    public User build() {
      if (name == null) {
        throw new IllegalArgumentException("Name is a required field");
      }
      return new User(this);
    }
  }

  @Override
  public String toString() {
    return "User{" +
        "name='" + name + '\'' +
        ", age=" + age +
        ", money=" + money +
        ", hasJob=" + hasJob +
        ", isEmployee=" + isEmployee +
        '}';
  }
}

// Usage Example
public class Main {
  public static void main(String[] args) {
    User user = new User.Builder()
        .setName("Mahdi")
        .setAge(25)
        .setMoney(200)
        .makeEmployee()
        .build();

    System.out.println(user);
  }
}
