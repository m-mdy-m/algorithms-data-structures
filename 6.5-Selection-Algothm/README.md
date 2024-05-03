# Selection algorithm

## Introduction:

In computer science, a selection algorithm is an algorithm for finding the **kth smallest (or largest)** value in a collection of **unorganized data**. This data can be a list of numbers, characters, or even objects. The value that it finds is called the **kth order statistic**. Selection algorithms include finding the minimum, median, and maximum element in the collection as special cases. 

Common selection algorithms include quickselect and the median of medians algorithm. When applied to a collection of **n unsorted elements**, these algorithms typically have a time complexity of **O(n)**, as expressed using big O notation. This means the execution time grows linearly with the number of elements.

For data that is already structured, faster algorithms may be possible. As an extreme case, selecting the kth element in an already-sorted array takes constant time, **O(1)**. This is because we can directly access the element at the desired index.

> Summary: A selection algorithm efficiently retrieves the kth smallest (or largest) element from a collection of unordered data. It's particularly useful for finding specific values like minimum, maximum, or median. While selection algorithms have a linear time complexity for unsorted data, they offer a significant advantage over sorting the entire collection when you only need a specific element.

## How it Work:

Selection algorithms efficiently find the kth smallest (or largest) element in a collection of unordered data. Unlike sorting algorithms that arrange the entire collection, selection algorithms focus on finding a specific element. 

Here's a general breakdown of how selection algorithms work:

1. **Initialization:** We start by choosing an initial element from the data. This element could be any element in the collection.

2. **Comparison Loop:** We enter a loop that iterates through the remaining data. In each iteration, we compare the current element with the initial element (or the current candidate for the kth smallest/largest).

3. **Update Candidate:**  
    * If the current element is smaller (for smallest) or larger (for largest) than the candidate element, we update the candidate. This means the current element becomes a better candidate for the kth smallest/largest position.
    * If the current element is equal to the candidate, the specific behavior depends on the selection algorithm. Some algorithms might treat them equally, while others might have a tie-breaking mechanism. 

4. **Repeat:**  Steps 2 and 3 are repeated until all elements in the collection have been compared with the candidate.

5. **Result:** After examining all elements, the final candidate element becomes the kth smallest (or largest) value in the collection.

**Visualizing the Process (Optional):**

