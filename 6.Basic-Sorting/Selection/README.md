# Selection Sort
## Introduction:

Selection sort is a sorting algorithm that categorizes as an in-place comparison sort. This means it operates directly on the data it receives (in-place) and determines the order through comparisons between elements (comparison sort). While it has a time complexity of O(n^2), making it less efficient for massive datasets, selection sort offers advantages in specific scenarios due to its simplicity.

**Conceptual Breakdown:**

Here's a breakdown of how selection sort works:

1. **Divide and Conquer (Partially):** The input list is conceptually divided into two sections:
    * **Sorted Sublist:** Initially empty, this sublist grows from left to right as elements are placed in their correct order.
    * **Unsorted Sublist:** This sublist comprises the remaining elements that haven't been sorted yet and occupies the right portion of the original list.

2. **Iterative Selection:** The algorithm enters a loop that executes the following steps in each iteration:
    * **Finding the Minimum (or Maximum):** It scans the unsorted sublist to identify the element with the minimum value (for ascending order) or maximum value (for descending order).
    * **Swapping with the First Unsorted Element:** The identified minimum (or maximum) element is then swapped with the element at the beginning of the unsorted sublist, essentially placing it in its sorted position.
    * **Shrinking the Unsorted Sublist:** Since an element is now sorted, the unsorted sublist boundary shrinks by one position towards the right.

3. **Loop Termination:** The loop continues iterating until the entire unsorted sublist is empty, signifying that all elements have been placed in their correct positions within the sorted sublist, resulting in a fully sorted list.

**Key Points:**

* Selection sort is relatively easy to understand and implement compared to more complex sorting algorithms.
* Its in-place nature makes it memory efficient as it doesn't require significant additional storage for temporary data.
* However, the time complexity of O(n^2) becomes a significant drawback for very large datasets. As the number of elements (n) increases, the number of comparisons required grows quadratically, leading to slower performance compared to algorithms with better time complexity (e.g., Merge Sort, Quick Sort).

In essence, selection sort repeatedly finds the extreme element (minimum or maximum) within the unsorted data, swaps it into its sorted position, and shrinks the unsorted portion until the entire list is sorted. While it might not be the most efficient choice for all sorting needs, its simplicity and low memory requirements make it a valuable tool in specific situations. 
## How it Work:
Selection sort, despite its O(n^2) complexity, offers a straightforward approach to sorting. Here's a detailed breakdown of the algorithm along with an illustrative example:

**1. Initialization: Divide and Conquer (Partially)**

Imagine you're handed a deck of cards (our unsorted list) and are tasked with arranging them in ascending order. Selection sort tackles this by conceptually dividing the deck into two sections:

* **Sorted Sublist:** Initially empty, this pile will grow steadily as elements are placed in their correct order.
* **Unsorted Sublist:** This pile represents the remaining cards that haven't been sorted yet.

**2. Finding the Minimum (Each Iteration):**

The algorithm enters a loop that iteratively processes the unsorted sublist:

* In each pass, we tentatively assume the first card in the unsorted sublist is the minimum.
* We then examine the remaining cards in the unsorted pile.
* If we encounter a card smaller than our assumed minimum, we update the minimum's position (essentially the index in the list) to point to this new contender.

**3. Swapping and Shrinking: Putting Things in Order**

Once we've traversed the entire unsorted sublist, we've identified the true minimum element. Now it's time to make things official:

* We swap the minimum element with the first card of the unsorted sublist. This essentially places the minimum card in its rightful sorted position at the front of the sorted sublist pile.
* Since one element is now sorted and placed in its correct spot, the unsorted sublist shrinks. We simply move the boundary between the sorted and unsorted sublists one position forward, effectively excluding the swapped element from further consideration.

**4. Loop Termination and Result:**

The loop continues its relentless march through the unsorted sublist, performing steps 2 and 3 in each iteration. This process resembles sifting through the unsorted cards, extracting the minimum each time and placing it at the front of the sorted pile.

* The loop terminates when the unsorted sublist becomes empty, signifying that all elements have been processed and placed in their correct positions.
* At this point, the original deck of cards (our unsorted list) has been transformed into a perfectly ordered deck (our sorted list).

**Example: Sorting a Hand of Cards**

Let's sort the hand of cards `[8, 4, 2, 1, 5]`:

* **Iteration 1:**
    * We tentatively assume the first card (8) is the minimum.
    * Traversing the rest (4, 2, 1, 5), we discover that 1 is indeed the smallest card.
    * We swap 8 and 1, placing the true minimum at the front of the sorted sublist (now containing just the 1). The unsorted sublist becomes `[8, 4, 2, 5]`.
