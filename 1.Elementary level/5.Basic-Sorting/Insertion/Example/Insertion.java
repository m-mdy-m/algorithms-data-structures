/**
 * Sorts an array of integers using the Insertion Sort algorithm.
 * 
 * @param arr (int[]): The array of integers to be sorted.
 * @return (int[]): The sorted array.
 * 
 * Time Complexity:
 *   - Best Case: O(n) - When the array is already sorted.
 *   - Average Case: O(n^2) - In most cases.
 *   - Worst Case: O(n^2) - When the array is sorted in reverse order.
 * 
 * Space Complexity: O(1) - Sorts the array in-place, without using additional data structures.
 * 
 * Stable Sorting: Yes - Preserves the relative order of equal elements.
 */
public class InsertionSort {

  public static int[] sort(int[] arr) {
    // Loop through the unsorted portion of the array (starting from the second element)
    for (int i = 1; i < arr.length; i++) {
      // Extract the current element being processed
      int currentElement = arr[i];

      // Initialize the index for shifting elements within the sorted sub-list
      int j = i;

      // Shift elements in the sorted sub-list to make space for insertion
      while (j > 0 && arr[j - 1] > currentElement) {
        // Shift larger element one position to the right
        arr[j] = arr[j - 1];
        // Move the shifting index one step back
        j--;
      }

      // Insert the current element at its rightful position in the sorted sub-list
      arr[j] = currentElement;
    }

    // Return the sorted array
    return arr;
  }

  // Example usage
  public static void main(String[] args) {
    int[] unsortedArray = {20, 10, 4, 51, 0, 2, 4};
    int[] sortedArray = sort(unsortedArray);
    System.out.println("Sorted array:");
    for (int num : sortedArray) {
      System.out.print(num + " ");
    }
  }
}
