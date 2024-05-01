# Basic-Sorting Algorithm

## What is Sorting?
Sorting refers to rearrangement of a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure. Sorting means reordering of all the elements either in ascending or in descending order.

> Summary : Sorting means reordering of all the elements either in ascending or in descending order.

## What is Sorting Algorithm?
In computer science, a sorting algorithm is an algorithm that puts elements of a list into an order. The most frequently used orders are numerical order and lexicographical order, and either ascending or descending. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists. Sorting is also often useful for canonicalizing data and for producing human-readable output.

> Sorts are most commonly in numerical or a form of alphabetical (or lexicographical) order, and can be in ascending (A-Z, 0-9) or descending (Z-A, 9-0) order.

**Formally, the output of any sorting algorithm must satisfy two conditions:**
1. The output is in monotonic order (each element is no smaller/larger than the previous element, according to the required order).
2. The output is a permutation (a reordering, yet retaining all of the original elements) of the input.
For optimum efficiency, the input data should be stored in a data structure which allows random access rather than one that allows only sequential access.


### Better explanation with simple example:

**Imagine you have a messy bookshelf.** The books are all jumbled up, with no particular order. Sorting comes in when you want to organize these books.

* **Sorting Algorithm:** This is a set of instructions that tells you how to arrange the books in a specific order. This order could be alphabetical (by title), by author's last name, or by genre.

**Here's the basic logic:**

1. **Compare:** The algorithm compares two elements at a time. In our bookshelf example, it might compare the titles of two books.
2. **Swap:** If the elements are in the wrong order (according to the chosen order), the algorithm swaps their positions. So, if book B comes alphabetically before book A, they would be swapped.
3. **Repeat:** Steps 1 and 2 are repeated until all elements are in the desired order. In the end, your bookshelf is beautifully organized!

**Real-World Example:**

Let's say you have a list of your favorite movies with their release years:

* The Godfather (1972)
* The Shawshank Redemption (1994)
* The Dark Knight (2008)
* Pulp Fiction (1994)

A sorting algorithm can arrange these movies based on their release year:

1. The Godfather (1972)  **compared to** The Shawshank Redemption (1994) - No swap needed (1972 < 1994)
2. The Shawshank Redemption (1994) **compared to** The Dark Knight (2008) - No swap needed (1994 < 2008)
3. The Dark Knight (2008) **compared to** Pulp Fiction (1994) - Swap needed (2008 > 1994)

After multiple comparisons and swaps, you'll have the list sorted by release year:

* The Godfather (1972)
* Pulp Fiction (1994)
* The Shawshank Redemption (1994)
* The Dark Knight (2008)

- > Is it understandable now? Tell me 

## Why important?

Sorting algorithms are the cornerstone of data organization, playing a vital role in a vast array of applications. Their importance stems from their ability to structure data for efficient retrieval, analysis, and ultimately, the extraction of valuable insights. Here's a deeper exploration of why sorting algorithms are essential:

**Turbocharged Search and Access:**

* **Faster Lookups:** Imagine a library with books scattered everywhere. Finding a specific one would be a tedious task. Sorting algorithms act as librarians, meticulously arranging data for quick retrieval. Sorted data allows search algorithms to pinpoint the information you need much faster. This translates to significant time savings and reduced processing power required for searches. 

* **Optimized Performance:** Many other data manipulation algorithms rely heavily on sorted input for efficient operation. For instance, merging two unsorted lists would be cumbersome. Sorting algorithms act as a pre-processing step, ensuring smooth functioning of subsequent algorithms that leverage the organized data.

**Unlocking Data Insights for Informed Decisions:**

* **Pattern Discovery:** Sorting empowers us to uncover hidden patterns and trends within data. Imagine customer purchase history – sorting by product reveals buying habits, informing targeted marketing strategies. Sorting acts like a magnifying glass, highlighting previously obscured connections and patterns.

* **Comparative Analysis:** Sorting allows for effective comparison of similar data points. Financial analysts might sort stocks by price-to-earnings ratio to identify potentially undervalued investments. Scientists sort experimental results to analyze cause-and-effect relationships. Sorting creates a level playing field for meaningful comparisons across various data sets.

**Real-World Applications:**

* **E-commerce:** Sorting products by price, popularity, or category makes online shopping a streamlined experience.  
* **Social Media:** Sorting feeds by relevance or chronological order keeps you updated on what matters most.  
* **Logistics & Delivery:** Sorting packages by destination optimizes delivery routes, saving time and resources.

---

> Summary: sorting algorithm is like Batman in Gotham City 😂

## Types in Data Structures

There are various types of sorting available. The choice of sorting algorithm depends on various factors, such as the size of the data set, the type of data being sorted, and the desired time and space complexity.
### Comparison-based sorting algorithms
These compare elements of the data set and determine their order based on the result of the comparison. Examples of comparison-based sorting algorithms include bubble sort, insertion sort, quicksort, merge sort, and heap sort.
### Non-comparison-based sorting algorithms
These don’t compare elements directly, but rather use other properties of the data set to determine their order. Examples of non-comparison-based sorting algorithms include counting sort, radix sort, and bucket sort.
### In-place sorting algorithms
These algorithms sort the data set in-place, meaning they don’t require additional memory to store intermediate results. Examples of in-place sorting algorithms include bubble sort, insertion sort, quicksort, and shell sort.
### Stable sorting algorithms
These preserve the relative order of equal elements in the data set. Examples of stable sorting algorithms include insertion sort, merge sort, and Timsort.
### Adaptive sorting algorithms
These take advantage of any existing order in the data set to improve their efficiency. Examples of adaptive sorting algorithms include insertion sort, bubble sort, and Timsort.

## Characteristics of Sorting Algorithms:

## Applications of Sorting Algorithms:

## Popular algorithms:
- Real-world Examples
- Characteristics
- How it Work
## How it Works?

## Complexity of Sorting Algorithms

## Classification

## Stability 

## Memory usage patterns and index sorting

## References :
- [geeksforgeeks](https://www.geeksforgeeks.org/sorting-algorithms/)
- [wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)
- [freecodecamp](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/)
- [sitepoint](https://www.sitepoint.com/best-sorting-algorithms/)

## Conclusion