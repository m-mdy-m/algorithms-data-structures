## Array (data structure)
In computer science, an array is a data structure consisting of a collection of elements (values or variables) of the same memory size, each identified by at least one array index or key. An array is stored such that the position of each element can be computed from its index tuple by a mathematical formula. The simplest type of data structure is a linear array, also called a one-dimensional array.

For example, an array of ten 32-bit (4-byte) integer variables, with indices 0 through 9, may be stored as ten words at memory addresses 2000, 2004, 2008, ..., 2036, (in hexadecimal: `0x7D0`, `0x7D4`, `0x7D8`, ..., `0x7F4`) so that the element with index i has the address 2000 + (i × 4). The memory address of the first element of an array is called the first address, foundation address, or base address.

Because the mathematical concept of a matrix can be represented as a two-dimensional grid, two-dimensional arrays are also sometimes called "matrices." In some cases, the term "vector" is used in computing to refer to an array, although tuples rather than vectors are the more mathematically correct equivalent. Tables are often implemented in the form of arrays, especially lookup tables; the word "table" is sometimes used as a synonym of array.

Arrays are among the oldest and most important data structures and are used by almost every program. They are also used to implement many other data structures, such as lists and strings. They effectively exploit the addressing logic of computers. In most modern computers and many external storage devices, the memory is a one-dimensional array of words, whose indices are their addresses. Processors, especially vector processors, are often optimized for array operations.

Arrays are useful mostly because the element indices can be computed at runtime. Among other things, this feature allows a single iterative statement to process arbitrarily many elements of an array. For that reason, the elements of an array data structure are required to have the same size and should use the same data representation. The set of valid index tuples and the addresses of the elements (and hence the element addressing formula) are usually, but not always, fixed while the array is in use.

The term "array" may also refer to an array data type, a kind of data type provided by most high-level programming languages that consists of a collection of values or variables that can be selected by one or more indices computed at runtime. Array types are often implemented by array structures; however, in some languages, they may be implemented by hash tables, linked lists, search trees, or other data structures.

The term is also used, especially in the description of algorithms, to mean associative array or "abstract array," a theoretical computer science model (an abstract data type or ADT) intended to capture the essential properties of arrays.

![What is abstract array](./Abstract_Arrays_Associative_Arrays.md)

### Real-World Example

Consider a simple example of a bookshelf in a library. Each shelf can be seen as an array where each slot (index) on the shelf holds one book (element). If we have a shelf with 10 slots, we can label these slots from 0 to 9. If we want to find the 4th book on the shelf, we look at the slot with index 3 (since indexing typically starts at 0). This straightforward system allows us to quickly locate any book by its slot number, similar to how we would access an element in an array using its index.

### Key Points for Better Understanding
- **Indexing**: Array elements are accessed using indices, which are typically integers. The indices can start at 0 (zero-based indexing), 1 (one-based indexing), or any other integer, depending on the language and context.
- **Memory Efficiency**: Arrays are stored in contiguous memory locations, which allows for efficient indexing and iteration through the elements.
- **Fixed Size**: Traditional arrays have a fixed size, meaning that once the array is created, its size cannot be changed. However, dynamic arrays or lists in some programming languages allow resizing.
- **Homogeneous Elements**: All elements in an array are of the same data type, which ensures that each element occupies the same amount of memory.

### Practical Example
In a programming context, consider a one-dimensional array in C that stores the scores of 5 students:

```c
#include <stdio.h>

int main() {
    // Declare an array of 5 integers
    int scores[5] = {85, 90, 78, 92, 88};

    // Access and print each element using its index
    for(int i = 0; i < 5; i++) {
        printf("Student %d: %d\n", i + 1, scores[i]);
    }

    return 0;
}
```

In this example, `scores[0]` refers to the first student's score (85), `scores[1]` to the second student's score (90), and so on. This illustrates how an array allows for efficient storage and retrieval of multiple elements using indices.

## History

