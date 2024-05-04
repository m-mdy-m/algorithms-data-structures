# Selection Sort

## Introduction:

I can provide a more detailed and professional explanation of selection sort:

**Selection Sort**

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

## Advantages and Disadvantages

### Advantages:

### Disadvantages:


## Comparison to other sorting algorithms

## Variants

## FAQ

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