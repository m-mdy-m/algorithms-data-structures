# Introduction of Data Structure

## Introduction

A data structure is a specialized format for organizing, processing, retrieving and storing data. There are several basic and advanced types of data structures, all designed to arrange data to suit a specific purpose. Data structures make it easy for users to access and work with the data they need in appropriate ways. Most importantly, data structures frame the organization of information so that machines and humans can better understand it.

In computer science and computer programming, a data structure may be selected or designed to store data for the purpose of using it with various algorithms. In some cases, the algorithm's basic operations are tightly coupled to the data structure's design. Each data structure contains information about the data values, relationships between the data and -- in some cases -- functions that can be applied to the data.

For instance, in an object-oriented programming language, the data structure and its associated methods are bound together as part of a class definition. In non-object-oriented languages, there may be functions defined to work with the data structure, but they are not technically part of the data structure.

## Why are data structures important?

Typical base data types, such as integers or floating-point values, that are available in most computer programming languages are generally insufficient to capture the logical intent for data processing and use. Yet applications that ingest, manipulate and produce information must understand how data should be organized to simplify processing. Data structures bring together the data elements in a logical way and facilitate the effective use, persistence and sharing of data. They provide a formal model that describes the way the data elements are organized.

Data structures are the building blocks for more sophisticated applications. They are designed by composing data elements into a logical unit representing an abstract data type that has relevance to the algorithm or application. An example of an abstract data type is a "customer name" that is composed of the character strings for "first name," "middle name" and "last name."

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
Data structures are often classified by their characteristics. The following three characteristics are examples:

1. )  **Linear or non-linear.** This characteristic describes whether the data items are arranged in sequential order, such as with an array, or in an unordered sequence, such as with a graph.
2. ) **Homogeneous or heterogeneous.** This characteristic describes whether all data items in a given repository are of the same type. One example is a collection of elements in an array, or of various types, such as an abstract data type defined as a structure in C or a class specification in Java.
3. )**Static or dynamic.** This characteristic describes how the data structures are compiled. Static data structures have fixed sizes, structures and memory locations at compile time. Dynamic data structures have sizes, structures and memory locations that can shrink or expand, depending on the use.

## Classification/Types of Data Structures:

1. Linear Data Structure
2. Non-Linear Data Structure.
**Linear Data Structure:**
- Elements are arranged in one dimension ,also known as linear dimension.
- Example: lists, stack, queue, etc.
**Non-Linear Data Structure**
- Elements are arranged in one-many, many-one and many-many dimensions.
- Example: tree, graph, table, etc.

![](https://media.geeksforgeeks.org/wp-content/uploads/20220520182504/ClassificationofDataStructure-660x347.jpg)

## Data types

If data structures are the building blocks of algorithms and computer programs, the primitive -- or base -- data types are the building blocks of data structures. The typical base data types include the following:

- **Boolean,** which stores logical values that are either true or false.
- **integer,** which stores a range on mathematical integers -- or counting numbers. Different sized integers hold a different range of values -- e.g., a signed 8-bit integer holds values from -128 to 127, and an unsigned long 32-bit integer holds values from 0 to 4,294,967,295.
- **Floating-point numbers,** which store a formulaic representation of real numbers.
- **Fixed-point numbers,** which are used in some programming languages and hold real values but are managed as digits to the left and the right of the decimal point.
- **Character,** which uses symbols from a defined mapping of integer values to symbols.
- **Pointers,** which are reference values that point to other values.
- **String,** which is an array of characters followed by a stop code -- usually a "0" value -- or is managed using a length field that is an integer value.

![](https://cdn.ttgtmedia.com/rms/onlineimages/whatis-data_structure.png)

### Simple explanation:

### Terminologies:

### Implementation

Data structures can be implemented using a variety of programming languages and techniques, but they all share the common goal of efficiently organizing and storing data.Data structures are generally based on the ability of a computer to fetch and store data at any place in its memory, specified by a pointer—a bit string, representing a memory address, that can be itself stored in memory and manipulated by the program. Thus, the array and record data structures are based on computing the addresses of data items with arithmetic operations, while the linked data structures are based on storing addresses of data items within the structure itself. This approach to data structuring has profound implications for the efficiency and scalability of algorithms. For instance, the contiguous memory allocation in arrays facilitates rapid access and modification operations, leading to optimized performance in sequential data processing scenarios.

The implementation of a data structure usually requires writing a set of procedures that create and manipulate instances of that structure. The efficiency of a data structure cannot be analyzed separately from those operations. This observation motivates the theoretical concept of an abstract data type, a data structure that is defined indirectly by the operations that may be performed on it, and the mathematical properties of those operations (including their space and time cost).

## Most Popular Data Structures: 
1. ) Array:
2. ) Linked Lists:
3. ) Stack:
4. ) Queue:
5. ) Binary Tree:
6. ) Binary Search Tree:
7. ) Heap:
8. ) Hashing Data Structure:
9. ) Matrix:
10. ) Trie:
11. ) Graph:

## How to choose a data structure
When choosing a data structure for a program or application, developers should consider the answers to the following three questions:

- **Supported operations.** What functions and operations does the program need?
- **Computational complexity.** What level of computational performance is tolerable? For speed, a data structure whose operations execute in time linear to the number of items managed -- using Big O Notation: O(n) -- will be faster than a data structure whose operations execute in time proportional to the square of the number of items managed -- O(n^2).
- **Programming elegance.** Are the organization of the data structure and its functional interface easy to use?