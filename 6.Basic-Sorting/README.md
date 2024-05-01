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

## Sorting Terminology:

* **In-place Sorting:** 
    * **Definition:** An in-place sorting algorithm sorts the data by rearranging elements within the existing data structure (typically an array) without requiring additional space for temporary results. This makes them memory-efficient but may overwrite the original data.
    * **Examples:** Bubble Sort, Insertion Sort, Quicksort, Shell Sort
    * **Better Understanding:** Think about arranging the bookshelves again.  An in-place sorting algorithm would be like shifting books around on the shelves themselves to get them in order by genre or author. You wouldn't need any extra space (another shelf) to sort them, but the original arrangement of the books would be lost. 

* **Internal Sorting:**
    * **Definition:** Internal sorting refers to algorithms that can sort all the data entirely within the main memory (RAM) of a computer. This is suitable for datasets that fit comfortably in memory.
    * **Examples:**  The examples you listed (heap sort, bubble sort, selection sort, quicksort, shell sort, insertion sort) are all examples of internal sorting algorithms.
    * **Better Understanding:** Sorting a small to medium-sized grocery list in your head is an example of internal sorting. The entire list can be held in your memory and mentally rearranged alphabetically or by category.

* **External Sorting:**
    * **Definition:** External sorting deals with sorting massive datasets that cannot be entirely loaded into main memory at once. These algorithms typically break down the data into smaller chunks, sort them on disk (or secondary storage), and then merge the sorted chunks back together in a specific order.
    * **Examples:** Merge Sort (particularly efficient for external sorting due to its merge operations),  as well as  Tape Sort variations (like Polyphase sort, Four tape sort)  designed specifically for external sorting on tape drives (although less common nowadays).
    * **Better Understanding:** Sorting a large collection of music files on your computer might involve external sorting. The computer might break down the list into smaller chunks that fit in memory, sort them individually, and then merge the sorted chunks back into a single sorted playlist stored on your hard drive (secondary storage).

* **Stable Sorting:**
    * **Definition:** A stable sorting algorithm preserves the original order of equal elements during the sorting process. If two elements have the same value, the element that appeared earlier in the original list will also appear earlier in the sorted list. This can be crucial for maintaining data integrity in specific use cases. 
    * **Examples:** (Merge Sort, Insertion Sort, Bubble Sort) are all considered stable sorting algorithms.
    * **Better Understanding:** Imagine sorting a list of customer transactions by date, but you also want to maintain the order in which the transactions happened on the same day (timestamps). A stable sorting algorithm would ensure that transactions from the same day appear in the sorted list in the same order they appeared originally.

* **Unstable Sorting:**
    * **Definition:** An unstable sorting algorithm may not guarantee the preservation of the original order of equal elements during the sorting process. The order of elements with the same value in the sorted output might differ from their order in the original data.
    * **Examples:** (Quicksort, Heap Sort, Shell Sort) are all unstable sorting algorithms.  While their sorting efficiency is often good, they might not be suitable for situations where the order of duplicates matters.
    * **Better Understanding:** Sorting a list of tasks by priority (high, medium, low) might use an unstable sorting algorithm. As long as the high-priority tasks are at the beginning of the list, the order within the high-priority tasks themselves might not be preserved.

**Additional Notes:**

* You might also consider including definitions for:
    * **Time Complexity:** This refers to the amount of time (number of steps) an algorithm takes to execute, typically expressed using Big O notation (e.g., O(n^2) for quadratic time). Sorting algorithms have different time complexities depending on the algorithm and data size.
    * **Space Complexity:** This refers to the amount of additional memory space an algorithm requires during execution. In-place sorting algorithms have lower space complexity as they don't need extra space for temporary results.
    * better understanding :

## Applications of Sorting Algorithms:


* **Searching Algorithms:** Sorting is an essential pre-processing step for efficient search algorithms like binary search and ternary search. These algorithms leverage the sorted order to pinpoint the target element much faster by repeatedly dividing the search space in half.  For instance, binary search eliminates half of the unsorted data with each comparison, but it can only do this effectively if the data is already sorted.

