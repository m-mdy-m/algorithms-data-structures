interface UserInfo {
  username: string;
  password: string;
  key?: string;
  address?: string;
}
interface Role {
  [key: string]: any;
}
abstract class UserFactory {
  abstract createRole(role: string, info: UserInfo): Role;
}
class AdminFactory extends UserFactory {
  override createRole(role: string, info: UserInfo): Role {
    return { ...info, key: info.key };
  }
}
class SellerFactory extends UserFactory {
  override createRole(role: string, info: UserInfo): Role {
    return { ...info, address: info.address };
  }
}
class Factory extends UserFactory {
  override createRole(role: string, info: UserInfo): Role {
    switch (role) {
      case "admin":
        return new AdminFactory().createRole(role, info);
      case "seller":
        return new SellerFactory().createRole(role, info);
      default:
        throw new Error("invalid Role");
    }
  }
}
const ft = new Factory();
const admin = ft.createRole("admin", {
  username: "m__mdy__m",
  password: "123s@4",
  key: "my_secret_admin-panel",
});
console.log("admin:", admin);
