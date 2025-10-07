# Intermediate Level — Concepts (foundational, cross-domain)

---

## 1. Algorithmic Analysis (deeper)

* [Asymptotic notations](https://www.youtube.com/watch?v=7dz8Iaf_weM): Big-O, Ω, Θ

* Amortized analysis (aggregate, accounting, potential)
* [Average vs worst vs best case; probabilistic analysis](https://dev.to/m__mdy__m/introduction-to-analysis-of-algorithms-46b0)
* Recurrence relations and solving (substitution, recursion tree, Master Theorem)
* Space complexity, I/O complexity, cache-aware analysis

**Goal:** measure and reason about algorithm costs precisely so you can compare and choose designs reliably.

---

## 2. Data Structures — core & tradeoffs

* Dynamic arrays and resizing strategies
* Linked lists (singly, doubly, circular) and pointer tradeoffs
* Stacks, queues, deques, ring buffers
* Hash tables: hash functions, collisions, load factor, resizing strategies
* Binary heaps and priority queues

**Goal:** understand implementation choices and performance tradeoffs for common building blocks.

---

## 3. Trees & Balanced Search Structures

* Binary Search Trees (BST) basics
* Tree rotations; AVL trees, Red-Black trees (concepts)
* B-trees / B+ trees (disk/page oriented)
* Tries (prefix trees) and compressed tries
* Basic persistence idea (immutability + versioning)

**Goal:** use tree structures that guarantee bounds for search/insert/delete and introduce external storage awareness.

---

## 4. Indexed & Range Data Structures (prep for advanced)

* Fenwick (Binary Indexed) Tree concept
* Segment Tree basics (range queries, lazy propagation idea)
* Interval trees, ordered statistic trees (rank/select)
* Skip lists (probabilistic balancing)

**Goal:** build efficient range/index query primitives that Advanced algorithms will rely on.

---

## 5. Sorting & Selection (practical theory)

* Comparison sorts: stability, in-place vs out-of-place
* QuickSort, MergeSort, HeapSort tradeoffs
* Linear-time selection algorithms (median of medians idea)
* External sorting (merge-based, block I/O considerations)

**Goal:** pick and analyze sorting/selection strategies tuned to data size, memory and I/O constraints.

---

## 6. Recursion, Divide & Conquer (patterns)

* Recursion invariants, stack behavior, tail recursion
* Divide & conquer pattern and recurrence mapping
* Master Theorem application patterns
* Problem decomposition / conquer step design

**Goal:** recognize when to break problems recursively and how cost composes across levels.

---

## 7. Dynamic Programming — foundations

* Overlapping subproblems and optimal substructure
* State design and transition formulation
* Top-down with memoization vs bottom-up tabulation
* Space/time optimization techniques (rolling arrays)

**Goal:** convert exponential recurrences into polynomial solutions by correct state/transition design.

---

## 8. Graphs — fundamentals & standard algorithms

* Representations: adjacency list, adjacency matrix, edge list
* BFS, DFS, topological sort, connectivity components
* Shortest paths basics: Dijkstra (nonnegative), Bellman-Ford idea
* Minimum spanning tree concepts: Kruskal, Prim (conceptual)
* Edge/vertex classifications, directed vs undirected implications

**Goal:** model relations as graphs and apply traversal/shortest/MST primitives as building blocks.

---

## 9. Greedy, Backtracking & Search Patterns

* Greedy choice property and constructing proofs of optimality
* Backtracking template and pruning strategies
* Branch & bound idea; heuristic search basics (A* concept)
* Local search and greedy refinement patterns

**Goal:** identify when greedy or search variants give correct/usable solutions and how to structure them.

---

## 10. Probability, Counting & Number Theory (practical)

* Basic combinatorics, permutations/combinations, pigeonhole principle
* Probability basics applied to randomized algorithms
* Modular arithmetic, gcd, extended gcd, modular inverse
* Fast exponentiation (binary exponentiation)

**Goal:** equip for algorithm analysis that uses randomness, combinatorics, or modular arithmetic primitives.

---

## 11. Bitwise & Low-level Representations

* Binary representation, two’s complement, endianness
* Bitwise operators, masks, shifts, bit counting/popcount ideas
* Bitset representation and usage patterns (sparse vs dense)
* Fixed-width integer overflow considerations

**Goal:** use bit operations for compact, fast algorithms and understand low-level correctness pitfalls.

---

## 12. Memory, Caches & Systems Fundamentals

* Memory hierarchy: registers → caches → RAM → disk; locality (temporal/spatial)
* Cache lines, associativity, cache misses and their cost implications
* Basics of virtual memory and paging; memory alignment
* Data layout strategies for locality (AoS vs SoA)

**Goal:** design algorithms/data layouts that perform well on real hardware by exploiting locality.

---

## 13. Concurrency & Parallelism (basics)

* Process vs thread; thread lifecycle
* Synchronization primitives: mutex, semaphore, atomic ops (concepts)
* Race conditions, deadlock, livelock, happens-before intuition
* Task-parallel patterns and Amdahl’s law basics

**Goal:** reason about correctness and performance in concurrent/parallel contexts to prepare for parallel algorithms.

---

## 14. I/O, Storage & Serialization Basics

* File I/O cost model, buffered vs unbuffered I/O
* Serialization formats: binary vs text (endianness, schema evolution)
* Indexing basics (primary/secondary), high-level intro to B-tree vs LSM tradeoffs
* Caching strategies and write policies

**Goal:** understand persistence and I/O constraints so algorithms remain efficient across storage boundaries.

---

## 15. Networking & Distributed Systems Intro (core concepts)

* Latency vs bandwidth; basic cost model for distributed ops
* Sockets and RPC concepts; serialization/ID encoding basics
* Consistency spectrum (strong/weak), CAP theorem intuition
* Basic failure modes and retry/backoff patterns

**Goal:** reason about distributed cost, consistency and failure to inform distributed algorithm design.

---

## 16. Complexity Theory & Reductions (intro)

* Decision problems, P vs NP (definitions only)
* NP-complete concept and polynomial reductions (idea)
* Approximation algorithms and hardness intuition

**Goal:** know theoretical limits so you can recognize infeasible exact solutions and choose approximations.

---

## 17. Algorithm Design Catalog (patterns to internalize)

* Patterns: two-pointers, sliding window, divide & conquer, DP, greedy, meet-in-the-middle, bitmask DP, graph reductions, flow (conceptual)
* When to apply which pattern (mapping problems → pattern)

**Goal:** build a mental catalog so you can map new problems to reliable design patterns.