* **Data management:** Sorting data makes it easier to search, retrieve, and analyze. Imagine a library with books scattered everywhere. Finding a specific title would be a tedious task. Sorting data in a specific order (e.g., alphabetical, numerical) brings organization, making it quicker to locate the information you need. Additionally, sorted data facilitates comparisons between data points.  For instance, financial analysts might sort stocks by price-to-earnings ratio to identify potentially undervalued investments. Sorting streamlines data management tasks, saving time and effort. 

* **Database optimization:** Sorting database tables by frequently used columns can significantly improve query performance. When a database needs to search or filter data based on a specific column, having it sorted allows the database engine to locate relevant entries much faster. Sorted data structures enable the database to perform these operations more efficiently, leading to quicker response times for queries.

* **Machine Learning:** Sorting plays a role in preparing data for training machine learning models.  For instance, training an image recognition model might involve sorting image data by specific features (like color, shape, or texture) to help the model identify patterns and make predictions more accurately. Sorting helps organize the data in a way that facilitates the learning process for machine learning algorithms.

* **Data Analysis:** Sorting is a powerful tool for data analysis, helping to uncover patterns, trends, and outliers in datasets.  Sorting customer data by purchase history allows businesses to identify buying habits and preferences.  For example, sorting customer purchases by product category might reveal that customers who buy product A are also likely to buy product B.  This information can be used to develop targeted marketing strategies.  Similarly, in scientific research, sorting experimental results by specific parameters can help researchers identify correlations or outliers that might be crucial for understanding the data and drawing conclusions. Sorting empowers researchers and analysts to extract valuable insights from their data.

## Popular algorithms:

### Selection sort
**Explanation:**

Selection sort is a sorting algorithm that works its way through a list by repeatedly finding the minimum (or maximum, depending on desired order) element from the unsorted portion and swapping it with the first element in that unsorted portion. This process continues until the entire list is sorted.

**Better Understanding:**

Think of organizing a bookshelf alphabetically. Selection sort would be like going through the books one by one, finding the book with the title that comes earliest alphabetically (like "A Tale of Two Cities") and placing it at the very beginning of the unsorted shelf. You would then repeat this process, finding the next book that comes alphabetically after the first one you placed, and swapping it with the second book on the shelf. This continues until all the books are in their correct alphabetical order.

**Real-world Examples:**

* **Small Datasets:** Selection sort might be a reasonable approach for sorting a short to-do list by priority (where 1 is highest) in your head. With a small number of tasks, mentally comparing them and swapping priorities isn't too cumbersome.

* **Card Games:** Sorting a hand of cards in a card game (where aces are low or high depending on the game) can be visualized as a selection sort process. You might go through your hand, find the card with the lowest value (e.g., a deuce of spades) and swap it with the first card in your hand. You would then continue this process, finding the next lowest card and swapping it into the proper position.

**How it Works:**

1. **Iterate Through Unsorted Portion:** The algorithm starts by iterating through the unsorted portion of the data. Initially, this encompasses the entire list.

2. **Find Minimum Element:** In each iteration, it needs to find the index of the element with the minimum value (or maximum value for descending order). This involves comparing elements within the unsorted portion.

3. **Swap Minimum with First Element:** Once the index of the minimum element is found, it's swapped with the element at the very beginning of the unsorted portion (typically the first element in the list). This effectively places the minimum element in its sorted position.

4. **Increment and Repeat:** The index pointing to the beginning of the unsorted portion is then incremented by one. This shrinks the unsorted portion as one element is now considered sorted. Steps 1-4 are repeated until the entire list is sorted, meaning the unsorted portion has shrunk to zero elements.

**Complexity:**

* **Time Complexity:** O(n^2). This means the time required to sort the data grows quadratically with the number of elements (n). Selection sort makes numerous comparisons between elements throughout the iterations, leading to slower performance for larger datasets. As the number of elements increases, the number of comparisons grows significantly.

* **Space Complexity:** O(1). Selection sort is an in-place sorting algorithm. It sorts the data by rearranging elements within the existing data structure (typically an array) without requiring additional space for temporary results. This makes it memory-efficient, but the trade-off is the slower execution time.

**Applications:**

Selection sort's simplicity and ease of understanding make it a good choice for educational purposes or for sorting very small datasets where speed is not a major concern. However, its quadratic time complexity makes it impractical for sorting large datasets where efficiency is crucial.

