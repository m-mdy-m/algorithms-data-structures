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
  for i = 1 to length(array) - 1  // Loop through the unsorted portion (starting from the second element)
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

## Advantages and Disadvantages

## Comparison to other sorting algorithms

## FAQ

## References

## Example