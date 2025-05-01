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

**1. Initialization:**

- Define a function `bubble_sort(array)` that takes an unsorted array of elements as input.
- Inside the function, initialize a variable `swapped` to `False` to track if any swaps occurred during a pass.

**2. Looping Through the List:**

- Initiate a `for` loop that iterates from `0` to `n-1` (where `n` is the length of the array). This loop controls the number of passes required to sort the list.

**3. Comparing Adjacent Elements:**

- Inside the loop, create another `for` loop that iterates from `0` to `n-i-1` (where `i` is the current loop counter for the outer loop). This inner loop compares adjacent elements within each pass.

**4. Swapping if Necessary:**

- Within the inner loop, compare the element at index `j` with the element at index `j + 1`.
- If the element at index `j` is greater than the element at index `j + 1`, it means they're in the wrong order. Set the `swapped` flag to `True` and swap their positions in the array using a temporary variable `temp`.

**5. Checking for Swaps:**

- After completing the inner loop (one pass through the list), check the `swapped` flag.

**6. Termination Condition:**

- If the `swapped` flag remained `False` throughout the entire pass (meaning no swaps were necessary), it signifies the list is already sorted. In this case, we can optimize by breaking out of the outer loop using a `break` statement. This avoids unnecessary iterations.

**Pseudocode:**

```
function bubble_sort(array)
  swapped = False  // Initialize swapped flag

  for i = 0 to n-1  // Loop for number of passes (n-1)
    swapped = False  // Reset swapped flag for each pass

    for j = 0 to n-i-1  // Loop to compare adjacent elements
      if array[j] > array[j + 1] then
        temp = array[j]  // Temporary variable for swap
        array[j] = array[j + 1]
        array[j + 1] = temp
        swapped = True  // Set swapped flag if a swap occurred
    end if
    if not swapped then  // Optimization: break if no swaps in a pass
      break
    end if
  end for
end function
```

**Explanation:**

- The outer loop controls the number of passes required to sort the list. With each pass, the largest element "bubbles" to the end.
- The inner loop compares adjacent elements within each pass.
- The swapping logic ensures elements are placed in ascending order.
- The `swapped` flag is crucial to determine if the list is already sorted and avoid unnecessary iterations.
- The `break` statement in the outer loop is an optimization to exit early if the list is sorted in a particular pass.

## Complexity

**Time Complexity:**

- **Worst-case:** O(n^2)
- **Average-case:** O(n^2)
- **Best-case:** O(n)

- **Worst-case (O(n^2)):** This scenario occurs when the list is initially sorted in descending order. In each pass, only the largest element "bubbles" to its correct position at the end. The remaining elements need to be compared again in subsequent passes. This requires `n-1` comparisons in the first pass, `n-2` comparisons in the second pass, and so on, leading to a total of:

```
(n-1) + (n-2) + ... + 1 = n(n-1)/2 ≈ O(n^2)
```

- **Average-case (O(n^2)):** Even for randomly ordered lists, the average number of comparisons required to sort the list remains O(n^2). This is because the nested loops still need to iterate through all possible pairs of elements in the worst-case scenario, even if it happens less frequently for random data.

- **Best-case (O(n)):** The only situation where bubble sort achieves O(n) time complexity is when the list is already sorted in ascending order. In this case, the `swapped` flag will remain `False` throughout the first pass itself, and the `break` statement will immediately terminate the loop, requiring only n comparisons (one for each element).

**Space Complexity:**

- **Space complexity:** O(1)

Bubble sort is considered a space-efficient sorting algorithm. It only requires a constant amount of extra space for variables like `swapped`, `i`, and `j` used in the loops. These variables don't depend on the input size (number of elements) and remain constant throughout the sorting process.

**Key Points:**

- The nested loops in bubble sort lead to its quadratic time complexity, making it inefficient for large datasets.
- Although bubble sort has a best-case of O(n), this scenario is uncommon in practice.
- For real-world sorting tasks, algorithms like quicksort, timsort, or merge sort with lower average-case time complexities are preferred.

