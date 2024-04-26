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

* **In-place Sorting:** Imagine rearranging your clothes in a drawer without taking everything out. In-place sorting works similarly. These algorithms sort the data by modifying the order of elements within the existing list itself, requiring minimal additional space. Examples include selection sort, bubble sort, and insertion sort.
* **Internal Sorting:** This refers to sorting algorithms that operate entirely within the computer's main memory (RAM). The entire dataset can be loaded into memory at once, making it suitable for smaller to medium-sized datasets. Internal sorting algorithms like heap sort, bubble sort, and merge sort are commonly used for in-memory data manipulation. 
* **External Sorting:** When dealing with massive datasets that exceed the capacity of main memory, external sorting comes into play. These algorithms break the large dataset into smaller chunks, sort them on the disk (secondary storage), and then merge the sorted chunks back together in a specific order. Merge sort is a popular example of an external sorting algorithm.
* **Stable Sorting:** Imagine sorting a list of books by title, but you also want to preserve the order in which books with the same title were originally listed. Stable sorting algorithms maintain the relative order of elements with equal keys (values) during sorting. Merge sort and insertion sort are examples of stable sorting algorithms.
* **Unstable Sorting:** Not all sorting algorithms prioritize order preservation. Unstable sorting algorithms focus solely on achieving the desired sorting order (e.g., ascending or descending) and may shuffle the relative positions of elements with identical keys. Quick sort and heap sort are examples of unstable sorting algorithms.


### Characteristics of Sorting Algorithms:
* **Time Complexity:** This refers to how long it takes (in terms of steps or comparisons) for the sorting algorithm to complete its job. We typically analyze time complexity in three scenarios:
    * **Worst-case:** This represents the maximum amount of time the algorithm could take for a particular data size, considering the worst possible input scenario.
    * **Average-case:** This reflects the average time the algorithm takes across various random inputs of the same size.
    * **Best-case:** This represents the minimum amount of time the algorithm could take for a specific data size, considering the most favorable input scenario (e.g., data already partially sorted).

* **Space Complexity:** This refers to the amount of additional memory the sorting algorithm needs to execute its operations beyond the space occupied by the original data. In-place sorting algorithms use minimal extra space by manipulating the data within the existing memory allocation, while some algorithms might require additional temporary storage during the sorting process.

* **Stability:** This property determines whether the sorting algorithm preserves the original order of elements with equal values in the sorted output. Stable sorting algorithms maintain the relative positions of these elements, which can be important in specific applications. For example, if you're sorting a list of customer records by name, and two customers have the same name, you might want a stable sort to maintain the order in which they were originally listed (e.g., by account creation date).

* **In-place Sorting:** As mentioned earlier, in-place sorting algorithms are memory-efficient as they sort the data by modifying the original list itself, requiring minimal extra space. This can be advantageous when dealing with large datasets or when memory is limited.

* **Adaptivity:**  Some sorting algorithms can adapt to the characteristics of the data they're sorting. An adaptive sorting algorithm can take advantage of pre-existing order in the data to improve its performance. For instance, if the data is already partially sorted, an adaptive algorithm might adjust its approach to leverage that partial order and achieve faster sorting.


### Applications of Sorting Algorithms:
* **Searching Algorithms:**  Imagine searching for a specific contact in a phonebook. Sorting algorithms are the silent partners of efficient search algorithms like binary search. By ensuring the phonebook entries are organized alphabetically (sorted), binary search can locate your contact significantly faster than a linear search through an unsorted list.

* **Data Management:**  Data is the lifeblood of modern computing, but managing it effectively requires organization. Sorting algorithms play a vital role in data management. When you sort a list of files by name, date, or size, you're making it easier to find the specific file you need. Additionally, sorted data facilitates faster retrieval and analysis, saving you time and effort.

* **Database Optimization:**  Databases store vast amounts of information, from customer records to financial transactions. Sorting algorithms significantly improve the performance of database queries. When you search for a specific product in an e-commerce database, the database might sort the product list based on your search criteria (e.g., price) to deliver the most relevant results quickly.

* **Machine Learning:**  Machine learning algorithms learn from data to make predictions or classifications. However, the data needs to be prepared for effective learning. Sorting algorithms are often used in data preprocessing steps to organize and structure the data before feeding it into machine learning models. This can significantly improve the accuracy and efficiency of the learning process.

* **Data Analysis:**  Data analysis is all about extracting insights from information. Sorting algorithms play a crucial role in this process. By sorting data by various attributes (e.g., date, location, customer demographics), you can identify patterns, trends, and outliers that might not be readily apparent in an unsorted dataset. This allows data analysts to gain deeper understanding from the data, informing better decision-making in various fields like finance, marketing, and scientific research.

* **Operating Systems:**  Operating systems manage the resources of your computer. Sorting algorithms find their way into various operating system tasks. For instance, sorting algorithms might be used to prioritize tasks for the CPU, manage memory allocation efficiently, or organize files in a directory structure, ensuring smooth operation of your computer system.


> These are just a few examples of how sorting algorithms permeate our daily lives. 

### Simple explanation:

Imagine you have a messy bookshelf filled with books on various subjects. You want to organize them by genre (sorting them). Here's the main concept and logic behind a sorting algorithm applied to this scenario:

1. **Comparison:** You take two books at a time and compare them based on their genre (like comparing two elements in a list).
2. **Swapping:** If the genres are not in the desired order (e.g., a history book is placed before a novel), you swap their positions on the shelf (like rearranging elements in a list).
3. **Repeat:** You continue comparing and swapping books two at a time until all the books are in the desired order by genre (all elements in the list are sorted according to the chosen criteria).


### Types of algorithms:
**1. Bubble Sort:**

