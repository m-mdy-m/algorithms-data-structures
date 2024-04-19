# Builder: 

The Builder Design Pattern is a creational pattern used in software design to construct a complex object step by step. It allows the construction of a product in a step-by-step fashion, where the construction process can vary based on the type of product being built. The pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

**Simple and understandable explanation:**

Imagine constructing a complex object, like a car. Traditionally, you might define a constructor with numerous parameters for engine type, transmission, features, etc. This approach becomes cumbersome with many optional parameters and can lead to cluttered code.

The Builder Pattern introduces a dedicated "Builder" class. This class offers methods for setting each of the object's attributes independently. Users can then configure the object by chaining these methods on the builder, specifying the desired values. Finally, a "build" method on the builder assembles the final object based on the provided configuration.

> Summary : The Builder Design Pattern offers a structured approach to constructing complex objects, promoting better code organization, improved readability, and increased flexibility in creating object variations.


**The Builder design pattern solves problems like**

- How can a class (the same construction process) create different representations of a complex object?
- How can a class that includes creating a complex object be simplified?

The Builder design pattern describes how to solve such problems:

- Encapsulate creating and assembling the parts of a complex object in a separate Builder object.
- A class delegates object creation to a Builder object instead of creating the objects directly.
A class (the same construction process) can delegate to different Builder objects to create different representations of a complex object.

## Example Problem
[source](https://refactoring.guru/design-patterns/builder)

Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code.

For example, let’s think about how to create a House object. To build a simple house, you need to construct four walls and a floor, install a door, fit a pair of windows, and build a roof. But what if you want a bigger, brighter house, with a backyard and other goodies (like a heating system, plumbing, and electrical wiring)?

The simplest solution is to extend the base House class and create a set of subclasses to cover all combinations of the parameters. But eventually you’ll end up with a considerable number of subclasses. Any new parameter, such as the porch style, will require growing this hierarchy even more.

There’s another approach that doesn’t involve breeding subclasses. You can create a giant constructor right in the base House class with all possible parameters that control the house object. While this approach indeed eliminates the need for subclasses, it creates another problem.

![](https://refactoring.guru/images/patterns/diagrams/builder/problem2.png?id=2e91039b6c7d2d2df6ee519983a3b036)

In most cases most of the parameters will be unused, making the constructor calls pretty ugly. For instance, only a fraction of houses have swimming pools, so the parameters related to swimming pools will be useless nine times out of ten.

## Solution 

The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders.

![](https://refactoring.guru/images/patterns/diagrams/builder/solution1.png?id=8ce82137f8935998de802cae59e00e11)

The pattern organizes object construction into a set of steps (buildWalls, buildDoor, etc.). To create an object, you execute a series of these steps on a builder object. The important part is that you don’t need to call all of the steps. You can call only those steps that are necessary for producing a particular configuration of an object.

Some of the construction steps might require different implementation when you need to build various representations of the product. For example, walls of a cabin may be built of wood, but the castle walls must be built with stone.


## **Important Topics for the Builder Design Pattern :**

> [Source](https://www.geeksforgeeks.org/builder-design-pattern/)

### Components of the Builder Design Pattern
1. **Product:** It may consist of multiple components or parts, and its structure can vary based on the implementation.The Product is typically a class with attributes representing the different parts that the Builder constructs. It has various ingredients (attributes) that come together to form the complete product.
2. **Builder:** It typically includes methods for constructing individual parts of the product.By defining an interface, the Builder allows for the creation of different concrete builders that can produce variations of the product. It outlines the steps (methods) needed to add each ingredient (set attributes) to create the final product.

3. **ConcreteBuilder:**Each ConcreteBuilder is tailored to create a specific variation of the product.It keeps track of the product being constructed and provides methods for setting or constructing each part. This is like a specific version of the recipe.

4. **Director (Optional):** It collaborates with a Builder, but it doesn’t know the specific details about how each part of the object is constructed.
It provides a high-level interface for constructing the product and managing the steps needed to create the complex object. This is like a helpful friend who follows the recipe (Builder) and guides you (the Client) through the steps. They might suggest using a specific ConcreteBuilder depending on your preference. (Not always used)

5. **Client:** It creates a Builder object and passes it to the Director to initiate the construction process.
The Client may retrieve the final product from the Builder after construction is complete.

### When to use Builder Design Pattern?
[Source](https://www.geeksforgeeks.org/builder-design-pattern/)

The Builder design pattern is used when you need to create complex objects with a large number of optional components or configuration parameters. This pattern is particularly useful when an object needs to be constructed step by step, some of the scenarios where the Builder design pattern is beneficial are:

*  **Building complex objects:**  If you're dealing with objects that have many parts, some of which might be optional, the Builder Pattern helps separate the construction process from the final object itself. This makes the code cleaner and easier to understand.
* **Taking it step-by-step:** When the construction of an object involves a step-by-step process where different configurations or options need to be set at different stages.
*  **Ditching the parameter overload:**If your constructor is getting overloaded with too many parameters, the Builder Pattern offers a solution. It breaks down the configuration into smaller, more manageable steps. 
* **Immutable Objects:** When you want to create immutable objects, and the Builder pattern allows you to construct the object gradually before making it immutable.
*  **Creating object variations:**  Do you need to create the same object type with different configurations? The Builder Pattern allows you to define different "builders" that specialize in specific variations, making configuration more flexible and readable.

### Skip the Builder Pattern if:
[Source](https://www.geeksforgeeks.org/builder-design-pattern/)

*  **Simple Objects:**  For objects with just a few parameters and a straightforward construction process, a simple constructor or a static factory method is more efficient. The Builder Pattern might be overkill in these cases.

*  **Performance is Crucial:**  If your application prioritizes speed, the extra steps involved in the Builder Pattern (method calls, object creation) could impact performance, especially for frequently constructed objects. Consider simpler approaches for performance-critical scenarios.

*  **Already Immutable:**  If you're using a language with built-in support for immutable objects (like Java's `final` keyword) and the object structure is simple, constructors or static factories might be sufficient.

*  **Unnecessary Complexity:**  Adding a Builder class for every complex object can clutter your codebase. If the object is simple and doesn't benefit from a step-by-step construction process, a simpler approach might be better.

*  **Tightly Coupled:**  If the Builder class is intricately linked to the object it constructs (changes in the object require changes in the builder), it can reduce code flexibility and maintainability. Consider looser coupling for better maintainability.

> [**If you don't know what Coupling is**](https://dev.to/m__mdy__m/cohesion-and-coupling-in-javascript-2efg)


### Advantages
* Allows you to vary a product's internal representation.
* Encapsulates code for construction and representation.
* Provides control over the steps of the construction process.
### Disadvantages
* A distinct ConcreteBuilder must be created for each type of product.
* Builder classes must be mutable.
* May hamper/complicate dependency injection.
> [**If you don't know what Dependency injection is**](https://dev.to/m__mdy__m/what-is-dependency-injection-11a6)

**Structure***

![](https://refactoring.guru/images/patterns/diagrams/builder/structure.png?id=fe9e23559923ea0657aa5fe75efef333)


**Better Understanding**

![](https://scaler.com/topics/images/builder-pattern.webp)

### Example

- [Example Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Creational/Builder/Builder.ts)
- [Example Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Creational/Builder/Builder.js)
- [Example Py](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Creational/Builder/Builder.py)
- [Example Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Creational/Builder/Builder.java)