![](https://codepumpkin.com/wp-content/uploads/2017/10/selectionSort.gif)

![](https://codepumpkin.com/wp-content/uploads/2017/10/SelectionSort_Avg_case.gif)

![](https://www.codingconnect.net/wp-content/uploads/2016/09/Selection-Sort.gif)

---

### Problem statement
Selection algorithms address a fundamental task: efficiently identifying the **kth smallest (or largest)** element within a collection of unordered data. This data can encompass numbers, characters, or even objects with a comparable property like size or date. Unlike sorting algorithms that arrange the entire collection, selection algorithms focus on retrieving a specific element based on its position within the sorted order.

**Core Characteristics:**

* **Unsorted Data:** The data is assumed to be in its initial, unordered state. Selection algorithms don't require any prior sorting to function.
* **Input:** The algorithm takes two inputs:
    1. The collection of data values.
    2. A number **k** representing the desired position (kth smallest or largest element).
* **Output:** The algorithm outputs the **kth smallest element** if configured to find minimum values. Conversely, for finding maximum values, it outputs the **kth largest element**. Some variations might return a collection of the k smallest/largest elements.
* **Comparison-Based Approach:** Selection algorithms typically rely on comparisons between elements to determine their relative order. Imagine comparing numbers to see which is bigger or smaller. This approach avoids complex mathematical operations, making them suitable for various data types.

**Addressing Challenges:**

* **Handling Duplicates:** To simplify the analysis of selection algorithms, some theoretical discussions assume the data has **distinct values** (no duplicates).
* **Tie-Breaking Mechanism:** In real-world scenarios, data might contain duplicates. To address this, a consistent **tie-breaking method** can be established to determine the order of elements with the same value.
* **Numbering the kth Element:** There are variations in how the "kth" element is numbered. This explanation follows the convention established by Cormen et al.:
    * The **minimum value** is obtained with **k = 1**.
    * The **maximum value** is obtained with **k = n** (n being the total number of elements).
    * The **median** for an odd number of elements (n) is found with **k = (n + 1) / 2**.
    * For even n, there are two medians:
        * Lower median with **k = n / 2**.
        * Upper median with **k = n / 2 + 1**.

> Summary:  Selection algorithms offer a targeted approach to extracting specific elements from unsorted data. Their strength lies in retrieving the kth smallest/largest element without necessarily sorting the entire collection. This makes them efficient for tasks like finding minimum, maximum, or median values in unsorted datasets. They provide a valuable tool for data analysis and manipulation whenever you need to identify specific elements within unordered data.
## Algorithms
### Sorting and heapselect

While specialized selection algorithms often reign supreme in terms of efficiency, a fundamental approach to finding the kth smallest element in a collection relies on sorting. Here's a breakdown of this method:

* **Step 1: Sorting the Collection:**  The initial step involves meticulously arranging the entire data collection in ascending order. This can be achieved using various sorting algorithms, each with its own time complexity. Common sorting algorithms like quicksort or merge sort typically have a time complexity of Θ(n log n), where n represents the number of elements in the collection.

* **Step 2: Retrieving the kth Element:**  Once the data is sorted, retrieving the kth smallest element becomes a straightforward task. If the sorting algorithm outputs the data as an array, you can simply access the element at the kth position (remembering that arrays are often zero-indexed, so the first element is at position 0). In other cases, you might need to scan the sorted sequence to locate the element at the kth position.

**Time Complexity:**

The overall time complexity of this selection method is dominated by the sorting step. Since sorting algorithms like quicksort typically require Θ(n log n) time, this becomes the governing factor. While there might be specialized integer sorting algorithms that are faster, they generally underperform compared to the linear time achievable with dedicated selection algorithms.

**Advantages and Considerations:**

* **Simplicity:** This approach offers an appealing level of simplicity, especially when a well-optimized sorting routine is readily available within a programming library. If a dedicated selection algorithm is not included in the library, this method becomes a viable alternative.
* **Favorable for Smaller Inputs:**  For datasets with moderate sizes, sorting might even outperform non-randomized selection algorithms due to smaller constant factors associated with sorting's running time.
* **Output and Further Computations:**  An additional benefit of this method is that it produces a fully sorted version of the original collection. This sorted data can prove useful for subsequent computations, particularly if selection with different values of k is needed later.

**Specialized Techniques:**

There are optimizations that can be applied when the sorting algorithm itself generates elements one at a time, like selection sort. In such scenarios, it's possible to perform the selection process alongside the sorting. The sorting can then be terminated as soon as the kth element is identified. This optimization, when applied to heapsort, results in the heapselect algorithm. Heapselect boasts a time complexity of O(n + k log n), making it efficient when k is significantly smaller than n. However, this advantage diminishes for larger k values (like k = n/2 for median finding), where it can regress to O(n log n).

> `Summary:` The selection method leveraging sorting offers a clear and straightforward approach for finding the kth smallest element in a collection. While it might not be the most time-efficient solution for all cases, its simplicity and potential benefits for smaller datasets or situations where a pre-existing sorting routine is available make it a valuable option to consider. However, for optimal performance, especially when dealing with larger datasets, exploring specialized selection algorithms is recommended. 
### Pivoting
Selection algorithms excel at pinpointing specific elements within unordered data collections. Unlike sorting algorithms that meticulously arrange the entire dataset, selection algorithms focus on retrieving a strategically chosen element based on its rank. At the heart of many efficient selection algorithms lies the concept of pivoting, a technique that partitions the data and guides the search towards the target element.

**The Pivoting Technique:**

Imagine a collection of unsorted numbers. A pivoting algorithm strategically selects a specific element from this data, the pivot, and uses it to divide the remaining elements into two distinct subsets:

* **Less Than (L):** This subset encompasses elements with values **less than** the pivot.
* **Greater Than (R):** This subset contains elements with values **greater than** the pivot.

By comparing the desired rank (kth smallest) with the sizes of these subsets, the algorithm can determine the location of the target element. Here's a breakdown of the logic:

1. **Comparison with k:** If k, representing the desired rank (kth smallest), is less than or equal to the size of the "Less Than" subset (L), then the kth smallest element resides within L. In this scenario, we can apply the same selection algorithm recursively to the elements in L to hone in on the target element.

2. **Pivot as the Answer:** If k is exactly equal to the size of L plus 1, then the kth smallest element is the pivot itself! We can simply return the pivot in this case.

3. **Refining the Search in "Greater Than" Subset:** If neither of the above conditions hold true, it implies the kth smallest element is located within the "Greater Than" subset (R). More precisely, it's the element positioned at (k - |L| - 1) within R. To find this element, we recursively apply the selection algorithm again, but this time focusing on this specific position within the R subset.

**The Significance of Pivot Choice:**

The efficiency of pivoting-based selection algorithms hinges critically on the selection of the pivot element. A well-chosen pivot leads to a balanced division of the data, resulting in efficient recursive calls. Conversely, a poor pivot choice can create highly unbalanced subsets, leading to a worst-case time complexity of O(n^2), significantly slower than desired. Here's a closer look at some popular pivoting-based algorithms and their pivot selection strategies:

* **Quickselect (Randomized):** This algorithm picks a pivot element uniformly at random from the input data. It boasts an expected time complexity of O(n), making it a fast choice in many situations due to its potential for balanced partitions.

* **Median of Medians (Deterministic):** This algorithm takes a more deterministic approach. It partitions the data into sets of five elements and finds the median of each set. Then, it recursively finds the median of these medians to use as the pivot. This approach guarantees a worst-case time complexity of O(n), but its high constant factors (due to multiple recursive calls) make it less practical than quickselect for most use cases.

* **Floyd-Rivest Algorithm (Hybrid):** This algorithm is a variation of quickselect that employs a more sophisticated pivot selection strategy. It randomly samples a subset of data values and then recursively selects two elements to use as pivots. This approach aims to "sandwich" the kth smallest element between the pivots, minimizing the size of the data to be searched recursively. It achieves an expected number of comparisons close to O(n) but requires a more complex implementation compared to quickselect.

* **Hybrid Algorithms:** Techniques like introselect combine the strengths of quickselect's efficiency with the guaranteed worst-case O(n) time bound of algorithms like median of medians. They strategically switch between these approaches based on the situation, offering a balance between speed and guaranteed performance.

In conclusion, pivoting empowers selection algorithms to efficiently locate the kth smallest element within unordered data. By strategically choosing a pivot and dividing the data based on comparisons, these algorithms can effectively narrow down the search space and locate the target element. While the effectiveness significantly relies on the pivot selection strategy, various algorithms cater to different needs. Quickselect offers a fast, randomized approach, while median of medians provides a deterministic guarantee. Hybrid algorithms like introselect attempt to combine the best of both worlds. Understanding these techniques empowers you to select the most appropriate algorithm for your specific data manipulation tasks.

> `Summary:` Pivoting empowers selection algorithms to efficiently locate the kth smallest element within unordered data. By strategically choosing a pivot and dividing the data based on comparisons, these algorithms can effectively narrow down the search space and locate the target element. While the effectiveness significantly relies on the pivot selection strategy, various algorithms like quickselect and median of medians offer practical solutions for different scenarios. 
### Factories
While pivoting techniques offer a powerful approach for selection algorithms, the quest for even greater efficiency has led to the exploration of factories. Introduced in 1976, factories represent a sophisticated concept that pushes the boundaries of deterministic selection algorithms, particularly for k values far from 1 or n (i.e., not the very smallest or largest elements).

**What are Factories?**

Imagine a specialized workshop dedicated to meticulously ordering elements. These factories, within the context of selection algorithms, are methods that construct partial orders for small subsets of input values. They leverage comparisons to meticulously combine smaller, pre-established partial orders.

**A Simplified Example:**

Consider a basic factory that takes a series of single-element partial orders (think of each element as an individual unit waiting to be compared and positioned). This factory compares pairs of elements from these single-element orders and produces a new output: a sequence containing two totally ordered sets. The elements fed into this factory could be:

* Uncompared input values (fresh data waiting to be placed in the order).
* "Waste" values produced by other factories during the overall process.

**The Grand Objective:**

The ultimate goal of a factory-based selection algorithm is to strategically combine these factories. The outputs from some factories become the inputs for others, ultimately aiming to achieve a comprehensive partial order where:

* One specific element (the kth smallest) is positioned higher than k-1 other elements.
* The same element is positioned lower than n-k other elements (remember n is the total number of elements).

**Benefits and Challenges:**

By meticulously designing these factories and their interactions, researchers have achieved remarkable results. For instance, a factory-based approach specifically designed for median-finding (finding the middle element) can achieve this task using at most 2.942n comparisons. This is significantly more efficient than some standard algorithms. However, employing factories effectively can be quite complex. The design and implementation of these factories require a deep understanding of algorithms and mathematical concepts.

> **Summary:** Factories represent an advanced approach to selection algorithms, particularly for deterministic algorithms targeting specific k values. While they offer the potential for superior efficiency, their complexity makes them a niche area explored by researchers pushing the boundaries of what's possible. For most practical applications, pivoting-based techniques like quickselect might be a more approachable and well-suited choice. 
### Parallel algorithms
The exploration of parallel selection algorithms began in the mid-1970s. Researchers have investigated how to perform selection using a parallel comparison tree model, a theoretical framework for analyzing parallel algorithms. This model revealed an interesting trade-off:

* **Parallel Comparison Tree Model:** Introduced by Leslie Valiant, this model provides a framework for analyzing parallel selection algorithms. It establishes a lower bound of Ω(log log n) parallel steps, even for simple tasks like finding the minimum or maximum element, when using a linear number of comparisons.

* **Matching the Lower Bound:** Researchers have devised parallel selection algorithms that achieve the established lower bound of O(log log n) steps, showcasing the potential for efficient parallelization.

* **Randomized Parallelism:** By incorporating randomization within the parallel comparison tree model, it's possible to perform selection in a fixed number of steps while maintaining a linear number of comparisons.

* **Parallel RAM Model:** This model offers a more realistic representation of parallel computing with exclusive read/write memory access. In this model, selection can be achieved in O(log n) time using O(n/log n) processors, representing an optimal solution in terms of both time and the number of processors required.

* **Concurrent Access:** With concurrent memory access (allowing multiple processors to access memory simultaneously), faster parallel times can be achieved. The logarithmic term in the time bound can even be reduced to log k, potentially leading to significant speedups for specific values of k (desired rank).

**Sublinear Selection with Specialized Structures:**

When data is already organized within a specific data structure, selection can potentially be performed in sublinear time, meaning the time complexity grows slower than the number of elements (n). Here are some notable examples:

* **Sorted Arrays:** For data meticulously sorted within an array, selecting the kth element becomes a trivial task. A simple array lookup in constant time (O(1)) suffices to retrieve the desired element.
* **Two-Dimensional Arrays:** Data organized as a two-dimensional array with sorted rows and columns allows for selection in O(m log(2n/m)) time. This can be even faster for scenarios where k is relatively small compared to the array's dimensions.
* **Multiple Sorted Arrays:** A collection of sorted one-dimensional arrays offers selection in O(m + Σ(i=1 to m) log(ki + 1)) time, where m represents the number of arrays and ki denotes the number of elements less than the selected item within the ith array.
* **Binary Heaps:** Data structured as a binary heap enables selection in O(k) time, remarkably independent of the heap's size (n). This proves to be significantly faster than the O(k log n) time bound associated with best-first search approaches.
* **Order Statistic Trees:**  For dynamic data undergoing insertions and deletions, order statistic trees provide a data structure that supports selection queries alongside insertions and deletions, all in O(log n) time per operation. This leverages a self-balancing binary search tree augmented with additional information per node.

**Beyond Traditional Selection:**

The exploration of selection algorithms extends beyond the comparison model of computation. For scenarios involving small integers where binary arithmetic operations are permissible, faster selection times can be achieved.

**Real-World Considerations:**

It's important to note that streaming algorithms with sublinear memory limitations (both in terms of n and k) cannot perform exact selection queries on dynamic data. However, techniques like the count-min sketch offer approximate solutions, identifying a value whose position in the ordering (if included) would be within an εn range of k. This approach utilizes a sketch with a size that scales logarithmically with respect to 1/ε.

> Summary : Selection algorithms can be parallelized to achieve faster computation times. In the parallel RAM model, selection can be achieved in O(log n) time using O(n/log n) processors. When data is already organized in specific data structures, selection can be even faster. For example, selection on a sorted array takes constant time.
## Lower bounds
Selection algorithms, despite their apparent simplicity, face a fundamental challenge: the minimum number of comparisons required to identify the desired element. This section delves into the fascinating realm of lower bounds, exploring the theoretical limitations on selection efficiency and the distinctions between randomized and deterministic approaches.

**Understanding the Necessity of Comparisons:**

The linear running time (O(n)) observed in most selection algorithms is not a coincidence. It stems from the inherent nature of the problem. When dealing with unordered data, every element must be considered at least once to ensure the target element isn't overlooked. Skipping a comparison introduces the risk of missing the crucial piece of information that could lead to the correct selection. This inherent requirement for comparisons establishes a baseline level of efficiency that all selection algorithms must strive to achieve.

**Beyond the Basics: Exploring Specific Cases**

Researchers haven't stopped at this basic understanding. They've delved deeper, seeking the exact number of comparisons needed for selection in various scenarios. This exploration reveals intriguing differences between randomized and deterministic algorithms:

* **Minimum and Maximum Selection:** Finding the minimum or maximum element presents a relatively straightforward case. To identify the minimum element, each element in the data set must be compared against the current minimum candidate. This process ensures that every other element is demonstrably "non-minimal." The same logic applies to maximum selection, just with the comparison criteria reversed. This analysis leads to a lower bound of n-1 comparisons for both minimum and maximum selection – every element needs to be compared at least once to definitively establish its position relative to the minimum or maximum value.

* **Second-Smallest Selection:** Selecting the second-smallest element presents a more intricate challenge. Here, the algorithm must first distinguish the absolute minimum element. The number of comparisons involving the minimum value (p) plays a crucial role. Each element compared to the minimum becomes a candidate for the second-smallest position. However, to eliminate these contenders, p-1 of them must be proven larger than another element in a separate comparison. This intricate analysis reveals a lower bound of n + ⌈log2⁡𝑛⌉ - 2 comparisons for deterministic selection algorithms. Interestingly, this bound aligns with the number of comparisons required in a single-elimination tournament structure, where elements compete in pairs and the loser is eliminated. However, randomized algorithms can achieve a lower expected number of comparisons in this scenario by exploiting the element selection process probabilistically.

**Generalizing the Lower Bound:**

The lower bound for selecting the kth element (out of n) can be expressed as n + min(k, n-k) - O(1) comparisons, on average. This matches the number of comparisons used by the Floyd-Rivest selection algorithm, disregarding its constant term. This bound applies to both deterministic algorithms (averaged over all possible input permutations) and the expected number of comparisons for randomized algorithms on their worst-case inputs, based on Yao's principle. In simpler terms, the lower bound suggests that the number of comparisons required, on average, scales linearly with the data size (n) and is influenced by the position of the target element (k) within the data set.

**Deterministic vs. Randomized Approaches:**

The quest for efficiency extends beyond the average-case scenario. For deterministic selection algorithms, a more complex lower bound exists, involving the binary entropy function (H(x)). This function captures the inherent uncertainty associated with a given probability distribution. The lower bound suggests that deterministic selection necessitates at least (1 + H(k/n))n + Ω(n) comparisons. While this bound might seem abstract, it essentially indicates that deterministic algorithms face a trade-off between the number of comparisons and the certainty of the outcome. Algorithms with fewer comparisons might have a higher probability of encountering situations where the input data leads to a larger number of comparisons in the worst case.

**Median Finding: A Special Case:**

Finding the median element (k = n/2) presents a special case with a slightly stricter lower bound on comparisons. Deterministic algorithms require at least (2 + ε)n comparisons, where ε is a very small constant value. This suggests that even for finding the middle element, there's a theoretical limit on how efficiently deterministic algorithms can operate.

> **Summary:** Selection algorithms, while seemingly straightforward, are subject to inherent limitations on their efficiency. Understanding these lower bounds empowers researchers to design algorithms that approach these theoretical limits and navigate the trade-offs between deterministic and randomized approaches. Randomized algorithms can offer better average-case performance by incorporating probabilistic elements, while deterministic algorithms provide guaranteed performance but might require more comparisons in the worst case. By delving into the complexities of lower bounds, we gain a deeper appreciation for the challenges and accomplishments in the realm of selection algorithms.
## Exact numbers of comparisons
Donald Knuth, a renowned computer scientist, compiled a fascinating table known as the "selection cost triangle." This triangle offers a glimpse into the exact number of comparisons required by an optimal selection algorithm for various scenarios. 

**Understanding the Triangle:**

Imagine a triangular table where rows represent the number of elements (n) in the data set, starting with n = 1 at the top. Within each row, the kth number signifies the minimum comparisons needed to select the kth smallest element from that specific data size (n). The table is symmetrical because selecting the kth smallest element requires the same number of comparisons as selecting the kth largest element, in the worst-case scenario.

**Exploring the Triangle's Content:**

The table is partially populated with the following numbers:

```
                                      0
                                    1    1
                                  2    3    2
                                3    4    4    3
                              4    6    6    6    4
                            5    7    8    8    7    5
                          6    8   10   10   10   8    6
                        7    9   11   12   12   11   9    7
                      8   11   12   14   14   14   12   11   8
                    9   12   14   15   16   16   15   14   12   9
```

**Formula for Efficiency:**

For most entries on the left half of each row, a formula exists to calculate the optimal number of comparisons. This formula, developed by Abdollah Hadian and Milton Sobel, leverages a method related to heap selection. It considers a single-elimination tournament followed by a series of smaller tournaments to progressively identify the desired kth smallest element.

**Formula:**

𝑛−𝑘+(𝑘−1)⌈log2⁡(𝑛+2−𝑘)⌉

Here, n represents the data size, k represents the target element position (kth smallest), and ⌈log2⁡(𝑛+2−𝑘)⌉ denotes the ceiling function of the base-2 logarithm of (n + 2 - k).

**Beyond the Formula:**

While the formula provides valuable insights, some entries in the triangle, particularly the larger ones, were established as optimal through extensive computer searches. This signifies that for certain data sizes and target element positions, the exact number of comparisons needed might not have a simple closed-form expression.

> **Summary:** The selection cost triangle serves as a valuable reference for understanding the inherent efficiency limitations associated with selection algorithms. By analyzing the triangle, researchers can gain insights into the optimal number of comparisons required for various scenarios and guide the development of more efficient selection algorithms. The existence of a formula for most entries on the left half of the table provides a foundation for theoretical analysis, while computer searches aid in establishing optimality for more complex cases. As research in selection algorithms continues to evolve, the triangle might be further refined or expanded to encompass a wider range of data sizes and target element positions. 

## Conclusion

True, understanding selection algorithms can involve some complex concepts, especially when delving into lower bounds and advanced techniques like order statistic trees. However, by grasping the core principles and exploring different approaches like sorting, heaps, and pivoting, you gain a solid foundation for appreciating their efficiency and applicability in various scenarios.

**Real-World Example: Finding the Median Salary in a Company**

Imagine a company needs to determine the median employee salary. They have a dataset containing salary information for all employees (n data points). To find the median (the middle value when the data is ordered from least to greatest), a selection algorithm can be employed. Here's how it might work using the quickselect algorithm, a popular randomized approach:

1. **Randomly Choose a Pivot:** The algorithm picks an element from the dataset at random and designates it as the pivot.

2. **Partition the Data:** The remaining data is divided into two subsets based on a comparison with the pivot:
   - Less Than (L): Elements with salaries less than the pivot's value.
   - Greater Than (R): Elements with salaries greater than the pivot's value.

3. **Identify the Median's Location:** The median's position (k) within the sorted data depends on the sizes of these subsets. 
   - If the size of subset L (number of employees earning less than the pivot) is greater than or equal to k (halfway point), the median resides within subset L.
   - If the size of L is exactly k - 1, then the pivot itself is the median!
   - Otherwise, the median is positioned at (k - |L| - 1) within subset R (since some elements in L are smaller and the rest in R are larger).

4. **Recursive Calls (if necessary):** Depending on the pivot's position and the desired median's location (k), the algorithm might recursively call itself on either subset L or R, focusing on the specific location where the median is guaranteed to reside. This process continues until the median element is identified.

5. **Return the Median:** Once the median's position is pinpointed within the data (either the pivot itself or an element within a specific subset), the algorithm returns this value as the median salary in the company.

By strategically selecting pivots and partitioning the data, quickselect efficiently narrows down the search space and locates the median element in the salary dataset. This principle applies to various selection algorithms, each with its own strengths and considerations.


## Example
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.ts)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.js)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.go)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.java)
- [Python](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.py)

> Link Visualization->  [Visualization](https://algorithmic-solutions.github.io/Selection-Algorithm/)