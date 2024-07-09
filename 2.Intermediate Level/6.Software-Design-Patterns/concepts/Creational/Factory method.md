# Factory method:

The Factory Method Design Pattern is a creational design pattern that provides an interface for creating objects in a superclass, allowing subclasses to alter the type of objects that will be created. It encapsulates object creation logic in a separate method, promoting loose coupling between the creator and the created objects. This pattern is particularly useful when the exact types of objects to be created may vary or need to be determined at runtime, enabling flexibility and extensibility in object creation.

> Summary : Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.


**Simple explanations for better understanding:**

Imagine you're ordering pizza. You call a pizzeria (the superclass), which has a menu (the interface). But the pizzeria itself doesn't make all the pizzas (it doesn't use the "new" operator directly).

Instead, the pizzeria has different branches (the subclasses) that specialize in specific pizzas. Each branch has its own recipe (factory method) for creating pizzas (objects). You tell the pizzeria what kind you want (runtime decision), and it forwards the order to the appropriate branch to make it.

> The factory method pattern relies on inheritance, as object creation is delegated to subclasses that implement the factory method to create objects.

**The  Factory Method design pattern solves problems like**

- How can an object be created so that subclasses can redefine its subsequent and distinct implementation?
- How can an object's instantiation be deferred to a subclass?

The Factory Method design pattern describes how to solve such problems:

- Define a factory method within the superclass that defers the object's creation to a subclass's factory method.
- Create an object by calling a factory method instead of directly calling a constructor.

## Example Problem:

[source](https://refactoring.guru/design-patterns/factory-method)

Imagine that you’re creating a logistics management application. The first version of your app can only handle transportation by trucks, so the bulk of your code lives inside the Truck class.

After a while, your app becomes pretty popular. Each day you receive dozens of requests from sea transportation companies to incorporate sea logistics into the app.

![](https://refactoring.guru/images/patterns/diagrams/factory-method/problem1-en.png?id=de638561be0bbb1025ada6bfcb815def)

Great news, right? But how about the code? At present, most of your code is coupled to the Truck class. Adding Ships into the app would require making changes to the entire codebase. Moreover, if later you decide to add another type of transportation to the app, you will probably need to make all of these changes again.

As a result, you will end up with pretty nasty code, riddled with conditionals that switch the app’s behavior depending on the class of transportation objects.

## Solution:

The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method. Don’t worry: the objects are still created via the new operator, but it’s being called from within the factory method. Objects returned by a factory method are often referred to as products.

At first glance, this change may look pointless: we just moved the constructor call from one part of the program to another. However, consider this: now you can override the factory method in a subclass and change the class of products being created by the method.

![](https://refactoring.guru/images/patterns/diagrams/factory-method/solution2-en.png?id=db5de848c1d490b835666ef54d131d46)


> NOTE: The code that uses the factory method (often called the client code) doesn’t see a difference between the actual products returned by various subclasses. The client treats all the products as abstract Transport. The client knows that all transport objects are supposed to have the deliver method, but exactly how it works isn’t important to the client.

![](https://refactoring.guru/images/patterns/diagrams/factory-method/solution3-en.png?id=b6f53911fc0d56f9ef99501fc4aec059)


## When to use Factory Method Design Pattern?

- **When you want to encapsulate object creation:** If you have a complex object creation process or if the process may vary based on conditions, encapsulating this logic in a factory method can simplify client code and promote reusability.
- **When you want to decouple client code from concrete classes:** Using the Factory Method Pattern allows you to create objects through an interface or abstract class, abstracting away the specific implementation details of the concrete classes from the client code. This promotes loose coupling and makes it easier to modify or extend the system without impacting existing client code.
- **When you need to support multiple product variations:** If your application needs to create different variations of a product or if new types of products may be introduced in the future, the Factory Method Pattern provides a flexible way to accommodate these variations by defining factory methods for each product type.
- **When you want to support customization or configuration:** Factories can be used to encapsulate configuration logic, allowing clients to customize the creation process by providing parameters or configuration options to the factory method.

## Components of Factory Method Design Pattern

**1. Creator (Abstract Class or Interface):**

* **Factory Method Definition:** This central method dictates the object creation process. It adheres to the principle of least astonishment by specifying the return type as the product interface or abstract class, ensuring consistency for client code. Client code interacts solely with this interface to request object creation. 
* **Encapsulation of Additional Functionality (Optional):** The creator can encapsulate methods relevant to the products it creates, promoting code organization, reusability, and a centralized location for product-related logic.

**2. Concrete Creator (Subclasses of Creator):**

* **Implementation of the Factory Method:** Subclasses provide the specific logic for creating their designated concrete product objects. This implementation details object instantiation, configuration, and any additional steps specific to the concrete product type.
* **Decoupling Client Code:** Concrete creators act as a shield, insulating client code from the intricacies of concrete product creation. This promotes loose coupling, simplifies client interactions, and fosters a more maintainable codebase.

**3. Product (Interface or Abstract Class):**

* **Definition of the Common Interface:** This component outlines the operations that all concrete product objects can perform. It enforces a standard for all products, ensuring compatibility with the factory method and enabling interchangeable usage of concrete products within the system.
* **Facilitation of Loose Coupling:** By relying solely on the product interface, client code can interact with various concrete product implementations without needing to be aware of their specific details. This promotes loose coupling and simplifies modifications or extensions to the product hierarchy.

**4. Concrete Product (Implementations of Product):**

* **Representation of the Actual Objects:** These classes embody the functionality of the specific products being created. They implement the methods defined in the product interface or extend the product abstract class, providing the concrete behavior for each product type.
* **Support for Product Variations:** Concrete product classes enable the creation of diverse product types that adhere to the defined product interface. This allows for a flexible system that can accommodate future product additions without modifying existing client code or the factory structure.

**Structure**

![](https://refactoring.guru/images/patterns/diagrams/factory-method/structure.png?id=4cba0803f42517cfe8548c9bc7dc4c9b)


**Better Understanding**

![](https://scaler.com/topics/images/factory-method.webp)

## Example 

- [Example Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Factory-method/Factory-method.ts)
- [Example Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Factory-method/Factory-method.js)
- [Example Py](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Factory-method/Factory-method.py)

> You are developing a software system for an e-commerce platform that deals with various types of products. Each product category (e.g., electronics, clothing, books) requires specific handling during creation. However, you want to decouple the client code from the concrete product creation logic to enhance flexibility and maintainability. Additionally, you want to allow for easy extension by adding new product types in the future without modifying existing code. [source](https://www.geeksforgeeks.org/factory-method-design-pattern-in-java/)

- [Example Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Factory-method/Factory-method.java)