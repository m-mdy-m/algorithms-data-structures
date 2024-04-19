### Singleton:

In software engineering, the singleton pattern is a software design pattern that limits the instantiation of a class to a unique instance. One of the famous "Gang of Four" design patterns that describes how to solve repetitive problems in object-oriented software, this pattern is useful when exactly one object is needed to coordinate actions in a system.

**In particular, the singleton pattern allows objects :**
- Make sure they only have one sample
- Provide easy access to that instance
- Control their instantiation (eg hide constructors of a class)

> The term is derived from the mathematical concept In mathematics, singleton, also known as a unit set or a point set, is a set that has exactly one element. For example A set like {{1,2,3}} is singleton because it contains a single element (which is itself a set, but not singleton).

#### **Simple and understandable explanation:**

**Imagine a National Park:**

- **Singleton Object:** The National Park itself can be considered a Singleton object. There's only one official park with its designated boundaries, facilities, and regulations.
- **Unique Instance:** Just like the Singleton pattern ensures there's only one instance of a class, there's only one official National Park with its specific name and location.
- **Global Access:** Visitors can access the park from various points (park entrances, visitor centers). This relates to the Singleton pattern's ability to provide easy access to the single instance.
- **Controlled Entry:** Access to the National Park is controlled by park rangers or entrance stations. Similarly, the Singleton pattern often involves hiding constructors (like park entrances controlling access) to prevent unauthorized creation of additional instances.

> Summary : lets you ensure that a class has only one instance, while providing a global access point to this instance.

#### Singleton vs Global Variables:

Singletons are sometimes considered to be an alternative to global variables or static classes. but While Singletons share some similarities with global variables, they offer several key advantages:

* **Namespace Management:** Global variables pollute the global namespace, making it difficult to find them and potentially leading to naming conflicts between different parts of your code. Singletons, on the other hand, encapsulate their functionality within a class, promoting better organization and reducing the risk of collisions.
* **Lazy Initialization:** Singletons can be configured for lazy initialization. This means the single instance is only created when it's actually needed, potentially improving performance for applications that don't require the Singleton object immediately. Global variables exist from the start, regardless of usage.
* **Interface Support:** Singletons can implement interfaces, allowing you to define a contract for their behavior without tying it to a specific implementation. This increases flexibility and promotes loose coupling. Global variables have no concept of interfaces and simply hold fixed data.
* **Passable and Testable:** Singletons can be passed as parameters to other functions, making their dependencies more explicit and enabling easier unit testing. You can inject mock objects or different implementations during testing. Global variables are inherently part of the global scope, making testing code that relies on them more challenging.
* **Dynamic Implementation Swapping:** Some Singleton implementations allow for swapping out the actual instance used. This is particularly useful for testing purposes, where you can provide a mock or test-specific implementation. Global variables are static and can't be swapped dynamically.
* **Polymorphism:** Since Singletons can implement interfaces, they can be treated polymorphically. This means you can write code that works with any object adhering to the specified interface, regardless of whether it's the actual Singleton implementation or a mock/test double. Global variables have a fixed type and don't offer this level of flexibility.

**Cautions and Alternatives:**

While Singletons can be useful, consider these drawbacks:

* **Tight Coupling:** Code that tightly relies on the Singleton can become difficult to maintain and test. Explore dependency injection or service locator patterns as alternatives for looser coupling.

> [**If you don't know what Coupling is**](https://dev.to/m__mdy__m/cohesion-and-coupling-in-javascript-2efg)

* **Testing Challenges:** As mentioned earlier, testing code that depends on a Singleton can be tricky. Consider dependency injection or providing mechanisms to swap out the Singleton instance for testing purposes.

##### What are the characteristics of the singleton pattern?

If the singleton design pattern was used to create an instance of a class, then the pattern makes sure that it really only remains with this single instance. The singleton makes this class of software globally accessible. In different programming languages, there are different methods to achieve this. To make sure that it remains with only one unique instance, users must be prevented from creating new instances. This is achieved by the constructor declaring the pattern as ‘private’. This means that only the code in the singleton can instantiate the singleton itself. In effect, this guarantees that only one and the same object can reach the user. If this instance already exists, no new instance is created.

#### Advantages and Disadvantages

**Advantages**

- **Solves Name Collisions:** In scenarios where a single point of control is needed to avoid naming conflicts or collisions, the Singleton pattern ensures that there is only one instance with a unique name.
- **Eager or Lazy Initialization:** The Singleton pattern supports both eager initialization (creating the instance when the class is loaded) and lazy initialization (creating the instance when it is first requested), providing flexibility based on the use case.
- **Thread Safety:** Properly implemented Singleton patterns can provide thread safety, ensuring that the instance is created atomically and that multiple threads do not inadvertently create duplicate instances.
- **Reduced Memory Footprint:** In applications where resource consumption is critical, the Singleton pattern can contribute to a reduced memory footprint by ensuring that there is only one instance of the class.

**Disadvantages**

- **Testing Difficulties:** Because Singletons introduce global state, unit testing can become challenging. Testing one component in isolation may be more complicated if it relies on a Singleton, as the state of the Singleton may affect the outcome of tests.
- **Concurrency Issues:** In a multi-threaded environment, there can be issues related to the creation and initialization of the Singleton instance. If multiple threads attempt to create the Singleton simultaneously, it can result in race conditions.
- **Limited Extensibility:** The Singleton pattern can make code less extensible. If you later decide that you need multiple instances of the class or want to change the instantiation logic, it may require significant refactoring.
- **Global Dependency:** The Singleton pattern creates a global dependency, making it harder to replace the Singleton with an alternative implementation or to use dependency injection for providing instances.
- **Hard to Subclass:** Subclassing a Singleton can be challenging. Because the constructor is typically private, extending a Singleton requires additional care and may not follow standard inheritance patterns.
- **Lifecycle Management:** The Singleton pattern may not handle scenarios where the instance needs to be explicitly destroyed or reset. Managing the lifecycle of the Singleton can become a concern.
- **Global Access Point Abuse:** While a global access point is an advantage, it can also be abused. Developers might be tempted to use the Singleton for everything, leading to an overuse of global state and a less modular design.

#### Structure

![](https://refactoring.guru/images/patterns/diagrams/singleton/structure-en.png?id=4e4306d3a90f40d74c7a4d2d2506b8ec)


#### Example 
- [TS]()
- [Js]()
- [Py]()
- [JAVA]()
- [Go]()