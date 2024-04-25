# Decorator

> NOTE: Not to be confused with the concept of "decorators" in Python.

In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other instances of the same class. The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern as well as to the Open-Closed Principle, by allowing the functionality of a class to be extended without being modified.Decorator use can be more efficient than subclassing, because an object's behavior can be augmented without defining an entirely new object.

> Summary: Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.


**Simple and understandable explanation:**
Imagine you're customizing a coffee at your favorite coffee shop. Here's how the decorator pattern plays out:

* **Core Component:** The base of your coffee is the core component. It could be a black coffee, latte, Americano, etc.

* **Decorators:**  The various options you add to customize your coffee act as decorators. These could be:
    * **MilkDecorator:** Adds milk to your coffee (could be whole milk, skim milk, etc.).
    * **SugarDecorator:** Adds sugar to your coffee (could be different types or amounts).
    * **SyrupDecorator:** Adds flavored syrups like caramel, vanilla, etc.
    * **WhippedCreamDecorator:** Adds whipped cream on top.

* **Customization:** You, the client, decide how you want your coffee by choosing and combining the decorators. You might order a:
    * **Latte:** This involves adding a MilkDecorator to a base Espresso component (a latte is essentially an espresso with steamed milk).
    * **Caramel Macchiato:** This could involve a MilkDecorator, a SugarDecorator (optional), a CaramelSyrupDecorator, and potentially a WhippedCreamDecorator added to an Espresso component.

**Benefits:**

* **Flexibility:** You can choose the exact combination of customizations to create your ideal coffee.
* **Maintainability:** The core coffee functionality remains independent of the customizations. New syrups or milk options can be added as new decorators without modifying the base coffee classes.
* **Efficiency:**  This approach is more efficient than having a separate class for every possible coffee combination.

**Similarities to Decorator Pattern:**

* **Core vs. Optional Layers:** The core is the base coffee, and the milk, sugar, syrups, and whipped cream are optional layers that can be added or removed.
* **Common Interface:** All decorators (milk, sugar, etc.) implicitly share the concept of adding something to the coffee, aligning with a common interface in code.
* **Dynamic Configuration:** You dynamically configure your coffee by choosing and combining decorators at the time of order.

## Components:

* **Component:** This is the core object whose functionality you want to extend. It defines the interface that decorators will interact with.
* **Decorator:** This is the wrapper object that adds behavior to the component. It inherits from or composes the component interface and potentially adds its own functionalities. The decorator can intercept calls to the component and modify them or add entirely new behavior before or after delegating the call to the component. 
* **ConcreteComponent:** This is a concrete implementation of the component interface. 
* **ConcreteDecorator:** This is a concrete implementation of the decorator that adds specific functionalities to the component. 

## Benefits:

* **Flexibility:** You can dynamically add or remove functionalities from objects at runtime. This allows you to create customized behavior for specific objects without modifying the original class.
* **Maintainability:** The core functionality of the original object remains untouched, making it easier to understand and maintain.
* **Open/Closed Principle Adherence:** New functionalities can be added through decorators without modifying the existing class, following the Open-Closed principle.
* **Single Responsibility Principle Adherence:** By separating concerns into smaller decorator classes, you can adhere to the Single Responsibility Principle, making the code more modular and easier to reason about.
* **Efficiency:** Compared to subclassing, decorators can be more efficient. You don't need to create a whole new object hierarchy just to add specific functionalities.

---

## Problems Addressed by the Decorator Pattern:

* **Dynamic Responsibility Attachment/Removal:** The decorator pattern excels at situations where you need to add or remove functionalities from objects at runtime. This is particularly useful when the specific behavior variations are unknown beforehand or when the decision to apply a particular functionality is context-dependent. Subclassing, on the other hand, requires defining new classes for each variation, leading to a rigid and potentially bloated class hierarchy.

* **Limited Subclassing Flexibility:** Subclassing can become cumbersome when you have a large number of potential functionalities to add. Every combination of functionalities would necessitate a new subclass, leading to an explosion of classes and potential naming conflicts. The decorator pattern provides a more flexible alternative by allowing you to create independent decorators that can be freely combined to achieve the desired behavior.

## Solutions Provided by the Decorator Pattern:

* **Transparent Interface Forwarding:** Decorators act as wrappers around the core object (component) and implement the same interface. This ensures seamless integration with existing code that interacts with the component. When a method is called on the decorated object, the decorator can transparently forward the call to the component, effectively preserving the original behavior.

* **Flexible Behavior Modification:** Decorators have the power to intercept method calls directed to the component. This interception point allows decorators to perform additional tasks before or after delegating the call to the component. They can modify the arguments passed to the component, alter the return value, or even completely suppress the call. This flexibility empowers you to inject new functionalities into the object's behavior dynamically.