**When to Use Selection Sort:**

* **Small Datasets:** When dealing with a very small number of elements and ease of understanding is important, selection sort can be a reasonable option. 
* **Teaching Tool:** Due to its straightforward logic, selection sort is a valuable tool for introducing the concept of sorting algorithms and understanding how they work.

**When Not to Use Selection Sort:**

* **Large Datasets:** For sorting large datasets where performance is a priority, selection sort is not a suitable choice. There are significantly faster sorting algorithms available, such as Merge Sort or Quicksort, that can handle large data volumes much more efficiently.

**Additional Notes:**

Selection sort is a stable sorting algorithm. This means that if two elements have the same value, the element that appeared earlier in the original list will also appear earlier in the sorted list. This can be useful in specific situations where preserving the original order of duplicates is important.

---

### Bubble sort

**Explanation:**

**Better understanding**

**Real-world Examples:**

**How it Work:**

**Complexity:**

**Application**

**When should use it?:**

**When not to use it?:**

---
### Insertion sort
**Explanation:**

Bubble sort is another simple sorting algorithm that works by repeatedly iterating through the data set, comparing adjacent elements, and swapping them if they are in the wrong order. It's like repeatedly "bubbling" the largest elements to the end of the list with each pass.

**Better Understanding:**

Imagine you have a list of children lined up for a race, but they're not in height order (shortest in front). Bubble sort would be like starting at the beginning of the line and comparing the heights of two kids next to each other. If the child in front is taller, you swap their positions. You then continue down the line, comparing and swapping adjacent children until you reach the end.  However, a taller child might have been "skipped" during this process. So, you repeat the entire process (another pass) from the beginning, again comparing and swapping adjacent children. This continues until no swaps are needed in a complete pass, signifying the list is sorted.

**Real-world Examples:**

* **Informal Sorting:**  While not ideal for large datasets, bubble sort might be used for informal sorting in everyday situations.  For instance, you might arrange a small stack of books by size in your hand using a bubble sort-like approach, repeatedly comparing and swapping adjacent books until they're in ascending or descending size order.

**How it Works:**

1. **Iterating Through Pairs:** Bubble sort starts by comparing the first two elements in the list. 

2. **Swapping if Out of Order:** If the first element is greater than the second element (for ascending order), their positions are swapped. This effectively "bubbles" the larger element one step towards the end.

3. **Continue to End and Repeat:** The comparison and swapping process continues by moving on to the next pair of elements (second and third). This process is repeated until the end of the list is reached. 

4. **Repeat Until No Swaps:**  However, during this first pass, a larger element in the middle might have been skipped. To ensure all elements are in order, the entire process (iterations through pairs) is repeated from the beginning.

5. **Sorted When No Swaps:** This process of iterating through pairs and swapping continues until a complete pass through the list occurs with no swaps needed. This indicates that the list is now sorted.

**Complexity:**

* **Time Complexity:** O(n^2). Similar to selection sort, bubble sort's time complexity is quadratic. The number of comparisons and swaps grows significantly with the number of elements (n) in the data set, making it slow for large datasets.

* **Space Complexity:** O(1). Bubble sort is also an in-place sorting algorithm. It sorts the data by rearranging elements within the existing data structure, typically an array, without requiring additional space for temporary results. This makes it memory-efficient, but the trade-off is the slower execution time.

**Applications and Trade-offs:**

Bubble sort, like selection sort, is best suited for educational purposes or for sorting very small datasets where simplicity is more important than speed. Here's a breakdown of when bubble sort might be a good fit and when to consider other algorithms:

* **When to Use Bubble Sort:**
    * **Small Datasets:** When dealing with a limited number of elements and understanding the concept of sorting is the primary focus, bubble sort's simplicity makes it a good illustrative example.
    * **Teaching Tool:** Due to its intuitive logic, bubble sort can be a helpful tool for introducing the concept of sorting algorithms.

* **When Not to Use Bubble Sort:**
    * **Large Datasets:** For sorting large datasets where performance matters, bubble sort is not a practical choice. There are significantly faster sorting algorithms available, such as Merge Sort or Quicksort, that can handle large data volumes much more efficiently.

