# Insertion

## Introduction:


Insertion sort is a sorting algorithm that mimics the intuitive process of arranging objects in increasing (or decreasing) order. Imagine you have a stack of cards in your hand, and you want to sort them efficiently. Insertion sort tackles this problem in a step-by-step manner:

1. **Start Small:** You begin by considering the first card as already sorted. This forms the initial sorted sub-list.
2. **Insertion Challenge:**  Next, you pick up the second card. Now comes the key step: imagine inserting this card into its rightful place among the cards you're already holding (the sorted sub-list). This might involve shifting some cards in your hand to make space for the new card while maintaining the sorted order.
3. **Iterative Growth:**  With the second card placed correctly, you repeat this process for every remaining card. Each time, you take an unsorted card and strategically insert it into the sorted sub-list you've built so far.
4. **The Grand Finale:**  By the time you reach the last card, you'll have iterated through the entire deck, inserting each card into its appropriate position. The result? The entire hand of cards is now sorted!

## How it Work:

1. **Seeding the Sorted Sub-list:** We kick things off by considering the first element of the array as already sorted. This single element acts as the foundation of our sorted sub-list. The remaining elements in the array represent the unsorted portion.

2. **Unsheathing the Unsorted:** We enter a loop that iterates through the unsorted portion, starting from the second element (index 1) and progressing towards the end of the array. For each element in this unsorted territory:

    * **Target in Sight:** We focus on the current element, picking it up for inspection.
    * **Sifting Through the Sorted:**  We embark on a comparison journey, starting from the right end of the sorted sub-list and working our way towards the beginning. We compare the current element with each element in the sorted sub-list, one by one.
       * **Making Way:** If the current element is smaller than an element in the sorted sub-list, we encounter an obstacle. To create space for the current element, we shift the larger element in the sorted sub-list one position to the right. This act of shifting effectively pushes the larger elements one step further down the line, creating a temporary vacancy.
       * **Finding the Niche:** We continue this compare-and-shift operation within the sorted sub-list until we find a sweet spot. This spot is where the current element is greater than or equal to the element in the sorted sub-list. This marks the rightful position for the current element to be inserted.

3. **Securing the Sorted Order:**  Having identified the perfect insertion point, we place the current element into that position in the sorted sub-list. This action essentially inserts the element into its correct spot among the already sorted elements, expanding the sorted sub-list by one.

4. **Marching Towards Completion:**  The loop continues its march, processing each element in the unsorted portion of the array. We repeat steps 2 and 3 for every element. By the time the loop finishes its journey, it will have iterated through all elements. The consequence? The entire array will be transformed into a perfectly sorted list, much like a meticulously arranged hand of cards.

This step-by-step process mirrors the act of sorting cards one by one. With each insertion, we strategically place an element into the sorted sub-list, ensuring that the final order is meticulously maintained. 

## Implementations

Now that we have a solid grasp of insertion sort's step-by-step process, let's explore how to translate those steps into code. We'll use pseudocode, which resembles natural language but is specifically designed to describe algorithms.

**1. Seeding the Sorted Sub-list (Initialization):**

```
for i = 1 to length(array) - 1  // Loop through the unsorted portion (starting from the second element)
```

This loop iterates through the elements in the array, starting from the second element (index 1). We don't need to process the first element because it's considered "already sorted" in our initial sub-list of size 1.

**2. Unsheathing the Unsorted (Inner Loop):**

```
  currentElement = array[i]  // Focus on the current element

  j = i  // Initialize the index for shifting within the sorted sub-list (starts at current element position)

  while j > 0 and array[j - 1] > currentElement:  // Sifting through the sorted sub-list
      array[j] = array[j - 1]  // Shift larger elements one position to the right (making space)
      j = j - 1  // Move the shifting index one step back (towards the beginning of the sorted sub-list)
```

