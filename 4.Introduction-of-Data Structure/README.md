# Introduction of Data Structure

## Introduction

A data structure is a specialized format for organizing, processing, retrieving, and storing data. It's like a blueprint that dictates how data elements are arranged and connected. Different data structures excel at different tasks. Some, like arrays, are fantastic for storing large collections of similar data with quick random access. Others, like linked lists, shine when frequent insertions and deletions are needed.

The choice of data structure significantly impacts how efficiently algorithms can operate on the data. A well-matched data structure can dramatically speed up computations, while a poor choice can lead to sluggish performance.

Data structures offer several key benefits:

* **Efficiency:** They optimize data access and manipulation, leading to faster programs.
* **Organization:** They provide a structured way to store and manage complex data relationships.
* **Reusability:** Well-defined data structures can be reused across different programs, saving development time.
* **Clarity:** They improve code readability by making data organization explicit.

## What Exactly Are Data Structures?
At its core, a data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Just as a library uses shelves, sections, and catalog systems to organize books, software uses data structures to organize and store data. The choice of a specific data structure often depends on the nature of the application and the kind of operations that need to be performed on the data.

## Why are data structures important?

Typical base data types, such as integers or floating-point values, that are available in most computer programming languages are generally insufficient to capture the logical intent for data processing and use. Yet applications that ingest, manipulate and produce information must understand how data should be organized to simplify processing. Data structures bring together the data elements in a logical way and facilitate the effective use, persistence and sharing of data. They provide a formal model that describes the way the data elements are organized.
Their significance stems from a multitude of advantages that empower robust and performant software development.

* **Optimized Performance:** Data structures are architected to facilitate the swift retrieval and modification of data elements. Consider a scenario where a grocery list is stored within an array. This structure allows for the instantaneous retrieval of any specific item, directly translating to faster program execution and enhanced responsiveness – critical factors for user satisfaction.

* **Effective Representation of Complexities:** Data structures extend beyond mere data storage. They offer a powerful framework for modeling intricate relationships that exist between data elements. For instance, a tree structure excels at representing hierarchical relationships – akin to an organizational chart where employees report to managers. This structured representation empowers efficient navigation and manipulation of intricate data sets, enabling programs to handle complex information with ease.

* **Reusable Building Blocks:** Well-defined data structures function as pre-fabricated components readily available to programmers. These reusable constructs, such as linked lists (optimized for frequent insertions and deletions), can be seamlessly integrated across diverse programs. This approach fosters code reusability, minimizes development time, and promotes consistency within the codebase, leading to more efficient software development lifecycles.

* **Enhanced Code Readability and Maintainability:** Data structures advocate for well-structured code by explicitly defining data organization. Imagine a program with an unintelligible jumble of variables, contrasting it with one where the connections between data elements are clearly established using appropriate data structures. This clarity significantly improves code readability, making it easier to understand and maintain for both the original programmer and any collaborators, fostering effective teamwork and reducing long-term maintenance costs.

It is not only important to use data structures, but it is also important to choose the proper data structure for each task. Choosing an ill-suited data structure could result in slow runtimes or unresponsive code. Five factors to consider when picking a data structure include the following:

- What kind of information will be stored?
- How will that information be used?
- Where should data persist, or be kept, after it is created?
- What is the best way to organize the data?
- What aspects of memory and storage reservation management should be considered?

## How are data structures used?

In general, data structures are used to implement the physical forms of abstract data types. Data structures are a crucial part of designing efficient software. They also play a critical role in algorithm design and how those algorithms are used within computer programs.

Early programming languages -- such as Fortran, C and C++ -- enabled programmers to define their own data structures. Today, many programming languages include an extensive collection of built-in data structures to organize code and information. For example, Python lists and dictionaries, and JavaScript arrays and objects are common coding structures used for storing and retrieving information.

Software engineers use algorithms that are tightly coupled with the data structures -- such as lists, queues and mappings from one set of values to another. This approach can be fused in a variety of applications, including managing collections of records in a relational database and creating an index of those records using a data structure called a binary tree.

Some examples of how data structures are used include the following:

