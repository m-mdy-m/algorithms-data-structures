# Adapter

In software engineering, the adapter pattern is a software design pattern (also known as wrapper, an alternative naming shared with the decorator pattern) that allows the interface of an existing class to be used as another interface.

> Summary  The adapter pattern facilitates the integration of existing classes with incompatible interfaces into a system by creating an adapter class. This adapter acts as a translator, converting calls between the incompatible interface of the existing class (adaptee) and the desired target interface required by the client code.

**Simple and understandable explanation:**

Imagine you're traveling to a country that uses a different electrical outlet standard than your home country. Your devices have plugs designed for your home country's outlets, and they wouldn't fit into the outlets of the foreign country.

In this scenario, a travel adapter acts as the bridge between the two incompatible interfaces. The adapter has a plug on one end that fits the outlet of the foreign country, and a socket on the other end that accepts the plug of your device designed for your home country.

The travel adapter essentially translates the connection between the two systems, allowing your device to receive power even though it has a different plug type.

This is analogous to how the adapter pattern works in software design. It allows you to use an existing piece of code (your device) with a different system (the foreign country's outlets) by creating an adapter (the travel adapter) that translates the communication between them.

**The adapter design pattern solves problems like:**

* How can a class be reused that does not have an interface that a client requires?
* How can classes that have incompatible interfaces work together?
* How can an alternative interface be provided for a class?

The adapter design pattern describes how to solve such problems:

* Define a separate adapter class that converts the (incompatible) interface of a class (adaptee) into another interface (target) clients require.
* Work through an adapter to work with (reuse) classes that do not have the required interface.

**1. Incompatible classes:**

These are classes whose interfaces (ways to interact with them) don't match what another part of your code expects. This mismatch could be due to:

* **Different methods:** The classes might have different methods for performing the same operation, with different names, parameters, or return types.
* **Incompatible arguments/return types:** Even if methods have similar names, they might accept or return data in incompatible formats. 
* **Missing functionality:** A class might lack functionality required by the client code.

**2. Adaptee class:**

This is the existing class that you want to reuse but has an incompatible interface. It's the class that the adapter pattern helps you "plug into" your system despite the interface mismatch.

**Analogy:**

Think back to the travel adapter example. The incompatible classes are your devices (designed for your home country's outlets) and the foreign country's outlets. The adaptee class is your device – it's the existing functionality you want to use, but its interface (plug type) doesn't match the system (outlets) you need to connect to.


## Example Problem:
[source](https://www.geeksforgeeks.org/adapter-pattern/)

Imagine that you’re creating a stock market monitoring app. The app downloads the stock data from multiple sources in XML format and then displays nice-looking charts and diagrams for the user.

At some point, you decide to improve the app by integrating a smart 3rd-party analytics library. But there’s a catch: the analytics library only works with data in JSON format.

![](https://refactoring.guru/images/patterns/diagrams/adapter/problem-en.png?id=60d01f6c72ba85030cd52d5955caa3d8)

You could change the library to work with XML. However, this might break some existing code that relies on the library. And worse, you might not have access to the library’s source code in the first place, making this approach impossible.

## Solution:

You can create an adapter. This is a special object that converts the interface of one object so that another object can understand it.

An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter. For example, you can wrap an object that operates in meters and kilometers with an adapter that converts all of the data to imperial units such as feet and miles.

Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate. Here’s how it works:

1. The adapter gets an interface, compatible with one of the existing objects.
2. Using this interface, the existing object can safely call the adapter’s methods.
3. Upon receiving a call, the adapter passes the request to the second object, but in a format and order that the second object expects.
Sometimes it’s even possible to create a two-way adapter that can convert the calls in both directions.

![](https://refactoring.guru/images/patterns/diagrams/adapter/solution-en.png?id=5f4f1b4575236a3853f274b690bd6656)

Let’s get back to our stock market app. To solve the dilemma of incompatible formats, you can create XML-to-JSON adapters for every class of the analytics library that your code works with directly. Then you adjust your code to communicate with the library only via these adapters. When an adapter receives a call, it translates the incoming XML data into a JSON structure and passes the call to the appropriate methods of a wrapped analytics object.


## How Adapter Design Pattern works?
1. Client Request:
The client initiates a request by calling a method on the adapter using the target interface.
2. Adapter Translation:
The adapter translates or maps the client’s request into a form that the adaptee understands, using the adaptee’s interface.
3. Adaptee Execution:
The adaptee performs the actual work based on the translated request from the adapter.
4. Result to Client:
The client receives the results of the call, remaining unaware of the adapter’s presence or the specific details of the adaptee.

## Why do we need Adapter Design Pattern?
1. **Integration of Existing Code:**
    - **Scenario**: When you have existing code or components with interfaces that are incompatible with the interfaces expected by     new code or systems.
    - **Need**: The Adapter pattern allows you to integrate existing components seamlessly into new systems without modifying their original code.
2. **Reuse of Existing Functionality:**
    * **Scenario**: When you want to reuse classes or components that provide valuable functionality but don’t conform to the desired   interface.
    * **Need**: The Adapter pattern enables you to reuse existing code by creating an adapter that makes it compatible with the interfaces expected by new code.
3. **Interoperability**:
    * **Scenario**: When you need to make different systems or components work together, especially when they have different    interfaces.
    * **Need**: The Adapter pattern acts as a bridge, allowing systems with incompatible interfaces to collaborate effectively.
4. Client-Server Communication:
    - **Scenario**: When building client-server applications, and the client expects a specific interface while the server provides a   different one.
    - **Need**: Adapters help in translating requests and responses between client and server, ensuring smooth communication despite    interface differences.
5. Third-Party Library Integration:
    - **Scenario**: When incorporating third-party libraries or APIs into a project, and their interfaces do not match the rest of the  system.
    - **Need**: Adapters make it possible to use external components by providing a compatible interface for the rest of the application.
## When not to use Adapter Design Pattern?
1. When Interfaces Are Stable:
    * **Scenario**: If the interfaces of the existing system and the new system are stable and not expected to change frequently.
    * **Reason:** Adapters are most beneficial when dealing with evolving or incompatible interfaces. If the interfaces are stable, the overhead of maintaining adapters might outweigh the benefits.
2. When Direct Modification Is Feasible:
    * **Scenario**: If you have control over the source code of the existing system, and it’s feasible to directly modify its interface to match the target interface.
    * **Reason:** If you can modify the existing code, direct adaptation of interfaces might be a simpler and more straightforward solution than introducing adapters.
3. When Performance is Critical:
    * **Scenario**: In performance-critical applications where the overhead introduced by the Adapter pattern is not acceptable.
    * **Reason:** Adapters may introduce a level of indirection and abstraction, which could have a minor impact on performance. In situations where every bit of performance matters, the Adapter pattern might not be the best choice.
4. When Multiple Adapters Are Required:
    * **Scenario**: If a system requires numerous adapters for various components, and the complexity of managing these adapters becomes overwhelming.
    * **Reason:** Managing a large number of adapters might lead to increased complexity and maintenance challenges. In such cases, reconsider the overall design or explore alternatives.
5. When Adapters Introduce Ambiguity:
    * **Scenario**: When introducing adapters leads to ambiguity or confusion in the overall system architecture.
    * **Reason:** If the presence of adapters makes the system design less clear or harder to understand, it may be worthwhile to explore alternative solutions that offer a clearer design.
> [Source](https://www.geeksforgeeks.org/adapter-pattern/)


## Example Code:
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Adapter/Adapter.ts)
- [js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Adapter/Adapter.js)
- [java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Adapter/Adapter.java)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Adapter/Adapter.go)
- [Py](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Adapter/Adapter.py)