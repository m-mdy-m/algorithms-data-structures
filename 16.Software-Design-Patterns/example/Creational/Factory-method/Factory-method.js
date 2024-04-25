class UserInfo {
  constructor({ username, password, key, address }) {
    this.username = username;
    this.password = password;
    this.key;
    this.address;
    this.key = key;
    this.address = address;
  }
}

class UserFactoryJs {
  static create(role, info) {
    const creators = {
      admin: () => new Admin(info),
      seller: () => new Seller(info),
    };
    const creator = creators[role];
    return creator();
  }
}

class Admin extends UserInfo {
  constructor(info) {
    super(info);
  }
}

class Seller extends UserInfo {
  constructor(info) {
    super(info);
  }
}

const adminJs = UserFactoryJs.create("admin", {
  username: "mahdi",
  password: "2312",
  key: "my_secret",
});

console.log("admin:", adminJs);