- **Storing data.** Data structures are used for efficient data persistence, such as specifying the collection of attributes and corresponding structures used to store records in a database management system.
- **Managing resources and services.** Core operating system (OS) resources and services are enabled through the use of data structures such as linked lists for memory allocation, file directory management and file structure trees, as well as process scheduling queues.
- **Data exchange.** Data structures define the organization of information shared between applications, such as TCP/IP packets.
- **Ordering and sorting.** Data structures such as binary search trees -- also known as an ordered or sorted binary tree -- provide efficient methods of sorting objects, such as character strings used as tags. With data structures such as priority queues, programmers can manage items organized according to a specific priority.
- **Indexing.** Even more sophisticated data structures such as B-trees are used to index objects, such as those stored in a database.
- **Searching.** Indexes created using binary search trees, B-trees or hash tables speed the ability to find a specific sought-after item.
- **Scalability.** Big data applications use data structures for allocating and managing data storage across distributed storage locations, ensuring scalability and performance. Certain big data programming environments -- such as Apache Spark -- provide data structures that mirror the underlying structure of database records to simplify querying.

## Characteristics of data structures
**1. Linear vs. Non-Linear Data Structures**

* **Linear Data Structures:**
    * **Features:** Elements are arranged in a sequential order, allowing efficient access in a specific order (like a queue or a list). 
    * **Advantages:** Fast for accessing elements in a specific order (first, second, etc.), efficient for insertion/deletion at the beginning/end. 
    * **Disadvantages:** Slow for accessing elements in random order (need to traverse from the beginning), inflexible for adding/removing elements in the middle (may require shifting other elements).
    * **Example:** Imagine a train with passengers. You can efficiently board/deboard at the beginning (front) or end (back) but finding a specific person in the middle requires going through each car (slow for random access).

* **Non-Linear Data Structures:**
    * **Features:** Elements are not arranged in a specific order, but relationships between elements are represented. Examples include trees and graphs.
    * **Advantages:** Efficient for finding specific elements based on relationships (e.g., searching for a friend in a social network).
    * **Disadvantages:** Can be slower for accessing elements in a sequential order compared to linear structures. Insertion/deletion may involve complex operations depending on the structure.
    * **Example:** Imagine a family tree. Finding a specific person (e.g., your uncle) is faster by following connections (parent-child) than going through a list of all relatives (like in a linear structure).


**2. Homogeneous vs. Heterogeneous Data Structures**

* **Homogeneous Data Structures:**
    * **Features:** All elements in the structure are of the same data type (e.g., an array of integers).
    * **Advantages:** Simpler to implement and access elements, often more memory-efficient for storing similar data types.
    * **Disadvantages:** Less flexible, cannot store different data types within the same structure.
    * **Example:** A shopping cart can only hold items, not a mix of items and customer information (which would require a heterogeneous structure).

* **Heterogeneous Data Structures:**
    * **Features:** Can store elements of different data types within the same structure (e.g., a structure in C that holds an integer, a string, and a boolean value).
    * **Advantages:** More flexible for storing various data types together.
    * **Disadvantages:** Can be more complex to implement and access elements of different types, may require additional memory overhead to store type information.
    * **Example:** A recipe data structure might include ingredients (strings), quantities (numbers), and oven temperature (integer).


**3. Static vs. Dynamic Data Structures**

* **Static Data Structures:**
    * **Features:** Have a fixed size and memory allocation at compile time. They cannot grow or shrink in size after creation.
    * **Advantages:** Simpler to manage memory, often faster access due to pre-defined size.
    * **Disadvantages:** Inflexible, can lead to memory waste if data grows beyond the allocated size or inefficiency if data is much smaller than allocated.
    * **Example:** A fixed-size array to hold daily temperatures for a month. It cannot accommodate additional days if needed.

* **Dynamic Data Structures:**
    * **Features:** Can grow or shrink in size at runtime as needed. They allocate memory as data is added and deallocate when data is removed.
    * **Advantages:** Flexible to accommodate changing data sizes, avoid memory waste.
    * **Disadvantages:** Can be more complex to manage memory, may have some overhead associated with resizing operations.
    * **Example:** Linked lists can grow or shrink as elements are added or removed.

## Data types


**1. Boolean**

