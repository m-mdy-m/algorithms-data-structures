// Interface for user addresses
interface Addresses {
  // City where the user resides
  city: string;
  // Country of residence for the user
  country: string;
}

// Prototype class representing a User
class UserPrototype {
  public name: string;
  public address: Addresses;

  constructor(name: string, address: Addresses) {
    this.name = name;
    this.address = address;
  }

  // Creates a deep copy of the User object
  public clone(): UserPrototype {
    // Create a new User object with the same name and a deep copy of the address
    return new User(this.name, { ...this.address });
  }
}

// Concrete class inheriting from the UserPrototype
class User extends UserPrototype {
  constructor(name: string, address: Addresses) {
    super(name, address);
  }
}

// Example usage
const prototypeUser = new UserPrototype("Prototype User", {
  city: "Prototype City",
  country: "Prototype Country",
});

const clonedUser = prototypeUser.clone();

console.log("Prototype User:", prototypeUser);
console.log("Cloned User:", clonedUser);

// Modifying the cloned user
clonedUser.name = "Cloned User";
clonedUser.address.city = "Cloned City";

console.log("Prototype User (after modification):", prototypeUser);
console.log("Cloned User (after modification):", clonedUser);
