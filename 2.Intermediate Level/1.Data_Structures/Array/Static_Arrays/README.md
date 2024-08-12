### Important Takeaways

- **Arrays** allow us to keep track of lists of data of the same type (e.g., a list of numbers, strings, chars, etc.).
- There are two types of arrays: **static and dynamic**. This article focuses on static arrays.
- **Static arrays** require knowing the size at compile time, while **dynamic arrays** allow setting the size at runtime.
- Arrays can have any number of dimensions (1D, 2D, 3D, etc.), and each dimension can have any size, limited by the computer’s memory.
- **For loops** are the most appropriate structure to iterate over an array. Note that array indexes start at 0, not 1.

### Background

Arrays provide a way to store a list of items within a single variable. Previously, if you needed to store multiple values, you would declare separate variables for each. However, arrays simplify this by allowing multiple values to be stored under a single variable name. For instance, you can create an array to store a list of names (strings), ages (integers), heights (floats), or even custom types. Each value in an array is stored in a separate ["bucket"](./bucket.md) and you can refer to a particular bucket based on its index in the list. It's essential to remember that array indexes start at 0, not 1.

- A single int variable: `age → 66`
- An array containing ints: `ages → 66, 53, 39, 24`

There are two types of arrays: **static arrays** and **dynamic arrays**. Static arrays store their values on the stack, and their size must be known at compile time. This limitation means that if you want an array sized based on user input, you cannot use a static array. Dynamic arrays, on the other hand, allow you to specify the array size at runtime. While this article focuses on static arrays, dynamic arrays and their uses are discussed later in the learning process.

### Static 1D Arrays

Static arrays are stored in the program’s memory stack, requiring that the size be determined at compile time. There are two main ways to declare and initialize a static array:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Declares an array of five integers called myIntArray1, and initializes it with five values.
    int myIntArray1[5] = {1, 3, 4, 5, 10};

    // Declares an array of four integers called myIntArray2 and separately initializes each element.
    int myIntArray2[4];
    myIntArray2[0] = 100;
    myIntArray2[1] = 58;
    myIntArray2[2] = 24;
    myIntArray2[3] = 5;
}
```

In the first example, we declare and initialize an array in a single step. This method is useful when you know the exact values to store. The right side of the declaration uses curly braces `{}` to list the elements of the array in the order you want them to appear.

In the second example, we declare the array without initializing it. We then assign values to each element separately using the array’s index. The first element is accessed with `myIntArray2[0]`, which refers to the element at index 0 of the array. It’s important to remember that indexes start at 0. When the square brackets are used as part of a declaration, they indicate the array’s size. When used elsewhere, they specify the index of the element to access.

### A Word About Constants

Using literal values for array sizes is generally discouraged because it leads to repetitive code and potential errors if you need to change the array size later. A better practice is to use a global constant value for array sizes. Here's a cleaner version of the previous code using constants:

```cpp
#include <iostream>
using namespace std;

int main()
{
    const int ARRAY1_SIZE = 5;
    const int ARRAY2_SIZE = 4;

    int myIntArray1[ARRAY1_SIZE] = {1, 3, 4, 5, 10};
    int myIntArray2[ARRAY2_SIZE];
    myIntArray2[0] = 100;
    myIntArray2[1] = 58;
    myIntArray2[2] = 24;
    myIntArray2[3] = 5;
}
```

### Iterating Over Arrays

In previous examples, each element of an array was assigned a value on a separate line. While this works for small arrays with predefined values, it’s not practical for larger arrays or when you don’t know the values in advance. Often, you’ll want to perform similar operations on each element of an array, such as asking the user for input to store in the array or printing out each element’s value. This process is called **iterating over an array**.

A `for` loop is the most appropriate way to iterate over an array. The loop typically uses an integer variable, usually named `i`, to keep track of the index, starting at 0. Since the indexes of an array with `size` elements range from 0 to `size - 1`, the loop generally looks like this:

```cpp
for(i = 0; i < size; i++)
```

Here’s an example of how to iterate over an array to populate it with user input and then print each value:

```cpp
#include <iostream>
using namespace std;