* **Description:** Stores logical values, either `true` or `false`. Used for representing yes/no or on/off conditions.
* **Example (Pseudocode):**

```
DECLARE isRaining AS BOOLEAN
SET isRaining TO TRUE

IF isRaining THEN
  PRINT "Bring an umbrella!"
ELSE
  PRINT "No need for an umbrella."
END IF
```

**2. Integer**

* **Description:** Stores whole numbers (no decimals). Different sizes (e.g., 8-bit, 16-bit) hold different ranges of values.
* **Example (Pseudocode):**

```
DECLARE age AS INTEGER
SET age TO 25

PRINT "Your age is: " + age
```

**3. Floating-point number**

* **Description:** Stores real numbers with decimals using an approximation technique. 
* **Example (Pseudocode):**

```
DECLARE pi AS FLOAT
SET pi TO 3.14159

PRINT "The value of pi is: " + pi
```

**4. Character**

* **Description:** Stores a single character, typically represented by its ASCII code (a mapping of numbers to symbols).
* **Example (Pseudocode):**

```
DECLARE initial AS CHARACTER
SET initial TO 'A'

PRINT "Your initial is: " + initial
```

**5. String**

* **Description:** Stores a sequence of characters, often used to represent text. Can be implemented with a null terminator (ending with a zero value) or with a separate length field.
* **Example (Pseudocode):**

```
DECLARE name AS STRING
SET name TO "Alice"

PRINT "Your name is: " + name
```
### Simple explanation:

**Imagine a Library as a Data Structure**

Think of a library as a massive data structure that stores information (books) efficiently. The way books are organized and accessed reflects different data structure concepts.

**Data Types in the Library Analogy**

* **Boolean:** A library card is either valid (TRUE) or invalid (FALSE).
* **Integer:** The Dewey Decimal Classification system assigns a unique integer (number) to each book category (e.g., 510 for Mathematics).
* **Floating-point number:** The average rating of a book might be a floating-point number (e.g., 4.32).
* **Character:** Each letter on a book's title or author's name is a character.
* **String:** The title of a book is a sequence of characters forming a string.

**Characteristics of Data Structures in the Library**

**1. Linear vs. Non-Linear Data Structures**

* **Linear:** Books on shelves can be seen as a linear data structure. You can efficiently browse books sequentially (one after another) based on their Dewey Decimal Classification order. However, finding a specific book by title might require scanning the entire shelf (slow for random access).

* **Non-Linear:** The library catalog acts as a non-linear data structure. It uses relationships (author names, titles, keywords) to find specific books efficiently. You can search for a book by title (e.g., "Pride and Prejudice") and quickly locate it in the library, regardless of its physical location on a shelf.

**2. Homogeneous vs. Heterogeneous Data Structures**

* **Homogeneous:** A shelf holding only math textbooks is a homogeneous structure, as all elements (books) are of the same type (math books).

* **Heterogeneous:** The library itself is a heterogeneous structure. It stores various data types: books (containing text, images), DVDs (containing videos), and audiobooks (containing audio recordings).

**3. Static vs. Dynamic Data Structures**

* **Static:** A fixed-size bookshelf is a static structure. Once built, it cannot hold more books unless additional shelves are added (similar to a fixed-size array in programming).

* **Dynamic:** A library's card catalog is a dynamic structure. It can grow or shrink as new books are added or removed from the collection (similar to a linked list in programming that can adjust its size dynamically).

**Beyond the Library Analogy**

Data structures extend far beyond physical libraries. They are fundamental building blocks in computer science, enabling efficient organization and manipulation of data in various real-world applications:

* **Social Networks:** User profiles and connections can be modeled using graphs, where users are nodes, and connections (friendships) are edges.
* **Traffic Management:** Traffic light patterns can be implemented using queues, where cars wait in a specific order.
* **Online Shopping:** Shopping carts can be represented as arrays or linked lists to hold purchased items.
* **Music Players:** Playlists can be structured as linked lists or stacks, allowing users to add, remove, and play songs in a specific order.

### Terminologies:

**Abstract Data Type (ADT):**