The evolution of arrays as a fundamental data structure has played a significant role in the development of computer science. 

#### Early Digital Computers

The first digital computers employed machine-language programming to create and access array structures for various purposes, including data tables, vector and matrix computations. John von Neumann made a significant contribution in 1945 by writing the first array-sorting program, known as merge sort, during the development of the first stored-program computer.

#### Array Indexing

Initially, array indexing was managed through self-modifying code. This method was later improved with the introduction of index registers and indirect addressing. Some mainframes designed in the 1960s, like the Burroughs B5000 and its successors, incorporated memory segmentation to perform index-bounds checking directly in hardware.

#### Support in Programming Languages

Assembly languages typically do not have special support for arrays beyond what is provided by the machine's hardware. However, early high-level programming languages began to include more advanced support for arrays:
- **FORTRAN (1957)**: One of the earliest high-level languages, FORTRAN introduced support for multi-dimensional arrays.
- **Lisp (1958)**: Known for its flexibility, Lisp also included array support.
- **COBOL (1960)**: Designed for business applications, COBOL included multi-dimensional array capabilities.
- **ALGOL 60 (1960)**: A language influential in the development of many later languages, ALGOL 60 supported multi-dimensional arrays.
- **C (1972)**: The C programming language provided robust support for arrays, allowing for flexible data management and manipulation.

#### Advances in C++

With the advent of C++ in 1983, more sophisticated features were introduced. C++ included class templates for multi-dimensional arrays with dimensions fixed at runtime, as well as support for runtime-flexible arrays, enhancing the versatility and efficiency of array handling in software development.


## Applications

Arrays are a versatile and fundamental data structure in computer science, used across a wide range of applications.

#### Mathematical and Database Applications

Arrays are commonly used to implement mathematical constructs such as vectors and matrices, as well as various types of rectangular tables. Many databases, both large and small, often include or consist entirely of one-dimensional arrays whose elements are records.

#### Implementing Other Data Structures

Arrays serve as the foundation for implementing other data structures, including:
- **Lists**: Arrays can store list elements in a contiguous block of memory.
- **Heaps**: Binary heaps are efficiently implemented using arrays.
- **Hash Tables**: Arrays are used to store the entries in a hash table.
- **Deques, Queues, and Stacks**: These linear data structures can be implemented using arrays for efficient element access and modification.
- **Strings**: Character arrays are a fundamental way to represent strings.
- **VLists**: Arrays can also be used to implement VLists, a variant of linked lists.

Array-based implementations of these data structures are often simple and space-efficient (implicit data structures), requiring minimal space overhead. However, they can have poor space complexity, particularly when modified frequently, compared to tree-based data structures (e.g., a sorted array versus a search tree).

#### Memory Allocation

Arrays can be utilized to emulate dynamic memory allocation within a program, especially in the form of memory pool allocation. Historically, this approach was sometimes the only portable way to allocate dynamic memory.

#### Control Flow Management

Arrays can also influence control flow in programs, serving as a compact alternative to multiple repetitive `IF` statements. In this context, they are referred to as control tables. These tables are used with purpose-built interpreters that alter control flow based on values within the array. The array may contain pointers to subroutines (or relative subroutine numbers) that can be acted upon by `SWITCH` statements, thus directing the execution path efficiently.

## Element Identifier and Addressing Formulas

When data objects are stored in an array, individual objects are selected by an index, usually a non-negative scalar integer. Indexes, also called subscripts, map the array value to a stored object.

### Indexing Methods

There are three primary ways in which the elements of an array can be indexed:

1. **Zero-Based Indexing**
   - The first element of the array is indexed by a subscript of 0.

2. **One-Based Indexing**
   - The first element of the array is indexed by a subscript of 1.

3. **n-Based Indexing**
   - The base index of an array can be freely chosen. In programming languages that support n-based indexing, negative index values and other scalar data types, such as enumerations or characters, may be used as an array index.

### Design Choices and Examples

