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
  public clone(): User {
    return new User(this.name, { ...this.address });
  }
}
const user:User = new User("mahdi", { city: "Minudasht", country: "Iran" });
const cloneUser = user.clone();
console.log("user:", user);
console.log("cloneUser:", cloneUser);
cloneUser.name = "ali";
cloneUser.address = { city: "Teheran", country: "Iran" };
console.log("user:(after)", user);
console.log("cloneUser:(after)", cloneUser);