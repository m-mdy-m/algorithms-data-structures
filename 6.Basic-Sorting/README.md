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

Sorting algorithms are used to organize data in a particular order, which makes it easier to search, access, and analyze. In many applications, sorting is a critical part of the data processing pipeline, and the efficiency of the sorting algorithm can have a significant impact on the overall performance of the system.
- **In databases.** Sorting is used to retrieve records in a particular order, such as by date, alphabetical order, or numerical order. This allows users to quickly find the data they need, without having to manually search through large amounts of unsorted data.
- **In search engines.** To rank search results in order of relevance. By sorting the results in this way, users can quickly find the information they’re looking for, without having to sift through irrelevant or unrelated results.
- **In many scientific and engineering applications.** Researchers can run data analysis and simulations to gain insights into complex systems and make more accurate predictions about future behavior.

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