Zero-based indexing is the design choice of many influential programming languages, including C, Java, and Lisp. This choice leads to a simpler implementation, where the subscript refers to an offset from the starting position of an array, so the first element has an offset of zero.

Arrays can have multiple dimensions, requiring multiple indices to access elements. For example, in a two-dimensional array `A` with three rows and four columns, the element at the 2nd row and 4th column might be accessed using the expression `A[1][3]` in a zero-based indexing system. Thus, two indices are used for a two-dimensional array, three for a three-dimensional array, and n for an n-dimensional array.

The number of indices needed to specify an element is called the dimension, dimensionality, or rank of the array.

### Address Calculation

In standard arrays, each index is restricted to a certain range of consecutive integers (or consecutive values of some enumerated type). The address of an element is computed using a linear formula on the indices.

For example, consider a one-dimensional array of ten 32-bit (4-byte) integer variables, with indices 0 through 9, stored at memory addresses 2000, 2004, 2008, ..., 2036 (in hexadecimal: `0x7D0`, `0x7D4`, `0x7D8`, ..., `0x7F4`). The element with index `i` has the address `2000 + (i × 4)`. The memory address of the first element is called the first address, foundation address, or base address.

### Practical Application Example

To better understand this concept, imagine a bookshelf where each book is assigned a number starting from 0. The first book is book 0, the second is book 1, and so on. If the base position of the shelf is marked as 2000, the address of the book can be calculated using its position number multiplied by the book's width (let’s say 4 cm). Therefore, the address of the 3rd book (position 2) would be `2000 + (2 × 4) = 2008`.

This method simplifies the process of locating a book (or an array element) by providing a straightforward calculation based on its position index.
### One-dimensional Arrays

A one-dimensional array, also known as a single dimension array, is a fundamental type of linear array. It involves accessing elements using a single subscript, which can represent either a row or column index.

#### Example and Declaration

Consider the C declaration `int anArrayName[10];`, which declares a one-dimensional array capable of storing ten integers. This array spans indices from zero to nine. For instance, `anArrayName[0]` and `anArrayName[9]` refer to the first and last elements, respectively.

#### Addressing Scheme

In a one-dimensional array with linear addressing, the element at index *i* is located at address **B + c · i**, where *B* is a fixed base address and *c* is a constant referred to as the address increment or stride.

- **Base Address (B):** If the array begins indexing at 0, *B* is simply the address of the first element. This convention aligns with the C programming language's specification, where array indices start from 0.

- **Customizing Base Address (B):** Alternatively, one can choose a different index for the first element by adjusting the base address *B*. For example, if an array of five elements is indexed from 1 to 5, setting *B* to **B + 30c** shifts the indices to 31 through 35. When the index does not commence at 0, *B* may not correspond to the address of any element directly.

Understanding one-dimensional arrays involves grasping the concept of linear indexing and the relationship between indices and memory addresses. This foundational knowledge is essential in programming for efficient data storage and retrieval using arrays.

### Multidimensional Arrays

Multidimensional arrays extend the concept of a one-dimensional array to multiple dimensions, allowing for more complex data structures such as matrices and higher-dimensional data sets.

#### Address Calculation

For a two-dimensional array, the address of an element with indices \(i\) and \(j\) is calculated using the formula:

\[ \text{Address} = B + c \cdot i + d \cdot j \]

Here, \(B\) is the base address, and \(c\) and \(d\) are the row and column address increments, respectively.

For a more general \(k\)-dimensional array, the address of an element with indices \(i_1, i_2, \ldots, i_k\) is given by:

\[ \text{Address} = B + c_1 \cdot i_1 + c_2 \cdot i_2 + \ldots + c_k \cdot i_k \]

where \(c_1, c_2, \ldots, c_k\) are the address increments for each dimension.

#### Example

Consider the declaration in C:

```c
int a[2][3];
```

This declares a two-dimensional array `a` with 2 rows and 3 columns, capable of storing 6 integer elements. The elements are stored linearly in memory, starting from the first row, then continuing with the second row. The storage layout would be:

