# What is Algorithm

## INTRODUCTION

The word “Algorithm” is derived from the name of the Persian scholar **[Abdullah Jafar Muhammad ibn Musa Al-Khwarizmi](https://en.wikipedia.org/wiki/Al-Khwarizmi)** , a mathematician and astronomer from the ninth century. His work laid the foundation for algebra and the development of algorithmic processes in mathematics. He is often referred to as the "father of algebra.". Al-Khwarizmi's contribution to the definition of an algorithm is profound:

An **Algorithm** is a well-defined computational procedure, composed of a finite set of steps, that takes one or more inputs and produces an output. These steps form a systematic method for solving a problem or performing a calculation, which can be executed manually or by a machine (e.g., a computer).

The modern definition of an algorithm retains this concept while also emphasizing computational efficiency and precision. An algorithm is **finite** and **deterministic**, meaning it must have a definite end and the outcome must be predictable from the inputs.

### Definition of an Algorithm (by Al-Khwarizmi):

An algorithm is a systematic procedure for solving a mathematical problem in a finite number of steps, which includes well-defined instructions to achieve a specific outcome. **An Algorithm** is a precise rule or set of rules to solve a problem, especially by a computer, in a step-by-step manner. This concept is an evolution of Al-Khwarizmi's ideas, where algorithms were first applied to manual arithmetic and later formalized in various fields of computer science and mathematics.

### Modern Formal Definition:

An **Algorithm** can be defined as a structured procedure that:

- **Takes inputs**: Typically, an algorithm requires one or more inputs to start the computation.
- **Performs computations**: It carries out a sequence of operations or instructions on the inputs, following a defined set of rules.
- **Produces output**: It generates a result or output based on the computations made on the input.
- **Terminates**: The process must end after a finite number of steps.

An algorithm is used to solve problems by breaking them down into simple, executable steps that can be repeated for different inputs. The concept of an **algorithm** has evolved over time, becoming an essential foundation in computer science. In this context, we define an algorithm as a set of programs that express or implement that algorithm. This definition may seem abstract at first, but it provides a way to group similar programs that perform the same tasks. An algorithm is essentially a computational procedure that, given certain inputs, produces an expected output. Each step of the algorithm is well-defined, meaning that the instructions are clear and unambiguous. While there are many ways to express an algorithm (such as in programming languages), the idea behind it remains consistent. Even if different programmers write different implementations of the same algorithm, the core logic stays the same.

For example, the **Mergesort algorithm** can be implemented in many different ways, but as long as the process of recursively dividing and merging the list is followed, all implementations would still belong to the category of the Mergesort algorithm.

### Programs vs. Algorithms

One of the key points here is distinguishing between **programs** and **algorithms**. A program is a specific implementation of an algorithm in a particular programming language or system. When multiple programmers write different code to solve the same problem using the same algorithm, these programs are distinct from one another. However, they all express the same **algorithm**.

We can think of algorithms as abstract concepts or blueprints for solving a problem, while programs are concrete implementations of that blueprint in a specific language or environment. To understand this further, consider the following example:

- **Sorting Algorithms:** The concept of sorting data can be implemented through different algorithms such as **Mergesort** or **Quicksort**. However, each of these algorithms can also have multiple implementations or programs written by different programmers.

  - **Mergesort:** Imagine two programmers implement Mergesort using different programming languages (one in Python and another in Java). Both programs would be different, but they are considered part of the same **Mergesort algorithm** because they use the same underlying steps.

  - **Quicksort:** Similarly, two different implementations of the Quicksort algorithm could exist, and even though the code may differ, both would still represent the same Quicksort algorithm.

### Equivalence of Programs

The set of all programs that implement a given algorithm can be grouped into **equivalence classes**. Two programs are considered **equivalent** if they are essentially implementing the same algorithm, regardless of differences in their code or language.

For instance, if we take all the different programs that implement Mergesort, they belong to the same equivalence class because they perform the same sorting algorithm. This grouping allows us to define an algorithm as the set of all programs that belong to its equivalence class.

### [Category Theory and Algorithms](http://www.cs.man.ac.uk/~david/categories/book/book.pdf)

In mathematical terms, this way of grouping programs into equivalence classes introduces a structure that can be analyzed using **category theory**. In this theory, the set of all programs is not considered a category, but the set of algorithms forms a category with additional structure. This structure helps in understanding the relationships between different algorithms and their implementations.

The conditions that determine whether two programs are equivalent can be described as **coherence relations**. These relations define the rules by which different programs are grouped into the same equivalence class, enriching the category of algorithms with extra properties.

### Universal Properties of the Category of Algorithms

**Universal properties** are a key concept in category theory, and they apply to algorithms as well. These properties help us understand how algorithms relate to one another and how they can be combined or transformed. Universal properties provide a formal framework for reasoning about algorithms, especially when we need to compare them or understand their behavior in a more abstract sense.

### Questions about the Definition of an Algorithm

In their book _Introduction to Algorithms_, authors Cormen, Leiserson, Rivest, and Stein define an algorithm informally as a well-defined computational procedure that takes input and produces output. However, some questions arise from this definition:

1. **"Informally"?** – Given the technical nature of the book, some might expect a more formal definition of an algorithm.
2. **What is "well-defined"?** – The term "well-defined" means that the steps of the algorithm are clear and can be understood unambiguously by both humans and machines.

3. **What is a "procedure"?** – The word "procedure" refers to the specific series of steps followed to solve a problem, which is essentially what an algorithm is.

Donald Knuth, a renowned computer scientist, offers a more precise perspective, stating that while algorithms are difficult to define formally, they are nevertheless **real mathematical objects**. We refer to algorithms with statements like "Mergesort runs in O(n log n) time" or "There does not exist an algorithm to solve the halting problem." Algorithms are just as real as numbers or mathematical sets.

### Algorithms as Abstract Objects

Just like the number 42 is not tied to any particular representation (whether written as `42`, `XLII`, or `101010` in binary), an algorithm exists as an abstract concept. Multiple programs can implement the same algorithm, just like multiple sets of objects can represent the number 42. In this sense, an algorithm is defined similarly to how **Gottlob Frege** defined a natural number as the equivalence class of all sets of the same size.

To summarize:

- **Algorithms** are abstract entities that represent a specific way to solve a problem.
- **Programs** are concrete implementations of these algorithms in a particular language or system.
- Different programs that implement the same algorithm are grouped into **equivalence classes**, allowing us to define an algorithm as the set of all equivalent programs.

### 1. Defining an Algorithm as a Set of Programs

To explain this more clearly: an **algorithm** is not simply a single program or piece of code. Instead, it’s the **entire set of programs** that can be written to achieve the same task. For example, imagine a professor teaching a sorting algorithm like MergeSort. Students in the class might all go home and write different programs that implement MergeSort in various ways. Despite differences in code structure or approach, all of these programs are performing the same underlying sorting task. In this sense, all of these programs belong to the same "equivalence class," which defines the algorithm as a whole.

This leads to the idea that algorithms are essentially collections of programs. Two programs belong to the same equivalence class (or algorithm) if they perform the same function. The algorithm itself is defined by this collection of equivalent programs.

### 2. What Does It Mean for Two Programs to be "Essentially" the Same?

When two programs are considered "essentially" the same, it means they are performing the same task but may have small differences in their implementation.

- One program performs two unrelated processes, let's call them **Process1** and **Process2**, in a certain order. Another program might perform these processes in the reverse order. Even though the order of operations differs, the overall result is the same.
- One program uses a loop to repeat a certain task **n** times. Another program "unwinds" the loop, meaning it explicitly writes out the steps rather than using a loop structure. Again, these two programs achieve the same result, but in slightly different ways.
- One program might perform two separate tasks within a single loop, while another program might split these tasks into two separate loops. Despite this structural difference, both programs are effectively doing the same thing.

In these examples, even though the programs may look different at the level of code, they are performing the same underlying task or function. Therefore, they belong to the same algorithm.

### 3. Algorithms as Equivalence Classes

The key idea is that an **algorithm** is the collection of all programs that can achieve the same result. These programs are grouped into what are called **equivalence classes**. The notion of an equivalence class is a common concept in mathematics: two things are considered equivalent if they share some essential property. In this case, two programs are considered equivalent if they implement the same algorithm.

For example, all the programs that implement MergeSort are considered part of the same equivalence class. Similarly, all the programs that implement QuickSort belong to a different equivalence class. In the language of the text, the "set of programs" is partitioned into these equivalence classes, where each class represents a distinct algorithm.

### 4. Subjectivity of Equivalence

One important point is that the decision of whether two programs are "essentially the same" is somewhat subjective. Different people or contexts might have different criteria for considering two programs equivalent. That the relations used to decide this equivalence are not set in stone; others might come up with different or additional ways of defining equivalence between programs. Despite this subjectivity, there are some standard relations that most people would agree on. These relations correspond to what are called **categorical coherence rules** in mathematics, and when we "mod-out" (apply the equivalence relation), the set of programs becomes a more structured object, called a **category**.

### 5. Moving from Programs to Algorithms to Computable Functions

- **Programs**: These are the concrete implementations that software engineers write. They are individual pieces of code that perform tasks.
- **Algorithms**: These are equivalence classes of programs. An algorithm is a collection of programs that perform the same task, even if they differ in implementation.
- **Computable Functions**: At the highest level, we have functions. A computable function is something that can be calculated by a program or algorithm. For example, the function "sort" takes a list of numbers and returns the list in sorted order.

Different algorithms can compute the same function. For example, MergeSort and QuickSort are two different algorithms, but both compute the same **function**: sorting a list of numbers.

### 6. Mapping Between Levels

- There is a mapping (or function) from **programs to algorithms**. This mapping takes each program and assigns it to the equivalence class (algorithm) that it belongs to.
- There is also a mapping from **algorithms to computable functions**. This takes each algorithm and assigns it to the computable function that it implements.

### Visual Representation:

```
Programs  →  Algorithms  →  Computable Functions
```

Each level represents a higher level of abstraction:

- **Programs** are specific code implementations.
- **Algorithms** are groups of programs that do the same task.
- **Computable Functions** are abstract mathematical functions that can be computed by various algorithms.

The idea here is that programs can be grouped together if they are “essentially the same,” forming an equivalence class. Two programs are considered to be in the same equivalence class if they perform the same essential task, even if the details of how they achieve it differ. For example, one program might execute certain processes in a different order, or it might loop through a task in a slightly different manner. Despite these differences, both programs can be seen as implementations of the same algorithm. An algorithm, in this sense, is the sum of all the programs that implement it.

This leads to a concept where all programs are divided into subsets (equivalence classes), and each subset represents one algorithm. This gives us a set of equivalence classes called "Algorithms." Formally, we can define a function φ that maps a program to its corresponding algorithm, meaning φ takes a program and assigns it to its equivalence class (its algorithm). This algorithm is the essential idea behind all the programs in that class. Additionally, there could be another function ψ that, when applied to an algorithm, produces a specific program implementing it.

It's important to recognize that there are different ways to compare programs for "sameness." Some methods are stricter, while others are more lenient. In the strictest interpretation, every program would be considered its own unique algorithm, meaning every program is distinct. In the loosest interpretation, two programs would be considered the same if they produce the same result or perform the same function, leading to a view where every program that computes the same result is just an expression of the same computable function.

In the middle of these two extremes lies the approach taken in this discussion, where programs that are "essentially" the same are grouped together into equivalence classes, but these groups still distinguish between algorithms that compute the same result in fundamentally different ways (like different methods for sorting data). Other equivalence relations can exist that further fine-tune how programs are grouped into algorithms, and different relations will lead to different structures.

The notion of algorithms forming a set is not just abstract. It forms a mathematical structure called a category, which has some specific properties. For instance, the category of algorithms in this case has a Cartesian product structure, which means that the category supports the idea of combining algorithms, and it has a special way of handling natural numbers, meaning it can express recursive algorithms.

Although related categories have been studied in various forms, the connection between algorithms and this specific categorical structure is relatively new. Just as rational numbers are defined as equivalence classes of integer pairs, algorithms can be thought of as equivalence classes of programs. When we write an algorithm down, we’re really just writing one of its programs, which is why algorithms are often presented in pseudo-code: it’s a way to avoid being tied to any specific programming language. Pseudo-code captures the essential steps of an algorithm without specifying exactly how the algorithm should be implemented.

A nice analogy here is to think about how rational numbers, such as 3/5, are equivalence classes. Just as there are many ways to express the same rational number (like 3/5, 6/10, or 3000/5000), there are many ways to express an algorithm through different programs. While we often prefer a "canonical" representation of a rational number, like 3/5, we might wish for a similarly preferred or canonical representation of an algorithm. This concept, though, is speculative and explored further in later parts of the paper.

The next question is: which programming language should be used to express algorithms? Instead of picking a specific programming language, using the language of descriptions for **primitive recursive functions**. This language is simple, elegant, and familiar to many readers. It focuses on three operations: **Composition** (sequential processing), **Bracket** (parallel processing), and **Recursion** (looping). Primitive recursive functions are an important subset of computable functions, and their descriptions can be seen as programs that calculate functions. Although this framework is limited to primitive recursive functions for now, it still provides interesting insights and results. There is also ongoing work to expand this to cover all recursive functions, which would give a more comprehensive framework.

### Key Properties of an Algorithm:

1. **Input**: An algorithm must accept a finite number of inputs. These inputs represent the data to be processed.
2. **Output**: It must produce at least one output or result, which is the solution or a decision made by following the steps of the algorithm.
3. **Definiteness**: Each instruction in the algorithm must be clear, unambiguous, and precisely defined. This ensures that every step is understood without confusion.
4. **Finiteness**: The algorithm must terminate after a finite number of steps. It cannot continue indefinitely.
5. **Effectiveness**: Each step of the algorithm must be basic enough to be carried out manually or executed by a machine.

### Criteria for Evaluating an Algorithm:

When analyzing or designing an algorithm, the following factors are considered:

1. **Data Structures**: What data structures (lists, queues, stacks, heaps, trees, etc.) should be used to implement the algorithm?
2. **Correctness**: Is the algorithm correct? Does it always produce the correct output, or only in some cases?
3. **Efficiency**: How efficient is the algorithm? Efficiency is measured in terms of time complexity and space complexity, and it usually depends on the size of the input.
4. **Complexity**: Does an efficient algorithm exist for the problem? This leads to the famous **P vs NP** problem, which is a fundamental question in theoretical computer science regarding the existence of polynomial-time algorithms for NP problems.

### Conclusion

In conclusion, algorithms are foundational concepts in both mathematics and computer science, originating from the work of Al-Khwarizmi, a scholar whose contributions laid the groundwork for modern computational thinking. An algorithm is a systematic, well-defined sequence of steps used to solve problems or perform computations, with key characteristics like finiteness, determinism, and clarity of execution. As abstract entities, algorithms transcend the specific programs that implement them, representing the core logic of problem-solving across various languages and platforms.

By viewing algorithms as equivalence classes of programs, we can appreciate how different implementations of the same algorithm belong to the same conceptual framework, even if they vary in code structure or language. This abstraction helps us understand how diverse programs can achieve the same task and how algorithms relate to broader mathematical concepts, such as computable functions.

Furthermore, the application of category theory provides a deeper understanding of the relationships between algorithms, showing how they can be grouped and compared based on coherence and equivalence. In essence, algorithms are the bridge between abstract mathematical functions and concrete computational procedures, enabling efficient and precise problem-solving in both theoretical and practical contexts.