This inner loop represents the "sifting through the sorted" step. Here's a breakdown:
  * `currentElement`: We store the element we're currently processing from the unsorted portion.
  * `j`: This variable acts as an index for shifting elements within the sorted sub-list. It starts at the position of the current element (`i`).
  * The `while` loop continues as long as two conditions are met:
      1. `j` is greater than 0 (to avoid going out of bounds of the sorted sub-list).
      2. The element at the previous index (`j-1`) in the sorted sub-list is larger than the `currentElement`. This indicates we need to shift elements to make space.
  * Inside the loop, we perform the shifting:
      * `array[j] = array[j - 1]`: This line essentially moves the larger element from the sorted sub-list one position to the right, creating a temporary vacancy at index `j`.
      * `j = j - 1`: We decrement `j` to move the shifting index one step back, focusing on the element to the left in the sorted sub-list for the next comparison.

**3. Securing the Sorted Order (Insertion):**

```
  array[j] = currentElement  // Insert the current element at the correct position in the sorted sub-list
```

Once the `while` loop exits, it means we've found the ideal spot for the `currentElement` within the sorted sub-list. This spot is marked by the index `j`. Here, we simply insert the `currentElement` into its rightful position using this line:
  * `array[j] = currentElement`: This places the `currentElement` at the correct index (`j`) in the sorted sub-list, effectively expanding the sorted portion of the array. 

**4. Marching Towards Completion (Loop Continues):**

The outer loop (`for`) continues its march, processing the next element in the unsorted portion. We repeat steps 2 and 3 for every element in the array until the loop finishes iterating through all elements. By the end, the entire array will be transformed into a sorted list.

This approach merges the explanation of insertion sort with the corresponding pseudocode, providing a clear understanding of how the algorithm sorts elements and how that translates into code.

**Full Insertion Sort Pseudocode:**

```
function insertionSort(array)
  for i = 1 to length(array)  // Loop through the unsorted portion (starting from the second element)
    currentElement = array[i]  // Focus on the current element

    j = i  // Initialize the index for shifting within the sorted sub-list (starts at current element position)

    while j > 0 and array[j - 1] > currentElement:  // Sifting through the sorted sub-list
        array[j] = array[j - 1]  // Shift larger elements one position to the right (making space)
        j = j - 1  // Move the shifting index one step back (towards the beginning of the sorted sub-list)
    end while

    array[j] = currentElement  // Insert the current element at the correct position in the sorted sub-list
  end for
end function
```

## Complexity

Insertion sort, while conceptually simple, exhibits a complexity that varies depending on the input it encounters. Here's a breakdown of its time complexity in different scenarios:

**Best Case: O(n)**

Imagine a scenario where the input array is already sorted in ascending (or descending) order. In this delightful case, insertion sort has a linear running time, meaning the time it takes to sort the array grows proportionally to the number of elements (n). Why? Because for each element, the inner loop that performs shifting barely budges. Since the element is already in its rightful place, there's no need for extensive comparisons or shifting within the sorted sub-list. It's a breeze-through!

**Worst Case: O(n^2)**

Now, let's consider the not-so-friendly scenario: an array sorted in reverse order (descending for ascending sort and vice versa). This is where insertion sort encounters its biggest hurdle. As it iterates through the elements, each element needs to be compared with all the previously sorted elements (which keeps growing with each iteration) to find its correct position. This comparison and potential shifting process for every element translates to a quadratic running time, meaning the time it takes to sort the array grows proportionally to the square of the number of elements (n^2).

**Average Case: O(n^2)**

The average case, unfortunately, also falls into the O(n^2) complexity category. While not always dealing with a perfectly reverse-sorted array, insertion sort on random data still involves a significant amount of shifting within the sorted sub-list for most elements. This shifting operation contributes to the overall time complexity, making it less efficient for large arrays compared to other sorting algorithms like quicksort or merge sort.

**Sweet Spot for Small Arrays**

