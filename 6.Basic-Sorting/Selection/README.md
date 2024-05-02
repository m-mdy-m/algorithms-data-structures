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
The deterministic selection algorithms with the smallest known numbers of comparisons, for values of 𝑘 that are far from 1 or 𝑛, are based on the concept of factories, introduced in 1976 by Arnold Schönhage, Mike Paterson, and Nick Pippenger.[18] These are methods that build partial orders of certain specified types, on small subsets of input values, by using comparisons to combine smaller partial orders. As a very simple example, one type of factory can take as input a sequence of single-element partial orders, compare pairs of elements from these orders, and produce as output a sequence of two-element totally ordered sets. The elements used as the inputs to this factory could either be input values that have not been compared with anything yet, or "waste" values produced by other factories. The goal of a factory-based algorithm is to combine together different factories, with the outputs of some factories going to the inputs of others, in order to eventually obtain a partial order in which one element (the 
𝑘 th smallest) is larger than some 𝑘−1 other elements and smaller than another 𝑛−𝑘 others. A careful design of these factories leads to an algorithm that, when applied to median-finding, uses at most 2.942𝑛 comparisons. For other values of 𝑘, the number of comparisons is smaller.

### Parallel algorithms
Parallel algorithms for selection have been studied since 1975, when Leslie Valiant introduced the parallel comparison tree model for analyzing these algorithms, and proved that in this model selection using a linear number of comparisons requires Ω(log log 𝑛) parallel steps, even for selecting the minimum or maximum. Researchers later found parallel algorithms for selection in 
𝑂(log log 𝑛) steps, matching this bound. In a randomized parallel comparison tree model it is possible to perform selection in a bounded number of steps and a linear number of comparisons. On the more realistic parallel RAM model of computing, with exclusive read exclusive write memory access, selection can be performed in time 𝑂(log⁡ 𝑛) with 𝑂(𝑛/log 𝑛)processors, which is optimal both in time and in the number of processors. With concurrent memory access, slightly faster parallel time is possible in general, and the log 𝑛 term in the time bound can be replaced by log 𝑘.

Sublinear data structures
When data is already organized into a data structure, it may be possible to perform selection in an amount of time that is sublinear in the number of values. As a simple case of this, for data already sorted into an array, selecting the 𝑘 th element may be performed by a single array lookup, in constant time.[27] For values organized into a two-dimensional array of size 𝑚×𝑛, with sorted rows and columns, selection may be performed in time 𝑂(𝑚log(2𝑛/𝑚)), or faster when 𝑘 is small relative to the array dimensions.[27][28] For a collection of 𝑚 one-dimensional sorted arrays, with 𝑘𝑖 items less than the selected item in the 𝑖 th array, the time is 𝑂(𝑚+∑𝑖=1𝑚log⁡(𝑘𝑖+1)) Selection from data in a binary heap takes time 𝑂(𝑘). This is independent of the size 𝑛 of the heap, and faster than the 𝑂(𝑘 log⁡ 𝑛) time bound that would be obtained from best-first search.[28][29] This same method can be applied more generally to data organized as any kind of heap-ordered tree (a tree in which each node stores one value in which the parent of each non-root node has a smaller value than its child). This method of performing selection in a heap has been applied to problems of listing multiple solutions to combinatorial optimization problems, such as finding the k shortest paths in a weighted graph, by defining a state space of solutions in the form of an implicitly defined heap-ordered tree, and then applying this selection algorithm to this tree.[30] In the other direction, linear time selection algorithms have been used as a subroutine in a priority queue data structure related to the heap, improving the time for extracting its 𝑘 th item from 𝑂(log⁡ 𝑛)to 𝑂(log∗⁡𝑛+log⁡ 𝑘); here log∗𝑛 is the iterated logarithm.

For a collection of data values undergoing dynamic insertions and deletions, the order statistic tree augments a self-balancing binary search tree structure with a constant amount of additional information per tree node, allowing insertions, deletions, and selection queries that ask for the 
𝑘 th element in the current set to all be performed in 𝑂(log⁡ 𝑛) time per operation.[2] Going beyond the comparison model of computation, faster times per operation are possible for values that are small integers, on which binary arithmetic operations are allowed.[32] It is not possible for a streaming algorithm with memory sublinear in both 𝑛 and 𝑘 to solve selection queries exactly for dynamic data, but the count–min sketch can be used to solve selection queries approximately, by finding a value whose position in the ordering of the elements (if it were added to them) would be within 𝜀 𝑛 steps of 𝑘, for a sketch whose size is within logarithmic factors of 1/𝜀.

