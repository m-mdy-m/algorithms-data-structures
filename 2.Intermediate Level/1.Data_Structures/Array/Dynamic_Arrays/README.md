## Dynamic Array

### Introduction

In computer science, a dynamic array—also known as a growable array, resizable array, dynamic table, mutable array, or array list—is a data structure that allows for random access to a variable-size list of elements. Dynamic arrays provide the ability to add or remove elements flexibly, addressing the limitations of static arrays, which have a fixed capacity determined at the time of allocation. Unlike static arrays, where the size must be predetermined, dynamic arrays can grow or shrink as needed, making them more versatile for a variety of applications.

A dynamic array is distinct from a dynamically allocated array or a variable-length array, both of which are arrays whose size is determined at the time of allocation and remains fixed thereafter. However, a dynamic array might use a dynamically allocated array as its underlying structure, dynamically resizing it as the need arises.

## ٌWhat is allocated array?

An **allocated array** refers to an array that has been explicitly assigned a specific amount of memory during its creation or initialization. This type of array can be categorized into two primary types based on when and how the size of the array is determined: **statically allocated arrays** and **dynamically allocated arrays**.

#### 1. **Statically Allocated Array**

**Definition**: A statically allocated array is an array whose size is determined at compile time. This means that the size of the array must be known before the program runs and cannot be changed during the execution of the program.

**Characteristics**:
- **Fixed Size**: Once the array is created, its size remains constant throughout the program's execution.
- **Memory Allocation**: Memory for the array is allocated on the stack (in languages like C/C++). This memory is automatically managed, and the array's lifespan is tied to the scope in which it is declared.
- **Usage**: Statically allocated arrays are straightforward to use when the maximum size of the array is known in advance and is unlikely to change. However, they lack flexibility because their size cannot be modified once defined.

**Example** (in C):
```c
int numbers[10]; // An array of 10 integers, statically allocated
```

#### 2. **Dynamically Allocated Array**

**Definition**: A dynamically allocated array is an array whose size is determined at runtime, i.e., during the execution of the program. This allows the program to allocate memory based on the specific needs at the moment, making it more flexible than a statically allocated array.

**Characteristics**:
- **Variable Size**: The size of the array is determined during the execution of the program, and the memory for the array is allocated from the heap rather than the stack.
- **Manual Memory Management**: Since the memory is allocated from the heap, it requires explicit management by the programmer. This includes allocating the memory using functions like `malloc`, `calloc`, or `new` (in C++), and later deallocating it using `free` or `delete`.
- **Resizing**: Dynamically allocated arrays allow resizing, but this involves allocating a new block of memory and copying the old elements into the new array, which can be computationally expensive.

**Example** (in C):
```c
int *numbers = (int*)malloc(10 * sizeof(int)); // Allocating memory for 10 integers
```

**Conceptual Explanation**:
- **Memory Allocation**: In dynamically allocated arrays, memory is allocated from the heap, which is a large pool of memory available for dynamic allocation. The heap is generally larger than the stack and allows for more flexible and longer-lived memory allocation.
- **Pointers and Arrays**: Since the array is dynamically allocated, it is typically accessed via a pointer. The pointer stores the address of the first element of the array, and array indexing can be done using this pointer.
- **Reallocation**: If the size of the array needs to change, a new block of memory must be allocated, and the contents of the old array must be copied to the new location. This process can be done using the `realloc` function in C, which adjusts the size of the allocated memory block.

**Example of Resizing**:
```c
numbers = (int*)realloc(numbers, 20 * sizeof(int)); // Resize to hold 20 integers
```

### Comparison and Use Cases

- **Statically Allocated Array**: Best suited for situations where the array size is known and fixed at compile time. They are easy to use and require no explicit memory management, making them suitable for simple or resource-constrained environments.
  
- **Dynamically Allocated Array**: More flexible and suitable for scenarios where the array size cannot be determined until runtime or where the array size needs to change during program execution. They require careful management of memory to avoid leaks and ensure efficient use of resources.

### Summary
Allocated arrays are foundational concepts in programming, with static allocation offering simplicity and dynamic allocation providing flexibility. Understanding when and how to use these types of arrays is crucial for writing efficient and effective programs.

### Bounded-Size Dynamic Arrays and Capacity

A basic dynamic array can be implemented by allocating an underlying fixed-size array that is typically larger than the current number of elements. The elements are stored contiguously at the beginning of this array, and the remaining positions towards the end are reserved for future additions. Elements can be appended to the end of the dynamic array in constant time by using this reserved space until it is exhausted. When the reserved space is fully utilized, and another element needs to be added, the underlying fixed-size array must be resized. Resizing is an expensive operation because it involves allocating a new, larger array and copying all existing elements to this new array. Elements can also be removed from the end of a dynamic array in constant time, as no resizing is necessary.

