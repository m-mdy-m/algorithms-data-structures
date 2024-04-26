# Basic Algorithms

Algorithms are the fundamental instructions computers use to solve problems. They are like recipes, breaking down complex tasks into step-by-step procedures.

> [What is Algorithm](../1.IntroductionToAlgorithmsAndProblemSolving)

**1. Searching Algorithms:**

* **Linear Search:** This is a straightforward search where you go through each item in a list one by one until you find the target item. It's easy to understand and implement, but for large datasets it can be slow. 
* **Binary Search:** This works only on sorted lists. It keeps dividing the list in half and eliminates half based on the target value being higher or lower than the middle element. This continues until the target is found or it's determined to not be in the list. Binary search is much faster than linear search for large sorted lists.

**2. Sorting Algorithms:**

* **Bubble Sort:** This is a simple sorting technique where you compare neighboring elements and swap them if they're in the wrong order. You repeat this process for the entire list, going through multiple passes until everything is sorted. Bubble sort is inefficient for large datasets.
* **Selection Sort:** Here, you repeatedly find the minimum (or maximum) element in the unsorted section of the list and swap it with the first (or last) element. This process continues until the list is sorted. Selection sort is slightly better than bubble sort but still not ideal for large datasets.

**3. Traversal Algorithms:**

* **Linear Traversal:** This is simply visiting each element in a list (or any data structure) one by one, often in the order they appear. 
* **Breadth-First Search (BFS):** This is used for tree or graph data structures. It systematically visits every level of the tree/graph, starting from the root and moving outward level by level. BFS is useful for finding the shortest path in a graph.  
* **Depth-First Search (DFS):** This also explores tree or graph data structures. It follows one path as far as possible until it reaches a dead end, then backtracks and explores another path. DFS is useful for finding all connected elements in a graph.


