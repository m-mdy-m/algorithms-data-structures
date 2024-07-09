# Proxy
## Introduction:
In computer programming, the proxy pattern is a software design pattern. A proxy, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked. For the client, usage of a proxy object is similar to using the real object, because both implement the same interface.

> Summary : The proxy pattern provides an indirect way to access an object, offering additional control, flexibility, and potential performance improvements for your code. 
### Key Features of the Proxy Design Pattern:

**1. Subject (Interface):**

* The Subject defines the **contract** for interacting with either the real object or the proxy. It acts as a common interface, outlining the operations (methods) that both can perform. This ensures the client code can seamlessly work with either entity.

**Summary:** The Subject establishes a standardized way for the client to interact, promoting loose coupling between the client and the concrete implementation details.

**2. RealSubject (Concrete Class):**

* The RealSubject represents the actual object that the proxy controls access to. It encapsulates the core functionality or resource that the client ultimately desires. The RealSubject implements the methods defined in the Subject interface, providing the actual behavior.

**Summary:** The RealSubject embodies the desired functionality or resource, shielded by the proxy for controlled access.

**3. Proxy (Concrete Class):**

* The Proxy acts as a **surrogate** for the RealSubject. It provides the same interface as the Subject, allowing the client to interact with it transparently. However, the Proxy can mediate access to the RealSubject, performing additional tasks before or after delegating operations to it. These tasks might include security checks, caching results, or lazy loading the RealSubject to optimize performance.

**Summary:** The Proxy sits between the client and the RealSubject, offering a controlled access point and potentially enriching the interaction with additional functionalities.

### Simple and understandable explanation:

**Imagine visiting a high-security building to access a valuable document.**

* **Client:** You, needing access to the document.
* **RealSubject:** The sensitive document itself, stored in a secure location.
* **Proxy:** The security guard stationed at the document vault.

**Why does the building have security guards (proxies)?**

* **Strict Access Control:** The guard verifies your identity and authorization before allowing entry to the vault (access control). They might also log your access attempt for security purposes.
* **Additional Functionality:** The guard might prepare the document for your review in a designated secure area or offer redacted copies if certain sections are confidential (additional functionalities).

**Benefits of using a security guard (proxy):**

* **Enhanced Security:** The guard ensures only authorized individuals access the document, protecting its confidentiality and integrity.
* **Simplified Interaction:** You don't need to navigate the secure facility yourself, streamlining the process.

**Beyond Security:**

The Proxy pattern extends beyond access control. Imagine a large online store where product images are stored remotely. A proxy server could act as an intermediary:

* **Client:** The user's web browser requesting product images.
* **RealSubject:** The remote server where the high-resolution images are stored.
* **Proxy:** A local server that caches frequently accessed images.

**Benefits of using a proxy server:**

* **Improved Performance:** The proxy server can deliver cached images much faster than fetching them from the remote server every time, enhancing user experience.
* **Reduced Load:** By handling image requests locally, the proxy server lessens the burden on the remote server, improving overall system scalability.

The Proxy design pattern offers a versatile approach to object interaction. It provides a layer of control, potentially streamlines processes, and can even enhance performance by adding functionalities like caching. This makes it a valuable tool for building flexible and secure software systems.

## Example Problem:

Why would you want to control access to an object? Here is an example: you have a massive object that consumes a vast amount of system resources. You need it from time to time, but not always.