* **Iteration 2:**
    * The first card in the unsorted sublist (8) becomes the assumed minimum.
    * We find a 2 among the remaining cards, which is smaller than 8.
    * We swap 4 and 2,  adding the 2 to the sorted sublist which becomes `[1, 2]`. The unsorted sublist is now `[8, 4, 5]`.
* The loop continues similarly in each iteration, finding the minimum in the unsorted sublist and swapping it to its sorted position.
* After all iterations, the entire hand is sorted: `[1, 2, 4, 5, 8]`.

By repeatedly finding the minimum element and swapping it into its sorted position, selection sort gradually builds the sorted sublist from the original unsorted data. While it may not be the most efficient for massive datasets, selection sort's simplicity and low memory requirements make it a valuable tool in specific situations.

**Visualizing the Process:**

![](https://codepumpkin.com/wp-content/uploads/2017/10/selectionSort.gif)

![](https://codepumpkin.com/wp-content/uploads/2017/10/SelectionSort_Avg_case.gif)

![](https://www.codingconnect.net/wp-content/uploads/2016/09/Selection-Sort.gif)
## Algorithm:

Selection sort is a type of **selection algorithm**. Selection algorithms work by repeatedly finding the desired element (minimum or maximum depending on the sorting order) from a collection and placing it in its sorted position. You can find more information about selection algorithms in general [Selection-Algorithm](https://github.com/m-mdy-m/algorithms-data-structures/tree/main/6.5-Selection-Algorithm).

In selection sort, this "desired element" is the minimum (or maximum) element within the unsorted data. The algorithm iteratively finds this minimum element, swaps it into its sorted position, and shrinks the unsorted portion until the entire list is sorted. 
## Implementations

**Initialization: Setting the Stage**

1. **Data Acquisition:** We begin with an unsorted list of elements `data` that needs to be arranged in ascending order (you can modify the comparison operator to sort in descending order if needed).
2. **Sorted Sublist Boundary:** We establish a variable `sorted_end` to keep track of the sorted sublist's end. Initially, it points to the beginning of the list (index 0) since there are no sorted elements yet. This variable essentially marks the dividing line between the sorted and unsorted portions of the list.

**Looping Through the Unsorted Wilderness**

1. **Iterating Through Unsorted Elements:** We enter a loop that systematically iterates through the unsorted sublist. The loop counter `i` ranges from 0 to the second-last element (index `len(data) - 1`) because the last element will naturally fall into its correct position during the process.

```
for i in range(length(data) - 1):
```

**Finding the Minimum Within the Unsorted Realm**

1. **Tentative Minimum:** We initialize a variable `min_index` to hold the index of the assumed minimum element. We start by assuming the first element in the unsorted sublist (at index `i`) is the minimum.
2. **Scouring for the True Minimum:** We iterate through the remaining elements in the unsorted sublist (from `i + 1` to the end).

```
  min_index = i
  for j in range(i + 1, length(data)):
```

3. **Challenging the Assumption:** Within the inner loop, we compare each element (`data[j]`) with the current assumed minimum (`data[min_index]`). If we encounter an element smaller than the assumed minimum, we update `min_index` to point to this new challenger, effectively tracking the true minimum element's index.

```
    if data[j] < data[min_index]:
      min_index = j
```

**Swapping and Shrinking: Bringing Order to Chaos**

1. **Placing the Minimum in its Rightful Place:** After examining the entire unsorted sublist, `min_index` holds the index of the true minimum element. We swap the element at `min_index` with the element at the current `sorted_end` position. This essentially lifts the minimum element out of the unsorted chaos and places it in its rightful sorted position at the front of the sorted sublist.

```
  if i != min_index:  # Swap only if minimum isn't already at the sorted_end
    data[i], data[min_index] = data[min_index], data[i]
```

2. **Shrinking the Unsorted Territory:** Since one element is now sorted and placed in its correct position, the unsorted sublist shrinks. We increment `sorted_end` by 1 to reflect this change. The sorted sublist now encompasses one more element.

**Loop Termination and the Sorted List**

The loop continues its relentless march through the unsorted sublist, performing the steps mentioned above in each iteration. With each pass, the sorted sublist steadily grows, and the unsorted sublist correspondingly shrinks.

* **Loop Completion:** The loop terminates when the counter `i` reaches the second-last element (index `len(data) - 2`). At this point, the last remaining element is automatically placed in its correct position (either the largest or smallest depending on the sorting order).

**Pseudocode in Plain English:**

```
function selectionSort(data):
  sorted_end = 0  # Initialize sorted sublist boundary
  for i in range(length(data) - 1):  # Loop through unsorted elements
    min_index = i                 # Assume first element in unsorted sublist is minimum
    for j in range(i + 1, length(data)):  # Find the true minimum in the unsorted sublist
      if data[j] < data[min_index]:
        min_index = j
    if i != min_index:            # Swap minimum with element at sorted_end if necessary
      data[i], data[min_index] = data[min_index], data[i]
    sorted_end += 1                # Increment sorted sublist boundary
  return data
```
## Complexity

**Time Complexity: O(n^2)**

Selection sort exhibits a time complexity of O(n^2), signifying that the execution time grows quadratically with the input size (n). This analysis hinges on the nested loop structure inherent to the algorithm.

* **Nested Loops:** The core operation involves two nested loops. The outer loop iterates through the unsorted sublist, progressively shrinking its size as elements are placed in their sorted positions. The inner loop, for each iteration of the outer loop, traverses the remaining unsorted elements to identify the minimum (or maximum, depending on the sorting order).
* **Comparisons in Inner Loop:** In the worst-case scenario, to place an element in its sorted position, the inner loop needs to compare it with all the remaining unsorted elements (n - 1 comparisons) to pinpoint the minimum.
* **Total Comparisons:** As this process repeats for n-1 elements (the outer loop iterates n-1 times), the total number of comparisons in the worst case scenario culminates in:

```
(n - 1) + (n - 2) + ... + 1
```

This summation represents an arithmetic series. By leveraging the formula for the sum of an arithmetic series, we arrive at:

```
Sum = (n-1 + 1) / 2 * (n-1)
= n(n-1) / 2
= 1/2 * n^2 - 1/2 * n
```

Ignoring the constant term (1/2 * n), we're left with n^2, which dominates the expression and defines the overall time complexity. Consequently, selection sort exhibits a time complexity of O(n^2).

Ignoring the constant term (1/2 * n), we're left with n^2, which is the dominant term and defines the overall time complexity. Therefore, selection sort has a time complexity of O(n^2).

> I know it might be a bit complicated, that's why better and simpler explanations:
**Simple explanation**

Here's a simpler explanation of selection sort's time complexity:

**Imagine a race with n runners.** Selection sort is like picking the slowest runner one by one and placing them at the front of the line (sorted position).

* **Inner Loop:** To find the slowest runner (minimum element) in each round (iteration), you need to compare them all. This is like the inner loop, which takes n-1 comparisons in the worst case (comparing each runner with the remaining ones).
* **Outer Loop:** You repeat this process (outer loop) n-1 times to find and place n-1 runners (elements) in their sorted positions.

**The Problem:** As the number of runners (n) increases, the comparisons per round (inner loop) and the number of rounds (outer loop) both grow. This makes selection sort slow for large datasets.

**The Math:** We can express this growth using a formula (n^2) that reflects the quadratic increase in comparisons with the number of elements (n). This is why selection sort has a time complexity of O(n^2).

**In simpler terms:** The more runners you have (data elements), the more comparisons it takes to find the slowest one (minimum element) in each round (iteration), and the more rounds it takes to sort everyone (all elements). This makes selection sort slow for big datasets.

**Space Complexity: O(1)**

On the bright side, selection sort is a space-efficient algorithm. It performs in-place sorting, meaning it sorts the data within the original list without requiring significant additional memory. The space complexity remains constant (O(1)) irrespective of the input list size. This is because it only utilizes a few variables (like `sorted_end` and `min_index`) to track the sorting process, and these variables' space requirements don't grow with the input size.

**Complexity Summary:**

| Complexity             | Description                                                                |
|-------------------------|-------------------------------------------------------------------------------|
| Time Complexity        | O(n^2). The number of comparisons grows quadratically with the input size (n). |
| Space Complexity       | O(1). The algorithm is space-efficient and uses constant extra space.           |

**In essence,** selection sort's simplicity and low memory requirements make it a potential choice for specific scenarios where memory is a constraint. However, for larger datasets, its O(n^2) time complexity becomes a significant drawback, and other sorting algorithms with better time complexity (e.g., Merge Sort, Quick Sort) are preferable.
## Advantages and Disadvantages


**Advantages:**

* **Simplicity:** Selection sort's core concept is straightforward to understand and implement. It's a good sorting algorithm to learn as it lays the foundation for grasping more complex sorting techniques.
* **In-place sorting:** Selection sort operates directly on the original data list, modifying it in place. This eliminates the need for extra memory to store a temporary sorted copy, making it memory-efficient for smaller datasets.
* **Favorable for small datasets:** For relatively small lists, selection sort might perform reasonably well due to its simpler structure. In scenarios where memory is a tight constraint and the data size is limited, selection sort can be a suitable choice.

**Disadvantages:**

* **O(n^2) time complexity:** The primary drawback of selection sort lies in its time complexity. As the number of elements (n) in the list grows, the number of comparisons required to sort the list increases quadratically (n^2). This makes selection sort inefficient for handling large datasets where other sorting algorithms with better time complexity (e.g., Merge Sort, Quick Sort) are more preferable.
* **Unstable sorting:** Selection sort doesn't necessarily preserve the original order of elements with identical values. This means if you have multiple elements with the same value, their relative positions in the sorted list might differ from their original order. While this might not be a critical concern in all situations, it's an important factor to consider when specific ordering requirements exist.
## Comparison to other sorting algorithms

Among quadratic sorting algorithms (sorting algorithms with a simple average-case of Θ(n2)), selection sort almost always outperforms bubble sort and gnome sort. Insertion sort is very similar in that after the kth iteration, the first 
𝑘 elements in the array are in sorted order. Insertion sort's advantage is that it only scans as many elements as it needs in order to place the 𝑘+1 st element, while selection sort must scan all remaining elements to find the 𝑘+1 st element.

Simple calculation shows that insertion sort will therefore usually perform about half as many comparisons as selection sort, although it can perform just as many or far fewer depending on the order the array was in prior to sorting. It can be seen as an advantage for some real-time applications that selection sort will perform identically regardless of the order of the array, while insertion sort's running time can vary considerably. However, this is more often an advantage for insertion sort in that it runs much more efficiently if the array is already sorted or "close to sorted."

While selection sort is preferable to insertion sort in terms of number of writes (𝑛−1 swaps versus up to 𝑛(𝑛−1)/2 swaps, with each swap being two writes), this is roughly twice the theoretical minimum achieved by cycle sort, which performs at most n writes. This can be important if writes are significantly more expensive than reads, such as with EEPROM or Flash memory, where every write lessens the lifespan of the memory.

Selection sort can be implemented without unpredictable branches for the benefit of CPU branch predictors, by finding the location of the minimum with branch-free code and then performing the swap unconditionally.

Finally, selection sort is greatly outperformed on larger arrays by Θ(𝑛 log⁡ 𝑛) divide-and-conquer algorithms such as mergesort. However, insertion sort or selection sort are both typically faster for small arrays (i.e. fewer than 10–20 elements). A useful optimization in practice for the recursive algorithms is to switch to insertion sort or selection sort for "small enough" sublists.
## FAQ

> `Ai is used`

**When to Use Selection Sort:**

* **Learning purposes:** Selection sort's simplicity makes it an excellent choice for beginners to grasp the fundamental concepts of sorting algorithms. Its clear logic and step-by-step nature allow for easy understanding of how sorting works.
* **Small datasets:** For relatively small lists where efficiency isn't a paramount concern, selection sort's memory efficiency can be beneficial. Since it operates directly on the original data, it avoids the need for additional memory allocation, which might be limited in specific scenarios.

**When to Avoid Selection Sort:**

* **Large datasets:** Selection sort's Achilles' heel is its O(n^2) time complexity. As the number of elements in the list grows, the sorting time increases quadratically, making it sluggish for handling massive datasets. In such cases, resorting to sorting algorithms with better time complexity (e.g., Merge Sort, Quick Sort) is highly recommended for optimal performance.
* **Stability matters:** If maintaining the original order of elements with equal values is crucial (stable sorting), selection sort is not the ideal choice. It doesn't guarantee that elements with identical keys will preserve their relative positions in the sorted list.

**Additional Considerations:**

* **Hybrid approaches:** In some situations, selection sort might be used as a preliminary step for a more complex sorting algorithm. For instance, it could be employed to partially sort a small sub-list before feeding it into a divide-and-conquer sorting algorithm like Merge Sort.
## References:

- [wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
- [geeksforgeeks](https://www.geeksforgeeks.org/selection-sort/)
## Example
- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.ts)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.js)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.go)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.java)
- [Python](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Selection/Example/Selection.py)

> Link Visualization->  [Visualization](https://algorithmic-solutions.github.io/Selection-Algorithm/)