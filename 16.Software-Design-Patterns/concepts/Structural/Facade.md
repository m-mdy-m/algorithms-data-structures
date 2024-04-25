# Facade

The facade pattern (also spelled façade) is a software-design pattern commonly used in object-oriented programming. Analogous to a facade in architecture, a facade is an object that serves as a front-facing interface masking more complex underlying or structural code. A facade can:

- improve the readability and usability of a software library by masking interaction with more complex components behind a single (and often simplified) API
- provide a context-specific interface to more generic functionality (complete with context-specific input validation)
- serve as a launching point for a broader refactor of monolithic or tightly-coupled systems in favor of more loosely-coupled code
Developers often use the facade design pattern when a system is very complex or difficult to understand because the system has many interdependent classes or because its source code is unavailable. This pattern hides the complexities of the larger system and provides a simpler interface to the client. It typically involves a single wrapper class that contains a set of members required by the client. These members access the system on behalf of the facade client and hide the implementation details.

> Summary : The facade pattern, in object-oriented programming, acts like a building's facade in architecture. It presents a simplified front-end, masking the intricate inner workings. In software terms, it's a class that provides a **streamlined interface** to a complex subsystem or library.

**Benefits:**

* **Enhanced Readability and Usability:**  Imagine a library with numerous functions. A facade offers a simpler API, making the library easier to understand and use.
* **Context-Specific Control:**  The facade can tailor the interface to specific use cases. This might involve input validation relevant to the context, preventing errors.
* **Refactoring Launchpad:**  Facades can be stepping stones to improve code organization. By isolating complexity, they pave the way for refactoring monolithic systems into loosely coupled, more manageable structures.

### What problems can the Facade design pattern solve?

- To make a complex subsystem easier to use, a simple interface should be provided for a set of interfaces in the subsystem.
- The dependencies on a subsystem should be minimized.

### What problems can the Facade design pattern solve?

- implements a simple interface in terms of (by delegating to) the interfaces in the subsystem and
- may perform additional functionality before/after forwarding a request.

**Simple and understandable explanation:**
Imagine your morning routine. It likely involves several steps: brewing coffee, turning on lights, playing music, and maybe even adjusting the thermostat. Each of these actions might involve interacting with separate devices or apps.

The facade design pattern is like having a handy "Morning Magic" button on your nightstand. Here's how it works:

* **Complex System:**  The various appliances, lights, speakers, and thermostats represent the complex subsystem. Interacting with each individually can be cumbersome.
* **Facade (Morning Magic Button):** This button acts as the facade. It provides a single interface - a simple button press - to trigger the entire morning routine.
* **Benefits:**
    * **Simplified Interaction:** Instead of fiddling with multiple devices, you just press one button.
    * **Context-Specific Logic:**  The facade can be programmed to your preferences. It might adjust the brightness based on the time of day or play your favorite playlist.

**Real-World Analogies:**

* **Fast Food Restaurant:**  The menu acts as a facade for the complex kitchen operations. You order a burger, but you don't need to know how the patty is grilled or the bun is toasted.
* **Vending Machine:**  You select a drink with a single button press, even though the machine dispenses the correct ingredients and maintains the temperature.


## Example Problem:

Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on.

As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain.

## Solution:

A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about.

Having a facade is handy when you need to integrate your app with a sophisticated library that has dozens of features, but you just need a tiny bit of its functionality.

For instance, an app that uploads short funny videos with cats to social media could potentially use a professional video conversion library. However, all that it really needs is a class with the single method encode(filename, format). After creating such a class and connecting it with the video conversion library, you’ll have your first facade.

**When to Use the Facade Design Pattern**

- **Taming Complexity:** When a subsystem comprises numerous intricate interfaces or classes that are tightly coupled, direct interaction can become a nightmare. The facade steps in, providing a **streamlined interface** that acts as a single point of entry. This reduces cognitive load for developers, improves code readability, and makes the subsystem more approachable.