* An ADT formally defines a collection of data elements and the allowable operations on that data, independent of the underlying implementation details. It acts as a contract, specifying the functionalities a data structure should provide without dictating how the data is physically stored in memory. This separation allows for flexibility in choosing different implementations while maintaining consistent behavior for the user.

**Data Structure:**

* A data structure is a specific realization of an ADT, providing a concrete in-memory representation for the data and the associated operations. It dictates how the data elements are organized and connected, enabling efficient storage, retrieval, and manipulation. Different data structures offer varying performance characteristics for different operations. Arrays excel at random access, while linked lists are more efficient for frequent insertions and deletions.

**Operation:**

* An operation refers to an action performed on a data structure. Common operations include insertion (adding an element), deletion (removing an element), searching (finding a specific element), and traversal (visiting all elements in a particular order). The efficiency of these operations is a crucial factor when selecting an appropriate data structure for a given task.

**Time Complexity:**

* Time complexity analyzes the execution time of an operation on a data structure as the data size increases. It's typically expressed using Big O notation, a mathematical way to categorize algorithms based on their worst-case, average-case, or best-case time complexity. For example, searching an unsorted array has a time complexity of O(n) (linear search), signifying that the search time may grow linearly with the array size. Selecting a data structure with optimal time complexity for the desired operations is essential for efficient program execution.

**Space Complexity:**

* Space complexity measures the amount of memory a data structure requires to store the data. It considers both the size of the data elements themselves and any additional overhead associated with the chosen structure's implementation. For instance, arrays generally have lower space complexity compared to linked lists due to their simpler structure. However, linked lists become more space-efficient when frequent insertions and deletions are needed, as they avoid data shifting during these operations.

**Efficiency:**

* Efficiency refers to the trade-off between time and space complexity of operations on a data structure. The goal is to strike a balance, choosing a structure that allows for frequent operations to be performed quickly while minimizing memory usage. Selecting the right data structure has a significant impact on the overall performance of a program.

**Homogeneous vs. Heterogeneous:**

* **Homogeneous data structures** store elements of the same data type. Examples include arrays of integers or lists of strings.
* **Heterogeneous data structures** can store elements of different data types within the same structure. For instance, a record in a database might contain an integer (ID), a string (name), and a floating-point number (salary).

**Static vs. Dynamic:**

* **Static data structures** have a fixed size allocated at compile time. They cannot grow or shrink in size after creation. This characteristic provides efficient memory access but limits flexibility for data of unknown size beforehand.
* **Dynamic data structures** can adjust their size at runtime as needed. They allocate memory as data is added and deallocate when data is removed. This flexibility is beneficial for handling data of unknown size or that may change during program execution.

**Linear vs. Non-Linear:**

* **Linear data structures** arrange elements in a sequential order, like a list. Accessing elements efficiently requires following that order (e.g., first, second, etc.). Examples include arrays, queues, and stacks.
* **Non-linear data structures** represent relationships between elements, not necessarily in a strict order. This structure allows for efficient searching based on those relationships. Examples include trees and graphs.

### Implementation

Data structures can be implemented using a variety of programming languages and techniques, but they all share the common goal of efficiently organizing and storing data.Data structures are generally based on the ability of a computer to fetch and store data at any place in its memory, specified by a pointer—a bit string, representing a memory address, that can be itself stored in memory and manipulated by the program. Thus, the array and record data structures are based on computing the addresses of data items with arithmetic operations, while the linked data structures are based on storing addresses of data items within the structure itself. This approach to data structuring has profound implications for the efficiency and scalability of algorithms. For instance, the contiguous memory allocation in arrays facilitates rapid access and modification operations, leading to optimized performance in sequential data processing scenarios.

The implementation of a data structure usually requires writing a set of procedures that create and manipulate instances of that structure. The efficiency of a data structure cannot be analyzed separately from those operations. This observation motivates the theoretical concept of an abstract data type, a data structure that is defined indirectly by the operations that may be performed on it, and the mathematical properties of those operations (including their space and time cost).

## Most Popular Data Structures: 

### Array:

An array is a fundamental data structure that stores a fixed-size, **ordered** collection of elements of the same data type. Elements are accessed using a numerical index, starting from 0. It's like a shelf where each item has a designated position.