int main()
{
    const int SIZE = 20;
    int i;
    int array[SIZE];

    // Ask the user to provide the number that should be stored at each index of the array.
    for(i = 0; i < SIZE; i++)
    {
        cout << "Please enter a number to store at index " << i << ": ";
        cin >> array[i];
    }

    // Print all the values stored in the array.
    for(i = 0; i < SIZE; i++)
        cout << "value @ index " << i << ": " << array[i] << endl;

    return 0;
}
```

### Static Multi-Dimensional Arrays

So far, we've only discussed one-dimensional arrays—arrays that store a simple list of items. However, arrays can also store arrays of items, leading to **multi-dimensional arrays**. The most common type is the two-dimensional (2D) array, which can be thought of as a table of rows and columns, like a spreadsheet or a matrix.

A typical 2D array is visualized as an `n × m` table, where `n` is the number of rows and `m` is the number of columns. For example, if you wanted to store the exam scores of three students across four exams, you could use a 3×4 2D array. Here’s how it might look:

```
scores
↓
●  →  95.5  90.3  93.1  89.5
●  →  85.3  95.2  88.7  85.2
●  →  76.5  82.3  73.4  70.3
```

To access the score of the second student’s first exam, you would use `scores[1][0]`. Note that both the row and column indices require their own pair of square brackets.

Here’s an example of how to declare, initialize, and iterate over a static 2D array:

```cpp
#include <iostream>
using namespace std;