## Lower bounds
The 𝑂(𝑛) running time of the selection algorithms described above is necessary, because a selection algorithm that can handle inputs in an arbitrary order must take that much time to look at all of its inputs. If any one of its input values is not compared, that one value could be the one that should have been selected, and the algorithm can be made to produce an incorrect answer. Beyond this simple argument, there has been a significant amount of research on the exact number of comparisons needed for selection, both in the randomized and deterministic cases.
Selecting the minimum of 𝑛 values requires 𝑛−1 comparisons, because the 𝑛−1 values that are not selected must each have been determined to be non-minimal, by being the largest in some comparison, and no two of these values can be largest in the same comparison. The same argument applies symmetrically to selecting the maximum.

The next simplest case is selecting the second-smallest. After several incorrect attempts, the first tight lower bound on this case was published in 1964 by Soviet mathematician Sergey Kislitsyn. It can be shown by observing that selecting the second-smallest also requires distinguishing the smallest value from the rest, and by considering the number 𝑝 of comparisons involving the smallest value that an algorithm for this problem makes. Each of the 𝑝 items that were compared to the smallest value is a candidate for second-smallest, and 𝑝−1 of these values must be found larger than another value in a second comparison in order to rule them out as second-smallest. With 𝑛−1 values being the larger in at least one comparison, and 𝑝−1 values being the larger in at least two comparisons, there are a total of at least 𝑛+𝑝−2 comparisons. An adversary argument, in which the outcome of each comparison is chosen in order to maximize 𝑝 (subject to consistency with at least one possible ordering) rather than by the numerical values of the given items, shows that it is possible to force 𝑝 to be at least log2𝑛. Therefore, the worst-case number of comparisons needed to select the second smallest is 𝑛+⌈log2⁡𝑛⌉−2 ,the same number that would be obtained by holding a single-elimination tournament with a run-off tournament among the values that lost to the smallest value. However, the expected number of comparisons of a randomized selection algorithm can be better than this bound; for instance, selecting the second-smallest of six elements requires seven comparisons in the worst case, but may be done by a randomized algorithm with an expected number of 6.5 comparisons.

More generally, selecting the 𝑘 th element out of 𝑛 requires at least 𝑛+min(𝑘,𝑛−𝑘)−𝑂(1) comparisons, in the average case, matching the number of comparisons of the Floyd–Rivest algorithm up to its 𝑜(𝑛) term. The argument is made directly for deterministic algorithms, with a number of comparisons that is averaged over all possible permutations of the input values.[1] By Yao's principle, it also applies to the expected number of comparisons for a randomized algorithm on its worst-case input.

For deterministic algorithms, it has been shown that selecting the 𝑘 th element requires (1+𝐻(𝑘/𝑛))𝑛+Ω(𝑛) comparisons, where 
𝐻(𝑥)=𝑥 log2⁡1𝑥+(1−𝑥)log2 
 1
--
1−𝑥

is the binary entropy function.[35] The special case of median-finding has a slightly larger lower bound on the number of comparisons, at least (2+𝜀)𝑛, for 𝜀≈2−80.

### Exact numbers of comparisons
Knuth supplies the following triangle of numbers summarizing pairs of 𝑛 and 𝑘 for which the exact number of comparisons needed by an optimal selection algorithm is known. The 𝑛 th row of the triangle (starting with 𝑛=1 in the top row) gives the numbers of comparisons for inputs of 𝑛
values, and the 𝑘 th number within each row gives the number of comparisons needed to select the 
𝑘 th smallest value from an input of that size. The rows are symmetric because selecting the 𝑘 th smallest requires exactly the same number of comparisons, in the worst case, as selecting the 𝑘 th largest

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

Most, but not all, of the entries on the left half of each row can be found using the formula

𝑛−𝑘+(𝑘−1)⌈log2⁡(𝑛+2−𝑘)⌉.This describes the number of comparisons made by a method of Abdollah Hadian and Milton Sobel, related to heapselect, that finds the smallest value using a single-elimination tournament and then repeatedly uses a smaller tournament among the values eliminated by the eventual tournament winners to find the next successive values until reaching the 𝑘 th smallest. Some of the larger entries were proven to be optimal using a computer search.