\[ \text{a}_{11}, \text{a}_{12}, \text{a}_{13}, \text{a}_{21}, \text{a}_{22}, \text{a}_{23} \]

#### General Formula

The general address calculation formula for a \(k\)-dimensional array requires \(k\) multiplications and \(k\) additions, making it efficient for arrays that fit in memory. If any coefficient \(c_k\) is a fixed power of 2, the multiplication can be optimized by replacing it with bit shifting.

The coefficients \(c_k\) must be chosen so that every valid index tuple maps to the address of a distinct element. If the minimum legal value for each index is 0, then \(B\) is the address of the element whose indices are all zero. Changing the base address \(B\) can shift the index range.

#### Index Range Customization

For example, in a two-dimensional array with rows indexed from 1 to 10 and columns from 1 to 20, replacing \(B\) by \(B - c_1 + 3c_2\) would renumber the indices to 0 through 9 and 4 through 23, respectively. This flexibility allows for various indexing schemes across different programming languages. 

- **FORTRAN 77:** Specifies that array indices begin at 1, adhering to mathematical tradition.
- **Fortran 90, Pascal, Algol:** Allow users to choose the minimum value for each index.

#### Use Cases and Advantages

Multidimensional arrays are extensively used in scientific computing, engineering, image processing, and any domain where grid-based data structures are necessary. They allow for efficient storage and access patterns in programs that handle large volumes of data.

For instance, in image processing, a two-dimensional array can represent pixel values, with rows and columns corresponding to pixel coordinates. In scientific simulations, three-dimensional arrays can represent physical quantities in a spatial grid.

#### Key Points

- **Efficiency:** Multidimensional arrays are efficient in terms of both time and space, particularly when the address calculation can be optimized with bit shifting.
- **Flexibility:** They provide flexible indexing schemes, allowing customization of the starting index and dimension sizes.
- **Application:** They are crucial in fields requiring structured data storage, such as scientific computing, data analysis, and engineering simulations.

### Dope Vectors

The addressing formula for array elements is fully defined by the dimension \(d\), the base address \(B\), and the increments \(c_1, c_2, \ldots, c_k\). These parameters can be packed into a record known as the array's descriptor, stride vector, or dope vector. This record may also include the size of each element and the minimum and maximum values allowed for each index.

The dope vector serves as a complete handle for the array, making it a convenient way to pass arrays as arguments to procedures. By including all necessary information about the array's structure, the dope vector allows for efficient manipulation and access to the array's elements.

#### Efficient Array Operations

Many useful array slicing operations can be performed very efficiently by manipulating the dope vector. These operations include:

- **Selecting a Sub-array:** Extracting a portion of the array without copying the elements.
- **Swapping Indices:** Changing the order of indices to transpose the array or reorder dimensions.
- **Reversing Indices:** Reversing the order of elements along one or more dimensions.

#### Example of Dope Vector Usage

Consider a two-dimensional array where you want to extract a sub-array or reverse the order of elements in a specific dimension. By adjusting the increments and base address in the dope vector, these operations can be performed without the need to move the actual data in memory. This leads to significant performance gains, especially for large arrays.

#### Benefits of Dope Vectors

- **Efficiency:** Operations that would typically require copying or rearranging data can be done by simply updating the dope vector.
- **Flexibility:** The dope vector encapsulates all the information needed to handle the array, making it easy to pass arrays between functions and modules.
- **Convenience:** Provides a unified approach to managing arrays, simplifying code and reducing the likelihood of errors.

#### Real-World Example: Image Processing

Consider an image represented as a two-dimensional array where each element corresponds to a pixel's color value. Let's say the image is stored in an array `image[height][width]`.

1. **Base Address (B):** The memory address of the first pixel.
2. **Increments (c1, c2):** The increments for row and column access. If each pixel is stored consecutively, the increment for the column (c1) is 1, and for the row (c2) it is the width of the image.