The number of elements currently stored in the dynamic array is referred to as its *logical size* or *size*, while the total capacity of the underlying array is known as the dynamic array's *capacity* or *physical size*. The capacity represents the maximum number of elements that can be accommodated without the need to relocate data to a larger array.

In scenarios where the maximum size of the array is known or can be determined before allocation, a fixed-size array may be sufficient. However, a dynamic array is often preferred in cases where:
- The maximum logical size is unknown or difficult to predict before allocation.
- The maximum logical size is expected to change over time.
- The amortized cost of resizing a dynamic array is acceptable within the performance constraints of the application.

### Geometric Expansion and Amortized Cost

To minimize the cost of resizing, dynamic arrays often grow by a significant amount when resizing occurs—commonly by doubling the current capacity. This geometric expansion reduces the frequency of resizing operations and helps manage performance overhead. The typical operation for adding an element to the end of a dynamic array might follow this pattern:

```pseudo
function insertEnd(dynarray a, element e)
    if (a.size == a.capacity)
        // Resize a to twice its current capacity
        a.capacity ← a.capacity * 2 
        // (Copy the contents to the new memory location)
    a[a.size] ← e
    a.size ← a.size + 1
```

As elements are added, the capacities form a geometric progression. Expanding the array by any constant proportion, say `a`, ensures that inserting `n` elements takes O(n) time overall, meaning that each insertion takes constant amortized time. Many dynamic arrays also deallocate some of the underlying storage if the logical size drops below a certain threshold—often set at 30% of the capacity. This threshold must be less than `1/a` to prevent repeated resizing during alternating sequences of insertions and deletions.

### Growth Factor

The growth factor of a dynamic array influences its performance and space efficiency. Several factors, including a space-time trade-off and the algorithms used by the memory allocator, determine the optimal growth factor. For a growth factor `a`, the average time per insertion operation is about `a/(a−1)`, while the number of wasted cells is bounded above by `(a−1)n`. If the memory allocator uses a first-fit allocation algorithm, growth factors like `a=2` can cause expansion issues where memory may become fragmented, even if enough memory is available. Discussions on ideal growth factor values have proposed various options, including the golden ratio and `1.5`. Many textbooks, however, use `a = 2` for simplicity and analysis.

Here are the growth factors used by several popular dynamic array implementations:

| Implementation               | Growth Factor (a)            |
|------------------------------|------------------------------|
| Java ArrayList                | 1.5 (3/2)                    |
| Python PyListObject           | ~1.125 (n + (n >> 3))        |
| Microsoft Visual C++ 2013     | 1.5 (3/2)                    |
| G++ 5.2.0                     | 2                            |
| Clang 3.6                     | 2                            |
| Facebook folly/FBVector       | 1.5 (3/2)                    |
| Rust Vec                      | 2                            |
| Go slices                     | Between 1.25 and 2           |
| Nim sequences                 | 2                            |
| SBCL (Common Lisp) vectors    | 2                            |
| C# (.NET 8) List              | 2                            |

### Performance

Dynamic arrays offer performance characteristics similar to regular arrays, with additional operations for adding and removing elements. Key performance metrics for dynamic arrays include:
- **Indexing (random access)**: O(1) time complexity for getting or setting the value at a specific index.
- **Iteration**: O(n) time complexity for iterating over the elements in order, with good cache performance.
- **Insertion or Deletion at the End**: Amortized O(1) time complexity for adding or removing an element at the end.
- **Insertion or Deletion in the Middle**: O(n) time complexity, as all subsequent elements must be shifted to accommodate the change.

Dynamic arrays benefit from properties such as good locality of reference, data cache utilization, and compactness, which result in low memory usage. However, in languages like Python or Java, where reference semantics are enforced, dynamic arrays store references to data instead of the actual data. This setup can lead to less efficient memory access patterns, as accessing sequential items might involve accessing non-contiguous memory locations.

When compared to linked lists, dynamic arrays offer faster indexing (constant time vs. linear time) and typically better iteration performance due to improved locality of reference. However, dynamic arrays require linear time to insert or delete an element at an arbitrary location, as all subsequent elements must be moved. Linked lists, on the other hand, can perform such insertions and deletions in constant time. This disadvantage is partially mitigated by gap buffers and tiered vector variants.

In a highly fragmented memory environment, it might be challenging or impossible to find contiguous space for a large dynamic array, whereas linked lists do not require contiguous storage. Balanced trees can also store lists, offering efficient performance across various operations, but both insertion at the end and iteration are slower than in a dynamic array due to the overhead associated with tree traversal and manipulation.

### Variants

