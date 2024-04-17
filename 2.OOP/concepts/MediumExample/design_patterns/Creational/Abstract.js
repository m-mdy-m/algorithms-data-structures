var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    return UserFactory;
}());
var AddName = /** @class */ (function () {
    function AddName(name) {
        this.name = name;
    }
    AddName.prototype.displayName = function () {
        return "Your Name is :".concat(this.name);
    };
    return AddName;
}());
var AddAge = /** @class */ (function () {
    function AddAge(age) {
        this.age = age;
    }
    AddAge.prototype.displayAge = function () {
        return "Your Age is ".concat(this.age);
    };
    return AddAge;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.createName = function (name) {
        return new AddName(name);
    };
    User.prototype.createAge = function (age) {
        return new AddAge(age);
    };
    return User;
}(UserFactory));
function createUserInfo(factory, name, age) {
    var userName = factory.createName(name);
    var userAge = factory.createAge(age);
    console.log(userName.displayName());
    console.log(userAge.displayAge());
}
createUserInfo(new User(), "mahdi", 20);