## Advantages and Disadvantages

**Advantages:**

- **Simplicity:** Bubble sort's most significant advantage lies in its sheer simplicity. The algorithm is incredibly easy to understand and implement, even for beginners with basic programming knowledge. This makes it a valuable educational tool for grasping fundamental sorting concepts.

- **In-place sorting:** Bubble sort is an in-place sorting algorithm, meaning it sorts the data by modifying the original array without requiring significant additional memory space. This can be beneficial for situations with memory constraints.

- **Stable sorting:** Bubble sort is a stable sorting algorithm. This means that if two elements have equal keys (values to be sorted by), their original order is preserved in the sorted output. This can be useful in specific use cases where maintaining the relative order of duplicates is important.

**Disadvantages:**

- **Time complexity:** The primary drawback of bubble sort is its unfavorable time complexity. In the worst-case scenario, and often in the average case, bubble sort has a time complexity of O(n^2). This translates to significantly slower sorting times as the data size (n) increases. For large datasets, this inefficiency makes bubble sort impractical.

- **Inefficiency for large datasets:** Due to its quadratic time complexity, bubble sort becomes exceptionally slow when dealing with large datasets. There are significantly faster sorting algorithms available, such as quicksort, merge sort, or timsort, which should be tercih for real-world sorting tasks.

- **Comparison-based sorting:** Bubble sort, like many sorting algorithms, is comparison-based. It relies on comparing elements to determine their order. In certain cases, this comparison-based approach might be inherently less efficient than non-comparison-based sorting algorithms for specific data types or sorting criteria.

## FAQ

**1. What is the Boundary Case for Bubble Sort?**

Bubble sort exhibits its best-case time complexity of O(n) when the input list is already sorted in ascending order. In this scenario, the `swapped` flag will remain `False` throughout the first pass itself. Since no swaps are necessary, the loop terminates immediately after the first iteration, requiring only n comparisons (one for each element). This highlights that bubble sort can be efficient for pre-sorted or nearly sorted data.

**2. Does Sorting Happen In-place in Bubble Sort?**

Yes, bubble sort is considered an in-place sorting algorithm. It sorts the data by modifying the original array itself, without allocating significant additional memory space. During the sorting process, elements are swapped within the existing array until the desired order is achieved. This in-place nature can be advantageous in situations with memory limitations.

**3. Is Bubble Sort a Stable Sorting Algorithm?**

Yes, bubble sort is a stable sorting algorithm. This means that if two elements in the original list have equal values (the key being sorted by), their relative order remains preserved in the sorted output. This stability arises because bubble sort only compares adjacent elements. If two elements have the same value, they won't be swapped unless they're in the wrong order based on their position in the list. This property can be crucial when maintaining the order of duplicates is essential.

**4. Where is Bubble Sort Used?**

Despite its limitations in real-world sorting due to time complexity, bubble sort finds applications in specific scenarios:

- **Educational Tool:** Due to its simplicity, bubble sort is often used as an introductory sorting algorithm in computer science education. It allows students to grasp the fundamental concepts of sorting and how comparisons and swaps lead to ordered data.

- **Nearly Sorted Arrays:** For situations where the data is already partially sorted or has only a few elements out of order, bubble sort can be surprisingly efficient. Its linear complexity (O(n)) in this best-case scenario makes it suitable for fine-tuning the order of a nearly sorted list.

- **Computer Graphics:** In specific computer graphics applications, such as polygon filling algorithms, bubble sort can be used to detect and fix minor errors (like swapping just two elements) in almost-sorted arrays with linear complexity (O(2n)). This can be beneficial for maintaining order within specific graphical operations.

## Example

- [Ts](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Bubble/Example/Bubble.ts)
- [Js](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Bubble/Example/Bubble.js)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Bubble/Example/Bubble.go)
- [Py](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Bubble/Example/Bubble.py)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/6.Basic-Sorting/Bubble/Example/Bubble.java)