Despite its average-case complexity, insertion sort shines for very small arrays. In fact, it can outperform even quicksort for such inputs. This is because the constant factors involved in insertion sort's operations (like comparisons and assignments) become more dominant for smaller arrays, outweighing the overhead of quicksort's pivot selection and recursion mechanisms. Additionally, for sorting sub-arrays that arise during the divide-and-conquer process in algorithms like quicksort, insertion sort is often used when the sub-array size falls below a certain threshold. This threshold is determined experimentally based on the specific machine and implementation but typically lies around ten elements.

**Illustrative Example**

Here's a table showcasing the insertion sort process for sorting the sequence {3, 7, 4, 9, 5, 2, 6, 1}:

```
Initial State:  3  7  4  9  5  2  6  1
Step 1:         3* 7  4  9  5  2  6  1  (Key: 3, Moved: None)
Step 2:         3  7* 4  9  5  2  6  1  (Key: 7, Moved: 3)
... (Steps omitted for brevity) ...
Step 7:         1* 2  3  4  5  6  7  9  (Key: 1, Moved: None)
Sorted Output:  1  2  3  4  5  6  7  9
```

As you can see, in the worst-case scenario (initial reverse-sorted order), most elements require significant shifting within the sorted sub-list, leading to a higher number of comparisons and swaps compared to the best case (already sorted). This difference translates to the contrasting time complexities.
## Advantages and Disadvantages

**Advantages:**

* **Simplicity Reigns Supreme:** Insertion sort's core concept mirrors the act of arranging cards one by one. This inherent simplicity translates to ease of understanding and implementation. It's a fantastic starting point for grasping sorting algorithms in general.
* **Small Arrays, Big Wins:** When dealing with small lists (less than ten elements or so), insertion sort shines. The constant factors associated with its operations, like comparisons and assignments, dominate the overall time complexity. This makes it surprisingly efficient for tiny datasets, even surpassing more complex algorithms like quicksort in such scenarios.
* **Nearly Sorted Savior:** If you have an array that's already partially sorted (elements mostly in order with a few outliers), insertion sort is your friend. The comparisons and shifting operations required are significantly reduced compared to a completely random array. This can be a valuable asset in specific situations.
* **Space Saver:** Insertion sort is a memory-efficient algorithm. It sorts the array in-place, meaning it doesn't require creating a large additional data structure to hold temporary values during the sorting process. This can be crucial when dealing with limited memory constraints.
* **Stable Sorting:** Insertion sort preserves the original order of equal elements within the array. This means if you have multiple elements with the same value, their relative positions in the sorted output will remain the same as in the original array. While not always essential, this stability can be beneficial for certain sorting tasks.

**Disadvantages:**

* **Large Array Lament:** As the size of the array grows, insertion sort's performance takes a significant hit. The worst-case scenario, a reverse-sorted array, leads to a quadratic time complexity (O(n^2)), meaning the sorting time increases proportionally to the square of the number of elements. This makes it impractical for sorting massive datasets where efficiency is paramount.
* **Outshined by the Elite:** Compared to more advanced sorting algorithms like quicksort, merge sort, or heap sort, insertion sort generally falls short in terms of efficiency for most input sizes. These algorithms achieve on average a time complexity of O(n log n), which significantly outperforms insertion sort's O(n^2) in the worst-case and average scenarios.
* **Inner Loop Blues:** The inner loop in insertion sort, responsible for shifting elements within the sorted sub-list, can be a bottleneck for performance. This loop iterates and potentially shifts elements for each insertion, contributing to the overall time complexity, especially in the worst case.

## Relation to other sorting algorithms
Insertion sort and selection sort, while both fundamental sorting algorithms, tackle the task of arranging elements in order with slightly different approaches. Both share a family resemblance: they iteratively build a sorted sub-list at the beginning of the array. However, their strategies for selecting and placing elements diverge, leading to distinct strengths and weaknesses.

**Similarities in Simplicity:**

* **Grasp at First Glance:** Both insertion sort and selection sort boast a straightforward logic, making them excellent starting points for understanding sorting algorithms in general. Their core concepts are relatively easy to grasp, even for beginners.
* **Implementation Ease:** Along with their conceptual simplicity, both algorithms translate well into code. Their clear steps and lack of complex data structures make them ideal for those new to implementing sorting algorithms.