Dynamic arrays have inspired several variants, each optimized for specific operations or use cases:
- **Gap Buffers**: Similar to dynamic arrays but allow efficient insertion and deletion operations clustered near a specific location.
- **Array Deques**: Provide amortized constant time insertion/removal at both ends, instead of just one, as is typical in dynamic arrays.
- **Tiered Vectors**: A dynamic array algorithm presented by Goodrich that offers O(n^(1/k)) performance for insertions and deletions from any location and O(k) performance for get and set operations, where `k` is a constant parameter.
- **Hashed Array Tree (HAT)**: Developed by Sitarski, this algorithm wastes O(n^(1/2)) storage space but offers O(1) amortized performance for appending objects.
- **VList Algorithm**: Proposed by Bagwell, this algorithm can be adapted to implement a dynamic array.
- **Naïve Resizable Arrays**: Also known as "the worst implementation" of resizable arrays, they grow the allocated size exactly enough to fit the data, calling `realloc` for each new item. This approach avoids memory waste but results in O(n) time complexity for appending elements.
- **Linearly Growing Arrays**: Pre-allocate a small amount of extra space each time they resize, making them faster than naïve resizable arrays, although still slower than geometrically growing arrays.

### Language Support

Dynamic arrays are widely supported in many programming languages:
- **C++**: `std::vector`
- **Rust**: `std::vec::Vec`
- **Java**: `ArrayList`
- **.NET Framework**: `List<>`
- **Smalltalk**: `OrderedCollection`
- **Python**: Built-in `list` datatype
- **Delphi**: Core language support
- **D**: Core language support
- **Ada**: `Ada.Containers.Vectors` generic package
- **Scripting Languages**: Built-in in Perl, Ruby, etc.
- **Cross-Platform C Frameworks**: `CFArray` and `CFMutableArray` in Core Foundation, `GArray` and `GPtrArray` in GLib
- **Common Lisp**: Support for resizable vectors with adjustable configuration and fill-pointers

### How Dynamic Arrays Work: A Detailed Explanation

Dynamic arrays are a flexible data structure that automatically adjusts its size to accommodate new elements. Unlike static arrays, which have a fixed size determined at the time of allocation, dynamic arrays can grow or shrink as needed. This adaptability makes them particularly useful in situations where the number of elements is unknown or can change over time.

#### **Basic Concept**
A dynamic array starts with a fixed-size array, typically larger than the number of elements it initially needs to store. The elements are stored contiguously at the beginning of this underlying array, and the remaining space is reserved for future additions. When an element is added and there is sufficient reserved space, the operation is performed in constant time, $O(1)$. However, if the array is full and another element needs to be added, the array must be resized, which involves creating a new, larger array and copying over the elements from the old array.

#### **Steps in Dynamic Array Operation**

1. **Initialization**: 
   - A dynamic array is initialized with an underlying fixed-size array. The initial capacity (size) of this array can vary but is often a power of two.
   - The number of elements in the dynamic array is tracked by a variable called the "logical size" or simply "size," while the capacity of the underlying array is tracked by another variable.

2. **Adding an Element (Append Operation)**:
   - **Check Capacity**: Before adding a new element, the dynamic array checks if there is enough reserved space.
   - **If Capacity is Sufficient**: The element is added at the next available position, and the size is incremented.
   - **If Capacity is Insufficient**: The array needs to resize. Typically, this involves doubling the size of the current array. A new, larger array is allocated, all existing elements are copied to this new array, and the new element is added. The original array is then deallocated. This resizing process has a time complexity of $O(n)$, where $n$ is the number of elements in the array. However, due to the doubling strategy, the amortized time complexity for each addition remains $O(1)$.

3. **Removing an Element**:
   - **From the End**: Removing an element from the end of a dynamic array is straightforward and can be done in $O(1)$ time. The size is simply decremented.
   - **From the Middle**: When an element is removed from the middle of the array, all subsequent elements must be shifted to fill the gap. This operation takes $O(n)$ time, where $n$ is the number of elements following the removed element.
   - **Shrinking the Array**: If elements are removed and the array becomes sparsely populated (e.g., when the logical size drops below a certain threshold, like 30% of the capacity), the array can be resized to a smaller size to free up memory. This resizing follows a similar process to expansion but is less common in practice.

4. **Resizing Strategy**:
   - **Geometric Expansion**: To minimize the number of times the array is resized, dynamic arrays usually grow by doubling their size. This geometric expansion ensures that the average time complexity for adding elements remains constant, $O(1)$.
   - **Growth Factor**: The growth factor determines how much the array grows during resizing. Common values are 2 (doubling), 1.5, or even smaller values like 1.25. The choice of growth factor represents a trade-off between memory usage and the frequency of resizing.
   - **Amortized Cost**: Although resizing is costly, it occurs infrequently enough that the average cost of adding an element remains low. This is known as amortized analysis, which shows that despite occasional $O(n)$ operations, the overall time complexity for inserting elements remains $O(1)$.

