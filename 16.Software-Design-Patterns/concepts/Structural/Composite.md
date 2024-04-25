# Composite
The Composite Design Pattern is a structural design pattern that lets you compose objects into tree-like structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly. In other words, whether dealing with a single object or a group of objects (composite), clients can use them interchangeably.

> Summary: The Composite Design Pattern lets you group objects into tree structures.  This allows you to treat individual objects and entire groups the same way.

**What problems can the Composite design pattern solve?**

* A part-whole hierarchy should be represented so that clients can treat part and whole objects uniformly.
* A part-whole hierarchy should be represented as tree structure.

**What solution does the Composite design pattern describe?**

* Define a unified Component interface for both part (Leaf) objects and whole (Composite) objects.
* Individual Leaf objects implement the Component interface directly, and Composite objects forward requests to their child components.

## Example Problem

imagine that you have two types of objects: Products and Boxes. A Box can contain several Products as well as a number of smaller Boxes. These little Boxes can also hold some Products or even smaller Boxes, and so on.

Say you decide to create an ordering system that uses these classes. Orders could contain simple products without any wrapping, as well as boxes stuffed with products...and other boxes. How would you determine the total price of such an order?

## Solution

The Composite pattern suggests that you work with Products and Boxes through a common interface which declares a method for calculating the total price.

How would this method work? For a product, it’d simply return the product’s price. For a box, it’d go over each item the box contains, ask its price and then return a total for this box. If one of these items were a smaller box, that box would also start going over its contents and so on, until the prices of all inner components were calculated. A box could even add some extra cost to the final price, such as packaging cost.

The greatest benefit of this approach is that you don’t need to care about the concrete classes of objects that compose the tree. You don’t need to know whether an object is a simple product or a sophisticated box. You can treat them all the same via the common interface. When you call a method, the objects themselves pass the request down the tree.

## Components of Composite Design Pattern

