class UserInfo {
  constructor(username, password, { key, address } = {}) {
    this.username = username;
    this.password = password;
    this.key = key;
    this.address = address;
  }
}

class UserFactory {
  static create(role, info) {
    switch (role) {
      case "admin":
        return new Admin(info);
      case "seller":
        return new Seller(info);
      default:
        throw new Error("Invalid role");
    }
  }
}

class Admin extends UserInfo {
  constructor(info) {
    super(info.username, info.password, info);
  }
}

class Seller extends UserInfo {
  constructor(info) {
    super(info.username, info.password, info);
  }
}

const adminJs = UserFactory.create("admin", {
  username: "mahdi",
  password: "1234",
  key: "secret_admin",
});

console.log("admin:", adminJs);