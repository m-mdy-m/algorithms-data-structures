### Abstract factory
  creates an instance of several derived classes belonging to a single family of objects. However, employment of this pattern, as with similar design patterns, may result in unnecessary complexity and extra work in the initial writing of code.

- Summary : a class requests the objects it requires from a factory object instead of creating the objects directly

- > Example:
Suppose we go to an ice cream factory and order a chocolate ice cream. When we place an order, the shopkeeper sends the order to the kitchen and we get it in a few minutes when the ice cream is ready. We are not concerned with what happens inside the kitchen and what ingredients are used to make the ice cream. The internal call by the shopkeeper to create a vanilla, chocolate, or strawberry ice cream is hidden from the user.


**It may be used to solve problems such as:**

- How can an application be independent of how its objects are created?
- How can a class be independent of how the objects that it requires are created?
- How can families of related or dependent objects be created?

The pattern describes how to solve such problems:

- Encapsulate object creation in a separate (factory) object by defining and implementing an interface for creating objects.
- Delegate object creation to a factory object instead of creating objects directly.
This makes a class independent of how its objects are created. A class may be configured with a factory object, which it uses to create objects, and the factory object can be exchanged at runtime.


#### Key components of Abstract factory Pattern

> [source](https://www.geeksforgeeks.org/abstract-factory-pattern-javascript-design-patterns/)

- Abstract Factory: This is an interface or an abstract class that declares a set of factory methods for creating a family of related objects.

- Concrete Factory: These are the implementations of the abstract factory interface. Each concrete factory is responsible for creating a specific family of related objects.

- Abstract Products: These are interfaces or abstract classes that declare the common set of methods for the objects within a family.

- Concrete Products: These are the actual implementations of the abstract products. Each concrete product is specific to a particular family and is created by a corresponding concrete factory.

- Client: The client code interacts with the abstract factory and abstract product interfaces.

![](https://scaler.com/topics/images/abstract-factory.webp)

**Structure:**

![](https://refactoring.guru/images/patterns/diagrams/abstract-factory/structure.png?id=a3112cdd98765406af94595a3c5e7762)

**Better Understanding:**

![](https://www.c-sharpcorner.com/UploadFile/ankurmalik123/abstract-factory-pattern/Images/Factory%20Pattern.PNG)

#### Example : 
- [Example Ts](../MediumExample/design_patterns/Creational/Abstract/Abstract.ts)
- [Example JavaScript](../MediumExample/design_patterns/Abstract/Creational/Abstract.js)
- [Example Java](../MediumExample/design_patterns/Creational/Abstract/Abstract.java)
 **This example was created by ai**
- [Example Python](../MediumExample/design_patterns/Creational/Abstract/Abstract.py)
---