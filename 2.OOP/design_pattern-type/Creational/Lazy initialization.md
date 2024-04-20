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