**Time complexity:**
* **Access:** O(1) - Constant time. The beauty of arrays lies in their ability to directly retrieve any element using its index. This direct mapping translates to exceptionally fast retrieval operations.
* **Search:** O(n) - Linear time in the worst case. While random access excels, searching for a specific element without knowing its index can be slow. In the worst case, you might need to traverse the entire array to find the desired element.
* **Insertion:** O(n) - Linear time in the worst case. Inserting an element in the middle of an array often necessitates shifting existing elements to maintain order. This shifting can become expensive for large arrays. However, insertion at the beginning or end can be optimized to constant time (O(1)) in some implementations.
* **Deletion:** O(n) - Linear time in the worst case. Similar to insertion, deleting an element in the middle can be costly due to the potential need for shifting elements. Deletion at the beginning or end can be achieved in constant time (O(1)) for some implementations.

**Applications of Arrays**

* **Storing Large Datasets:** They excel at efficiently storing extensive collections of similar data types, such as student grades in a class, inventory items in a warehouse, or image pixel values for image processing.
* **Building Block for Other Structures:** Arrays act as the foundation for constructing more complex data structures like matrices, stacks, and queues. These higher-level structures leverage arrays internally for data storage.
* **Random Access Operations:** When frequent retrieval of elements by their position is crucial, arrays are the go-to choice due to their fast random access capability.

**Advantages of Arrays:**

* **Efficient Random Access:** Retrieving elements using their index is a fundamental strength of arrays, offering constant time (O(1)) complexity.
* **Straightforward Implementation:** Arrays are relatively easy to understand and implement in most programming languages. Their intuitive concept makes them a cornerstone for beginners to grasp data structure fundamentals.
* **Cache-Friendly Access:** Contiguous memory allocation allows arrays to benefit from CPU cache optimization. When elements are stored sequentially in memory, cache lines can be loaded more efficiently, leading to performance improvements for operations that access elements in a sequential order.

**Disadvantages of Arrays:**

* **Fixed Size Limitation:** Once an array is created with a predefined size, its size cannot be dynamically changed. This inflexibility can be a drawback if the data size is unknown beforehand or if the data collection needs to grow or shrink during program execution.
* **Costly Insertions/Deletions in the Middle:** Inserting or deleting elements in the middle of an array can be expensive (O(n)) as elements need to be shifted to preserve the order. This can become a bottleneck for operations that frequently modify the array's internal structure.
* **Potential Memory Wastage:** If the array is not filled to capacity, there can be wasted memory space allocated for unused elements. This inefficiency might be a concern for memory-constrained systems.

**What is its use?**

* **Storing collections:** They can hold lists of numbers, characters, objects, or any other data type as long as it's the same type for all elements.
* **Implementing algorithms:** Many algorithms rely on arrays for data storage and manipulation, such as sorting algorithms (e.g., bubble sort, insertion sort) and searching algorithms (e.g., linear search).
* **Representing multi-dimensional data:** Arrays can be nested to create matrices or grids, useful for image processing, game boards, and mathematical calculations.

**simple example**

```python
# Array to store exam scores for 5 students
scores = [85, 92, 78, 98, 65]

# Accessing the second element (index 1)
second_score = scores[1]  # second_score will be 92

# Looping through the array and printing each score
for score in scores:
  print(score)
```
---

### Linked Lists:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

### Stack:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

### Queue:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

### Binary Tree:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

### Binary Search Tree:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

### Heap:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

### Hashing Data Structure:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

### Matrix:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

### Trie:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

### Graph:

**Applications of Arrays**

**Time complexity:**

**Advantages of arrays**

**Disadvantages of arrays**

**What is its use?**

**simple example**

---

## How to choose a data structure
When choosing a data structure for a program or application, developers should consider the answers to the following three questions:

- **Supported operations.** What functions and operations does the program need?
- **Computational complexity.** What level of computational performance is tolerable? For speed, a data structure whose operations execute in time linear to the number of items managed -- using Big O Notation: O(n) -- will be faster than a data structure whose operations execute in time proportional to the square of the number of items managed -- O(n^2).
- **Programming elegance.** Are the organization of the data structure and its functional interface easy to use?