**In essence, the decorator pattern addresses the challenges of statically defined object behavior through dynamic and modular manipulation. It allows you to create a collection of reusable decorators that can be combined to tailor an object's behavior to specific requirements at runtime.**

## Example Problem :
> [`Source`](https://refactoring.guru/design-patterns/decorator)

Imagine that you’re working on a notification library which lets other programs notify their users about important events.

The initial version of the library was based on the Notifier class that had only a few fields, a constructor and a single send method. The method could accept a message argument from a client and send the message to a list of emails that were passed to the notifier via its constructor. A third-party app which acted as a client was supposed to create and configure the notifier object once, and then use it each time something important happened.

![](https://refactoring.guru/images/patterns/diagrams/decorator/problem1-en.png?id=7658efddaaf43acb64ac63a92025cc1e)

At some point, you realize that users of the library expect more than just email notifications. Many of them would like to receive an SMS about critical issues. Others would like to be notified on Facebook and, of course, the corporate users would love to get Slack notifications.

![](https://refactoring.guru/images/patterns/diagrams/decorator/problem2.png?id=ba5d5e106ea8c4848d60e230feca9135)

How hard can that be? You extended the Notifier class and put the additional notification methods into new subclasses. Now the client was supposed to instantiate the desired notification class and use it for all further notifications.

But then someone reasonably asked you, “Why can’t you use several notification types at once? If your house is on fire, you’d probably want to be informed through every channel.”

You tried to address that problem by creating special subclasses which combined several notification methods within one class. However, it quickly became apparent that this approach would bloat the code immensely, not only the library code but the client code as well.

![](https://refactoring.guru/images/patterns/diagrams/decorator/problem3.png?id=f3b3e7a107d870871f2c3167adcb7ccb)

You have to find some other way to structure notifications classes so that their number won’t accidentally break some Guinness record.

## Solution

Extending a class is the first thing that comes to mind when you need to alter an object’s behavior. However, inheritance has several serious caveats that you need to be aware of.

- Inheritance is static. You can’t alter the behavior of an existing object at runtime. You can only replace the whole object with another one that’s created from a different subclass.
- Subclasses can have just one parent class. In most languages, inheritance doesn’t let a class inherit behaviors of multiple classes at the same time.
One of the ways to overcome these caveats is by using Aggregation or Composition  instead of Inheritance. Both of the alternatives work almost the same way: one object has a reference to another and delegates it some work, whereas with inheritance, the object itself is able to do that work, inheriting the behavior from its superclass.

With this new approach you can easily substitute the linked “helper” object with another, changing the behavior of the container at runtime. An object can use the behavior of various classes, having references to multiple objects and delegating them all kinds of work. Aggregation/composition is the key principle behind many design patterns, including Decorator. On that note, let’s return to the pattern discussion.

![](https://refactoring.guru/images/patterns/diagrams/decorator/solution1-en.png?id=468e68f1e9ae21649d63dd454500741d)

“Wrapper” is the alternative nickname for the Decorator pattern that clearly expresses the main idea of the pattern. A wrapper is an object that can be linked with some target object. The wrapper contains the same set of methods as the target and delegates to it all requests it receives. However, the wrapper may alter the result by doing something either before or after it passes the request to the target.

When does a simple wrapper become the real decorator? As I mentioned, the wrapper implements the same interface as the wrapped object. That’s why from the client’s perspective these objects are identical. Make the wrapper’s reference field accept any object that follows that interface. This will let you cover an object in multiple wrappers, adding the combined behavior of all the wrappers to it.

In our notifications example, let’s leave the simple email notification behavior inside the base `Notifier` class, but turn all other notification methods into decorators.

![](https://refactoring.guru/images/patterns/diagrams/decorator/solution2.png?id=cbee4a27080ce3a0bf773482613e1347)

The client code would need to wrap a basic notifier object into a set of decorators that match the client’s preferences. The resulting objects will be structured as a stack.

![](https://refactoring.guru/images/patterns/diagrams/decorator/solution3-en.png?id=b7e2e2036435265350ba0c6796162ab5)

The last decorator in the stack would be the object that the client actually works with. Since all decorators implement the same interface as the base notifier, the rest of the client code won’t care whether it works with the “pure” notifier object or the decorated one.

We could apply the same approach to other behaviors such as formatting messages or composing the recipient list. The client can decorate the object with any custom decorators, as long as they follow the same interface as the others.

## How to Implement:

**Preparation:**

1. **Identify the Core and Optional Layers:** Analyze your problem domain and identify the core functionality (the "primary component"). Then, recognize the additional functionalities (like notification channels) that can be layered on top of the core, making them optional.

2. **Define the Common Interface:** Extract the methods shared by both the core component and the optional layers (decorators). This shared functionality becomes the foundation of a component interface.

**Building the Blocks:**

3. **Concrete Component:** Create a class that implements the component interface and defines the base behavior of sending notifications (e.g., `EmailNotifier`).

4. **Base Decorator:** This class acts as a blueprint for all decorators. It will have a field that holds a reference to a wrapped object (of the component interface type) to allow attaching decorators to the core component or other decorators. This base decorator's primary function is to delegate all work to the wrapped object, ensuring the core functionality remains intact.

5. **Ensuring Interface Consistency:** All classes in this design (component, decorators) should implement the component interface to ensure compatibility.

6. **Concrete Decorators:** Create specific decorator classes (e.g., `SMSDecorator`, `SlackDecorator`) that inherit from the base decorator. These decorators will implement additional functionalities like adding SMS or Slack notifications, potentially modifying messages or performing actions before or after delegating the call to the wrapped object.

**Client-Side Usage:**

7. **Client Responsibility:** Client programs are responsible for creating decorators and arranging them in the desired order to achieve the required notification behavior. For instance, the client might create an `EmailNotifier`, wrap it with an `SMSDecorator`, and then further wrap it with a `SlackDecorator` to enable notifications through all three channels.

## When Decorators Shine: Real-World Applications and Architectural Benefits

**1. Dynamic UI Tweaks with Seamless Integration:**

Imagine a text editor. Clicking a "highlight" button dynamically wraps selected text with decorators that modify the text's rendering behavior. These decorators might intercept the `draw()` function and add highlighting effects (similar to real-world implementations). This approach seamlessly integrates with existing UI components, and the Command pattern often complements decorators here, managing the button press action as a discrete unit.

**2. State-Driven Decoration for Flexible Object Behavior:**

Decorators can adapt an object's behavior based on its state. For instance, an e-commerce shopping cart might add a "gift wrapping" decorator when the user selects that option. This approach avoids creating separate subclasses for every possible cart state (e.g., "gift wrapped," "express delivery"), promoting cleaner state management. The State pattern itself can even be implemented using decorators, making the state object's behavior more modular and flexible. Each decorator encapsulates a specific state-related behavior, allowing for more intricate state transitions and easier maintenance.

**3. Flyweight Efficiency: Reducing Memory Footprint with Decoration:**

The Flyweight pattern aims to reduce memory usage by sharing common object components. Decorators play a key role here. A flyweight object might have an invariant core (shared across all instances) and a variant, decorated part. Decorators can be cached and reused, further optimizing memory consumption. Imagine a table view in a mobile app - reusable cells act as decorators referencing a shared table row object, minimizing memory usage for rendering numerous rows efficiently.

**4. Overcoming Interface Challenges with Adapters and Visitors:**

When dealing with collections of objects decorated in various ways, interacting with the collection to fully utilize the added functionality can be tricky. Here, the Adapter or Visitor patterns come in handy. Adapters can bridge the gap between the decorated collection and the code that needs to interact with it. For instance, an adapter might translate calls to a common interface into calls specific to the underlying decorated objects, ensuring compatibility and smooth interaction. Visitor patterns can also be employed to perform operations on decorated objects without modifying the object structure itself. The visitor acts as an external entity that traverses the object hierarchy and interacts with each object based on its type and decorations.

**5. Architectural Advantages: Composition over Inheritance for Scalable Systems:**

Decorators promote a compositional approach to extending functionality, as opposed to a rigid inheritance hierarchy. You can dynamically add or modify behavior at runtime by wrapping objects with decorators. This avoids complex inheritance structures that become cumbersome and memory-intensive as the number of potential functionalities grows. Additionally, decorators are a memory-efficient alternative to bloating objects with unnecessary properties for every possible variation in behavior.

* **Specializing Unsubclassable Objects:** Decorators are particularly useful when dealing with objects that cannot be subclassed due to language limitations or design constraints. For example, a system object might expose a limited interface but require runtime behavior adjustments. Decorators can be applied to this object to add the desired functionality without modifying the core object itself.

* **Bridging Functionality Gaps:** They bridge the gap where objects lack the desired functionality. By dynamically attaching decorators, you can extend the object's capabilities without altering its original design.

**6. Enhanced APIs with the Facade Pattern:**

The decorator pattern can work alongside the Facade pattern to create more powerful APIs. A facade simplifies interaction with a complex system, but it doesn't add functionality. However, the facade's wrapper layer can be used to introduce new features by coordinating the system's subcomponents. Imagine a facade that unifies dictionaries from various languages under one interface. This interface could be further decorated to provide translation functionalities, creating a hybrid pattern that leverages both facades and decorators. The facade provides a simplified access point, while decorators offer a way to dynamically extend the functionality exposed through the facade.


### Example 
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Decorator/Decorator.ts)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Decorator/Decorator.js)
- [C++](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Decorator/Decorator.cpp)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Decorator/Decorator.java)
- [Py](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Decorator/Decorator.py)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Decorator/Decorator.go)