# Elementary Level Algorithms & Data Structures

## 1. **Fundamentals of Algorithmic Thinking**

### [What is an Algorithm?](../my-articles/Algorithm/What%20is%20the%20algorithm-2?.md)

- **Definition and Significance**

  - [Historical perspective: Early algorithms (Euclid's algorithm, Al-Khwarizmi's contributions)](https://quantumzeitgeist.com/the-secret-life-of-algorithms-how-ancient-mathematical-ideas-power-modern-computing/)
  - [https://en.wikipedia.org/wiki/Euclidean_algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm)
  - [https://languagelog.ldc.upenn.edu/nll/?p=29074](https://languagelog.ldc.upenn.edu/nll/?p=29074)

- **Algorithms & Computational Thinking Foundations**
  - https://www.learning.com/blog/defining-computational-algorithmic-design-thinking
  - https://gasstationwithoutpumps.wordpress.com/2010/08/12/algorithmic-vs-computational-thinking/

## 2. **Algorithm Analysis Basics**

I built a tool to understand this in depth and better:
[https://github.com/medishen/TideityIQ](https://github.com/medishen/TideityIQ)

Various resources regarding algorithm analysis:
[https://github.com/m-mdy-m/TechShelf/tree/main/Algorithms/Analysis](https://github.com/m-mdy-m/TechShelf/tree/main/Algorithms/Analysis)

## 3. **Fundamental Data Structures**

### Why Data Structures Matter

- **Data Organization Principles**

  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/14867/Good_dataMan.pdf
  - https://people.umass.edu/biostat690c/pdf/1.%20%20Principles%20of%20Data%20Management%202020.pdf
  - https://ws1.nbninternational.com/fusion/v2.0/supplement/62d96a37646eb15fd4cb7208.pdf
  - https://www.intrac.org/app/uploads/2017/01/Principles-of-data-collection.pdf

- **Abstract Data Types (ADTs)**

  - https://math.hws.edu/eck/cs327_s04/chapter2.pdf

### Basic Data Structures

I will complete the first chapters of Arliz's book to understand the data structure of arrays and their children, such as stacks, queues, etc., and then move on to the next ones.

## 4. **Basic Searching Techniques**

### Linear Search

- **Sequential Access Pattern**

- **Implementation Approaches**

  - Iterative implementation
  - Recursive implementation
  - Sentinel-based optimization

- **Linear Search Variations**
  - Binary outcome vs. element location
  - Finding all occurrences
  - Searching in multiple arrays

### Binary Search

- **Divide and Conquer Strategy**

- **Implementation Approaches**

  - Iterative implementation
  - Recursive implementation
  - Handling edge cases

- **Binary Search Variations**

  - Finding insertion points
  - Locating boundaries (first/last occurrence)

- **Binary Search Trees Preview**
  - Connection to binary search algorithm
  - Structure and properties
  - Dynamic searching capabilities

## 5. **Elementary Sorting Algorithms**

### Why Sorting Matters

- **Applications of Sorted Data**

  - Enabling efficient searching
  - Facilitating merging operations
  - Supporting order statistics (min, max, median)
  - Human readability and interpretation

- **Classification of Sorting Problems**

  - Internal vs. external sorting
  - Stable vs. unstable sorting
  - In-place vs. out-of-place approaches
  - Numeric vs. lexicographic ordering

- **Evaluation Criteria**
  - Time complexity considerations
  - Space efficiency
  - Stability requirements
  - Implementation complexity

### Simple Sorting Algorithms

- **Bubble Sort**

- **Selection Sort**

- **Insertion Sort**

### Comparing Sorting Algorithms

- **Performance Benchmarks**
- **Special Cases Analysis**
- **Algorithm Selection Guidelines**

## 6. **Introduction to Recursion**

### Thinking Recursively

- **Recursive Problem Decomposition**

  - Breaking problems into smaller instances
  - Self-reference and self-similarity
  - Recursive vs. iterative thinking

- **Elements of Recursive Solutions**

  - Base cases: When recursion terminates
  - Recursive cases: Self-referential calls
  - Progress toward base case

- **Classic Recursive Problems**

  - Factorial calculation
  - Fibonacci sequence generation
  - Tower of Hanoi puzzle
  - Binary tree traversals

- **Recursion in Mathematical Induction**

  - Connection to inductive proofs
  - Establishing correctness through induction
  - Mathematical foundations of recursive thinking

- **Recursive Data Structures**
  - Self-referential structures (linked lists, trees)
  - Natural recursive operations on these structures
  - Traversal and search patterns

### Avoiding Pitfalls

- **Common Recursive Errors**

  - Missing or incorrect base cases
  - Failure to make progress toward base case
  - Excessive recursion depth

- **Stack Overflow Prevention**

  - Understanding the call stack mechanism
  - Estimating maximum recursion depth
  - Tail recursion and optimization

- **Memory Consumption Analysis**

  - Stack frame contents
  - Space complexity of recursive solutions
  - Visualizing stack growth

- **Recursion to Iteration Conversion**

  - Explicit stack usage
  - State tracking techniques
  - When conversion is beneficial

- **Memoization Introduction**
  - Avoiding redundant recursive calls
  - Trading space for time
  - Implementation techniques

## 7. **Pattern Recognition in Algorithms**

### Common Algorithm Patterns

- **Iteration Patterns**

  - Linear iteration (traversal)
  - Nested iteration
  - Jump and skip patterns (stride, sampling)
  - Convergence patterns

- **Divide and Conquer**

  - Problem subdivision strategy
  - Independent subproblem resolution
  - Result combination techniques
  - Examples: Binary search, merge sort

- **Greedy Approach**

  - Making locally optimal choices
  - When greedy strategies are optimal
  - Counterexamples to greedy optimality
  - Examples: Coin change, scheduling

- **Dynamic Programming Introduction**

  - Overlapping subproblems characteristic
  - Optimal substructure property
  - Top-down vs. bottom-up approaches
  - Examples: Fibonacci, shortest paths

- **Transformation Patterns**
  - Preprocessing data for efficiency
  - Transform-solve-transform back approach
  - Examples: Sorting before searching

### Problem-Solving Strategies

- **Problem Classification**

  - Identifying problem categories
  - Matching problems to known algorithm types
  - Recognizing hybrid problems

- **Algorithm Selection Framework**

  - Decision tree for algorithm selection
  - Input characteristics assessment
  - Output requirements analysis
  - Resource constraint evaluation

- **Heuristic Development**

  - Creating approximate solutions
  - When exactness can be sacrificed
  - Performance vs. accuracy tradeoffs

- **Incremental Refinement**

  - Starting with naive solutions
  - Identifying bottlenecks
  - Progressive optimization techniques

- **Problem Decomposition**
  - Breaking complex problems into subproblems
  - Interface design between components
  - Recombination strategies
  - Recombination strategies