If we pack these parameters into a dope vector, it might look like this:

```c
typedef struct {
    int* base_address;  // Pointer to the first element
    int row_increment;  // Increment for row (width of the image)
    int col_increment;  // Increment for column (typically 1)
    int element_size;   // Size of each element in bytes
    int min_row, max_row;  // Min and max index for rows
    int min_col, max_col;  // Min and max index for columns
} DopeVector;

DopeVector dv = {
    .base_address = &image[0][0],
    .row_increment = width,
    .col_increment = 1,
    .element_size = sizeof(int),
    .min_row = 0,
    .max_row = height - 1,
    .min_col = 0,
    .max_col = width - 1
};
```

#### Efficient Operations Using Dope Vector

With the dope vector, we can perform efficient array operations:

- **Sub-array Selection:** Select a specific region of the image.
- **Index Swapping:** Change the order of accessing elements, such as transposing the image.
- **Reversing Indices:** Flip the image horizontally or vertically.

For instance, to select a sub-array (e.g., a 100x100 pixel region starting at row 50, column 50), we can adjust the base address and the index range in the dope vector:

```c
DopeVector sub_image = dv;
sub_image.base_address = &image[50][50];
sub_image.min_row = 50;
sub_image.max_row = 149;
sub_image.min_col = 50;
sub_image.max_col = 149;
```

#### Practical Application: Image Processing Library

In an image processing library, functions can use dope vectors to handle various image transformations efficiently. For example, a function to flip an image horizontally might adjust the column increment:

```c
void flip_image_horizontally(DopeVector* dv) {
    dv->col_increment = -dv->col_increment;
    dv->base_address = &dv->base_address[dv->max_col];
}
```

By manipulating the dope vector, the function achieves the desired transformation without needing to modify the original array directly, ensuring efficient and flexible operations.

In conclusion, dope vectors provide a powerful abstraction for handling arrays, allowing for efficient manipulation and passing of arrays in programs. They are particularly useful in applications requiring complex array operations, such as image processing, scientific computing, and data analysis.

### Compact Layouts

Often the coefficients are chosen so that the elements occupy a contiguous area of memory. However, that is not necessary. Even if arrays are always created with contiguous elements, some array slicing operations may create non-contiguous sub-arrays from them.

There are two systematic compact layouts for a two-dimensional array. For example, consider the matrix:

\[
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
\]

In the row-major order layout (adopted by C for statically declared arrays), the elements in each row are stored in consecutive positions, and all of the elements of a row have a lower address than any of the elements of a consecutive row:

`1 2 3 4 5 6 7 8 9`

In column-major order (traditionally used by Fortran), the elements in each column are consecutive in memory, and all of the elements of a column have a lower address than any of the elements of a consecutive column:

`1 4 7 2 5 8 3 6 9`

For arrays with three or more indices, "row-major order" puts in consecutive positions any two elements whose index tuples differ only by one in the last index. "Column-major order" is analogous with respect to the first index.

In systems that use processor cache or virtual memory, scanning an array is much faster if successive elements are stored in consecutive positions in memory, rather than sparsely scattered. This is known as spatial locality, which is a type of locality of reference. Many algorithms that use multidimensional arrays will scan them in a predictable order. A programmer (or a sophisticated compiler) may use this information to choose between row- or column-major layout for each array. For example, when computing the product \(A \cdot B\) of two matrices, it would be best to have \(A\) stored in row-major order and \(B\) in column-major order.

#### Real-World Example: Matrix Multiplication

Consider the multiplication of two matrices \(A\) and \(B\). Suppose \(A\) is stored in row-major order and \(B\) in column-major order. When computing \(A \cdot B\), the access pattern benefits from these layouts:

- **Row-Major (A)**: Elements are accessed row-wise, which aligns with typical matrix multiplication algorithms that traverse rows of \(A\) and columns of \(B\).
- **Column-Major (B)**: Allows efficient access to columns of \(B\) during the multiplication process.

