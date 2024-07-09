# Object Pool

The object pool design pattern tackles a specific challenge: how to optimize performance when dealing with frequently used, expensive-to-create objects. Here's a breakdown of its core concepts and functionalities:

**The Problem:**

- You have a scenario where your application relies heavily on objects that take a significant amount of time and resources to create (e.g., database connections, network connections, complex resource holders).
- These objects are used for short durations before being discarded.
- This constant creation and destruction cycle can become a performance bottleneck, slowing down your application.

**The Solution: The Object Pool**

The object pool design pattern addresses this issue by introducing a central pool that manages a collection of pre-initialized objects. Here's how it works:

1. **Pool Creation:** A `Pool` class is established. This class is responsible for maintaining the pool of objects and handling requests for them.
2. **Object Initialization:** The `Pool` class pre-creates a set of objects of the desired type. These objects are fully initialized and ready to be used.
3. **Object Borrowing:** When a part of your code needs one of these objects, it requests it from the `Pool`.
4. **Reuse or Create:**
    - If an available object exists in the pool, it's retrieved and returned to the requesting code. This avoids the overhead of creating a new object.
    - If no available objects are present, the `Pool` might:
        - Create a new object and add it to the pool before returning it.
        - Throw an exception indicating resource exhaustion (if a maximum pool size is defined).
        - Implement blocking behavior where the requesting code waits until an object is returned to the pool.
5. **Object Usage:** The code uses the borrowed object for its intended purpose.
6. **Object Return:** Once finished, the code returns the object back to the `Pool`. This doesn't destroy the object; it simply marks it as available for reuse.

> Summary : The object pool design pattern reuses expensive to create objects by keeping a pool of them ready to use. This avoids the cost of creating new objects all the time. It's like a car rental service for objects in your program.

**Simple explanations for better understanding:**

Imagine you're managing a car rental agency. Each time a customer wants to rent a car, you need to provide them with a vehicle. Now, let's say your agency owns a fleet of luxury cars, but these cars are expensive and take time to prepare for rental (cleaning, maintenance checks, etc.). 

Here's how the object pool pattern could be applied in this scenario:

1. **Creating the Pool**: Initially, you prepare a pool of, let's say, ten luxury cars. These cars are prepped, fueled, and ready for immediate use.

2. **Renting a Car**: When a customer walks in and requests to rent a car, instead of preparing a new car from scratch (which is time-consuming and expensive), you simply provide them with one of the available cars from the pool. If there are no available cars in the pool, you might have a policy to wait until one is returned.

3. **Using the Car**: The customer uses the car for the duration of their rental period. During this time, the car is effectively "checked out" from the pool.

4. **Returning the Car**: Once the rental period is over, the customer returns the car to your agency. Instead of parking it in the garage or leaving it idle, you return it to the pool of available cars. Now, it's ready to be rented out to the next customer.

By implementing this pattern:

- You avoid the overhead of preparing a new car for every customer, which saves time and resources.
- The rental process becomes more efficient since customers can quickly access pre-prepared cars from the pool.
- The number of luxury cars you need to own might be fewer because they are reused efficiently.

**In essence, the object pool design pattern provides a structured approach to managing expensive-to-create objects, promoting efficient object reuse and improved application performance.**

## lifecycle:
Basically, an Object pool is a container which contains some amount of objects. So, when an object is taken from the pool, it is not available in the pool until it is put back. 
Objects in the pool have a lifecycle: 

- Creation
- Validation
- Destroy

