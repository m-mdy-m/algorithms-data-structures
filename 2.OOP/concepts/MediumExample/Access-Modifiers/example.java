// * Default
package com.example;

class DefaultExample {
    void defaultMethod() {
        System.out.println("This is a default method.");
    }
}

public class Main {
    public static void main(String[] args) {
        DefaultExample obj = new DefaultExample();
        obj.defaultMethod(); // Accessing default method within the same package
    }
}

//* Public:
package com.example;

public class PublicExample {
    public void publicMethod() {
        System.out.println("This is a public method.");
    }
}

public class Main {
    public static void main(String[] args) {
        PublicExample obj = new PublicExample();
        obj.publicMethod(); // Accessing public method from anywhere
    }
}
// *Private:
package com.example;

public class PrivateExample {
    private int privateVar;

    private void privateMethod() {
        System.out.println("This is a private method.");
    }

    public void accessPrivateMembers() {
        privateVar = 10; // Accessing private variable within the same class
        privateMethod(); // Accessing private method within the same class
    }
}

public class Main {
    public static void main(String[] args) {
        PrivateExample obj = new PrivateExample();
        // obj.privateVar = 5; // Error
        // obj.privateMethod(); // Error
        obj.accessPrivateMembers(); // Accessing private members using a public method
    }
}
```
//*  Protected:
package com.example;

public class BaseClass {
    protected int protectedVar;

    protected void protectedMethod() {
        System.out.println("This is a protected method.");
    }
}

public class DerivedClass extends BaseClass {
    public void accessProtectedMembers() {
        protectedVar = 20; // Accessing protected variable from subclass
        protectedMethod(); // Accessing protected method from subclass
    }
}

public class Main {
    public static void main(String[] args) {
        DerivedClass obj = new DerivedClass();
        obj.accessProtectedMembers(); // Accessing protected members from subclass
    }
}
