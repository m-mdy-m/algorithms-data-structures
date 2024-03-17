// 1. Rectangle Class
class Rectangle {
  constructor(width, height) {
    // Constructor to initialize width and height attributes
    this.width = width; // Assigning width parameter to width attribute
    this.height = height; // Assigning height parameter to height attribute
  }
  calculateArea() {
    // Method to calculate the area of the rectangle
    return this.width * this.height; // Returning the product of width and height
  }
}
console.log(`Rectangle area: ${new Rectangle(4, 4).calculateArea()}`); // Creating an instance of Rectangle class and calculating its area

// 2. Person Class
class Person {
  constructor(name, age) {
    // Constructor to initialize name and age attributes
    this.name = name; // Assigning name parameter to name attribute
    this.age = age; // Assigning age parameter to age attribute
  }
  sayHello() {
    // Method to print a greeting message including the person's name
    return `Hello ${this.name}`; // Returning a greeting message
  }
}
console.log(new Person("mahdi", 19).sayHello()); // Creating an instance of Person class and invoking the sayHello method

// 3. Discussing Class Benefits
/**
 * Classes allow us to organize code into reusable modules. For example, a 'Person' class can be used to represent individuals in various contexts such as customer records, employee management, etc.
 */

// 4. Limitations of Classes
/**
 * Classes can lead to tightly coupled code, making it difficult to modify one class without affecting others.
 * Inheritance hierarchies can become complex and hard to maintain, especially as the project grows.
 * Difficulty in testing arises when classes have dependencies on external resources such as databases or network connections.
 */

// 5. Calculator Class
class Calculator {
  add(num1, num2) {
    // Method to perform addition operation
    return num1 + num2; // Returning the sum of num1 and num2
  }
  subtract(num1, num2) {
    // Method to perform subtraction operation
    return num1 - num2; // Returning the difference of num1 and num2
  }
}

const calculator = new Calculator(); // Creating an instance of Calculator class
console.log(`Addition result: ${calculator.add(5, 3)}`); // Invoking add method of Calculator class
console.log(`Subtraction result: ${calculator.subtract(8, 3)}`); // Invoking subtract method of Calculator class
