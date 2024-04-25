# Proxy
## Introduction:
In computer programming, the proxy pattern is a software design pattern. A proxy, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked. For the client, usage of a proxy object is similar to using the real object, because both implement the same interface.
### What problems can the Proxy design pattern solve?
- The access to an object should be controlled.
- Additional functionality should be provided when accessing an object.
### What problems can the Proxy design pattern solve?
- can be used as substitute for another object (Subject) and
- implements additional functionality to control the access to this subject.
### Key Features of the Proxy Design Pattern:

1. **Subject:**

The Subject is an interface or an abstract class that defines the common interface shared by the RealSubject and Proxy classes. It declares the methods that the Proxy uses to control access to the RealSubject.
  - Declares the common interface for both RealSubject and Proxy.
  - Usually includes the methods that the client code can invoke on the RealSubject and the Proxy.
2. **RealSubject:**

The RealSubject is the actual object that the Proxy represents. It contains the real implementation of the business logic or the resource that the client code wants to access.
  - It Implements the operations declared by the Subject interface.
  - Represents the real resource or object that the Proxy controls access to.
3. **Proxy:**

The Proxy acts as a surrogate or placeholder for the RealSubject. It controls access to the real object and may provide additional functionality such as lazy loading, access control, or logging.
  - Implements the same interface as the RealSubject (Subject).
  - Maintains a reference to the RealSubject.
   - Controls access to the RealSubject, adding additional logic if necessary.

### Simple and understandable explanation:

////


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

## How does the Proxy Design Pattern work?

///

## Structure:

![](https://refactoring.guru/images/patterns/diagrams/proxy/structure.png?id=f2478a82a84e1a1e512a8414bf1abd1c)

## Advantages of the Proxy Design Pattern

///

## Disadvantages of the Proxy Design Pattern

///

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