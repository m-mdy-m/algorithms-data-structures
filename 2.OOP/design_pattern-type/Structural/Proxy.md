# Proxy
## Introduction:
In computer programming, the proxy pattern is a software design pattern. A proxy, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked. For the client, usage of a proxy object is similar to using the real object, because both implement the same interface.

> Summary : The proxy pattern provides an indirect way to access an object, offering additional control, flexibility, and potential performance improvements for your code. 

### What problems can the Proxy design pattern solve?
- The access to an object should be controlled.
- Additional functionality should be provided when accessing an object.
### What problems can the Proxy design pattern solve?
- can be used as substitute for another object (Subject) and
- implements additional functionality to control the access to this subject.
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

- Deferred Object Creation:
    - Use a proxy when you want to postpone the creation of a resource-intensive object until it’s actually needed.
    - This helps in optimizing the application’s startup time and resource usage.
- Access Control and Permissions:
    - Use a proxy when you need to control and manage access to an object, ensuring that certain conditions or permissions are met before allowing clients to interact with the real object.
    - This is particularly useful for enforcing security measures.
- Resource Optimization:
    - Use a proxy to optimize the utilization of resources, such as caching results or storing previously fetched data.
    - This can lead to performance improvements by avoiding redundant computations or data retrieval.
- Remote Object Interaction:
    - Use a proxy when dealing with distributed systems and you want to interact with objects located in different addresses or systems.
    - The proxy can handle the communication details, making remote object interaction more seamless.

## When not to use Proxy Design Pattern?

**Overhead for Simple Operations:** Avoid using a proxy for simple objects or operations that don’t involve resource-intensive tasks. Introducing a proxy might add unnecessary complexity in such cases.
**Unnecessary Abstraction:** If your application doesn’t require lazy loading, access control, or additional functionalities provided by proxies, introducing proxies may lead to unnecessary abstraction and code complexity.
**Performance Impact:** If the introduction of a proxy negatively impacts performance rather than improving it, especially in cases where objects are lightweight and creation is not a significant overhead.
**When Access Control Isn’t Needed:** If there are no access control requirements and the client code can directly interact with the real object without any restrictions.
**When Eager Loading is Acceptable:** If eager loading of objects is acceptable and doesn’t affect the performance of the system, introducing a proxy for lazy loading might be unnecessary.

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

1. If there’s no pre-existing service interface, create one to make proxy and service objects interchangeable. Extracting the interface from the service class isn’t always possible, because you’d need to change all of the service’s clients to use that interface. Plan B is to make the proxy a subclass of the service class, and this way it’ll inherit the interface of the service.

2. Create the proxy class. It should have a field for storing a reference to the service. Usually, proxies create and manage the whole life cycle of their services. On rare occasions, a service is passed to the proxy via a constructor by the client.

3. Implement the proxy methods according to their purposes. In most cases, after doing some work, the proxy should delegate the work to the service object.

4. Consider introducing a creation method that decides whether the client gets a proxy or a real service. This can be a simple static method in the proxy class or a full-blown factory method.

5. Consider implementing lazy initialization for the service object.

## Example 
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Proxy/Proxy.ts)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Proxy/Proxy.js)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Proxy/Proxy.java)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Proxy/Proxy.go)
- [Python](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Structural/Proxy/Proxy.py)