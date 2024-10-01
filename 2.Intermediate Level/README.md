## **Intermediate Level**

### 1. **Data Structures (Intermediate)**

- **Advanced Operations on Basic Data Structures**:
  - Arrays, Linked Lists, Stacks, and Queues revisited with advanced operations (e.g., circular queues, doubly linked lists).
  - **Flowchart Representation**: Visualizing complex operations like doubly linked list insertions and deletions.
- **Hash Tables**:
  - Deeper dive into hash functions, collision resolution techniques (chaining, open addressing).
  - **Use Cases**: How hash tables are used in real-world applications (e.g., dictionaries in Python).
  - **Flowchart Representation**: Collision handling in hash tables.
- **Trees**:
  - **Binary Trees**: Insertion, deletion, traversal algorithms.
  - **Binary Search Trees (BST)**: Understanding the balance and how it's maintained.
  - **AVL Trees**: Rotations, balancing the tree.
  - **Heaps**: Max and min heaps, heap sort, priority queues.
  - **Flowchart Examples**: Tree traversal (in-order, pre-order, post-order) and heap insertions.
- **Resources**:
  - [Data Structures](./1.Data_Structures/)
  - [Additional Data Structures](./4.%20Additional%20Data%20Structures/)

---

### 2. **Big O Notation (Advanced Complexity Analysis)**

- **Big O, Big Theta, and Big Omega**:
  - Introduction to the notations for worst-case, average-case, and best-case complexity.
  - Comparative analysis of common time complexities: O(1), O(log n), O(n), O(n log n), O(n^2), etc.
- **Space Complexity**:
  - How to evaluate the memory usage of an algorithm.
  - Example: Analyze the space complexity of recursive algorithms.
- **Amortized Analysis**:
  - Explanation and examples like dynamic array resizing.
- **Master Theorem for Divide and Conquer**:
  - Advanced techniques for analyzing recursive algorithms (useful for mergesort, quicksort).

**Resources**:

- [Big O Notation](./2.%20Big%20O%20Notation/)

---

### 3. **Advanced Data Structures**

- **Graphs**:
  - **Introduction to Graphs**: Definitions (directed, undirected, weighted graphs).
  - **Graph Representation**: Adjacency matrix vs adjacency list.
  - **Flowchart**: Visualizing graph traversal (BFS, DFS).
- **Trees (Continued)**:
  - **Red-Black Trees**: Introduction to balancing properties and use cases.
  - **Tries (Prefix Trees)**: Storing strings efficiently, common applications (e.g., autocomplete, dictionaries).
- **Skip Lists**:
  - A probabilistic alternative to balanced trees and heaps.
  - **Flowchart**: Skip list operations like insertion and search.
- **Resources**:
  - [Additional Data Structures](./4.%20Additional%20Data%20Structures/)

---

#### 3.5 **Graph Algorithms**

- **Basic Graph Algorithms**:
  - **Graph Traversal**:
    - Breadth-First Search (BFS) and Depth-First Search (DFS).
    - Use cases: Shortest path, detecting cycles, connected components.
  - **Minimum Spanning Tree (MST)**:
    - Algorithms: Prim’s and Kruskal’s.
  - **Shortest Path Algorithms**:
    - **Dijkstra’s Algorithm**: Finding the shortest path in weighted graphs.
    - **Bellman-Ford Algorithm**: Handling negative weights in graphs.
  - **Flowchart Representation**: Graph traversal using BFS and DFS.
- **Advanced Graph Algorithms**:
  - **Floyd-Warshall Algorithm**: All-pairs shortest paths.
  - **A\* Algorithm**: Optimized pathfinding.
  - **Topological Sorting**: Used in scheduling tasks with dependencies.
- **Flowcharts and Visuals**:
  - Minimum spanning tree construction and Dijkstra's shortest path visualization.
- **Resources**:
  - [Graph Algorithms](./8.%20Graph%20Algorithms/)

### 4. **Advanced Graph Algorithms (Graph Theory Concepts)**

- **Graph Traversal**:
  - **Breadth-First Search (BFS)**: Applications in shortest path algorithms, flowcharts for BFS.
  - **Depth-First Search (DFS)**: Applications in cycle detection, topological sorting.
- **Shortest Path Algorithms**:
  - **Dijkstra’s Algorithm**: How to find the shortest path in weighted graphs.
  - **Bellman-Ford Algorithm**: Handling negative weight edges.
  - **Floyd-Warshall Algorithm**: All-pairs shortest path.
- **Minimum Spanning Tree (MST)**:
  - **Kruskal’s Algorithm**: Use of union-find data structure.
  - **Prim’s Algorithm**: Greedy approach to find MST.
- **Topological Sorting**:
  - Applications in task scheduling, course prerequisite problems.
- **Strongly Connected Components**:
  - Tarjan’s algorithm for identifying strongly connected components.

**Resources**:

- [Graph Algorithms](./8.%20Graph%20Algorithms/)

---

### 5. **Divide and Conquer Algorithms**

- **Concept**:
  - Breaking down problems into smaller sub-problems and solving them recursively.
- **Key Algorithms**:
  - **Merge Sort**: Understanding the recursive division and merging process.
  - **Quick Sort**: Partitioning logic, understanding its average and worst-case time complexities.
- **Strassen’s Matrix Multiplication**:
  - More efficient than the standard matrix multiplication approach using divide and conquer.

---

### 6. **Dynamic Programming (DP)**

- **Introduction**:
  - Core principles: Overlapping subproblems, optimal substructure.
- **Memoization and Tabulation**:
  - Top-down (recursive) vs bottom-up (iterative) approaches.
- **Key DP Algorithms**:
  - **Knapsack Problem**: 0/1 knapsack with dynamic programming.
  - **Longest Common Subsequence (LCS)**.
  - **Fibonacci Sequence** (optimized using DP).
- **Flowcharts**:
  - Flowcharts for understanding recursive DP solutions.

---

### 7. **Greedy Algorithms**

- **Introduction**:
  - Greedy algorithms make locally optimal choices to find a global optimum.
- **Key Algorithms**:
  - **Huffman Coding**: For optimal compression.
  - **Activity Selection Problem**: Maximizing the number of activities that don’t overlap.
  - **Kruskal’s Algorithm**: For finding MST.
- **Comparison with Dynamic Programming**:
  - When to use greedy vs dynamic programming (examples like coin change problem).

---

### 8. **Recursion and Backtracking**

- **Recursive Problem Solving**:
  - Solving problems like **Towers of Hanoi**, N-Queens problem using backtracking.
- **Backtracking Algorithms**:
  - Examples: Maze solving, solving Sudoku puzzles.
- **Optimization Techniques**:
  - Pruning unnecessary recursive calls (e.g., in N-Queens).
  - Flowcharts for understanding recursive calls and backtracking.

---

### 9. **Amortized Analysis and Advanced Sorting**

- **Amortized Analysis**:
  - Understand the average time taken for a sequence of operations.
  - Example: Array resizing in dynamic arrays.
- **Advanced Sorting Algorithms**:
  - **Heap Sort**: Priority queue-based sorting, building a heap.
  - **Bucket Sort**, **Radix Sort**: Non-comparative sorting algorithms.
  - Flowchart for heap insertion and deletion.
