# Multiton

## Introduction: Multiton Pattern - A Generalization of Singleton

In software engineering, the multiton pattern is a design pattern which generalizes the singleton
pattern. Whereas the singleton allows only one instance of a class to be created, the multiton
pattern allows for the controlled creation of multiple instances, which it manages through the use
of a map.
for example Rather than having a single instance per application (e.g. the java.lang.Runtime object in the Java programming language) the multiton pattern instead ensures a single instance per key.

> Summary : The multiton pattern is a variation of the singleton pattern that allows a single class to have multiple instances, with each instance having a unique identifier. 

## Similarities to Singleton Pattern
The multiton pattern is similar to the singleton pattern in that it has a private constructor and a static method that returns an instance of the class. However, the static method takes an argument that specifies the unique identifier for the desired instance. The method then checks if an instance with that identifier has already been created, and if so, returns it. If no such instance exists, it creates a new instance and stores it for future reference.

**Beyond Design Patterns Book: Multiton as Registry of Singletons**
The multiton pattern does not explicitly appear as a pattern in the highly regarded object-oriented programming textbook Design Patterns. However, the book describes using a registry of singletons to allow subclassing of singletons,which is essentially the multiton pattern.

### Distinguishing Multiton from Hash Tables

While it may appear that the multiton is a hash table with synchronized access there are two important distinctions. First, the multiton does not allow clients to add mappings. Secondly, the multiton never returns a null or empty reference; instead, it creates and stores a multiton instance on the first request with the associated key. Subsequent requests with the same key return the original instance. A hash table is merely an implementation detail and not the only possible approach. The pattern simplifies retrieval of shared objects in an application.

### Advantages of the Multiton Pattern

* **Flat Structure and Efficient Object Pool:** Since the object pool is created and associated with the class itself, the Multiton pattern maintains a flat structure, avoiding complexities of tree-like structures.
* **Centralized Access and Indexed Storage:** The Multiton provides a central point of access to a collection (directory) of multiton instances, each identified by a unique key. This allows for efficient retrieval and management of these essential objects.
* **Limitations for Distributed Systems:** While effective within a single system, the Multiton pattern's centralized nature limits its widespread use across distributed systems.

## Why Multiton Pattern?

1. **Resource Management:** The Multiton Pattern is particularly useful when dealing with limited resources that need to be shared across different components of an application. By associating each resource with a key, the pattern allows for efficient management and retrieval of instances based on contextual needs.

2. **Configurable Instances:** In scenarios where multiple instances of a class are required with different configurations or states, the Multiton Pattern allows for the creation and retrieval of instances with specific attributes. This makes it a flexible solution for managing objects with varied configurations.

3. **Avoiding Global State:** While Singleton promotes global access to an instance, Multiton provides a more controlled access mechanism. By using keys, it avoids the issues associated with global state and allows for a more modular and organized approach to handling instances.

### When to use Multiton Pattern?
- **Contextual Instances:** Use the Multiton Pattern when you need to manage instances in a context-dependent manner, and each instance is uniquely identified by a key.

- **Resource Pooling:** When dealing with limited resources, such as database connections, thread pools, or network connections, the Multiton Pattern can efficiently manage and reuse instances based on their keys.

- **Configurable Objects:** For classes with multiple configurations or states, the Multiton Pattern allows you to create and retrieve instances with specific attributes as needed.

### When not to use Multiton Pattern
- **Overhead for Small-Scale Applications:** In smaller projects, the overhead of maintaining a registry for Multiton instances may outweigh the benefits; simpler patterns like Singleton or regular instantiation could be more suitable.

- **Unnecessary Complexity:** When uniqueness based on keys is unnecessary, implementing the Multiton Pattern may introduce unnecessary complexity to the code; simpler alternatives should be considered.

- **Global State is Acceptable:** If global access to a single instance suffices and context-dependent instances are not needed, the traditional Singleton Pattern might be sufficient, avoiding the added complexity of the Multiton.

### Example 
- [TS]()
- [Js]()
- [Py]()
- [JAVA]()
- [Go]()