**Key Differences in Philosophy:**

* **Selection Strategy:** This is where the cousins differ in style. Insertion sort acts like an organizer meticulously inserting elements into their rightful places within a sorted sub-list. It scans **backwards** from the current element, comparing it with elements in the sorted sub-list until it finds the correct position for insertion.
* **Selection Sort's Scouting Approach:** In contrast, selection sort is more like a scout searching for the minimum element. It scans the **unsorted** portion of the array **forwards**, identifying the element with the minimum value. This minimum element is then swapped with the first element in the unsorted portion, effectively placing it in its sorted position.

**Efficiency Trade-offs:**

The choice between insertion sort and selection sort often involves a trade-off between comparisons and swaps (data movement).

* **Insertion Sort's Efficiency Advantage:** When dealing with **partially sorted arrays** or when the next element is already greater than the elements in the sorted sub-list, insertion sort shines. In these cases, it requires fewer comparisons (potentially just one) because it doesn't need to scan the entire unsorted portion for the minimum element. On average, insertion sort performs about half the number of comparisons as selection sort.
* **Swapping Considerations:** However, insertion sort might require more **swaps** (data movement) during insertion within the sorted sub-list, especially in the worst case (reverse-sorted array). This can be a disadvantage in scenarios where memory writes are expensive, such as with flash memory.

**Selection Sort's Memory-Conscious Strategy:** Selection sort excels in situations where memory writes (swaps) are a major concern. It requires fewer swaps but performs more comparisons to identify the minimum element. This can be beneficial for memory-constrained environments.

**Small Arrays: A Realm Where Simplicity Reigns**

While more advanced algorithms like quicksort and mergesort outperform both for larger datasets, insertion sort and selection sort have a hidden champion's corner: very small arrays. Due to their simplicity, they can be faster for tiny datasets (exact size depends on implementation). This is why some complex sorting algorithms often switch to insertion sort when dealing with sub-arrays of a certain size during their divide-and-conquer process.
## FAQ

**Q1. What are the best and worst case time complexities of Insertion Sort?**

* **Best Case:** O(n). This occurs when the array is already sorted. In this scenario, insertion sort simply iterates through the array without needing to perform any swaps or shifts, resulting in linear time complexity.
* **Worst Case:** O(n^2). This happens when the array is sorted in reverse order. In this case, each element needs to be compared with all the previously sorted elements to find its correct position, leading to quadratic time complexity.

**Q2. How is Insertion Sort different from Selection Sort?**

Both Insertion Sort and Selection Sort are simple sorting algorithms with similar time complexity in the average case (O(n^2)). However, they differ in their approach:

* **Insertion Sort:** Works by iteratively inserting elements into their correct positions within a sorted sub-list. It scans backward from the current element for the right spot.
* **Selection Sort:** Finds the minimum element in the unsorted portion of the array and swaps it with the first element in that portion. It scans forward to find the minimum element.

Insertion Sort might be slightly more efficient for partially sorted arrays on average, while Selection Sort might be preferable when data swaps are expensive (e.g., flash memory).

**Q3. Is Insertion Sort an in-place and stable sorting algorithm?**

* **Yes, Insertion Sort is an in-place sorting algorithm.** It sorts the data by rearranging elements within the original array, without needing additional memory for a separate data structure.
* **Yes, Insertion Sort is also a stable sorting algorithm.** This means it preserves the original order of equal elements in the array. If multiple elements have the same value, their relative positions before and after sorting will remain the same.

**Q4. When is Insertion Sort a good choice?**

Insertion Sort is a good choice for several reasons:

* **Simple to understand and implement:** Great for learning sorting algorithms or for small codebases.
* **Efficient for small arrays:** Often faster than complex algorithms for tiny datasets.
* **Useful for partially sorted arrays:** Takes advantage of the partial order to reduce comparisons.

## Example
- [Ts]()
- [Js]()
- [Java]()
- [Go]()
- [Py]()