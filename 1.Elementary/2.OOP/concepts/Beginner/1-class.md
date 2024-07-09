# Summary

In a nutshell, classes are essentially user-defined data types. Classes are where we create a blueprint for the structure of methods and attributes. Individual objects are instantiated from this blueprint.
Classes contain fields for attributes and methods for behaviors.

## Example :

```js
class Logger {
  constructor(message) {
    this.message = message;
  }

  log() {
    console.log(`Logging: ${this.message}`);
  }

  error() {
    console.error(`Error: ${this.message}`);
  }
}
```

### Attributes:

Attributes, often referred to as properties or fields, encapsulate the state or characteristics of objects instantiated from a class. They define the data associated with an object and represent its internal state. In the `Logger` class example, the `message` attribute stores the content to be logged, providing context to the logging operations.

### Methods:

Methods encapsulate the behavior or actions that objects can exhibit. They represent the operations that objects can perform and operate on the object's attributes to accomplish tasks. Methods are integral to defining the functionality of a class and enable interaction with its attributes. In the `Logger` class example, the `log()` and `error()` methods orchestrate the logging actions, providing distinct functionalities for regular logging and error reporting.
