public class BubbleSort { 

  /**
   * Sorts an array of integers in ascending order using the bubble sort algorithm.
   *
   * @param arr - The array of integers to be sorted.
   */
  public static void bubbleSort(int[] arr) {
    // Get the length of the array for loop conditions
    int n = arr.length;

    // Outer loop: Number of passes required (n-1)
    for (int i = 0; i < n - 1; i++) {
      boolean swapped = false; // Flag to track if swaps occurred in a pass

      // Inner loop: Compare adjacent elements within each pass (n-i-1 comparisons)
      for (int j = 0; j < n - i - 1; j++) {
        // Check if the current element is greater than the next element
        if (arr[j] > arr[j + 1]) {
          // Swap elements if they're in the wrong order
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true; // Set flag if a swap occurred
        }
      }

      // Optimization: Break if no swaps occurred in a pass (meaning the list is already sorted)
      if (!swapped) {
        break;
      }
    }
  }

  // Example usage (main method)
  public static void main(String[] args) {
    int[] unsortedArray = {20, 10, 4, 51, 0, 2, 4};
    System.out.print("Original array: ");
    for (int num : unsortedArray) {
      System.out.print(num + " ");
    }
    System.out.println();

    bubbleSort(unsortedArray);

    System.out.print("Sorted array: ");
    for (int num : unsortedArray) {
      System.out.print(num + " ");
    }
    System.out.println();
  }
}
