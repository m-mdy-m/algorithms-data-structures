class Prototype {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  clone() {
    return new User(this.name, { ...this.address });
  }
}
class User extends Prototype {
  constructor(name, address) {
    super(name, address);
  }
}
const prototypeUser = new User("User", {
  city: "new York",
  country: "USA",
});
const clonedUser = prototypeUser.clone();
console.log("Prototype User:", prototypeUser);
console.log("Cloned User:", clonedUser);
clonedUser.name = "MAHDI";
clonedUser.address = { city: "Minudasht", country: "Iran" };
console.log("Prototype User (after modification):", prototypeUser);
console.log("Cloned User (after modification):", clonedUser);