```c
// Example of matrix multiplication using row-major and column-major layouts
#define N 3

void matrix_multiply(int A[N][N], int B[N][N], int C[N][N]) {
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            C[i][j] = 0;
            for (int k = 0; k < N; ++k) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}
```

In this example, the efficiency of accessing elements aligns with the layout of matrices \(A\) and \(B\), optimizing memory access patterns and potentially improving performance due to better cache utilization and spatial locality.

### Optimization Considerations

When designing and implementing algorithms that involve multidimensional arrays, optimizing the array layout can significantly impact performance and memory efficiency. Here are key considerations:

#### Spatial Locality

Arrays benefit from **spatial locality** when elements are stored contiguously in memory. This allows for faster access times due to caching mechanisms and efficient memory page handling. For instance, in matrix operations like multiplication or traversal algorithms, accessing adjacent elements in memory reduces cache misses and improves overall performance.

#### Algorithmic Choices

Programmers and compilers can make strategic **algorithmic choices** to optimize array layouts based on anticipated access patterns and computational requirements:

- **Matrix Multiplication**: Consider the multiplication of matrices \(A\) and \(B\). If \(A\) is stored in row-major order and \(B\) in column-major order, accessing rows of \(A\) and columns of \(B\) aligns with typical matrix multiplication algorithms, optimizing performance.


```c
#define N 3

void matrix_multiply(int A[N][N], int B[N][N], int C[N][N]) {
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            C[i][j] = 0;
            for (int k = 0; k < N; ++k) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}
```

In this example, the layout of \(A\) and \(B\) in memory optimizes the traversal of rows and columns during multiplication, leveraging spatial locality for improved performance.

#### Real-World Example: Image Processing

In image processing, convolution operations on multidimensional arrays (such as image matrices) can benefit from optimized array layouts. By arranging pixels in memory to align with the convolution kernel's access pattern, algorithms can efficiently apply filters and transformations.

```python
import numpy as np

# Example of applying a 3x3 filter to an image using numpy
def apply_filter(image, filter_kernel):
    height, width = image.shape
    result = np.zeros_like(image)
    for i in range(1, height - 1):
        for j in range(1, width - 1):
            result[i, j] = np.sum(image[i-1:i+2, j-1:j+2] * filter_kernel)
    return result

# Example usage
image = np.random.randint(0, 256, size=(1000, 1000))
filter_kernel = np.array([[1, 1, 1],
                          [1, -8, 1],
                          [1, 1, 1]])
filtered_image = apply_filter(image, filter_kernel)
```

Efficiently accessing adjacent pixels based on the chosen array layout enhances the performance of image filtering operations by minimizing memory access delays.

### Resizing

Static arrays have a fixed size upon creation, which limits their flexibility in accommodating variable numbers of elements. However, dynamic resizing techniques can effectively simulate dynamic array behavior by reallocating memory and copying elements. This concept is essential in data structures like dynamic arrays.

#### Dynamic Arrays

Dynamic arrays are resizable, allowing elements to be added or removed dynamically. When the array reaches its capacity, additional elements can be appended by reallocating memory and copying existing elements. This resizing operation, if infrequent, ensures that insertions at the end of the array remain efficient with amortized constant time complexity.

#### Example: Dynamic Array in Python

In Python, lists are implemented as dynamic arrays. They automatically resize as elements are added beyond their initial capacity. The `append()` method allows elements to be added efficiently, resizing the underlying array as needed.

```python
# Example of dynamic array in Python
dynamic_array = []

# Append elements to the dynamic array
dynamic_array.append(1)
dynamic_array.append(2)
dynamic_array.append(3)

print(dynamic_array)  # Output: [1, 2, 3]
```

When the number of elements exceeds the current capacity of the dynamic array, Python internally reallocates memory to accommodate additional elements. This resizing ensures that operations like appending elements remain efficient, although occasional reallocation and copying may incur a slight overhead.