- **Dependency Management:** Tight dependencies between code components can hinder maintainability and flexibility. The facade fosters **loose coupling** by encapsulating the intricate subsystem within a facade class. This class acts as an intermediary, enabling client code to interact with the subsystem through the facade's interface. As a result, changes to the underlying subsystem become isolated from the client code, promoting a more adaptable and maintainable codebase.

**Going Beyond Delegation:**

While the facade often delegates requests to the subsystem, its capabilities extend further:

- **Context-Specific Logic:** The facade can introduce additional functionalities before or after forwarding requests to the subsystem. This might encompass input validation tailored to the specific use case, logging mechanisms, or specialized error handling.

- **Code Reusability:** By encapsulating subsystem interaction logic within the facade, we enable code reusability. Client code can leverage the facade without needing to be concerned with the intricacies of the subsystem itself.

**Key Distinctions from Similar Patterns:**

- **Adapter vs. Facade:**  An adapter focuses on converting interfaces to make them compatible, often for promoting polymorphism. In contrast, the facade provides a simplified interface to an entire subsystem, potentially including multiple interfaces.

- **Decorator vs. Facade:**  A decorator dynamically adds or alters behavior of an existing interface at runtime. The facade, on the other hand, provides a new, simplified interface altogether.

**In essence, the facade design pattern empowers developers to effectively manage complex systems by offering a simplified interface, mitigating dependency issues, and potentially incorporating context-specific logic. This translates to cleaner, more maintainable, and ultimately more robust software applications.**

## Structure

![](https://refactoring.guru/images/patterns/diagrams/facade/structure.png?id=258401362234ac77a2aaf1cde62339e7)

## How to Implement
**1. Subsystem Analysis: Identifying Complexity and Opportunities**

* **Complexity Assessment:** The initial step involves meticulously pinpointing the intricate aspects of the subsystem. This might encompass a multitude of interdependent classes, convoluted APIs, or an overall labyrinthine code structure.
* **Interface Simplification:** Following the complexity assessment, a crucial analysis should be conducted to determine the feasibility of providing a more concise interface for interacting with the subsystem. Ideally, this interface should strive to render client code independent from a significant portion of the subsystem's internal classes.

**2. Facade Class Construction: Encapsulation and Delegation**

* **Interface Definition:** Within a newly established facade class, the simplified interface should be declared and meticulously implemented. This interface ought to expose well-defined methods that map directly to the desired functionalities of the subsystem.
* **Request Delegation:** The internal workings of the facade class should involve the implementation of methods specifically designed to delegate requests originating from the client code. This delegation process often necessitates translating the simplified facade method calls into the specific calls required by the underlying subsystem classes.
* **Optional: Lifecycle Management Considerations**

It's essential to consider whether the facade should assume responsibility for the initialization and lifecycle management of the subsystem. This becomes particularly relevant if the subsystem necessitates specific procedures for setup or teardown. However, if the client code already manages these aspects effectively, the facade can focus solely on delegating requests.

**3. Client Interaction and Change Insulation**

* **Leveraging the Facade:** To ensure optimal utilization of the facade design pattern, all client code should be encouraged to interact with the subsystem exclusively through the facade's well-defined interface. This fosters a decoupled architecture, where client code remains blissfully unaware of the intricacies lurking within the subsystem.
* **Change Insulation:** By establishing the facade as the sole point of interaction, modifications made within the subsystem become effectively isolated from the client code. The facade acts as a protective barrier, ensuring that alterations to the subsystem's implementation are contained within its boundaries, preventing disruptions to the client code.

**4. Facade Refinement: Maintaining Modularity (Optional)**

* **Complexity Management:** If the facade class exhibits signs of excessive complexity, a strategic approach should be adopted to enhance its maintainability. This might involve extracting specific functionalities into dedicated facade subclasses. Such a modular approach promotes code clarity and simplifies future maintenance efforts.


## Example 
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Facade/Facade.ts)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Facade/Facade.js)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Facade/Facade.java)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Facade/Facade.go)
- [Python](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Facade/Facade.py)