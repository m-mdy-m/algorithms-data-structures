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

### Terminologies:
* **Target Element:** This is the treasure you're seeking! It's the specific piece of data you want to find within the collection. Imagine searching a phonebook - the target element is the phone number of a particular person.
* **Search Space:** Think of this as the haystack where your needle might be hiding. It represents the entire collection of data you're searching through. This could be an array of numbers, a list of names, or a more complex data structure. 
* **Complexity:** This refers to the effort required by the search algorithm. It's like measuring how much work the librarian has to do to find your book. Complexity is often measured in terms of time (how long it takes to find the target) and space (how much additional memory the algorithm needs). 
* **Deterministic vs. Non-deterministic:** Searching algorithms can be like following a recipe (deterministic) or taking educated guesses (non-deterministic). Deterministic algorithms always follow the same clear steps, like binary search which keeps dividing the search space in half. Non-deterministic algorithms, like linear search, might need to examine the entire collection in the worst-case scenario. 

### Real-World Applications
* **Information Retrieval:**  Imagine searching the web for a specific recipe. Search engines like Google leverage complex searching algorithms to sift through massive datasets, indexing websites and content.  When you enter a query, these algorithms identify webpages most relevant to your search terms, delivering the information you seek in a fraction of a second.

* **Database Systems:**  Databases store vast amounts of information, from customer records to financial transactions. Searching algorithms are the backbone of efficient data retrieval. When you submit a query in a database management system, the search algorithm quickly locates the specific records that match your criteria, saving you time and effort.

* **E-commerce:**  Online shopping thrives on efficient search. E-commerce platforms use searching algorithms to help you find the perfect product. They allow you to filter and search based on various criteria like price, brand, or color. Behind the scenes, search algorithms power these filters, pinpointing products that meet your preferences, making your shopping experience smooth and efficient.

* **Networking:**  The internet is a complex network of interconnected devices.  Search algorithms play a crucial role in routing data packets efficiently. They help determine the optimal path for information to travel across the network, ensuring your video calls or online games run smoothly.

* **Artificial Intelligence (AI):**  AI is revolutionizing many fields.  Searching algorithms are a fundamental tool for AI applications. They empower AI systems to solve problems, make decisions, and even play games like chess. By efficiently searching through vast amounts of data and identifying patterns, search algorithms contribute to the intelligence behind AI.

* **Pattern Recognition:**  Pattern recognition allows computers to identify and understand patterns in data, like images, speech, or handwriting. Searching algorithms are instrumental in pattern recognition. They help computers match new data against existing patterns, enabling applications like facial recognition in photos or voice recognition for virtual assistants.

### Types of algorithms:

![](https://www.gatevidyalay.com/wp-content/uploads/2018/07/Searching-Algorithms-Approaches-to-Searching.png)

**1. `Linear Search`:**

Imagine searching for a specific book in a messy, unorganized bookshelf. Linear search mimics this approach. It's a straightforward method that examines each item in a collection **one by one** until it finds the target element (your desired book).

**Here's how it works:**

1. The search begins at the first item in the collection.
2. The algorithm compares the target element with the current item.
    * If they match, the search is successful, and the algorithm returns the location (index) of the target element.
    * If they don't match, the algorithm moves on to the next item in the collection.
3. This process of comparison and movement continues until either the target element is found or the entire collection is exhausted.

**Example:**

Let's search for the value "25" in the unsorted list: [10, 4, 12, 25, 18, 7].

- The search starts with the first element (10). Since 10 is not 25, we move on.
- We compare the target (25) with the next element (4). There's no match, so we continue.
- This process repeats until we reach the element "25" at index 3. The search is successful!

**Strengths:**

* Easy to understand and implement, making it a good choice for beginners.
* Works on unsorted data, offering flexibility in various situations.

**Weaknesses:**

* Slow for large datasets. As the collection size grows, the search time increases proportionally, making it inefficient for massive datasets.

> How it works :

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/Linear-Search.png)

**2. `Binary Search`:**

Binary search thrives on **sorted data**. Imagine searching for a specific word in a meticulously organized dictionary. Binary search works much faster than linear search in this scenario. It operates by repeatedly dividing the sorted collection in half. Here's the strategy:

1. The algorithm starts by comparing the target element with the middle element of the collection.
2. If the target element is equal to the middle element, the search is successful, and the algorithm returns the middle element's index.
3. If the target element is **less** than the middle element, the search continues on the **left half** of the remaining collection (excluding the middle element).
4. If the target element is **greater** than the middle element, the search continues on the **right half** of the remaining collection.
5. Steps 1-4 are repeated on the narrowed-down half of the collection until the target element is found or the search space is reduced to a single element (which doesn't match the target).

**Example:**

Let's search for the value "18" in the sorted list: [4, 7, 10, 12, 18, 25].

- The middle element is 12. Since 18 is greater than 12, we focus on the right half: [18, 25].
- Now, the middle element of the right half is 18. We have a match! The target element is found at index 4.

**Strengths:**

* Significantly faster than linear search for large sorted datasets. By eliminating half of the remaining elements with each comparison, binary search quickly narrows down the search space.

**Weaknesses:**

* Requires the data to be sorted beforehand, adding an extra step if the data isn't already organized.
* Not suitable for unsorted data. The binary search strategy relies on the sorted nature of the data to efficiently eliminate half of the possibilities during each iteration.

> How it works :

![](https://assets.digitalocean.com/articles/alligator/js/linear-vs-binary-search/binary-search.png)

## 2. Sorting Algorithms:


### What is Sorting?

Sorting refers to rearrangement of a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure. Sorting means reordering of all the elements either in ascending or in descending order.



### Introduction

In computer science, a sorting algorithm is an algorithm that puts elements of a list into an order. The most frequently used orders are numerical order and lexicographical order, and either ascending or descending. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists. Sorting is also often useful for canonicalizing data and for producing human-readable output.

Formally, the output of any sorting algorithm must satisfy two conditions:

The output is in monotonic order (each element is no smaller/larger than the previous element, according to the required order).
  1. The output is a permutation (a reordering, yet retaining all of the original elements) of the input.
  2. For optimum efficiency, the input data should be stored in a data structure which allows random access rather than one that allows only sequential access.

> Summary : Sorting algorithms are a set of instructions that take an array or list as an input and arrange the items into a particular order. Sorts are most commonly in numerical or a form of alphabetical (or lexicographical) order, and can be in ascending (A-Z, 0-9) or descending (Z-A, 9-0) order.

### Terminologies:

- **In-place Sorting:** An in-place sorting algorithm uses constant space for producing the output (modifies the given array only). It sorts the list only by modifying the order of the elements within the list. Examples: Selection Sort, Bubble Sort Insertion Sort and Heap Sort.
- **Internal Sorting:** Internal Sorting is when all the data is placed in the main memory or internal memory. In internal sorting, the problem cannot take input beyond its size. Example: heap sort, bubble sort, selection sort, quick sort, shell sort, insertion sort.
- **External Sorting :** External Sorting is when all the data that needs to be sorted cannot be placed in memory at a time, the sorting is called external sorting. External Sorting is used for the massive amount of data. Examples: Merge sort, Tag sort, Polyphase sort, Four tape sort, External radix sort, etc.
- **Stable sorting:** When two same data appear in the same order in sorted data without changing their position is called stable sort. Examples Merge Sort, Insertion Sort, Bubble Sort.
- **Unstable sorting:** When two same data appear in the different order in sorted data it is called unstable sort. Examples: Quick Sort, Heap Sort, Shell Sort.

### Characteristics of Sorting Algorithms:
- **Time Complexity:** Time complexity, a measure of how long it takes to run an algorithm, is used to categorize sorting algorithms. The worst-case, average-case, and best-case performance of a sorting algorithm can be used to quantify the time complexity of the process.
- **Space Complexity:** Sorting algorithms also have space complexity, which is the amount of memory required to execute the algorithm.
- **Stability:** A sorting algorithm is said to be stable if the relative order of equal elements is preserved after sorting. This is important in certain applications where the original order of equal elements must be maintained.
- **In-Place Sorting:** An in-place sorting algorithm is one that does not require additional memory to sort the data. This is important when the available memory is limited or when the data cannot be moved.
- **Adaptivity:** An adaptive sorting algorithm is one that takes advantage of pre-existing order in the data to improve performance

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