int main()
{
    const int NUMBER_OF_STUDENTS = 3;
    const int NUMBER_OF_EXAMS = 4;

    int i, j;

    // Declaring and initializing a static 2D array in a single step.
    float staticExamScores1[NUMBER_OF_STUDENTS][NUMBER_OF_EXAMS] = {
        {99.5, 90.3, 93.1, 89.5}, // Student 1's exam scores
        {85.3, 95.2, 88.7, 85.2}, // Student 2's exam scores
        {76.5, 82.3, 73.4, 70.3}  // Student 3's exam scores
    };

    // Print out the student scores.
    for(i = 0; i < NUMBER_OF_STUDENTS; i++)
    {
        for(j = 0; j < NUMBER_OF_EXAMS; j++)
            cout << staticExamScores1[i][j] << " ";
        cout << endl;
    }
    cout << endl;

    // Separating the declaration of a 2D array from its initialization.
    float staticExamScores2[NUMBER_OF_STUDENTS][NUMBER_OF_EXAMS];

    // Assigning values to each element of the array.
    staticExamScores2[0][0] = 99.5;
    staticExamScores2[0][1] = 90.3;
    staticExamScores2[0][2] = 93.1;
    staticExamScores2[0][3] = 89.5;
    staticExamScores2[1][0] = 85.3;
    staticExamScores2[1][1] = 95.2;
    staticExamScores2[1][2] = 88.7;
    staticExamScores2[1][3] = 85.2;
    staticExamScores2[2][0] = 76.5;
    staticExamScores2[2][1] = 82.3;
    staticExamScores2[2][2] = 73.4;
    staticExamScores2[2][3] = 70.3;

    // Print out the student scores.
    for(i = 0; i < NUMBER_OF_STUDENTS; i++)
    {
        for(j = 0; j < NUMBER_OF_EXAMS; j++)
            cout << staticExamScores2[i][j] << " ";
        cout << endl;
    }
    cout << endl;

    return 0;
}
```

In this example, `NUMBER_OF_STUDENTS` is set to 3, and `NUMBER_OF_EXAMS` is set to 4. These constants are then used in declaring the 2D array, ensuring that the array size is consistent and easy to adjust if needed.

Arrays can have any number of dimensions. If you need a 3D array, you’d simply add another set of brackets and index values: `array[x][y][z]`. But remember, the more dimensions you add, the more memory the array will consume, which could affect your program's performance.

### Multi-Dimensional Array Initialization and Iteration

Just like 1D arrays, 2D arrays can be initialized when declared by listing values in nested curly braces. The number of values should match the array’s dimensions. You can also use loops to populate and iterate over multi-dimensional arrays, as shown in the previous example. Nested `for` loops are especially useful when dealing with 2D arrays, as they allow you to iterate over each row and column separately.

### Memory Allocation and Storage of Static Arrays

Static arrays are stored in a computer's memory, specifically in the stack, which is a region of memory that stores local variables and function call data. When you declare a static array, memory is allocated at compile time, meaning the size of the array must be known before the program runs.

The memory consumed by a static array depends on two factors:
1. **Size of the array**: This is the total number of elements in the array.
2. **Size of each element**: This depends on the data type of the array. For example, an `int` typically takes 4 bytes, a `char` takes 1 byte, a `float` takes 4 bytes, and a `double` takes 8 bytes.

#### Calculating Memory Consumption

The total memory required by a static array can be calculated using the following formula:

$\text{Memory Consumption (bytes)} = \text{Number of Elements} \times \text{Size of Each Element (bytes)}$

For example:
- A static array of 10 integers (`int`) will consume \(10 \times 4 = 40\) bytes of memory.
- A static array of 20 characters (`char`) will consume \(20 \times 1 = 20\) bytes of memory.
- A 2D static array with dimensions 5x4 of floats (`float`) will consume \(5 \times 4 \times 4 = 80\) bytes of memory.

#### Example of Memory Consumption Calculation

Consider a static array of 100 integers:

```cpp
int myArray[100];
```

Here, `myArray` has 100 elements, and each `int` is typically 4 bytes:

$\text{Memory Consumption} = 100 \times 4 = 400 \text{ bytes}$

This array will consume 400 bytes of memory in the stack.

### Cost of Static Array Consumption

#### **1. Memory Cost**

Static arrays have a fixed size determined at compile time, meaning the memory allocated for the array is constant throughout the program's execution. This has both benefits and drawbacks:

- **Benefits**:
  - **Predictable memory usage**: The memory footprint of the array is known at compile time, making it easier to manage and optimize memory usage.
  - **Fast access**: Accessing elements in a static array is very fast because the memory layout is contiguous, meaning the CPU can quickly calculate the memory address of any element using its index.
  
- **Drawbacks**:
  - **Wasted memory**: If the array is declared larger than needed, the unused portion of the array still consumes memory, leading to inefficient use of memory resources.
  - **Limited flexibility**: The size of a static array cannot be changed during runtime. If you need to store more elements than initially planned, you'll need to declare a new array or switch to a dynamic data structure, which can be cumbersome.

#### **2. Performance Cost**

Static arrays are generally very efficient in terms of performance because:
- **Constant time access**: Accessing any element in a static array has a time complexity of O(1), meaning the time it takes to access an element is constant and does not depend on the size of the array.
- **Low overhead**: Since static arrays are stored in the stack, there is minimal overhead associated with managing the memory.

However, there are potential downsides:
- **Stack overflow**: If you declare a static array that is too large, it can cause a stack overflow, crashing the program. This is particularly a concern in environments with limited stack space.
- **Limited size**: The size of the stack is typically much smaller than the heap, so very large static arrays are impractical or impossible.

### Conclusion

Arrays are versatile data structures that can store lists of values under a single variable name, making your code more efficient and easier to manage. Static arrays, stored in the stack, require you to define their size at compile time. They can be one-dimensional, storing a simple list of items, or multi-dimensional, storing more complex data structures like tables or matrices. Understanding how to declare, initialize, and iterate over static arrays is essential for efficient programming and is a stepping stone to mastering more complex data structures.