![](https://media.geeksforgeeks.org/wp-content/uploads/20240213162931/Components--Photoroompng-Photoroom.png)

###  Component
The component declares the interface for objects in the composition and for accessing and managing its child components. This is like a blueprint that tells us what both individual items (leaves) and groups of items (composites) should be able to do. It lists the things they all have in common.

> Summary: It's like the blueprint that defines what all elements in the composition, whether they are individual items (leaves) or groups of items (composites), should be able to do. It lists the common functionalities they share.

###  Leaf
Leaf defines behavior for primitive objects in the composition. This is the basic building block of the composition, representing individual objects that don’t have any child components. Leaf elements implement the operations defined by the Component interface.

> Summary: Think of it as the basic building block of the composition. It represents individual objects that don’t have any child components. Leafs implement the basic operations defined by the Component interface.

###  Composite

Composite stores child components and implements child-related operations in the component interface. This is a class that has child components, which can be either leaf elements or other composites. A composite class implements the methods declared in the Component interface, often by delegating the operations to its child components.

> Summary: Imagine this as a container that holds child components. It implements operations specified in the Component interface and manages child-related operations. It can contain both leaf elements and other composites, forming a hierarchical structure.

###  Client

The client manipulates the objects in the composition through the component interface. The client uses the component class interface to interact with objects in the composition structure. If the recipient is a leaf then the request is handled directly. If the recipient is a composite, then it usually forwards the request to its child components, possibly performing additional operations before and after forwarding

> Summary: Picture this as the user who interacts with the composition. The client uses the component interface to manipulate objects within the composition. If the object is a leaf, the client's request is handled directly. If it's a composite, the client's request is forwarded to its child components, with possible additional operations performed before and after forwarding.

##### Diagram:
![](https://media.geeksforgeeks.org/wp-content/uploads/20240213191157/composite-class-dig.png)
---

## Restaurant Menu - A Composite Design Pattern Example

Imagine a restaurant menu represented using the Composite Design Pattern. Here's how it would work:

**Components:**

1. **MenuItem (Interface):** This is the base interface defining common operations for all menu items. It could include methods like `getName()`, `getPrice()`, and `getDescription()`.
2. **Leaf (Concrete Class):** This represents a single menu item like a "Burger" or a "Salad." It implements `MenuItem` and provides concrete implementations for its methods, returning the specific details of that item. 
3. **Composite (Concrete Class):** This represents a category on the menu, like "Appetizers" or "Main Courses." It implements `MenuItem` but doesn't have its own specific details. Instead, it holds a list of child components (other `MenuItems` which can be both `Leaf` and other `Composite` objects). It implements the interface methods by iterating through its child components and delegating the call to their respective methods. For example, `getPrice()` would calculate the total price by summing the prices of all its child items.

**Benefits in this Example:**

- **Uniform Access:** You can treat individual dishes and categories the same way. Both can be added to the menu, displayed on screen, or have their prices calculated using the same methods defined in the `MenuItem` interface.
- **Flexible Menu Structure:** New dishes or categories can be easily added without modifying existing code. A new appetizer can be a `Leaf` added to the "Appetizers" `Composite`, and a new "Desserts" category can be another `Composite` containing various dessert `Leaf` objects.
- **Complex Menu Navigation:** The composite structure allows for nested categories. Imagine a "Drinks" composite with sub-composites for "Soft Drinks" and "Alcoholic Beverages" containing individual drink items as leaves.

**Client Interaction:**

A customer browsing the menu wouldn't need to know if they're looking at a single dish or a category. They can call the same methods (`getName()`, `getPrice()`) on any `MenuItem` object to get the information they need. This simplifies menu management and presentation logic.

## When to Embrace the Composite Design Pattern:

The Composite Design Pattern shines when you need your application to treat individual objects and groups of objects (composites) interchangeably. Here are key scenarios where it excels:

* **Uniform Client Interaction:** Imagine writing code that operates on a variety of objects in a similar way. Maybe you need to calculate the total price of items in a shopping cart, regardless of whether they are individual products or bundles. The Composite pattern allows you to define a common interface for both products and bundles. This interface specifies operations like `getPrice()`. Now, your client code can simply iterate through the shopping cart (which can contain both products and bundles) and call `getPrice()` on each item, achieving consistent behavior for all elements in the hierarchy.

* **Flexible Hierarchies:** The Composite pattern empowers you to create complex hierarchical structures with ease. Composite objects can hold both individual elements (Leaves) and other composite objects. This enables you to model real-world scenarios effectively. For instance, consider a file system. A directory (composite) can contain files (leaves) and other subdirectories (composites), forming a nested structure that the Composite pattern can elegantly represent.

* **Reduced Code Duplication:** If you find yourself writing nearly identical code to handle different types of objects within a hierarchy, the Composite pattern can be a lifesaver. By defining a unified interface, you eliminate the need for separate logic for each object type. This promotes code reusability and maintainability.

* **Extensible Design:** The Composite pattern fosters a design that's easy to extend. New types of objects, whether Leaves or Composites, can be effortlessly integrated into the hierarchy as long as they adhere to the common interface. This flexibility allows your application to evolve without significant code modifications.

## When to Consider Alternatives:

* **Shallow Hierarchies:** If your object hierarchy is relatively flat, with only a single level of nesting, the overhead of implementing the Composite structure might outweigh the benefits. In such cases, a simpler approach using inheritance or direct object manipulation might be more efficient.

* **Dynamic Composition:** The Composite pattern thrives in scenarios with static hierarchies, where the composition of objects is determined at design time and doesn't change frequently. However, if your application requires frequent changes to the structure, with objects being added or removed dynamically, managing the relationships within the Composite structure can become cumbersome. Consider alternative patterns or simpler object structures for such scenarios.

* **Unnecessary Complexity:** The Composite pattern shouldn't be used solely for the sake of having a pattern in place. If the functionality required doesn't necessitate the uniformity provided by the Composite pattern, it might be an over-engineering effort. Evaluate if a simpler object structure without the overhead of the Composite design can adequately address your needs.

* **Performance Considerations:** In performance-critical scenarios, the additional layer of indirection introduced by the Composite pattern can lead to slight overhead. If performance is a top priority, carefully assess the trade-offs between the benefits of the pattern and potential performance implications. Explore alternative approaches that might offer a better balance between functionality and performance.

* **Alternative Patterns:** Depending on the specific problem you're trying to solve, other design patterns like Visitor or Iterator might offer more appropriate solutions. The Visitor pattern, for example, allows you to define new operations on elements in a hierarchy without modifying the classes themselves. Consider exploring these alternatives to see if they better align with your requirements.

## How to Implement
**1. Analyze Your Object Model:**

- The first step is to ensure your application's core model can be effectively represented as a tree structure. Think about how your objects can be broken down into fundamental elements (Leaves) and containers (Composites). Remember, Composites must be able to hold both Leaves and other Composites, forming a hierarchical relationship.

**2. Define the Component Interface:**

- Create an interface named `Component` that serves as the blueprint for all participants in the composition. This interface should define a set of methods that make sense for both individual elements (Leaves) and composite elements (Containers). These methods could represent operations that can be performed on any element in the hierarchy, regardless of its type.

**3. Implement the Leaf Class:**

- Design a class named `Leaf` that implements the `Component` interface. This class represents the basic building blocks of your hierarchy, the indivisible elements that cannot be further decomposed. The `Leaf` class provides concrete implementations for the methods defined in the `Component` interface, specific to the functionality of individual elements.

**4. Design the Composite Class:**

- Create a class named `Composite` that also implements the `Component` interface. This class represents container elements that can hold a collection of child components. Within the `Composite` class, you'll typically have an array or list to store references to these child components. This array/list should be declared with the `Component` interface type, ensuring it can hold both `Leaf` objects and other `Composite` objects.

**5. Delegate Operations in Composites:**

- When implementing the methods of the `Component` interface inside the `Composite` class, remember that a Composite acts as a delegator. Its role is to forward most of the work to its child components. For example, if the `Component` interface has a `getPrice()` method, the implementation in the `Composite` class would likely iterate through its child components, call their respective `getPrice()` methods, and potentially perform additional calculations before returning the final result.

**6. Adding and Removing Child Elements (Optional):**

- You might also want to define methods within the `Composite` class for adding and removing child elements. These methods can either be declared directly in the `Component` interface or implemented separately in the `Composite` class.  While declaring them in the interface allows for uniform treatment by the client, it might violate the Interface Segregation Principle if these methods are empty in the `Leaf` class.  

**Key Considerations:**

- Implementing the add/remove methods in the interface allows the client to treat all elements equally when composing the tree structure, but it also forces empty implementations in the `Leaf` class. This is a trade-off to consider based on your specific needs.
- The specific methods defined in the `Component` interface and their implementations in the `Leaf` and `Composite` classes will depend on the functionality required by your application.

## Example ->
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Composite/Composite.ts)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Composite/Composite.js)
- [Py](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Composite/Composite.py)
- [java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Composite/Composite.java)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Composite/Composite.go)