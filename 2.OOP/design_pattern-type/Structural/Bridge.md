# Bridge 

The bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently" The bridge uses encapsulation, aggregation, and can use inheritance to separate responsibilities into different classes.

> Summary : The Bridge pattern decouples an abstraction (what) from its implementation (how). This separation promotes:

* **Flexibility:** Easily adapt by adding new implementations.
* **Maintainability:** Change abstraction or implementations independently.
* **Reusability:** Well-defined abstractions promote code reuse.
* **Testability:** Focus on abstraction behavior simplifies testing.


**Simple and understandable explanation:**

Imagine you're building a remote control for different devices (TV, sound system, etc.). Ideally, you don't want to redesign the entire remote every time you encounter a new device. 

The Bridge pattern achieves this by separating the functionality of the remote (abstraction) from the specific way it controls each device (implementation).

Here's how it works:

1. **Abstraction (Remote Control):** This defines the general actions a remote can perform, like turn on/off, volume control, channel switching. This part doesn't care about the specific device it's controlling.
2. **Implementation (Device Drivers):** Each device has its own driver that translates the generic remote commands (turn on) into specific instructions for that device (send power toggle signal). 


### Core Components:

* **Abstraction:** This is the high-level interface that defines the operations an object can perform. It acts as a blueprint for functionalities without specifying the underlying mechanism. Clients (other parts of the code) interact with the system solely through this interface.
* **Implementation:** This concrete class (or set of classes) implements the actual logic behind the abstraction's operations. Each implementation can have its own unique way of carrying out the functionality. The abstraction delegates the work to the chosen implementation.

These core components are often connected through:

* **Encapsulation:** Both abstraction and implementation classes encapsulate their own internal details, hiding them from external code. This promotes modularity and information hiding.
* **Aggregation:** The abstraction class typically holds a reference to an implementation object. This allows the abstraction to delegate tasks to the appropriate implementation at runtime. Inheritance can also be used within the implementation hierarchy to create specialized variations.

**What problems can the Bridge design pattern solve?**

* An abstraction and its implementation should be defined and extended independently from each other.
* A compile-time binding between an abstraction and its implementation should be avoided so that an implementation can be selected at run-time.

**What solution does the Bridge design pattern describe?**

* Separate an abstraction (Abstraction) from its implementation (Implementor) by putting them in separate class hierarchies.
* Implement the Abstraction in terms of (by delegating to) an Implementor object.

### Real-World Analogy:

Imagine a light switch. The switch itself (abstraction) provides a standard way to turn a light on or off (operations). However, the underlying electrical wiring and bulb type (implementation) can vary depending on the location and fixture. You can replace a bulb (implementation) without affecting the way you use the switch (abstraction). Similarly, different types of switches (implementations with different mechanisms) can be used with the same light fixture (abstraction).

## Example Problem : 
[Source](https://refactoring.guru/design-patterns/bridge)

Say you have a geometric Shape class with a pair of subclasses: Circle and Square. You want to extend this class hierarchy to incorporate colors, so you plan to create Red and Blue shape subclasses. However, since you already have two subclasses, you’ll need to create four class combinations such as BlueCircle and RedSquare.

![](https://refactoring.guru/images/patterns/diagrams/bridge/problem-en.png?id=81f8ed6e6f5d673e15203b22a7a3c502)

Adding new shape types and colors to the hierarchy will grow it exponentially. For example, to add a triangle shape you’d need to introduce two subclasses, one for each color. And after that, adding a new color would require creating three subclasses, one for each shape type. The further we go, the worse it becomes.
## Solution:
This problem occurs because we’re trying to extend the shape classes in two independent dimensions: by form and by color. That’s a very common issue with class inheritance.

The Bridge pattern attempts to solve this problem by switching from inheritance to the object composition. What this means is that you extract one of the dimensions into a separate class hierarchy, so that the original classes will reference an object of the new hierarchy, instead of having all of its state and behaviors within one class.

![](https://refactoring.guru/images/patterns/diagrams/bridge/solution-en.png?id=b72caae18c400d6088072f2f3adda7cd)

Following this approach, we can extract the color-related code into its own class with two subclasses: Red and Blue. The Shape class then gets a reference field pointing to one of the color objects. Now the shape can delegate any color-related work to the linked color object. That reference will act as a bridge between the Shape and Color classes. From now on, adding new colors won’t require changing the shape hierarchy, and vice versa.


### Structure:

![](https://refactoring.guru/images/patterns/diagrams/bridge/structure-en.png?id=827afa4b40008dc29d26fe0f4d41b9cc)

## How to Implement

1. Identify the orthogonal dimensions in your classes. These independent concepts could be: abstraction/platform, domain/infrastructure, front-end/back-end, or interface/implementation.

2. See what operations the client needs and define them in the base abstraction class.

3. Determine the operations available on all platforms. Declare the ones that the abstraction needs in the general implementation interface.

4. For all platforms in your domain create concrete implementation classes, but make sure they all follow the implementation interface.

5. Inside the abstraction class, add a reference field for the implementation type. The abstraction delegates most of the work to the implementation object that’s referenced in that field.

6. If you have several variants of high-level logic, create refined abstractions for each variant by extending the base abstraction class.

7. The client code should pass an implementation object to the abstraction’s constructor to associate one with the other. After that, the client can forget about the implementation and work only with the abstraction object.

### When the Bridge Pattern Reigns Supreme:

* **Decoupling for Independent Evolution:**  When a system demands the ability to modify both the core functionality (abstraction) and its concrete execution (implementation) independently, the Bridge pattern shines. This allows for targeted improvements and bug fixes without cascading effects on other parts of the codebase.
* **Supporting Diverse Implementations:**  The Bridge pattern excels when a single abstraction needs to accommodate a multitude of implementation variations. New functionalities can be seamlessly integrated by introducing additional implementations that adhere to the established abstraction, promoting extensibility and flexibility.
* **Enhancing Flexibility and Extensibility:**  Future-proofing your code becomes a reality with the Bridge pattern. It facilitates adaptation to evolving requirements by allowing for the creation of novel implementations that plug seamlessly into the existing abstraction layer.
* **Promoting Code Reusability:**  The clear separation of abstraction and implementation fosters code reuse. Clients (other parts of the code) can interact with different implementations transparently, leading to more modular and reusable components. This reduces code duplication and simplifies maintenance.
* **Improved Testability:**  By focusing on the well-defined interface within the abstraction, the Bridge pattern simplifies unit testing. Tests can validate behavior without relying on the specifics of any particular implementation, leading to more robust and reliable software.

### When Alternative Approaches Might Be More Favorable:

* **Straightforward Implementations:**  For scenarios with simple and unlikely-to-change implementation details, the Bridge pattern might introduce unnecessary complexity. A more direct approach, where the abstraction and implementation are intertwined, might be more suitable.
* **Limited Implementation Landscape:**  If a system has a fixed set of implementations with no foreseeable expansion, the Bridge pattern might add overhead for minimal benefit. A simpler approach that directly incorporates the known implementations might be sufficient.
* **Performance-Critical Systems:**  In situations where performance is paramount, the Bridge pattern can introduce a slight overhead due to the additional layer of abstraction and delegation. Carefully weigh the benefits of flexibility against potential performance implications before employing the Bridge pattern.


### Example 
- [Ts]()
- [Js]()
- [Py]()
- [Go]()
- [Java]()