// Public
class MyClass {
  public publicVar: number; // Public variable
  constructor(publicVar: number) {
    this.publicVar = publicVar;
  }

  public publicMethod(): void {
    // Public method
    console.log("This is a public method.");
  }
}

let obj = new MyClass(10);
obj.publicVar = 20; // Accessing public variable
obj.publicMethod(); // Calling public method
// Private
class MyClass {
    private privateVar: number; // Private variable

    constructor(privateVar: number) {
        this.privateVar = privateVar;
    }

    private privateMethod(): void { // Private method
        console.log("This is a private method.");
    }

    public accessPrivate(): void {
        this.privateVar = 30; // Accessing private variable
        this.privateMethod(); // Calling private method
    }
}

let obj = new MyClass(10);
// obj.privateVar = 20; // Error: privateVar is inaccessible outside MyClass
// obj.privateMethod(); // Error: privateMethod is inaccessible outside MyClass
obj.accessPrivate(); // Accessing private members using a public method

// Protected
class MyBaseClass {
  protected protectedVar: number; // Protected variable

  constructor(protectedVar: number) {
    this.protectedVar = protectedVar;
  }

  protected protectedMethod(): void {
    // Protected method
    console.log("This is a protected method.");
  }
}

class MyDerivedClass extends MyBaseClass {
  public accessProtected(): void {
    this.protectedVar = 40; // Accessing protected variable from subclass
    this.protectedMethod(); // Calling protected method from subclass
  }
}

let obj = new MyDerivedClass(30);
obj.accessProtected(); // Accessing protected members from subclass