#### **Performance Considerations**
Dynamic arrays offer several performance advantages, particularly when dealing with scenarios where the number of elements can vary:

- **Random Access**: Dynamic arrays provide $O(1)$ time complexity for accessing elements by index, making them efficient for lookups.
- **Iteration**: Iterating through the elements of a dynamic array is typically $O(n)$, with good cache performance due to the contiguous storage of elements.
- **Memory Overhead**: Dynamic arrays have a small overhead for storing metadata such as size and capacity, but they generally use memory efficiently.

#### **Comparison with Other Data Structures**
- **Versus Linked Lists**: Dynamic arrays offer faster indexing and better cache performance compared to linked lists, which require $O(n)$ time for element access. However, dynamic arrays are less efficient for insertions and deletions in the middle of the list, where linked lists excel with $O(1)$ time complexity.
- **Versus Static Arrays**: While static arrays are more memory-efficient and have guaranteed $O(1)$ append time, they lack the flexibility of dynamic arrays. Dynamic arrays are better suited for situations where the number of elements is unpredictable or changes frequently.

#### **Variants and Optimizations**
- **Gap Buffers**: These allow efficient insertions and deletions near a specific location by maintaining a gap within the array.
- **Tiered Vectors**: A more advanced variant offering $O(n^{1/k})$ performance for insertions and deletions, where $k$ is a constant.
- **Hashed Array Trees**: This variant aims to optimize space usage and maintain $O(1)$ amortized performance while avoiding the need for large contiguous memory blocks.

### Implementing a Dynamic Array: Pseudocode and Flowchart

A dynamic array is a data structure that allows you to store a collection of elements with the ability to resize itself automatically when the capacity is exceeded. Below is a conceptual explanation of how to implement a dynamic array, described in both pseudocode and a flowchart format.

#### Pseudocode for Dynamic Array Implementation

1. **Initialize the Dynamic Array:**
   - Start with an initial capacity for the array (e.g., 4).
   - Create an array of this initial capacity.
   - Set the size of the array (number of elements currently in the array) to 0.

2. **Add Element to the Array:**
   - Check if the array is full (i.e., if the size is equal to the capacity).
   - If the array is full:
     - Double the capacity of the array.
     - Create a new array with the doubled capacity.
     - Copy all elements from the old array to the new array.
     - Replace the old array with the new array.
   - Add the new element to the array.
   - Increment the size of the array by 1.

3. **Remove Element from the Array:**
   - Check if the array is empty (i.e., if the size is 0).
   - If not empty:
     - Remove the element from the desired position (usually the end or a specific index).
     - Shift all elements after the removed element to fill the gap (if removed from a specific index).
     - Decrement the size of the array by 1.

4. **Resize the Array:**
   - Implement a method to shrink the array if the number of elements falls below a certain threshold (e.g., less than 30% of the capacity).
   - Allocate a smaller array.
   - Copy the elements to this new array.
   - Replace the old array with the new array.

#### Flowchart for Dynamic Array Implementation

Here is a description of how the flowchart for implementing a dynamic array would look:

1. **Start:**
   - Initialize the dynamic array with a certain capacity and set the size to 0.

2. **Add Element:**
   - **Is the Array Full?**
     - Yes: 
       - Double the capacity.
       - Allocate new memory with doubled capacity.
       - Copy elements from the old array to the new array.
       - Update the reference to the new array.
     - No:
       - Add the element at the end of the array.
   - **Increment Size:**
     - Increase the size of the array by 1.

3. **Remove Element:**
   - **Is the Array Empty?**
     - Yes:
       - Output an error message or return without removing an element.
     - No:
       - Remove the element from the array (usually from the end).
       - Shift elements if necessary.
       - Decrement the size by 1.

4. **Resize Array (Optional):**
   - **Is the Array Under-utilized?**
     - Yes:
       - Shrink the array size if usage is below a certain threshold.
       - Allocate smaller memory and copy elements.
   - No: Continue using the current array.

5. **End:**
   - The dynamic array implementation allows for efficient addition and removal of elements with automatic resizing.

This step-by-step process in pseudocode and flowchart outlines the basic structure and logic for implementing a dynamic array. The actual implementation would vary depending on the programming language and specific requirements, but the core concepts remain the same.

### Conclusion

Dynamic arrays are a versatile and essential data structure in computer science, offering a balance between the fixed size of static arrays and the flexibility of linked lists. Their ability to grow and shrink dynamically while providing efficient random access makes them invaluable for many applications. With numerous implementations and variants, dynamic arrays continue to be a fundamental concept in both theoretical and practical computing.