#### Counted Arrays

Some array data structures maintain a fixed maximum size but include a count or size attribute to track the number of elements currently in use. This approach is common in languages like Pascal, where strings are represented using counted arrays. The count helps manage the array's dynamic behavior within its predefined capacity.

#### Real-World Example: Managing Database Records

In database management systems, arrays or similar data structures are used to manage records retrieved from databases. When handling variable numbers of records, dynamic resizing mechanisms ensure efficient memory usage and fast access times. For instance, when retrieving query results that vary in size, dynamic arrays facilitate flexible storage and manipulation of fetched data.

### Non-linear Formulas

### Non-linear Formulas

While arrays often use linear addressing formulas for simplicity and efficiency, there are scenarios where more complex, non-linear formulas are employed. These formulas are particularly useful for representing specialized data structures, such as triangular or other irregularly shaped arrays. 

#### Compact Two-dimensional Triangular Array

In a compact two-dimensional triangular array, the elements are stored in a triangular fashion rather than a rectangular grid. This arrangement reduces the space needed to store symmetric or triangular matrices. The addressing formula for such an array is typically a polynomial of degree 2.

For example, consider a lower triangular matrix where only the elements on and below the main diagonal are stored. The element at position \((i, j)\) in the original matrix can be mapped to a one-dimensional array using the formula:

\[ \text{index} = \frac{i \cdot (i + 1)}{2} + j \]

where \(i \geq j\).

#### Real-World Example: Storing Distance Matrices

A practical application of non-linear formulas is in storing distance matrices in computational chemistry or graph theory. In these fields, the distance between nodes (or atoms) is often symmetric, meaning the distance from node A to node B is the same as from node B to node A. To save space, only the lower or upper triangular part of the matrix is stored.

For instance, in a system with four nodes, the distance matrix might be:

\[
\begin{matrix}
0 & 2 & 3 & 4 \\
2 & 0 & 5 & 6 \\
3 & 5 & 0 & 7 \\
4 & 6 & 7 & 0 \\
\end{matrix}
\]

Using the triangular storage, only the elements on and below the diagonal are stored:

\[
\begin{matrix}
0 \\
2 & 0 \\
3 & 5 & 0 \\
4 & 6 & 7 & 0 \\
\end{matrix}
\]

The non-linear indexing formula ensures efficient access and storage of these elements, reducing memory usage.

#### Optimizing Storage and Access

Using non-linear formulas for specialized data structures can significantly optimize storage and access patterns. This is particularly important in applications with large datasets or where memory efficiency is critical, such as scientific simulations, network analysis, and large-scale data processing.

By employing non-linear addressing formulas, developers can tailor data storage to the specific needs of their applications, enhancing both performance and resource utilization.

### Efficiency

Arrays offer significant efficiency benefits for both storage and access. Storing and selecting elements in an array can be done in constant time (\(O(1)\)), making arrays one of the most time-efficient data structures for accessing elements by index. Arrays require linear space (\(\Theta(n)\)) relative to the number of elements \(n\) they contain, which makes them space-efficient as well.

#### Cache Performance

In an array with an element size \(k\) and a machine cache line size of \(B\) bytes, iterating through an array of \(n\) elements incurs approximately \(\lceil nk / B \rceil\) cache misses, as the elements are stored contiguously in memory. This can be much more efficient than accessing \(n\) elements at random memory locations, which would result in many more cache misses. This spatial locality means that sequential access to array elements is typically much faster than accessing elements in many other data structures.

For example, a program processing a large dataset stored in an array will experience fewer cache misses and thus run faster than if the data were stored in a linked list or another non-contiguous structure. This efficiency is exploited in numerous applications, such as image processing, where pixel data is often stored in arrays and processed sequentially.

#### Memory Copy Optimization

Many libraries provide optimized functions for copying blocks of memory, such as `memcpy` in C. These functions can move contiguous blocks of array elements significantly faster than copying individual elements one by one. The speed of such operations depends on the element size, the architecture, and the implementation.

