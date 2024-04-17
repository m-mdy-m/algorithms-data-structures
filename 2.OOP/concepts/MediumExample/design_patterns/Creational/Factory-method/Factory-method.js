class UserInfo {
  constructor(username, password, { key, address } = {}) {
    this.username = username;
    this.password = password;
    this.key = key;
    this.address = address;
  }
}
class FactoryJs extends UserInfo {
  constructor(role, info) {
    super(info.username, info.password, info);
    this.role = role;
    this.info = info;
  }
  createRole() {
    switch (this.role) {
      case "admin":
        return this.AdminFactory();
      case "seller":
        return this.SellerFactory();
      default:
        throw new Error("Invalid Role");
    }
  }

  AdminFactory() {
    return { ...this.info, key: this.info.key };
  }
  SellerFactory() {
    return { ...this.info, address: this.info.address };
  }
}
const adminJs = new FactoryJs('admin',{
    username:"mahdi",
    password:"1234",
    key:"secret_admin"
}).createRole()
console.log('admin:',adminJs);