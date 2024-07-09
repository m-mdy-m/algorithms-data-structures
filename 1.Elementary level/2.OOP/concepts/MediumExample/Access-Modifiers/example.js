// 1-Public
class Person { 
    constructor(name) { 
        this.name = name; // Public member 
    } 
  
    introduce() { 
        console.log(`Hello, my name is ${this.name}.`); 
    } 
} 
  
const person = new Person('Mahdi'); 
person.introduce(); // Accessing a public method 
console.log(person.name); // Accessing a public property


// 2-Private
class Person2 {
    #name; // Private member 
  
    constructor(name) { 
        this.#name = name; 
    }
  
    #sayHello() { 
        console.log(`Hello, my name is ${this.#name}.`); 
    } 
  
    introduce() { 
        // Accessing a private method 
        this.#sayHello(); 
    } 
} 
  
const person2 = new Person('mahdi'); 
// Accessing a public method that  
// accesses a private method 
person2.introduce(); 
  
// Error: Private member is not accessible 
console.log(person2.#name); 

// 3-Protected

class Vehicle { 
    constructor(speed) { 
        if (this.constructor === Vehicle) { 
            throw new Error("Abstract classes cannot be instantiated."); 
        } 
        this.speed = speed; 
    } 
} 
  
class Car extends Vehicle { 
    constructor(speed) { 
        super(speed); 
    } 
    getSpeed() { 
        // Accessing the protected member in a subclass
        return this.speed;
    } 
} 
  
const myCar = new Car(60); 
// Outputs: 60 
console.log(myCar.getSpeed());