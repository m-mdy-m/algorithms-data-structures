# Flyweight
## Introduction:
The Flyweight Design Pattern is a structural pattern used to minimize memory usage or computational expenses by promoting object sharing. It's ideal when creating numerous similar objects becomes cumbersome due to individual object overhead.

The core concept hinges on separating an object's intrinsic and extrinsic states. The **intrinsic state** encompasses the object's inherent properties that can be shared across instances. Think of it as the object's core identity, independent of context. In contrast, the **extrinsic state** depends on the object's specific situation and cannot be shared.

For example, imagine a shape rendering application. The intrinsic state of a circle object might be its color and radius, defining its fundamental characteristics. The extrinsic state could be its position on the canvas, which varies for each circle instance.

Understanding this state separation is crucial for the Flyweight pattern. By sharing the intrinsic state, we can significantly reduce memory usage and improve performance when dealing with a multitude of similar objects.

> **Summary:** "The Flyweight Design Pattern offers a memory-efficient approach for creating large numbers of similar objects. It achieves this by sharing common elements among objects, reducing overall memory usage and potentially improving performance."

![](https://miro.medium.com/v2/resize:fit:640/format:webp/0*442VyQ8IMnbkaXmY.png)

### Key Features of the Flyweight Design Pattern:
1. **Flyweight Factory**: The flyweight factory manages and creates flyweight objects. It ensures that flyweight objects are shared and reused across multiple clients.
2. **Flyweight Interface**: The flyweight interface defines the methods that flyweight objects must implement. It includes operations that can be shared and executed by multiple objects.
3. **Concrete Flyweight**: The concrete flyweight class represents the shared flyweight object. It stores the intrinsic state and provides an implementation for shared operations.
4. **Client**: The client represents the context in which flyweight objects are used. It stores the extrinsic state and interacts with the flyweight objects through the flyweight factory.


### What problems can the Flyweight design pattern solve?
### What problems can the Flyweight design pattern solve?
### Simple and understandable explanation:
## Example Problem:

To have some fun after long working hours, you decided to create a simple video game: players would be moving around a map and shooting each other. You chose to implement a realistic particle system and make it a distinctive feature of the game. Vast quantities of bullets, missiles, and shrapnel from explosions should fly all over the map and deliver a thrilling experience to the player.

Upon its completion, you pushed the last commit, built the game and sent it to your friend for a test drive. Although the game was running flawlessly on your machine, your friend wasn’t able to play for long. On his computer, the game kept crashing after a few minutes of gameplay. After spending several hours digging through debug logs, you discovered that the game crashed because of an insufficient amount of RAM. It turned out that your friend’s rig was much less powerful than your own computer, and that’s why the problem emerged so quickly on his machine.

The actual problem was related to your particle system. Each particle, such as a bullet, a missile or a piece of shrapnel was represented by a separate object containing plenty of data. At some point, when the carnage on a player’s screen reached its climax, newly created particles no longer fit into the remaining RAM, so the program crashed.

### Solution:

On closer inspection of the Particle class, you may notice that the color and sprite fields consume a lot more memory than other fields. What’s worse is that these two fields store almost identical data across all particles. For example, all bullets have the same color and sprite.

Other parts of a particle’s state, such as coordinates, movement vector and speed, are unique to each particle. After all, the values of these fields change over time. This data represents the always changing context in which the particle exists, while the color and sprite remain constant for each particle.

This constant data of an object is usually called the intrinsic state. It lives within the object; other objects can only read it, not change it. The rest of the object’s state, often altered “from the outside” by other objects, is called the extrinsic state.

The Flyweight pattern suggests that you stop storing the extrinsic state inside the object. Instead, you should pass this state to specific methods which rely on it. Only the intrinsic state stays within the object, letting you reuse it in different contexts. As a result, you’d need fewer of these objects since they only differ in the intrinsic state, which has much fewer variations than the extrinsic.

Let’s return to our game. Assuming that we had extracted the extrinsic state from our particle class, only three different objects would suffice to represent all particles in the game: a bullet, a missile, and a piece of shrapnel. As you’ve probably guessed by now, an object that only stores the intrinsic state is called a flyweight.

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