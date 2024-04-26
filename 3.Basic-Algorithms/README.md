# Basic Algorithms

Algorithms are the lifeblood of computing. They are the step-by-step instructions that computers follow to solve problems, analyze data, and make decisions. Just like recipes, they break down complex tasks into manageable procedures. Understanding these fundamental algorithms is a stepping stone to mastering computer science and programming.

> [What is Algorithm](https://github.com/m-mdy-m/algorithms-data-structures/tree/main/1.IntroductionToAlgorithmsAndProblemSolving)

## 1. Searching Algorithms:

### What is Searching?

Searching is the fundamental process of locating a specific element or item within a collection of data. This collection of data can take various forms, such as arrays, lists, trees, or other structured representations. The primary objective of searching is to determine whether the desired element exists within the data, and if so, to identify its precise location or retrieve it. It plays an important role in various computational tasks and real-world applications, including information retrieval, data analysis, decision-making processes, and more.

### Introduction Searching Algorithms

All search algorithms make use of a search key in order to proceed with the procedure. Search algorithms are expected to return a success or a failure status, usually denoted by Boolean true/false. Different search algorithms are available, and the performance and efficiency of the same depend on the data and on the manner in which they are used.

A linear search algorithm is considered the most basic of all search algorithms. The best perhaps is binary search. There are other search algorithms such as the depth-first search algorithm, breadth-first algorithm, etc. The efficiency of a search algorithm is measured by the number of times a comparison of the search key is done in the worst case. The notation used in search algorithms is O(n), where n is the number of comparisons done. It gives the idea of the asymptotic upper bound of execution time required for the algorithm with respect to a given condition.

Search cases in search algorithms can be categorized as best case, average case and worst case. In some algorithms, all the three cases might be asymptotically the same, whereas in some others there could be a large difference. The average behavior of the search algorithm helps in determining the usefulness of the algorithm.

> Summary : A search algorithm is the step-by-step procedure used to locate specific data among a collection of data. It is considered a fundamental procedure in computing. In computer science, when searching for data, the difference between a fast application and a slower one often lies in the use of the proper search algorithm.

### Simple explanation:


### Searching terminologies:
- **Target Element:**
    In searching, there is always a specific target element or item that you want to find within the data collection. This target could be a value, a record, a key, or any other data entity of interest.
- **Search Space:**
    The search space refers to the entire collection of data within which you are looking for the target element. Depending on the data structure used, the search space may vary in size and organization.
- **Complexity:**
    Searching can have different levels of complexity depending on the data structure and the algorithm used. The complexity is often measured in terms of time and space requirements.
- **Deterministic vs. Non-deterministic:**
Some searching algorithms, like binary search, are deterministic, meaning they follow a clear, systematic approach. Others, such as linear search, are non-deterministic, as they may need to examine the entire search space in the worst case.

### Applications of Searching:
Searching algorithms have numerous applications across various fields. Here are some common applications:
- **Information Retrieval:** Search engines like Google, Bing, and Yahoo use sophisticated searching algorithms to retrieve relevant information from vast amounts of data on the web.
- **Database Systems:** Searching is fundamental in database systems for retrieving specific data records based on user queries, improving efficiency in data retrieval.
- **E-commerce:** Searching is crucial in e-commerce platforms for users to find products quickly based on their preferences, specifications, or keywords.
- **Networking:** In networking, searching algorithms are used for routing packets efficiently through networks, finding optimal paths, and managing network resources.
- **Artificial Intelligence:** Searching algorithms play a vital role in AI applications, such as problem-solving, game playing (e.g., chess), and decision-making processes
- **Pattern Recognition:** Searching algorithms are used in pattern matching tasks, such as image recognition, speech recognition, and handwriting recognition.

### Types of algorithms:

* **Linear Search:** This is a straightforward search where you go through each item in a list one by one until you find the target item. It's easy to understand and implement, but for large datasets it can be slow. 
* **Binary Search:** This works only on sorted lists. It keeps dividing the list in half and eliminates half based on the target value being higher or lower than the middle element. This continues until the target is found or it's determined to not be in the list. Binary search is much faster than linear search for large sorted lists.

## 2. Sorting Algorithms:

### Introduction


> Summary : 

### Simple explanation:

### Types of algorithms:

* **Bubble Sort:** This is a simple sorting technique where you compare neighboring elements and swap them if they're in the wrong order. You repeat this process for the entire list, going through multiple passes until everything is sorted. Bubble sort is inefficient for large datasets.
* **Selection Sort:** Here, you repeatedly find the minimum (or maximum) element in the unsorted section of the list and swap it with the first (or last) element. This process continues until the list is sorted. Selection sort is slightly better than bubble sort but still not ideal for large datasets.

## 3. Traversal Algorithms:

### Introduction


> Summary : 

### Simple explanation:

### Types of algorithms:

* **Linear Traversal:** This is simply visiting each element in a list (or any data structure) one by one, often in the order they appear. 
* **Breadth-First Search (BFS):** This is used for tree or graph data structures. It systematically visits every level of the tree/graph, starting from the root and moving outward level by level. BFS is useful for finding the shortest path in a graph.  
* **Depth-First Search (DFS):** This also explores tree or graph data structures. It follows one path as far as possible until it reaches a dead end, then backtracks and explores another path. DFS is useful for finding all connected elements in a graph.


