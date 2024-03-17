("1 :");

class Rectangle {
  constructor(width, heigh) {
    this.width = width;
    this.height = heigh;
  }
  calculateArea() {
    return this.width * this.height;
  }
}
console.log(`rectangle area:${new Rectangle(4, 4).calculateArea()}`);

("2:");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
}
console.log(new Person("mahdi", 19).sayHello());

("3:");
/**
 * Classes are a way to organize your code in a generic and reusable way. When you use classes you need to represent a set of properties and methods that are used over and over again in other places.
 * and ...(Write on your own)
 */

("4:");
/**
 * One of the disadvantages of using classes is difficulty in testing
 * Complexity in heredity and ...
 */
("5:");

class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
}

const calculator = new Calculator();
console.log(`Addition result: ${calculator.add(5, 3)}`);
console.log(`Subtraction result: ${calculator.subtract(8, 3)}`);
