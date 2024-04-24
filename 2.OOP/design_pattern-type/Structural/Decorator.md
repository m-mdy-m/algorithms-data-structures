# Decorator

> NOTE: Not to be confused with the concept of "decorators" in Python.

In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other instances of the same class. The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern as well as to the Open-Closed Principle, by allowing the functionality of a class to be extended without being modified.Decorator use can be more efficient than subclassing, because an object's behavior can be augmented without defining an entirely new object.

> Summary: Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

**What problems can it solve?**

* Responsibilities should be added to (and removed from) an object dynamically at run-time.
* A flexible alternative to subclassing for extending functionality should be provided.

**What solution does it describe?**

* implement the interface of the extended (decorated) object (Component) transparently by forwarding all requests to it
* perform additional functionality before/after forwarding a request.

## Example Problem :

Imagine that you’re working on a notification library which lets other programs notify their users about important events.

The initial version of the library was based on the Notifier class that had only a few fields, a constructor and a single send method. The method could accept a message argument from a client and send the message to a list of emails that were passed to the notifier via its constructor. A third-party app which acted as a client was supposed to create and configure the notifier object once, and then use it each time something important happened.

![](https://refactoring.guru/images/patterns/diagrams/decorator/problem1-en.png?id=7658efddaaf43acb64ac63a92025cc1e)

At some point, you realize that users of the library expect more than just email notifications. Many of them would like to receive an SMS about critical issues. Others would like to be notified on Facebook and, of course, the corporate users would love to get Slack notifications.

![](https://refactoring.guru/images/patterns/diagrams/decorator/problem2.png?id=ba5d5e106ea8c4848d60e230feca9135)

How hard can that be? You extended the Notifier class and put the additional notification methods into new subclasses. Now the client was supposed to instantiate the desired notification class and use it for all further notifications.

But then someone reasonably asked you, “Why can’t you use several notification types at once? If your house is on fire, you’d probably want to be informed through every channel.”

You tried to address that problem by creating special subclasses which combined several notification methods within one class. However, it quickly became apparent that this approach would bloat the code immensely, not only the library code but the client code as well.

![](https://refactoring.guru/images/patterns/diagrams/decorator/problem3.png?id=f3b3e7a107d870871f2c3167adcb7ccb)

You have to find some other way to structure notifications classes so that their number won’t accidentally break some Guinness record.

## Solution




## How to Implement:
- Make sure your business domain can be represented as a primary component with multiple optional layers over it.

- Figure out what methods are common to both the primary component and the optional layers. Create a component interface and declare those methods there.

- Create a concrete component class and define the base behavior in it.

- Create a base decorator class. It should have a field for storing a reference to a wrapped object. The field should be declared with the component interface type to allow linking to concrete components as well as decorators. The base decorator must delegate all work to the wrapped object.

- Make sure all classes implement the component interface.

- Create concrete decorators by extending them from the base decorator. A concrete decorator must execute its behavior before or after the call to the parent method (which always delegates to the wrapped object).

- The client code must be responsible for creating decorators and composing them in the way the client needs.