**Diagram**
![](https://media.geeksforgeeks.org/wp-content/uploads/uml-pool-design.jpg)

- **Client :** This is the class that uses an object of the PooledObject type.
- **ReuseablePool:** The PooledObject class is the type that is expensive or slow to instantiate, or that has limited availability, so is to be held in the object pool.
- **ObjectPool :** The Pool class is the most important class in the object pool design pattern. ObjectPool maintains a list of available objects and a collection of objects that have already been requested from the pool.

## how it works:
1. A “pool” of objects is created. These objects are pre-initialized and ready to use.
2. When an object is needed, it is taken from the pool.

3. The object is used and then returned to the pool when it is no longer needed.


By using this pattern, the program avoids the overhead of creating new objects each time they are needed. This can be more efficient because creating a new object can take time and resources.

The object pool pattern is useful in situations where:

* The cost of initializing a class instance is high.
* The rate of instantiation of a class is high.
* The number of instantiations in use at any one time is low.

## Benefits:
Object pooling can offer a significant performance boost in situations where the cost of initializing a class instance is high and the rate of instantiation and destruction of a class is high – in this case objects can frequently be reused, and each reuse saves a significant amount of time. Object pooling requires resources – memory and possibly other resources, such as network sockets, and thus it is preferable that the number of instances in use at any one time is low, but this is not required.

The pooled object is obtained in predictable time when creation of the new objects (especially over network) may take variable time. These benefits are mostly true for objects that are expensive with respect to time, such as database connections, socket connections, threads and large graphic objects like fonts or bitmaps.

In other situations, simple object pooling (that hold no external resources, but only occupy memory) may not be efficient and could decrease performance. In case of simple memory pooling, the slab allocation memory management technique is more suited, as the only goal is to minimize the cost of memory allocation and deallocation by reducing fragmentation.

## Handling of empty pools

Object pools employ one of three strategies to handle a request when there are no spare objects in the pool.

Fail to provide an object (and return an error to the client).
Allocate a new object, thus increasing the size of the pool. Pools that do this usually allow you to set the high water mark (the maximum number of objects ever used).
In a multithreaded environment, a pool may block the client until another thread returns an object to the pool.

## Pitfalls

**1. Stale Object State:**

- **Problem:** When objects are returned to the pool, their internal state might not be reset properly. This can lead to unexpected behavior in the next usage, causing errors or malfunctions. A pool full of objects with outdated state is often referred to as an "object cesspool" – a scenario to be avoided.
- **Severity:** The severity of stale state depends on the object's purpose and the data it holds. For instance, an object containing authentication details can cause serious security issues if the "authenticated" flag remains set, allowing unauthorized access. On the other hand, failing to reset a debugging variable might not be critical.
- **Solution:** The object pool class is responsible for ensuring objects are reset to a clean state before being returned to the pool. This might involve:
    - Resetting internal flags and counters.
    - Clearing any cached data.
    - Releasing acquired resources.

**2. Information Leaks:**

- **Problem:** Objects handling sensitive data, like credit card numbers, pose a security risk if not properly cleared before being reused. Failure to reset such objects can lead to information leaks, exposing confidential data to unauthorized users.
- **Solution:** The pool's reset mechanism must explicitly address sensitive data. This might involve:
    - Overwriting sensitive data with dummy values.
    - Utilizing secure memory wiping techniques.
    - Employing separate pools for objects with varying data sensitivity levels.

**3. Thread Safety Concerns:**

- **Problem:** When multiple threads access the object pool concurrently, there's a potential for race conditions or unexpected behavior if proper synchronization isn't implemented. This can occur when two threads try to borrow the same object simultaneously.
- **Solution:** Thread safety measures are crucial in multi-threaded environments. Here are some approaches:
    - Utilizing synchronized access mechanisms (e.g., mutexes, semaphores) to control access to the pool and its objects.
    - Employing thread-safe object implementations that can be safely shared across threads without the need for explicit synchronization.

## When Object Pooling Might Not Be the Best Choice

While the object pool design pattern offers performance benefits, there are situations where it might not be the most suitable approach. Here's a breakdown of the criticisms surrounding object pooling in certain languages, particularly Java:

**The Argument Against Pooling in Languages with Efficient Garbage Collection:**

- **Fast Object Allocation:** Proponents of this view argue that object allocation in modern languages like Java, with garbage collectors (GC), is relatively fast. They point out that creating a new object using the "new" keyword might involve as few as ten instructions. 
- **Overhead of Pool Management:** In contrast, the classic "new - delete" cycle used in object pooling involves more complex operations, potentially requiring hundreds of instructions. This includes managing the pool itself, tracking available objects, and handling object retrieval and return.

**Garbage Collection and "Dead" Objects:**

- **GC Focus on Live Objects:** Critics argue that most garbage collectors primarily focus on scanning and reclaiming memory from "live" objects – those still referenced by your code. They claim that the actual memory used by the object's content is not the primary concern for the GC.
- **Cost of Large "Live" Pools:** However, keeping a large pool of unused objects (even if their content doesn't hold significant resources) can still impact performance. Since these objects are still considered "live" by the system due to their presence in the pool, they contribute to the overall memory footprint and potentially extend the duration of garbage collection cycles.

**In essence, the argument suggests that the overhead of managing an object pool might outweigh the benefits of avoiding object creation in languages with efficient garbage collection.**

**Here are some additional factors to consider when deciding whether to use object pooling:**

- **Object Complexity:** If object creation involves significant initialization logic or resource acquisition beyond simple memory allocation, then pooling can still offer advantages.
- **Object Usage Patterns:** If objects are frequently created and destroyed with short lifespans, pooling can help minimize the impact on performance.
- **Memory Constraints:** In scenarios with limited memory availability, avoiding unnecessary object creation through pooling can be beneficial.

## Example
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Object-Pool/Object-Pool.ts)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Object-Pool/Object-Pool.go)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Object-Pool/Object-Pool.js)
- [Py](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Object-Pool/Object-Pool.py)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Object-Pool/Object-Pool.java)