**Additional Notes:**

Bubble sort is also a stable sorting algorithm, meaning it preserves the original order of elements with equal values during the sorting process. 

---
### Merge sort
**Explanation:**

**Better understanding**

**Real-world Examples:**

**How it Work:**

**Complexity:**

**Application**

**When should use it?:**

**When not to use it?:**

---
### Quick sort

**Explanation:**

**Better understanding**

**Real-world Examples:**

**How it Work:**

**Complexity:**

**Application**

**When should use it?:**

**When not to use it?:**

---
### Heap sort
**Explanation:**

**Better understanding**

**Real-world Examples:**

**How it Work:**

**Complexity:**

**Application**

**When should use it?:**

**When not to use it?:**

---

## Types in Data Structures

Choosing the right sorting algorithm depends on several factors like data size, data type, and desired complexity. Here's a breakdown of the various types:

### Comparison-based:

These algorithms work by repeatedly comparing elements in the data set and swapping them based on a comparison criterion (like numerical value or alphabetical order). They are widely used but may not always be the most efficient option for large datasets.

* **Examples:** Bubble Sort, Insertion Sort, Quicksort, Merge Sort, Heap Sort

**Explanation:**

* **Bubble Sort:**  Imagine repeatedly comparing adjacent elements. If they're in the wrong order (larger element comes first), swap them.  This process is  repeated  through multiple passes over the data, gradually "bubbling" the largest elements to the end of the list. It's simple to understand and implement, but for large datasets, it makes numerous comparisons and swaps, leading to slow performance.

* **Insertion Sort:** Think of building a sorted list one element at a time.  Start with an empty sorted list (initially containing just the first element), then iterate through the remaining data.  For each element,  compare it with elements in the sorted list,  and insert it into its correct position. It's efficient for small datasets or data that is already partially sorted. However, as the unsorted portion shrinks, the number of comparisons increases, impacting performance for larger datasets. 

* **Quicksort:** This divide-and-conquer approach works by recursively sorting the data. It first selects a pivot element (often chosen strategically), partitions the list around the pivot, such that elements less than the pivot are placed before it and elements greater than the pivot are placed after it.  Then, it recursively sorts the two sub-lists (elements less than and greater than the pivot).  On average, quicksort is quite fast. However, its performance can deteriorate in the worst case, where the pivot selection leads to unbalanced partitions.

* **Merge Sort:** This sorting algorithm also follows a divide-and-conquer approach. It recursively divides the unsorted list into halves until single-element sub-lists are obtained (which are inherently sorted). Then, it repeatedly merges these sorted sub-lists back together in a specific order to produce the final sorted list. Merge sort is efficient overall but requires additional space for the temporary sub-lists during the merge operation.

* **Heap Sort:** Utilizes a heap data structure, which can be thought of as a specialized tree-based  array that satisfies a specific ordering property (usually a max-heap where the parent element is greater than or equal to its children).  Heap sort repeatedly extracts the largest element (in a max-heap) from the root of the heap, places it at the end of the sorted list, and rearranges the remaining elements in the heap to maintain the heap property. This process is continued until all elements have been extracted, resulting in a sorted list. Heap sort has good average-case performance but might be slower for nearly sorted data, where it doesn't take full advantage of the heap structure.

### Non-comparison-based:

These algorithms exploit specific properties of the data to sort them, often without directly comparing elements. They can be highly efficient for certain data types but may not be universally applicable.

* **Examples:** Counting Sort, Radix Sort, Bucket Sort

**Explanation:**

* **Counting Sort:** This works well for data with a limited, known range of distinct values. It creates an array of counters, one for each possible value in the data range.  It iterates through the data, incrementing the count for each value encountered.  Then, it uses these counts to place elements in the sorted output list. Counting sort is particularly efficient for integer data with a limited range of values, as it avoids comparisons altogether. However, the size of the counter array is tied to the value range,  which can be impractical for very large ranges.

* **Radix Sort:** Sorts data by individual digits (or characters) from the least significant digit (like the ones place in numbers) to the most significant digit.  For each digit position, it typically leverages counting sort or a similar technique to sort the data based on that specific digit.  This process is repeated for all digit positions. Radix sort is particularly efficient for integer data with a limited range of values, as it leverages counting sort for each digit.  However, it may not be as efficient for data with a wider range of values or for non-numeric data types.

