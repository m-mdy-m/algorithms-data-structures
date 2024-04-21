## Shape Area Calculator with Factory Method (or Prototype Pattern)

> **It can be implemented using the factory method in this project**

This project will create a shape area calculator application that demonstrates the Factory Method or Prototype design pattern. Users can select different shapes and calculate their areas.

### Choosing a Language

You can implement this project in various programming languages that support object-oriented programming concepts. Here are some popular choices:

* **Python:** A beginner-friendly language with clear syntax, making it a great choice for this project.
* **Java:** A widely used language in object-oriented programming, offering good libraries and resources for learning design patterns.
* **JavaScript:** While not traditionally object-oriented at its core, JavaScript can be used with object-oriented principles. Consider libraries like TypeScript for a more structured approach.
* **TypeScript:** Offers strong typing and static code checking for better code quality.
* **Go:** Compiled language known for its simplicity, speed, and ease of use.

**Once you choose a language, follow the implementation steps below specific to that language.**

### Implementation Breakdown:

Here's a breakdown of how to implement the Shape Area Calculator project:

### 1. Factory Method Implementation:

**Classes:**

* **Shape (Abstract Class):**
    * Defines the `calculateArea()` method as abstract, forcing subclasses to implement the specific area calculation logic.
    * May contain common methods applicable to all shapes (e.g., `getName()` to return the shape type).

* **Concrete Shape Classes (Circle, Rectangle, Triangle, etc.):**
    * Inherit from `Shape`.
    * Implement the `calculateArea()` method using the specific formula for that shape (e.g., circle area = pi * radius^2).
    * May have additional methods specific to the shape (e.g., `getRadius()` for Circle).

* **ShapeFactory:**
    * Encapsulates the logic for creating different shapes.
    * Provides a `createShape(String shapeType)` method that takes a string representing the desired shape type (e.g., "Circle", "Rectangle").
    * Internally, uses a conditional statement (or a map for better scalability) to check the provided shape type.
    * Based on the type, instantiates the corresponding concrete shape subclass using the `new` keyword.
    * Returns the newly created concrete shape object.

**Implementation Steps:**

1. Create the abstract `Shape` class and define the `calculateArea()` method.
2. Implement concrete shape classes extending `Shape`, each with its specific area calculation logic.
3. Design the `ShapeFactory` class with the `createShape()` method.
4. Inside `createShape()`, use conditionals or a map to check the shape type and instantiate the appropriate concrete shape subclass.
5. In your user interface (UI), interact with the `ShapeFactory` to create shapes based on user selections.
6. Call the `calculateArea()` method on the obtained shape object to get the area.

### 2. Prototype Pattern Implementation:

**Classes:**

* **Shape (Interface):** (Optional)
    * Defines the `calculateArea()` method, forcing implementing classes to provide the area calculation logic.

* **Concrete Shape Classes (CirclePrototype, RectanglePrototype, TrianglePrototype, etc.):**
    * Implement the `Shape` interface (if used) or directly define the `calculateArea()` method.
    * Represent prototype objects for each shape type.
    * Contain pre-defined properties relevant to the shape (e.g., `radius` for CirclePrototype).
    * Implement a `clone()` method that creates a deep copy of the prototype object.

**Implementation Steps:**

1. Create concrete shape classes (prototypes) with pre-defined properties and the `calculateArea()` method.
2. Implement the `clone()` method within each prototype class to create deep copies.
3. In your UI, interact with the prototype objects directly.
4. When a user selects a shape, call the `clone()` method on the corresponding prototype to create a new shape object.
5. Modify the newly created object's properties (e.g., set radius for a cloned Circle object) if needed.
6. Call the `calculateArea()` method on the modified object to get the area.

**3. User Interaction:**

* Design a simple user interface (text-based or graphical) to allow users to select the shape they want to calculate the area for.
* Utilize the `ShapeFactory` class (or Prototype objects) to create a specific shape object based on user selection.
* Call the `calculateArea()` method on the shape object to get the area.
* Display the calculated area to the user.


**Choosing the Right Pattern:**

* **Factory Method:** Ideal for centralized control over shape creation and easier addition of new shapes without modifying the UI.
* **Prototype Pattern:** Excellent for performance optimization when dealing with many identical shapes.