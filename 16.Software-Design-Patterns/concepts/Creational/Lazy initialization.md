# Lazy initialization

In computer programming, lazy initialization is the tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed. It is a kind of lazy evaluation that refers specifically to the instantiation of objects or other resources.

This is typically accomplished by augmenting an accessor method (or property getter) to check whether a private member, acting as a cache, has already been initialized. If it has, it is returned straight away. If not, a new instance is created, placed into the member variable, and returned to the caller just-in-time for its first use.

### How is it used?
In a software design pattern view, lazy initialization is often used together with a [factory method](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/design_pattern-type/Creational/Factory%20method.md) pattern. This combines three ideas:

- Using a factory method to create instances of a class (factory method pattern)
- Storing the instances in a map, and returning the same instance to each request for an instance with same parameters (multiton pattern)
- Using lazy initialization to instantiate the object the first time it is requested (lazy initialization pattern)

**Simple explanations for better understanding:**

Imagine you're at a library. You walk in and head straight to your favorite reading area. There's no need to turn on all the lights as soon as you enter the library (creating the object) - that would be a waste of energy!

The library uses lazy initialization. Lights near reading areas have sensors (the accessor method). When someone sits down (the first time it's needed), the sensor detects movement and turns on the light just for that area (the object is created). This saves energy for times when no one is using a particular area.

> Summary : Lazy initialization is a technique in programming that delays creating an object, calculating a value, or performing some expensive task until it's actually needed. This helps save resources (like memory or processing power) when those things aren't being used.


**Lazy Initialization for Efficient Array Handling**

In theoretical computer science, lazy initialization, also known as a lazy array, is a technique for designing data structures that work with uninitialized memory. Imagine you have a table `T` with `n` memory cells (numbered 1 to `n`) that are initially blank. You want to assign values (`vi`) to specific cells (`T[ki]`) for `m` pairs (`ki`, `vi`). Here's where lazy initialization shines.

Traditionally, you might initialize all `n` cells in `T` first, then assign values to the `m` desired ones. This takes `O(m + n)` operations. Lazy initialization offers a more efficient approach, requiring only `O(m)` operations.

**How it Works:**

1. **Store Key-Value Pairs:** Instead of initializing `T`, create a separate table `V` that holds the `m` pairs (`ki`, `vi`) in any order. This table acts as a reference for the actual values.
2. **Mark Initialized Cells in T:**  For each `ki` in `T`, instead of storing the value `vi`, store the position (index) in `V` where the corresponding pair (`ki`, `vi`) is located. This "marker" indicates that `T[ki]` is an initialized cell.
3. **Leave Unneeded Cells Empty:** All other cells in `T` remain uninitialized.

**Efficient Lookups:**

When you need to access a cell `T[k]`:

1. **Check if in Initialized Range:**  First, verify if `k` falls within the range of cells that might be initialized (1 to `m`). If not, `T[k]` is simply uninitialized.
2. **Verify Value Pair in V:**  If `k` is within the range, look up the index stored in `T[k]` within table `V`. Then, check if the first element of the pair stored at that position in `V` actually matches `k`. This double-check ensures `T[k]` wasn't just a random index that fell into the range. 
3. **Retrieve Value:** If both checks pass, you've confirmed `T[k]` is an initialized cell. The actual value can be retrieved from the second element of the pair stored at the looked-up position in `V`.


### Example
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Lazy-initialization/Lazy-initialization.ts)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Lazy-initialization/Lazy-initialization.js)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Lazy-initialization/Lazy-initialization.go)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Lazy-initialization/Lazy-initialization.java)
- [Py](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/16.Software-Design-Patterns/example/Creational/Lazy-initialization/Lazy-initialization.py)