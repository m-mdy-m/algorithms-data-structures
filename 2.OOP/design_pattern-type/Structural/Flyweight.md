# Flyweight
## Introduction:
The Flyweight Design Pattern is a structural pattern used to minimize memory usage or computational expenses by promoting object sharing. It's ideal when creating numerous similar objects becomes cumbersome due to individual object overhead.

The core concept hinges on separating an object's intrinsic and extrinsic states. The **intrinsic state** encompasses the object's inherent properties that can be shared across instances. Think of it as the object's core identity, independent of context. In contrast, the **extrinsic state** depends on the object's specific situation and cannot be shared.

For example, imagine a shape rendering application. The intrinsic state of a circle object might be its color and radius, defining its fundamental characteristics. The extrinsic state could be its position on the canvas, which varies for each circle instance.

Understanding this state separation is crucial for the Flyweight pattern. By sharing the intrinsic state, we can significantly reduce memory usage and improve performance when dealing with a multitude of similar objects.

> **Summary:** "The Flyweight Design Pattern offers a memory-efficient approach for creating large numbers of similar objects. It achieves this by sharing common elements among objects, reducing overall memory usage and potentially improving performance."

![](https://miro.medium.com/v2/resize:fit:640/format:webp/0*442VyQ8IMnbkaXmY.png)

## Key Features of the Flyweight Design Pattern:

1. **Flyweight Factory (Manages Sharing):** The flyweight factory is the central hub for managing and creating flyweight objects. It ensures that flyweight objects are shared and reused across multiple clients. This often involves checking if a suitable flyweight object with the desired intrinsic state already exists before creating a new one.
2. **Flyweight Interface (Defines Shared Behavior):**  The flyweight interface defines the methods that flyweight objects must implement. It includes operations that can be shared and executed by multiple objects. (In some simpler cases, the Flyweight Interface might be optional).
3. **Concrete Flyweight (Stores Intrinsic State):**  The concrete flyweight class represents the shared flyweight object. It stores the intrinsic state and provides an implementation for the shared operations defined in the Flyweight Interface (or directly within the class if no interface exists).
4. **Client (Uses Flyweight Objects):**  The client represents the context in which flyweight objects are used. It stores the extrinsic state and interacts with the flyweight objects through the flyweight factory. 

### Simple and understandable explanation:

**Imagine you're managing a large clothing store.** You have a vast inventory of clothes, but some things are repeated across many items: sizes (S, M, L, etc.) and colors (black, white, blue, etc.).  

Here's how the Flyweight Pattern can help:

* **Flyweight Objects (Sizes and Colors):** Instead of storing size and color information with each individual clothing item, create separate flyweight objects for each size and color. These flyweight objects are lightweight because they only hold the intrinsic state (size or color value).
* **Flyweight Factory (Inventory Management System):**  Your inventory management system acts as the Flyweight Factory. It keeps track of all existing size and color flyweight objects (imagine pre-made size tags and color swatches).
* **Client (Sales Staff and Customers):** When a customer wants to try on a shirt, the sales staff (client) retrieves the appropriate size and color flyweight objects from the inventory system (Flyweight Factory). They then combine these flyweight objects with the specific style of shirt (extrinsic state) to show the customer the complete outfit.

Here's how this approach benefits you:

* **Reduced Memory Usage:**  You only need to store one copy of each size and color information instead of duplicating it for every clothing item. This saves significant memory space in your inventory system.
* **Improved Efficiency:**  The sales staff doesn't need to search for size and color information every time. They simply retrieve the pre-defined flyweight objects, making the process faster and smoother.

**In essence, the Flyweight Design Pattern helps you manage a large collection of similar items by separating the shared information (size, color) from the unique details (style) and promoting efficient reuse.** 

## Example Problem:

Imagine you're developing a rich text editor that allows users to format text with various fonts, sizes, and colors. As users type and apply formatting, the editor creates numerous text objects, each encapsulating the character data, font style, size, and color information.

This approach seems straightforward, but consider a scenario where a user is writing a lengthy document with frequent formatting changes. Here's where the problem arises:

* **Memory Inefficiency:** Every new formatted text segment creates a new object, storing duplicate font, size, and color data for each instance. This redundancy can lead to significant memory consumption, especially for large documents.
* **Performance Impact:** As the number of text objects grows, memory management becomes more demanding. Frequent object creation and potential garbage collection can introduce performance slowdowns, affecting the user experience.

These memory and performance issues can become bottlenecks as the document size and complexity increase.


### Solution:

The Flyweight Design Pattern offers an elegant solution to this challenge:

1. **Flyweight Objects:** We define flyweight objects that encapsulate the intrinsic state of formatted text - font style, size, and color. These objects are lightweight as they share this common data.
2. **Flyweight Factory:**  A Flyweight Factory acts as a central hub for managing flyweight objects. It maintains a pool of existing flyweight objects with different formatting combinations. When a new formatted text segment is created, the client (the rich text editor) requests the appropriate formatting from the Flyweight Factory.
3. **Client and Extrinsic State:** The client (rich text editor) stores the extrinsic state, which is the actual text content of each segment. It interacts with the Flyweight Factory to obtain flyweight objects representing the desired formatting. The client then associates the retrieved flyweight object with the text content, creating a formatted text segment.

By leveraging flyweight objects, we achieve significant memory savings:

* **Shared Intrinsic State:**  Multiple text segments can reference the same flyweight object for identical formatting, eliminating duplicate storage of font, size, and color data.
* **Reduced Object Creation:** The Flyweight Factory manages a pool of existing flyweight objects, minimizing the need for frequent object creation.

This approach not only reduces memory consumption but also potentially improves performance by minimizing object creation overhead. The Flyweight Factory efficiently retrieves existing flyweight objects or creates new ones only when necessary.

In essence, the Flyweight Design Pattern transforms memory-hungry formatted text objects into a lightweight and efficient representation, enhancing the overall performance and scalability of the rich text editor.

## How does the Flyweight Design Pattern work?

As we have seen, the Flyweight Design Pattern separates an object’s intrinsic and extrinsic states, sharing the intrinsic state among multiple objects to reduce memory usage and improve performance. Here is a step-by-step explanation of how the Flyweight pattern works:

1. **Identification of Intrinsic and Extrinsic State:**
    - Intrinsic State: This is the part of the object that can be shared among multiple instances. It is independent of the object’s context. For example, in a text editor, the intrinsic state of a character flyweight could include the character code, font, and size.
    - Extrinsic State: This is the part of the object that depends on the object’s context and cannot be shared. It is specific to each instance. In the text editor example, the extrinsic state of a character flyweight could include the position on the screen.
2. **Creation of Flyweight Interface:**
    - Define a Flyweight interface or abstract class that declares methods for manipulating the intrinsic and extrinsic state.
3. **Creation of Concrete Flyweights:**
    - Implement concrete classes that conform to the Flyweight interface. These classes represent the shared intrinsic state. In the text editor example, each concrete flyweight might represent a unique character with its intrinsic properties.
4. **Creation of Flyweight Factory:**
    - Implement a Flyweight Factory class responsible for creating and managing flyweights.
    - The factory maintains a pool or cache of existing flyweights, ensuring that flyweights are shared and reused when requested.
5.**Client Interaction:**
    - The client uses the flyweights and is responsible for maintaining the extrinsic state (context-specific information) and passing it to the flyweights when needed.
    - When the client requests a flyweight, the Flyweight Factory checks if an instance with the given intrinsic state already exists in the pool. If it does, it returns the existing instance; otherwise, it creates a new one and adds it to the pool.
6. **Minimization of Memory Usage:**
    - The Flyweight pattern minimizes memory usage by sharing the common intrinsic state among multiple objects. The shared flyweights are reused, reducing the need to create and maintain a separate instance for each similar object.
7. **Improved Performance:**
    - With the reduced memory footprint, the application’s performance is often improved, especially in scenarios where many similar objects are used.
    - In conclusion, the Flyweight pattern achieves efficiency by sharing common parts of objects and externalizing the variable parts. This helps reduce memory consumption and improve performance when many similar objects must be managed.


## Structure:

![](https://refactoring.guru/images/patterns/diagrams/flyweight/structure.png?id=c1e7e1748f957a4792822f902bc1d420)

## Advantages of the Flyweight Design Pattern

1. **Memory Efficiency:**
The primary advantage of the Flyweight pattern is its ability to reduce memory usage significantly. The overall memory footprint is minimized by sharing the common parts of objects (intrinsic state) among multiple instances. This is particularly valuable when dealing with a large number of similar objects.

2. **Improved Performance:**
Due to reduced memory consumption, applications employing the Flyweight pattern often experience improved performance. Fewer objects mean less overhead in terms of both memory allocation and garbage collection (in languages with automatic memory management).

3. **Resource Conservation:**
The pattern conserves system resources by minimizing the number of instances created, especially for objects with shared characteristics. This can lead to more efficient utilization of system resources and better scalability.

4. **Encapsulation of Extrinsic State:**
The client maintains the extrinsic state, not within the flyweight objects. This separation allows for more straightforward management of the client’s context-specific information without affecting the shared intrinsic state.

5. **Simplified Client Code:**
Clients interacting with flyweights only need to manage the extrinsic state, making the client code cleaner and more straightforward. The complexity of handling a shared intrinsic state is encapsulated within the flyweight and factory components.

6. **Promotes Reusability:**
Flyweights, representing a shared intrinsic state, are reusable across multiple contexts. This reusability contributes to a more modular and maintainable design.

7. **Flexibility in Adding New Flyweights:**
Adding new flyweights to the system is relatively easy. Extending the system to accommodate additional shared characteristics involves creating new concrete flyweights and modifying the factory without impacting existing code.

8. **Supports Large-Scale Systems:**
The Flyweight pattern is particularly beneficial in large-scale systems where many objects with shared characteristics are present. It helps manage the complexity and resource consumption in such scenarios.

9. **Enhances Scalability:**
The pattern makes it easier to scale systems as the number of objects increases. By reusing shared flyweights, the system can handle more instances without a proportional increase in memory usage.

10. **Maintains Consistency:**
A shared intrinsic state ensures consistency among instances. Changes made to the intrinsic state of one flyweight are reflected across all instances sharing that state.

## Disadvantages of the Flyweight Design Pattern

1. **Complexity:**
Introducing the Flyweight pattern can add complexity to the codebase, especially when implementing the Flyweight Factory and managing the shared and non-shared states. This complexity may not be justified for simpler systems or scenarios with low object instantiation overhead.

2. **Increased Code Overhead:**
The pattern might introduce additional code overhead, especially in the Flyweight Factory, which needs to manage and maintain the pool of shared flyweights. This could offset the benefits of reduced memory usage in certain situations.

3. **Thread Safety Concerns:**
If not implemented carefully, the Flyweight pattern may introduce thread safety concerns. If multiple threads concurrently access and modify shared flyweights, synchronization mechanisms might be needed to avoid race conditions.

4. **Potential Performance Impact:**
While the Flyweight pattern can improve memory usage and overall performance, there may be better choices when the trade-off between memory efficiency and additional computational overhead is favorable. Profiling and careful consideration of the specific requirements are essential.

5. **Not Ideal for All Object Types:**
The pattern is most effective when many objects share a significant amount of common state. In scenarios where the intrinsic state is minimal or objects have very distinct states, the benefits of the Flyweight pattern may be obscure.

6. **Difficulty in Managing Extrinsic State:**
Managing the extrinsic state (context-specific information) can become challenging, especially as the complexity of the client’s requirements grows. Clients must maintain and manage this state, which could lead to potential errors or misuse.

7. **Limited Applicability:**
The Flyweight pattern is not suitable for every design scenario. It is most beneficial when there are many similar objects, and the shared intrinsic state is a significant portion of the object’s overall state. In situations where object instantiation is not a performance bottleneck, using the pattern might be unnecessary.

8. **Potential for Overuse:**
There is a risk of overusing the Flyweight pattern in scenarios where it does not provide significant benefits. Using the pattern with understanding the problem domain can result in unnecessary complexity and maintenance challenges.

9. **Increased Initialization Time:**
The initialization of shared flyweights and the setup of the Flyweight Factory may introduce additional initialization time. This can be a potential drawback in scenarios where quick initialization is crucial.

10. **Impact on Object Identity:**
Since flyweights represent a shared state, their changes may affect the identity of multiple objects. This can have unintended consequences and requires careful consideration, especially when dealing with mutable shared state.

## How to Implement
Divide fields of a class that will become a flyweight into two parts:

the intrinsic state: the fields that contain unchanging data duplicated across many objects
the extrinsic state: the fields that contain contextual data unique to each object
Leave the fields that represent the intrinsic state in the class, but make sure they’re immutable. They should take their initial values only inside the constructor.

Go over methods that use fields of the extrinsic state. For each field used in the method, introduce a new parameter and use it instead of the field.

Optionally, create a factory class to manage the pool of flyweights. It should check for an existing flyweight before creating a new one. Once the factory is in place, clients must only request flyweights through it. They should describe the desired flyweight by passing its intrinsic state to the factory.

The client must store or calculate values of the extrinsic state (context) to be able to call methods of flyweight objects. For the sake of convenience, the extrinsic state along with the flyweight-referencing field may be moved to a separate context class.

## Example 
- [Ts]()
- [Js]()
- [Java]()
- [Go]()
- [Python]()