// Interface for user addresses
interface Addresses {
  city: string;
  country: string;
}

class User {
  public name: string;
  public address: Addresses;

  constructor(name: string, address: Addresses) {
    this.name = name;
    this.address = address;
  }

  // Creates a deep copy of the User object
  public clone(): User {
    // Create a new User object with the same name
    return new User(this.name, { ...this.address }); // Deep copy address using spread operator
  }
}

// Create a User object
const user = new User("mahdi", { city: "Minudasht", country: "Iran" });

// Clone the User object using the prototype pattern
const cloneUser = user.clone();

console.log("user:", user);
console.log("cloneUser:", cloneUser); // Output: user and cloneUser have same values

// Modify properties of the cloned user
cloneUser.name = "ali";
cloneUser.address = { city: "Teheran", country: "Iran" };

console.log("user (after modification):", user); // Output: user remains unchanged
console.log("cloneUser (after modification):", cloneUser); // Output: cloneUser has modified values

// Explanation:
//  1. The User class acts as the prototype for creating new User objects.
//  2. The clone() method implements the core functionality of the Prototype pattern.
//     - It creates a new User object with the same name as the original user.
//     - The spread operator (`...`) ensures a deep copy of the address object,
//       preventing modifications to the clone's address from affecting the original user.