* **Bucket Sort:** Divides the data set into smaller buckets based on a specific criteria. This criteria can involve a range of values, hash function, or other techniques.  Then, a sorting algorithm (often a simple one like insertion sort) is applied to each bucket individually. Finally, the sorted buckets are concatenated to form the final sorted list. Bucket sort can be efficient for

Absolutely, here's a more comprehensive explanation of the different sorting algorithm types within data structures:

### In-place:

These algorithms are memory-efficient champions, sorting the data set within the existing memory allocation. They achieve this by rearranging elements directly in the original data structure, typically an array. No additional space is needed for temporary results, making them a great choice for situations where memory is limited.

* **Examples:** Bubble Sort, Insertion Sort, Quicksort, Shell Sort

**Explanation:**

- **Bubble Sort:**  Imagine repeatedly comparing adjacent elements in the array. If they're in the wrong order, swap them. This process continues through multiple passes, gradually "bubbling" the largest elements to the end. While simple, it modifies the original array in-place through swaps.

- **Insertion Sort:** Think of building a sorted sub-list within the original array, one element at a time.  Starting with an empty sorted sub-list (initially containing just the first element), elements are inserted into their correct positions by shifting elements in the array as needed. This in-place manipulation achieves the sorted result.

- **Quicksort:** This divide-and-conquer approach partitions the original array around a pivot element. Elements are then swapped and rearranged within the array itself to place them on either side of the pivot based on their value.  The sub-lists are then recursively sorted in-place using the same approach.

- **Shell Sort:** This in-place sorting algorithm works by repeatedly performing smaller gap insertion sorts on the array. It starts with a larger gap between elements compared and gradually reduces the gap size with each pass.  During each pass, elements are compared and swapped within the array based on the current gap, eventually achieving a sorted order.

### Stable:

These algorithms prioritize maintaining the original order of elements with equal values during the sorting process. This can be crucial when dealing with data sets where the order of duplicates might be significant, such as timestamps or filenames with versions.

* **Examples:** Insertion Sort, Merge Sort, Timsort (a hybrid sorting algorithm)

**Explanation:**

- **Insertion Sort:**  As elements are inserted into their correct positions within the sorted sub-list, the original order of duplicates is preserved.  If two elements have the same value, the one encountered earlier in the original data will be inserted earlier in the sorted sub-list.

- **Merge Sort:** This sorting algorithm follows a divide-and-conquer approach, but it merges the sorted sub-lists in a way that guarantees stability.  When merging sub-lists, it compares elements and inserts them into the final sorted list while maintaining their relative order if they have the same value.

- **Timsort:** This hybrid sorting algorithm combines the strengths of insertion sort and merge sort. It leverages insertion sort for small sub-lists and merge sort for larger ones. Timsort is also stable, ensuring the original order of duplicates is maintained during the sorting process.

### Adaptive:

These algorithms are opportunistic, taking advantage of any existing order present in the data set to improve their sorting efficiency. This can be beneficial for data that is already partially sorted or has specific characteristics.

* **Examples:** Insertion Sort, Bubble Sort (to some extent), Timsort

**Explanation:**

- **Insertion Sort:** This algorithm shines when the data is already partially sorted.  As elements are inserted into their correct positions, the comparisons and shifts required become less frequent, leading to faster sorting as the data becomes increasingly ordered.

- **Bubble Sort:** While generally slow, bubble sort can benefit slightly from partially sorted data.  If elements are already mostly in order, fewer swaps might be needed in later passes, leading to a minor improvement.

- **Timsort:** This hybrid algorithm can detect partially sorted data and utilize insertion sort efficiently for those sub-lists, reducing the overall number of comparisons and swaps needed.


## Classification

## Stability 

## Memory usage patterns and index sorting

## References :
- [geeksforgeeks](https://www.geeksforgeeks.org/sorting-algorithms/)
- [wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)
- [freecodecamp](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/)
- [sitepoint](https://www.sitepoint.com/best-sorting-algorithms/)

## Conclusion