![](https://refactoring.guru/images/patterns/diagrams/proxy/problem-en.png?id=b36e65189e939de5dc809636c1946a43)

You could implement lazy initialization: create this object only when it’s actually needed. All of the object’s clients would need to execute some deferred initialization code. Unfortunately, this would probably cause a lot of code duplication.
In an ideal world, we’d want to put this code directly into our object’s class, but that isn’t always possible. For instance, the class may be part of a closed 3rd-party library.

### Solution:

The Proxy pattern suggests that you create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it.

![](https://refactoring.guru/images/patterns/diagrams/proxy/solution-en.png?id=ab36b8b03fabf92c7dd10ad87507b78c)

But what’s the benefit? If you need to execute something either before or after the primary logic of the class, the proxy lets you do this without changing that class. Since the proxy implements the same interface as the original class, it can be passed to any client that expects a real service object.

## When to use Proxy Design Pattern?

**1. Delayed Object Creation: Optimizing Startup Time and Resource Usage**

* **Imagine:** You're building a complex design software that requires a powerful 3D rendering engine. However, this engine is resource-intensive and might not be needed for all functionalities.
* **Solution:**  Implement a proxy for the rendering engine. Initially, the proxy holds a placeholder or remains empty. When 3D rendering is truly required, the proxy creates the real engine, ensuring resources are allocated only when necessary. This approach significantly improves application startup time and memory usage by delaying the creation of resource-intensive objects.

**2. Granular Access Control: Enhancing Security**

* **Scenario:** You're developing a financial management system with sensitive account information. Certain user roles should only have view access, while others might require transaction permissions.
* **Solution:** Introduce a proxy for account access. The proxy acts as a gatekeeper, intercepting access requests and verifying user permissions before granting interaction with the real account object. This enforces security measures and restricts unauthorized modifications, protecting sensitive financial data.

**3. Resource Caching: Boosting Performance**

* **Imagine:** Your e-commerce application displays product details fetched from a database. These frequent queries can strain the database and impact performance.
* **Solution:** Utilize a proxy for database access. The proxy can cache frequently accessed product data. When a product detail request arrives, the proxy checks its cache first. If the data is available, it delivers it swiftly, bypassing the database entirely. This caching mechanism significantly improves performance by reducing database load and response times for repetitive requests.

**4. Streamlined Remote Interactions: Simplifying Distributed Systems**

* **Scenario:** You're building a distributed system where components reside on different servers. You need to interact with objects located remotely.
* **Solution:** Employ a proxy to manage remote object interaction. The proxy acts as a local representative for the remote object. It handles communication details like network addresses and serialization/deserialization, making remote interactions transparent and easier to manage for the client code. The proxy simplifies complex communication protocols, allowing the client code to interact as if it were dealing with a local object.

## When not to use Proxy Design Pattern?

**1. Keeping Things Light: Simple Operations Don't Need Extra Layers**

* **Imagine:** You're building a basic calculator application. The core functionalities involve simple arithmetic operations.
* **Why not a Proxy?** Introducing a proxy for these lightweight calculations adds unnecessary complexity. The overhead of managing the proxy would likely outweigh any benefits. In such cases, direct interaction with the real object (the calculator logic) is perfectly efficient.

**2. Avoiding Unnecessary Abstraction: When Simplicity Reigns Supreme**

* **Scenario:** You're developing a data processing application that performs straightforward data manipulation tasks. Access control or lazy loading isn't required.
* **Why not a Proxy?** If your application doesn't leverage features like lazy loading or access control, proxies might introduce unnecessary abstractions. This additional layer can potentially obscure the real object's behavior and make debugging more challenging. In these situations, a simpler approach without a proxy might be more maintainable. 

**3. Performance Considerations: When Speed Takes Priority**

* **Imagine:** You're building a high-frequency trading system where every millisecond counts. Frequent object interactions are crucial for performance.
* **Why not a Proxy?** In some cases, the proxy itself can become a bottleneck. The additional layer of indirection might introduce overhead, especially for frequently accessed objects. If performance is paramount, and object creation isn't a major concern, a direct approach might be more efficient.

**4. Direct Access When Allowed: No Need for Gatekeepers When Trust Reigns**

* **Scenario:** You're working on an internal system within a trusted environment. All users have the necessary permissions to access and modify data.
* **Why not a Proxy?** If there are no access control requirements, and the client code can directly interact with the real object without restrictions, a proxy becomes unnecessary. The overhead of permission checks within the proxy wouldn't provide any value.

**5. Eager Loading When Acceptable: Sometimes Upfront is Better**

* **Imagine:** You're building a news reader application that retrieves and displays a limited set of articles at launch. Eager loading all articles at once might be acceptable.
* **Why not a Proxy for Lazy Loading?** If eager loading of objects (like articles in this case) is acceptable and doesn't significantly impact performance, introducing a proxy for lazy loading might be unnecessary. A simpler approach that retrieves all articles upfront might be sufficient.

## Structure:

![](https://refactoring.guru/images/patterns/diagrams/proxy/structure.png?id=f2478a82a84e1a1e512a8414bf1abd1c)

## Advantages of the Proxy Design Pattern:

* **Increased Control:**  The proxy acts as a gatekeeper, allowing you to regulate access to the real object. You can implement security checks, enforce permissions, or introduce logging for access attempts.
* **Enhanced Functionality:**  The proxy sits between the client and the real object, enabling you to intercept interactions and add extra logic. This could involve caching results, performing validations before passing requests on, or even lazy loading the real object for performance optimization.
* **Improved Flexibility:**  The client code interacts with the proxy using the same interface as the real object. This allows you to easily swap implementations or introduce new functionalities in the proxy later without modifying the client code. It promotes loose coupling between the client and the concrete implementation.
* **Potential Performance Gains:**  By caching results or lazy loading the real object, the proxy can streamline interactions and improve overall performance, especially if the real object is expensive to create or access.

## Disadvantages of the Proxy Design Pattern:
* **Increased Complexity:**  Introducing an additional layer of abstraction can make your code more complex, especially for simpler scenarios. You might end up writing more code to handle the proxy logic.
* **Potential Bottleneck:**  If not implemented carefully, the proxy can become a bottleneck in your system. The additional layer of indirection might introduce overhead, especially for frequent interactions. 
* **Obscured Functionality:**  The proxy can sometimes mask the behavior of the real object. This can make debugging issues more challenging as errors might not be readily apparent in the client code.

## How to Implement
**1. Interface Definition (Optional But Recommended):**

* **Establish a Common Ground:** If you don't already have one, create a well-defined interface that captures the functionalities exposed by both the real object and the proxy. This interface acts as the contract for client interaction, ensuring seamless interchangeability between the two entities. The client code interacts with this interface, oblivious to whether it's working with the real object or the proxy behind the scenes. This promotes loose coupling and simplifies future modifications.
* **Alternative Approach:** If modifying the real object's class structure is not feasible, you can leverage inheritance. The proxy class can inherit directly from the real object's class, acquiring its interface implicitly. This approach can be useful when introducing the proxy to an existing codebase where altering the real object's design might be disruptive.

**2. Proxy Class Creation: The Intermediary**

* **Develop the Proxy Class:** Design a dedicated proxy class that serves as the intermediary between the client and the real object. This class acts as a gatekeeper, controlling access and potentially adding functionalities to object interactions.
* **Maintain a Reference:**  The proxy class will typically hold a reference variable to store the real object instance. In most scenarios, the proxy is responsible for creating and managing the real object's lifecycle. This allows for centralized control over the real object's creation and potential destruction. However, there might be situations where the client provides the real object during proxy instantiation, offering more flexibility in certain use cases.

**3. Proxy Method Implementation: Tailoring Functionality**

* **Implement Interface Methods:** Implement each method defined in the interface (inherited or explicitly defined) within the proxy class. The specific behavior of these implementations can vary based on the intended purpose of the proxy. Often, the proxy might perform preliminary tasks before delegating the actual work to the real object. Here are some examples:
    * **Security Enhancements:** The proxy can implement access control mechanisms, verifying user permissions or credentials before allowing interaction with the real object. This adds an extra layer of security to sensitive operations.
    * **Performance Optimization:** The proxy can cache frequently accessed results, reducing the need to constantly involve the real object. This can significantly improve performance, especially for expensive operations.
    * **Monitoring and Logging:** The proxy can log access attempts to the real object, providing valuable insights into system usage and potential security threats.

**4. Optional: Creation Strategy Consideration - Choosing Wisely**

* **Client Choice or Proxy Decision:** Introduce a mechanism to determine whether the client receives a real object or a proxy instance. This decision-making process can be facilitated by:
    * **Static Method in Proxy Class:** A static method residing within the proxy class can employ specific criteria (like user role or system load) to choose the appropriate object (proxy for enhanced security or real object for direct access). This approach offers a simple way to manage object creation.
    * **Factory Method Pattern:**  For intricate scenarios with multiple object types or complex decision logic, a more elaborate factory method pattern implementation can be considered. This pattern encapsulates object creation logic in a separate factory class, promoting code reusability and maintainability.

**5. Optional: Lazy Initialization - Optimizing Performance**

* **Defer Creation When Possible:** To optimize performance, particularly for scenarios involving expensive real object creation (like objects that require significant resources or complex initialization), consider implementing lazy initialization within the proxy. This approach defers the creation of the real object until it's truly required. The proxy might initially hold a null reference or a placeholder object, and only create the real object when a method is invoked for the first time. This postpones resource allocation until the critical moment, improving application startup time and overall memory usage.

## Example 
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Proxy/Proxy.ts)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Proxy/Proxy.js)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Proxy/Proxy.java)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Proxy/Proxy.go)
- [Python](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Structural/Proxy/Proxy.py)