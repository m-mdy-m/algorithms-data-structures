def bubble_sort(arr):
  """
  Sorts an array of numbers in ascending order using the bubble sort algorithm.

  Args:
      arr: The list of numbers to be sorted.

  Returns:
      The sorted list.
  """

  # Get the length of the array for loop conditions
  n = len(arr)

  # Outer loop: Number of passes required (n-1)
  for i in range(n - 1):
    swapped = False  # Flag to track if swaps occurred in a pass

    # Inner loop: Compare adjacent elements within each pass (n-i-1 comparisons)
    for j in range(n - i - 1):
      # Check if the current element is greater than the next element
      if arr[j] > arr[j + 1]:
        # Swap elements if they're in the wrong order
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = True  # Set flag if a swap occurred

    # Optimization: Break if no swaps occurred in a pass (meaning the list is already sorted)
    if not swapped:
      break

  # Return the sorted array
  return arr

# Example usage
unsorted_array = [20, 10, 4, 51, 0, 2, 4]
sorted_array = bubble_sort(unsorted_array.copy()) 

print("Original array:", unsorted_array)
print("Sorted array:", sorted_array)
