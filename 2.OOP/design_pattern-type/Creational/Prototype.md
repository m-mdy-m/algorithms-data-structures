# Prototype: 

The Prototype design pattern is a creation design pattern that specifies creating new objects by copying an existing object, thus avoiding the need to create new classes. This pattern allows us to clone existing objects, creating new instances with the same data. Any changes made to the cloned object do not affect the original object. It’s especially handy when the cost of creating an object is more expensive or complex than copying an existing one.

The newly copied object may change the same properties only if required. This approach saves costly resources and time, especially when object creation is a heavy process.
The prototype pattern is a creational design pattern. Prototype patterns are required when object creation is a time-consuming, and costly operation, so we create objects with the existing object itself.
One of the best available ways to create an object from existing objects is the clone() method. Clone is the simplest approach to implementing a prototype pattern. However, it is your call to decide how to copy existing objects based on your business model.

Suppose a user creates a document with a specific layout, fonts, and styling, and wishes to create similar documents with slight modifications.

Instead of starting from scratch each time, the user can use the Prototype pattern. The original document becomes the prototype, and new documents are created by cloning this prototype. This approach ensures that the new documents inherit the structure and styling of the original document while allowing for customization.


**Simple and understandable explanation:** 

**Imagine you're a designer creating a new line of furniture.**

* **Prototype (Sample Chair):** You meticulously craft a single chair with the perfect design, materials, and finish. This chair becomes your "prototype" - the blueprint for all the chairs in your furniture line.
* **Cloning (Mass Production):** Instead of building each chair entirely from scratch, you leverage the prototype. A workshop team takes the prototype and creates exact copies using the same materials and construction techniques. This cloning process efficiently produces new chairs based on the established prototype.
* **Customization (Variations):** While the core design comes from the prototype, there's room for customization. You might create different colored versions of the chair, use different fabrics for upholstery, or even adjust the size slightly. These variations represent mod


> Summary : A way to create new objects by copying existing ones.



##  Example Problem 
Absolutely! Let's ditch the code and explore the Prototype pattern using a familiar real-world scenario:

**Creating Documents with Templates**

Imagine you're a teacher who needs to create personalized report cards for your students. Each report card should contain common elements like student name, subjects, grading scale, and a section for teacher comments. However, you want to personalize each report card with specific grades and comments for each student.

**Traditional Approach (Without Prototype Pattern):**

1. **Manual Creation:** You start from scratch every time, creating a new document and entering all the standard elements (name, subjects, grading scale). Then, you manually fill in the specific grades and comments for each student. This is repetitive and time-consuming.

**Problems with Traditional Approach:**

- **Inefficiency:** Creating reports from scratch for each student wastes time and effort.
- **Inconsistency:** There's a risk of missing standard elements or introducing typos if you don't have a pre-defined format to follow.

**Prototype Pattern to the Rescue!**

1. **Master Report Card:** You create a master report card document that serves as the prototype. This document includes all the standard elements (name, subjects, grading scale, comment section) but leaves placeholders for the specific student information.
2. **Creating Student Reports:** When you need a report for a student, you simply copy (clone) the master report card. This creates a new document with all the standard elements pre-filled.
3. **Personalization:** You then personalize the cloned report card by filling in the specific student's name, grades, and your comments.

**Benefits of Prototype Pattern:**

- **Increased Efficiency:** Cloning a pre-defined template saves time and effort compared to building each report from scratch.
- **Improved Consistency:** Using a consistent template ensures all report cards have the same structure and essential elements.
- **Easy Customization:** Cloning allows for easy personalization with specific student information while maintaining the overall format.


## Better Understanding


![](https://softwareparticles.com/wp-content/uploads/2023/07/featured-768x514.jpg)

> OR =>

![](https://www.dofactory.com/img/diagrams/javascript/javascript-prototype.jpg)

## When to use

- Creating Objects is Costly:
  - Use the Prototype Pattern if you want to create an object with the same property values from another existing object.
- Variations of Objects:
  - Use the Prototype pattern when your system needs to support a variety of objects with slight variations.
- Dynamic Configuration:
  - Use the Prototype pattern when your system requires dynamic configuration and you want to create objects with configurations at runtime.
  - You can prototype a base configuration and clone it, adjusting the properties as needed.
- Reducing Initialization Overhead:
  - Use the Prototype pattern when you want to reduce the overhead of initializing an object.


## When not to use
- Unique Object Instances:
   - Avoid using the Prototype pattern when your application predominantly deals with unique object instances, and the overhead of implementing the pattern outweighs its benefits.
- Simple Object Creation:
   - If object creation is simple and does not involve significant resource consumption, and there are no variations of objects, using the Prototype pattern might be unnecessary complexity.
- Immutable Objects:
   - If your objects are immutable (unchangeable) and do not need variations, the benefits of cloning may not be significant.
   - Immutable objects are often safely shared without the need for cloning.
- Clear Object Creation Process:
   - If your system has a clear and straightforward object creation process that is easy to understand and manage, introducing the Prototype pattern may add unnecessary complexity.
- Limited Object Variations:
   - If there are only a few variations of objects, and creating subclasses or instances with specific configurations is manageable, the Prototype pattern might be overkill.

## Shallow Copy vs Deep Copy
When implementing the Prototype Pattern, you need to consider whether to use a shallow copy or a deep copy.

* Shallow Copy – A shallow copy creates a new object and copies the values of all the fields from the original object to the new object. However, if the fields of the original object contain references to other objects, the shallow copy simply copies the references, not the actual objects. As a result, both the original object and the copied object will refer to the same objects. In other words, a shallow copy shares the internal references with the original object.
* Deep Copy – A deep copy, on the other hand, creates a new object and recursively copies the values of all the fields from the original object to the new object. If the fields of the original object contain references to other objects, the deep copy also creates new copies of those referenced objects and assigns them to the corresponding fields in the copied object. This ensures that the copied object has its own independent copies of all the objects it references. This can be handy in cases where we want to alter the copied object without affecting other references. This approach is usually more expensive than a Shallow copy.


## Example 
- [TS](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Creational/Prototype/Prototype.ts)
- [JS](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Creational/Prototype/Prototype.js)
- [JAVA](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Creational/Prototype/Prototype.java)
- [Python](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Creational/Prototype/Prototype.py)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/2.OOP/concepts/MediumExample/design_patterns/Creational/Prototype/Prototype.go)