**Concept:** Bubble sort is an iterative algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order.  This process continues until no swaps are needed, signifying a sorted list.

**Explanation:**  Imagine a dataset represented as a list of elements. Bubble sort works by making multiple passes through the list. In each pass, it compares adjacent elements. If the first element is greater than the second, they are swapped. This process resembles bubbles rising to the surface of a liquid, hence the name.  The passes continue until a complete pass is made with no swaps necessary, indicating the list is sorted.

**Time Complexity:**  O(n^2) in the worst and average cases. This means the time it takes to sort the list grows quadratically with the number of elements (n). For large datasets, bubble sort becomes inefficient.

**2. Selection Sort:**

**Concept:** Selection sort also iterates through the list, but instead of comparing adjacent elements, it finds the minimum (or maximum for descending order) element in the unsorted portion and swaps it with the first (or last) element.  This process is repeated, progressively reducing the unsorted portion by one position at each pass.

**Explanation:**  Think of a list as a queue of elements. Selection sort works by finding the minimum element (like the person who should be at the front of the line) within the unsorted portion of the list. This element is then swapped with the first element in the list (like moving that person to the front of the line).  The process is repeated, progressively treating the swapped element as the beginning of the sorted portion and searching for the minimum element within the remaining unsorted portion. 

**Time Complexity:**  O(n^2) in the average and worst cases. Similar to bubble sort, selection sort's efficiency suffers for large datasets due to the quadratic time complexity.

**3. Insertion Sort:**

**Concept:** Insertion sort works by maintaining a sorted sub-list and iteratively inserting elements from the unsorted portion into their correct positions within the sub-list.  This approach is particularly efficient for data that is already partially sorted.

**Explanation:**  Imagine building a sorted list element by element. Insertion sort starts with an empty sorted sub-list and iteratively takes elements from the unsorted portion. It then compares the element with each element in the sorted sub-list, starting from the right end, and inserts it at the correct position to maintain sorted order. This process continues until all elements from the unsorted portion are inserted into the growing sorted sub-list.

**Time Complexity:**  O(n) in the average case for partially sorted data. However, the worst-case time complexity is O(n^2), which can occur for entirely random data.

**4. Merge Sort: Conquer and Divide to Sort**

**Concept:** Merge sort employs a clever "divide-and-conquer" strategy to efficiently sort a list. It breaks down the problem into smaller, more manageable sub-problems and then combines the solutions back together in a sorted order.

**Explanation:**

Imagine you have a large army to organize by height. Merging sort works like this:

1. **Divide:** You split the army (list) into smaller and smaller groups (sub-lists) until each group has only one soldier (element). This is like breaking down a big problem into smaller, easier-to-solve pieces.
2. **Conquer:** Since each sub-list now has just one soldier (element), it's already considered "sorted." This is the base case of the divide-and-conquer approach.
3. **Combine:** Now comes the merging part. You strategically combine the sorted sub-lists back together, but in a specific way. You compare the first soldiers (elements) from each sub-list and place the shorter soldier (smaller element) into the final sorted list. You keep repeating this comparison and placement until all soldiers (elements) from both sub-lists are incorporated into the final sorted list.
4. **Repeat:** You continue applying this divide, conquer, and combine strategy recursively until the entire original army (list) is sorted from shortest to tallest (smallest to largest).

**Time Complexity:** The beauty of merge sort lies in its time complexity. In the average and worst cases, it boasts a complexity of O(n log n). This means the time it takes to sort the list grows logarithmically with the number of elements (n), which is significantly faster than bubble, selection, or insertion sorts (whose complexity is O(n^2)).

**5. Quick Sort**

**Concept:** Quick sort is another divide-and-conquer sorting algorithm, but with a different approach. It relies on a strategically chosen element called the "pivot" to partition the list and conquer the sorting problem.

**Explanation:**

Imagine you have a bookshelf filled with books in disarray. Quick sort works like this:

1. **Choose a Pivot:** You select a book (pivot) from the shelf. This pivot can be chosen in different ways, but often it's the first or last element in the list.
2. **Partition:** You rearrange the books on the shelf based on the pivot.  Books with genres alphabetically before the pivot's genre go on one side, and books with genres alphabetically after the pivot's genre go on the other side. The pivot itself isn't placed yet. This partitioning effectively divides the bigger sorting problem into two smaller sub-problems.
3. **Conquer Recursively:** Now you treat each of the two sub-lists (piles of books) as separate sorting problems. You recursively apply the quick sort strategy to these sub-lists, selecting a new pivot for each and partitioning them accordingly.
4. **Combine:** Once both sub-lists are sorted, you place the original pivot element in its correct sorted position between the two sub-lists. Now, the entire bookshelf (list) is sorted alphabetically.

**Time Complexity:** On average, quick sort also has a time complexity of O(n log n), making it very efficient for large datasets. However, its performance can vary depending on the chosen pivot element.  A poorly chosen pivot (e.g., always the first or last element in a sorted or partially sorted list) can lead to the worst-case scenario of O(n^2), similar to bubble, selection, and insertion sorts. 

## 3. Traversal Algorithms:

### Introduction


> Summary : 

### Simple explanation:

### Types of algorithms:

* **Linear Traversal:** This is simply visiting each element in a list (or any data structure) one by one, often in the order they appear. 
* **Breadth-First Search (BFS):** This is used for tree or graph data structures. It systematically visits every level of the tree/graph, starting from the root and moving outward level by level. BFS is useful for finding the shortest path in a graph.  
* **Depth-First Search (DFS):** This also explores tree or graph data structures. It follows one path as far as possible until it reaches a dead end, then backtracks and explores another path. DFS is useful for finding all connected elements in a graph.


