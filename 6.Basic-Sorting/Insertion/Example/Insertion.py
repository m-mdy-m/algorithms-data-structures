"""
Sorts an array of numbers using the Insertion Sort algorithm.

Args:
    arr (List[int]): The array of numbers to be sorted.

Returns:
    List[int]: The sorted array.

Time Complexity:
  - Best Case: O(n) - When the array is already sorted.
  - Average Case: O(n^2) - In most cases.
  - Worst Case: O(n^2) - When the array is sorted in reverse order.

Space Complexity: O(1) - Sorts the array in-place, without using additional data structures.

Stable Sorting: Yes - Preserves the relative order of equal elements.
"""

def insertion_sort(arr) :
  """
  Sorts the input array using Insertion Sort.

  Iterates through the unsorted portion of the array (starting from the second element)
  and inserts each element into its correct position within the sorted sub-list.
  """
  # Loop through the unsorted portion of the array (starting from the second element)
  for i in range(1, len(arr)):
    # Extract the current element being processed
    current_element = arr[i]

    # Initialize the index for shifting elements within the sorted sub-list
    j = i

    # Shift elements in the sorted sub-list to make space for insertion
    while j > 0 and arr[j - 1] > current_element:
      # Shift larger element one position to the right
      arr[j] = arr[j - 1]
      # Move the shifting index one step back
      j -= 1

    # Insert the current element at its rightful position in the sorted sub-list
    arr[j] = current_element

  # Return the sorted array
  return arr

# Example usage
unsorted_array = [20, 10, 4, 51, 0, 2, 4, 0.4]
sorted_array = insertion_sort(unsorted_array)
print("Sorted array:", sorted_array)
