# Bubble

## What is Bubble:
Bubble sort is a sorting algorithm, sometimes referred to as sinking sort. It works by repeatedly stepping through the list, element by element, comparing the current element with the one after it. If the elements are in the wrong order (current element is greater than the next one), they are swapped. These passes through the list are repeated until no swaps are needed in a complete pass, indicating the list is sorted.  

The name "bubble sort" comes from the way larger elements "bubble" up to the top of the list during the sorting process. Imagine bubbles rising to the surface of water – larger elements, like bubbles, eventually rise (or swap their positions) to their correct positions at the end of the list. 

### Introduction:

Although considered a simple and intuitive sorting algorithm, bubble sort performs poorly in most practical applications. Its inefficiency makes it primarily a pedagogical tool used to introduce sorting concepts. More efficient algorithms like quicksort, timsort, or merge sort are generally used in real-world sorting tasks within popular programming languages.

However, it's worth noting that under specific conditions, bubble sort can be advantageous. If parallel processing is allowed, bubble sort can achieve O(n) time complexity, making it potentially faster than parallel implementations of insertion sort or selection sort, which don't parallelize as effectively.

## How it Work:

**1. Initial Setup:**

- Consider an unsorted list of elements `[element1, element2, ..., elementN]`. 
- Initialize a flag `swapped` to `False` to track if any swaps occurred during the current pass. This flag is crucial to determine if the list is already sorted and avoid unnecessary iterations.

**2. Looping Through the List:**

- Initiate a loop that iterates through the list from the beginning (index 0) up to the second-last element (index N-2). This is because the largest element will "bubble" to the end in the first pass, so we don't need to compare it further in subsequent passes. Essentially, with each pass, the sorted portion of the list grows by one element from the end.

**3. Comparing Adjacent Elements:**

- Inside the loop, for each element at index `i`, compare it with its next element at index `i+1`.

**4. Swapping if Necessary:**

- If the element at `i` is greater than the element at `i+1`, it means they're in the wrong order. Set the `swapped` flag to `True` and swap their positions in the list. This swap effectively "bubbles" the larger element one position closer to its correct place at the end of the list.

**5. Repeating the Process:**

- Continue iterating through the loop, comparing and potentially swapping adjacent elements.

**6. Checking for Swaps:**

- After completing a full pass through the list, check the `swapped` flag.

**7. Termination Condition:**

- If the `swapped` flag remained `False` throughout the entire pass, it signifies that no swaps were necessary, meaning the list is already sorted. In this case, the loop terminates.

**8. Multiple Passes:**

- If the `swapped` flag was set to `True` during a pass, it indicates elements were out of order and need further sorting. This necessitates another pass through the list. Repeat steps 2-7 until a complete pass occurs with no swaps, signifying a sorted list.

**Illustrative Example:**

Consider the unsorted list: `[6, 4, 2, 8, 1]`. Here's how bubble sort would work step by step:

**Pass 1:**

- Compare `6` at index 0 with `4` at index 1. Swap them (`swapped` becomes `True`). Now the list is `[4, 6, 2, 8, 1]`.
- Compare `6` at index 1 (previously swapped element) with `2` at index 2. Swap them (`swapped` remains `True`). Now the list is `[4, 2, 6, 8, 1]`.
- Continue comparing and swapping elements until reaching the second-last element (index 3). In this pass, the list might become `[4, 2, 1, 8, 6]`. The largest element (`6`) has "bubbled" to its correct position at the end.

**Pass 2 (if necessary):**

- Repeat the comparison and swapping process for adjacent elements.
- In this pass, elements might be mostly sorted, resulting in the `swapped` flag staying `False`. This indicates the list is now sorted (`[1, 2, 4, 6, 8]`).

**Key Points:**

- With each pass, the largest element "bubbles" up to its correct position at the end of the list. The number of passes required depends on the initial level of unsortedness. In the worst case (completely reversed list), it takes N-1 passes (where N is the number of elements) to sort the list.
- Bubble sort is simple to understand and implement but has a time complexity of O(n^2), making it inefficient for large datasets. The nested loop structure that compares all possible adjacent element pairs leads to this quadratic complexity. As the number of elements increases, the number of comparisons grows significantly.
- While not recommended for real-world sorting tasks due to its inefficiency, bubble sort serves as a valuable pedagogical tool for understanding the fundamental concepts of sorting algorithms. 
## Implementations





## Complexity
## Advantages and Disadvantages
## Comparison to other sorting algorithms
## FAQ
## Example