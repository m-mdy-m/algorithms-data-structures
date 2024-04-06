/// 1. Public:
using System;

public class MyClass {
    public int PublicVar; // Public variable
    public void PublicMethod() { // Public method
        Console.WriteLine("This is a public method.");
    }
}

class Program {
    static void Main(string[] args) {
        MyClass obj = new MyClass();
        obj.PublicVar = 10; // Accessing public variable
        obj.PublicMethod(); // Calling public method
    }
}

/// 2. Private (default):
using System;

public class MyClass {
    private int PrivateVar; // Private variable
    private void PrivateMethod() { // Private method
        Console.WriteLine("This is a private method.");
    }

    public void AccessPrivate() {
        PrivateVar = 20; // Accessing private variable
        PrivateMethod(); // Calling private method
    }
}

class Program {
    static void Main(string[] args) {
        MyClass obj = new MyClass();
        // obj.PrivateVar = 10; // Error: PrivateVar is inaccessible outside MyClass
        // obj.PrivateMethod(); // Error: PrivateMethod is inaccessible outside MyClass
        obj.AccessPrivate(); // Accessing private members using a public method
    }
}

/// 3. Protected:
using System;

public class MyBaseClass {
    protected int ProtectedVar; // Protected variable
    protected void ProtectedMethod() { // Protected method
        Console.WriteLine("This is a protected method.");
    }
}

public class MyDerivedClass : MyBaseClass {
    public void AccessProtected() {
        ProtectedVar = 30; // Accessing protected variable from subclass
        ProtectedMethod(); // Calling protected method from subclass
    }
}

class Program {
    static void Main(string[] args) {
        MyDerivedClass obj = new MyDerivedClass();
        obj.AccessProtected(); // Accessing protected members from subclass
    }
}

/// 4. Internal:
using System;

internal class MyClass {
    internal int InternalVar; // Internal variable
    internal void InternalMethod() { // Internal method
        Console.WriteLine("This is an internal method.");
    }
}

class Program {
    static void Main(string[] args) {
        MyClass obj = new MyClass();
        obj.InternalVar = 40; // Accessing internal variable
        obj.InternalMethod(); // Calling internal method
    }

}
// 5. Protected Internal:
using System;

public class MyBaseClass {
    protected internal int ProtectedInternalVar; // Protected Internal variable
    protected internal void ProtectedInternalMethod() { // Protected Internal method
        Console.WriteLine("This is a protected internal method.");
    }
}

class Program {
    static void Main(string[] args) {
        MyBaseClass obj = new MyBaseClass();
        obj.ProtectedInternalVar = 50; // Accessing protected internal variable
        obj.ProtectedInternalMethod(); // Calling protected internal method
    }
}

//  6. Private Protected:
using System;

public class MyBaseClass {
    private protected int PrivateProtectedVar; // Private Protected variable
    private protected void PrivateProtectedMethod() { // Private Protected method
        Console.WriteLine("This is a private protected method.");
    }

    public void AccessPrivateProtected() {
        PrivateProtectedVar = 60; // Accessing private protected variable
        PrivateProtectedMethod(); // Calling private protected method
    }
}

class Program {
    static void Main(string[] args) {
        MyBaseClass obj = new MyBaseClass();
        // obj.PrivateProtectedVar = 70; // Error: PrivateProtectedVar is inaccessible outside MyBaseClass
        // obj.PrivateProtectedMethod(); // Error: PrivateProtectedMethod is inaccessible outside MyBaseClass
        obj.AccessPrivateProtected(); // Accessing private protected members using a public method
    }
}