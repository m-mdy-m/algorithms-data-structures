// Package declaration for organization (replace with your package name)
package com.example.prototype;

// Interface for user addresses with clear naming convention
public interface UserAddress {

  // Getter methods for city and country
  String getCity();
  String getCountry();
}

// Immutable class representing a User address
public final class UserAddressImpl implements UserAddress {

  private final String city;
  private final String country;

  public UserAddressImpl(String city, String country) {
    this.city = city;
    this.country = country;
  }

  @Override
  public String getCity() {
    return city;
  }

  @Override
  public String getCountry() {
    return country;
  }
}

// Prototype class representing a User with Javadoc comments
/**
 * Represents a User with name and address information.
 * This class serves as a prototype for creating new User objects.
 */
public class UserPrototype {

  private final String name;
  private final UserAddress address;

  /**
   * Constructor for UserPrototype.
   *
   * @param name User's name
   * @param address User's address
   */
  public UserPrototype(String name, UserAddress address) {
    this.name = name;
    this.address = address;
  }

  /**
   * Creates a deep copy of the UserPrototype object.
   *
   * @return A new UserPrototype object with the same data as the current one.
   */
  public UserPrototype clone() {
    // Create a new UserPrototype with the same name and a deep copy of the address
    return new UserPrototype(name, new UserAddressImpl(address.getCity(), address.getCountry()));
  }

  @Override
  public String toString() {
    return "UserPrototype{" +
        "name='" + name + '\'' +
        ", address=" + address +
        '}';
  }
}

// Concrete class inheriting from the UserPrototype
public class User extends UserPrototype {

  public User(String name, UserAddress address) {
    super(name, address);
  }
}

// Separate class for program entry point
public class PrototypeDemo {

  public static void main(String[] args) {
    UserAddress prototypeAddress = new UserAddressImpl("Prototype City", "Prototype Country");
    UserPrototype prototypeUser = new UserPrototype("Prototype User", prototypeAddress);

    UserPrototype clonedUser = prototypeUser.clone();

    System.out.println("Prototype User: " + prototypeUser);
    System.out.println("Cloned User: " + clonedUser);

    // Modifying the cloned user
    clonedUser.setName("Cloned User");
    ((UserAddressImpl) clonedUser.getAddress()).setCity("Cloned City"); // Casting for modification (avoid if possible)

    System.out.println("Prototype User (after modification): " + prototypeUser);
    System.out.println("Cloned User (after modification): " + clonedUser);
  }
}
