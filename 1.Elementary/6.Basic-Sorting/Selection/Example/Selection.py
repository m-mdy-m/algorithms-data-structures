"""
Implements the Selection Sort algorithm to sort a list in ascending order.

This function iterates through the list, finding the minimum element
within the unsorted portion and swapping it with the element at the
current position. This process repeats for each element in the list.

Args:
  arr: The list of numbers to be sorted.

Returns:
  The sorted list.

Time Complexity: O(n^2) - Worst-case, average-case, and best-case.
                  The number of comparisons and swaps grows quadratically with the input size (n).
Space Complexity: O(1) - In-place sorting, modifies the original list without additional data structures.
"""
def selection_sort(arr):
  # Loop through each element of the list (excluding the last element)
  for i in range(len(arr) - 1):
    min_index = i

    # Find the index of the minimum element in the unsorted part
    for j in range(i + 1, len(arr)):
      if arr[j] < arr[min_index]:
        min_index = j

    # Swap the element at the current index with the minimum element if necessary
    if min_index != i:
      arr[i], arr[min_index] = arr[min_index], arr[i]

  return arr

# Example Usage
unsorted_list = [64, 25, 12, 22, 11]
sorted_list = selection_sort(unsorted_list.copy())  # Sort a copy to avoid modifying original list
print("Original List:", unsorted_list)  # Output: [64, 25, 12, 22, 11]
print("Sorted List :", sorted_list)     # Output: [11, 12, 22, 25, 64]
