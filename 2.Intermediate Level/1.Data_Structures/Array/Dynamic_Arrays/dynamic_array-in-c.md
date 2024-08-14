### Dynamic Array in C

Array in C is static in nature, meaning its size must be known at compile time, and it cannot be changed after its declaration. This limitation can lead to problems, such as insufficient space for required elements or memory wastage due to over-allocation. Dynamic arrays address these issues by allowing memory allocation at runtime and enabling size adjustments during program execution.

We can create a dynamic array in C using several methods:

1. **Using `malloc()` Function**
2. **Using `calloc()` Function**
3. **Resizing Array Using `realloc()` Function**
4. **Using Variable Length Arrays (VLAs)**
5. **Using Flexible Array Members**

Let's explore each method in detail:

### 1. Dynamic Array Using `malloc()` Function

The `malloc` (memory allocation) function is used in C to dynamically allocate a single large block of memory of a specified size. It returns a pointer of type `void`, which can be cast to any pointer type. The `malloc` function is defined in the `<stdlib.h>` header file.

**Syntax:**

```c
ptr = (cast-type*) malloc(byte-size);
```

Here, `byte-size` specifies the number of bytes to allocate. For example, to create a dynamic array of integers with 100 elements:

```c
ptr = (int*) malloc(100 * sizeof(int));
```

If `malloc` fails to allocate the required memory, it returns a `NULL` pointer. It is good practice to check for a `NULL` pointer to ensure successful memory allocation.

**Example:**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int* ptr;
    int size;

    printf("Enter size of elements: ");
    scanf("%d", &size);

    ptr = (int*)malloc(size * sizeof(int));

    if (ptr == NULL) {
        printf("Memory not allocated.\n");
    } else {
        printf("Memory successfully allocated using malloc.\n");

        for (int j = 0; j < size; ++j) {
            ptr[j] = j + 1;
        }

        printf("The elements of the array are: ");
        for (int k = 0; k < size; ++k) {
            printf("%d, ", ptr[k]);
        }
    }

    return 0;
}
```

**Output:**

```
Enter size of elements: 5
Memory successfully allocated using malloc.
The elements of the array are: 1, 2, 3, 4, 5,
```

### 2. Dynamic Array Using `calloc()` Function

The `calloc` (contiguous allocation) function is used in C to dynamically allocate a specified number of memory blocks, each of a specified size, and initializes each block to zero. It takes two arguments: the number of elements and the size of each element.

**Syntax:**

```c
ptr = (cast-type*)calloc(n, element-size);
```

In the following example, a dynamic array of floats with 5 elements is created:

```c
ptr = (int*) calloc(5, sizeof(float));
```

This process is similar to `malloc`, but with the added advantage of initializing the memory to zero.

**Example:**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int* ptr;
    int size;

    printf("Enter size of elements: ");
    scanf("%d", &size);

    ptr = (int*)calloc(size, sizeof(int));

    if (ptr == NULL) {
        printf("Memory not allocated.\n");
    } else {
        printf("Memory successfully allocated using calloc.\n");

        for (int j = 0; j < size; ++j) {
            ptr[j] = j + 1;
        }

        printf("The elements of the array are: ");
        for (int k = 0; k < size; ++k) {
            printf("%d, ", ptr[k]);
        }
    }

    return 0;
}
```

**Output:**

```
Enter size of elements: 6
Memory successfully allocated using calloc.
The elements of the array are: 1, 2, 3, 4, 5, 6,
```

### 3. Dynamically Resizing Array Using `realloc()` Function

The `realloc` (re-allocation) function dynamically changes the size of a previously allocated memory block. This function is useful for resizing an existing array or for changing the size of memory allocated using `malloc` or `calloc`.

**Syntax:**

```c
ptr = realloc(ptr, newSize);
```

This function resizes the memory block to `newSize`. If successful, it returns a pointer to the newly allocated memory; otherwise, it returns `NULL`.

