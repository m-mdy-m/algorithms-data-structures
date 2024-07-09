
## Binary and Hexadecimal Numbers
- **Binary Numbers**
  - Representation of Data
  - Binary Arithmetic
  - Bitwise Operations (AND, OR, XOR, NOT, Shifts)
- **Hexadecimal Numbers**
  - Conversion between Binary and Hexadecimal
  - Uses in Memory Addressing and Debugging

## Integer Overflow and Underflow
- **Concepts**
  - Definition and Causes
  - Detection and Handling
- **Examples**
  - Integer Overflow in Different Programming Languages (C/C++, Java, Python)
  - Real-world Cases of Integer Overflow Exploits

## Endianness
- **Big Endian vs. Little Endian**
  - Definitions and Differences
  - How Endianness Affects Data Storage and Transmission
- **Endianness in Systems**
  - Determining Endianness Programmatically
  - Handling Endianness in Data Exchange

## Buffer and Buffer Overflows
- **Buffers**
  - Definition and Usage in Memory Management
  - Types of Buffers (Static vs. Dynamic)
- **Buffer Overflow**
  - Definition and Causes
  - Stack-based vs. Heap-based Buffer Overflows
- **Buffer Overflow Exploits**
  - Common Vulnerabilities and Exploit Techniques
  - Mitigation Strategies (Bounds Checking, Safe Libraries, ASLR, DEP)

## Memory Management
- **Memory Allocation**
  - Static vs. Dynamic Allocation
    - **Static Allocation**: Memory allocated at compile time. Once allocated, it cannot be freed until the program terminates. Used for global and static variables.
    - **Dynamic Allocation**: Memory allocated at runtime using functions like `malloc`, `calloc`, and `realloc` in C. This memory must be explicitly freed using `free`.
  - Stack vs. Heap Memory
    - **Stack Memory**: Used for static memory allocation. Functions and local variables are stored here. It operates on a LIFO (Last In, First Out) principle.
    - **Heap Memory**: Used for dynamic memory allocation. The size is determined at runtime and it must be managed manually by the programmer.
- **Ownership (Rust)**
  - **Concept**: Ownership is a feature in Rust that ensures memory safety without needing a garbage collector. It enforces rules at compile time to prevent data races and memory leaks.
  - **Borrowing and Lifetimes**: 
    - **Borrowing**: Allows you to reference data without taking ownership. Mutable and immutable borrowing are supported.
    - **Lifetimes**: Specify how long references are valid to ensure they don’t outlive the data they point to.
- **Ownership and Concurrency**
  - **Concurrency Model**:
    - Ownership rules prevent data races at compile time.
    - Guarantees thread safety without locks or atomic operations in most cases.
- **Garbage Collection**
  - Concepts and Mechanisms
    - **Automatic Memory Management**: Garbage collection automatically reclaims memory occupied by objects that are no longer in use.
    - **Mechanisms**: Implemented in languages like Java, C#, and Python to simplify memory management for developers.
  - Garbage Collection Algorithms
    - **Mark and Sweep**: The collector traverses all reachable objects starting from root references, marks them, and then sweeps through memory to collect unmarked objects.
    - **Reference Counting**: Each object has a counter tracking how many references point to it. When the count drops to zero, the object can be collected.
    - **Generational GC**: Divides objects into generations. Younger objects are collected more frequently than older ones, improving efficiency.


## Pointers and References
- **Pointers in C/C++**
  - Pointer Arithmetic
  - Null Pointers and Dangling Pointers
- **Smart Pointers**
  - Unique Pointers, Shared Pointers, and Weak Pointers (C++11 and beyond)
- **References in Other Languages**
  - References in Java, Python, and Other High-Level Languages

## Assembly Language Basics
- **Introduction to Assembly Language**
  - Basic Syntax and Structure
  - Registers, Instructions, and Addressing Modes
- **Writing and Understanding Simple Programs**
  - Hello World in Assembly
  - Basic Arithmetic Operations

## System Calls and Interrupts
- **System Calls**
  - Definition and Examples
  - How System Calls Work in Different Operating Systems (Unix/Linux, Windows)
- **Interrupts**
  - Hardware vs. Software Interrupts
  - Interrupt Handling and Interrupt Service Routines (ISRs)

## Debugging and Profiling
- **Debugging Tools**
  - GDB, LLDB for C/C++
  - PDB for Python
- **Profiling Tools**
  - CPU Profilers (gprof, Valgrind, perf)
  - Memory Profilers (Massif, Valgrind)