#### Compact Storage

Arrays are compact data structures with minimal overhead. While there may be a small per-array overhead (e.g., for storing index bounds), this overhead is generally low. Packed arrays, where multiple elements are stored in a single word, can further optimize memory usage. For instance, bit arrays store each element as a single bit, allowing for extremely dense storage.

Real-world example: A bitmap image can be efficiently stored as a bit array, where each bit represents a pixel's presence or absence, allowing for very compact storage.

#### Data Parallelism

Array accesses with predictable access patterns are ideal for data parallelism. Many modern processors and compilers can exploit this characteristic to parallelize operations, enhancing performance in computationally intensive applications.

#### Comparison with Other Data Structures

Here's a comparison of arrays with other common data structures:

| Data Structure         | Peek (index) | Mutate (insert or delete) at ... | Excess space, average |
|------------------------|--------------|----------------------------------|-----------------------|
| Linked list            | \(\Theta(n)\)         | \(\Theta(1)\)                             | \(\Theta(n)\)                  |
| Array                  | \(\Theta(1)\)         | —                                | 0                     |
| Dynamic array          | \(\Theta(1)\)         | \(\Theta(n)\)                             | \(\Theta(n)\)                  |
| Balanced tree          | \(\Theta(\log n)\)     | \(\Theta(\log n)\)                         | \(\Theta(n)\)                  |
| Random-access list     | \(\Theta(\log n)\)     | \(\Theta(1)\)                             | \(\Theta(n)\)                  |
| Hashed array tree      | \(\Theta(1)\)         | \(\Theta(n)\)                             | \(\Theta(\sqrt{n})\)                 |

#### Real-World Example: Database Systems

In database systems, arrays are often used to store and access records efficiently. Consider a database index implemented as an array. Accessing a record by its index can be done in constant time, ensuring fast query performance. Additionally, sequential scans over the index benefit from spatial locality, making the operation cache-efficient.

Dynamic arrays, which allow for resizing, provide the flexibility needed in applications where the number of elements can change, such as dynamic datasets or real-time data processing.

Associative arrays, like hash tables, are used in databases to handle sparse data efficiently, such as indexing documents in a search engine where only certain terms appear in specific documents.

Balanced trees, like B-trees, are used in databases for maintaining sorted data and allowing fast search, insertion, and deletion operations, which is critical for maintaining database indexes.

### Iliffe Vectors

An Iliffe vector is an alternative to a multidimensional array structure. It uses a one-dimensional array of references to arrays of one dimension less. For two dimensions, in particular, this alternative structure would be a vector of pointers to vectors, one for each row. Thus, an element in row \(i\) and column \(j\) of an array \(A\) would be accessed by double indexing (\(A[i][j]\) in typical notation). This alternative structure allows jagged arrays, where each row may have a different size—or, in general, where the valid range of each index depends on the values of all preceding indices. It also saves one multiplication (by the column address increment), replacing it by a bit shift (to index the vector of row pointers) and one extra memory access (fetching the row address), which may be worthwhile in some architectures.

### Dimension

The dimension of an array is the number of indices needed to select an element. Thus, if the array is seen as a function on a set of possible index combinations, it is the dimension of the space of which its domain is a discrete subset. Thus, a one-dimensional array is a list of data, a two-dimensional array is a rectangle of data, a three-dimensional array a block of data, etc.

This should not be confused with the dimension of the set of all matrices with a given domain, that is, the number of elements in the array. For example, an array with 5 rows and 4 columns is two-dimensional, but such matrices form a 20-dimensional space. Similarly, a three-dimensional vector can be represented by a one-dimensional array of size three.

## Example
- [Rust](./example/Array.rs)
- [Golang](./example/Array.go)
- [Java](./example/Array2D.java)
- [Javascript](./example/Array.js)
- [Typescript](./example/Array.ts)
- [Python](./example/Array.py)