**Example:**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int* ptr;
    int size = 5;

    ptr = (int*)calloc(size, sizeof(int));

    if (ptr == NULL) {
        printf("Memory not allocated.\n");
        exit(0);
    } else {
        printf("Memory successfully allocated using calloc.\n");
    }

    for (int j = 0; j < size; ++j) {
        ptr[j] = j + 1;
    }

    printf("The elements of the array are: ");
    for (int k = 0; k < size; ++k) {
        printf("%d, ", ptr[k]);
    }

    printf("\n");

    size = 10;

    int *temp = ptr;

    ptr = realloc(ptr, size * sizeof(int));
    if (!ptr) {
        printf("Memory Re-allocation failed.");
        ptr = temp;
    } else {
        printf("Memory successfully re-allocated using realloc.\n");
    }

    for (int j = 5; j < size; ++j) {
        ptr[j] = j + 10;
    }

    printf("The new elements of the array are: ");
    for (int k = 0; k < size; ++k) {
        printf("%d, ", ptr[k]);
    }

    return 0;
}
```

**Output:**

```
Memory successfully allocated using calloc.
The elements of the array are: 1, 2, 3, 4, 5,
Memory successfully re-allocated using realloc.
The new elements of the array are: 1, 2, 3, 4, 5, 15, 16, 17, 18, 19,
```

### 4. Variable Length Arrays (VLAs)

Variable length arrays (VLAs) allow the size of an array to be determined at runtime. Unlike dynamic arrays, VLAs are allocated on the stack, and their size cannot be altered after creation.

**Example:**

```c
#include <stdio.h>

int main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter elements: ");

    for (int i = 0; i < n; ++i) {
        scanf("%d", &arr[i]);
    }

    printf("Elements of VLA of Given Size: ");
    for (int i = 0; i < n; ++i) {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

**Output:**

```
Enter the size of the array: 5
Enter elements: 1 2 3 4 5
Elements of VLA of Given Size: 1 2 3 4 5
```

### 5. Flexible Array Members

Flexible array members are arrays defined inside a structure without a specified dimension. They allow the structure to have a flexible size, depending on runtime requirements. Introduced in the C99 standard, flexible array members enable dynamic array behavior within a structure.

**Example Structure Definition:**

```c
struct student {
  int len;
  int arr[];
};
```

To allocate memory for this structure:

```c
struct student *s = malloc(sizeof(*s) + 5 * sizeof(int));
```

**Example:**

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int len;
    int arr[];
} fam;

int main() {
    fam* fam1 = (fam*)malloc(sizeof(fam*) + 5 * sizeof(int));
    fam* fam2 = (fam*)malloc(sizeof(fam*) + 10 * sizeof(int));

    for (int i = 0; i < 5; i++) {
        fam1->arr[i] = i + 1;
    }
    for (int i = 0; i < 10; i++) {
        fam2->arr[i] = i + 10;
    }

    printf("Array of Size 5:\n");
    for (int i = 0; i < 5; i++) {
        printf("%d, ", fam1->arr[i]);
    }
    printf("\n");

    printf("Array of size 10:\n");
    for (int i = 0; i < 10; i++) {
        printf("%d, ", fam2->arr[i]);
    }
    return 0;
}
```

**Output:**

```
Array of Size 5:
1, 2, 3, 4, 5,
Array of size 10:
10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
```

### Dynamic Allocation of Two-Dimensional Array

We can also create two-dimensional dynamic arrays in C. There are several methods to achieve this:

1

. **Using a Single Pointer and a 1D Array with Pointer Arithmetic**
2. **Using an Array of Pointers**
3. **Using a Pointer to a Pointer**
4. **Using a Double-Pointer and One `malloc` Call**
5. **Using a Pointer to a Variable Length Array**
6. **Using a Pointer to the First Row of VLA**

To learn more about dynamically allocating two-dimensional arrays, refer to additional resources on this topic.