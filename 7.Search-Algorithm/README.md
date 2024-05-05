#  Searching Algorithms:
## What is Searching?

Searching is the essential process of finding a specific element or item within a dataset. This data can be organized in various structures like arrays, lists, trees, or any other formatted representation. The core goal of searching is to determine if the desired element exists in the data and, if it does, to pinpoint its exact location or extract it. Searching is fundamental to many computational tasks and real-world applications, including retrieving information, analyzing data, and informing decision-making processes.

## Introduction 
In computer science, a search algorithm is a method for efficiently finding information within a dataset.  These algorithms can retrieve data stored in specific structures or calculate it within a defined search space. They are crucial for various applications like information retrieval and data analysis.

**Choosing the right search algorithm depends on the data structure and any prior knowledge about the data itself.** Specialized data structures like search trees and hash tables can significantly improve search efficiency.

### Types of Search Algorithms

There are three main categories of search algorithms based on their mechanisms:

1. **Linear Search:** Examines each record one by one until the target is found.
2. **Binary Search:** Repeatedly divides the search space in half by targeting the center of the data structure, making it much faster than linear search for sorted data. 
3. **Hashing:** Uses a hash function to directly map keys to their corresponding records, offering very fast lookups.

> !! NOTE : it's important to clarify that this is a high-level categorization. !! 

**Search algorithms are evaluated based on their computational complexity, which describes the maximum time required to find the target.** Binary search, for example, boasts a logarithmic time complexity (O(log n)), meaning the number of steps needed to find the target grows proportionally to the logarithm of the data size.

**Summary:** Search algorithms are essential tools for efficiently finding information within datasets. The choice of algorithm depends on the data structure and properties, with each type offering varying efficiency trade-offs.


### Simple explanation:
## How it Work
## Why important?
## Searching terminologies:
- **Target Element:**
    In searching, there is always a specific target element or item that you want to find within the data collection. This target could be a value, a record, a key, or any other data entity of interest.
- **Search Space:**
    The search space refers to the entire collection of data within which you are looking for the target element. Depending on the data structure used, the search space may vary in size and organization.
- **Complexity:**
    Searching can have different levels of complexity depending on the data structure and the algorithm used. The complexity is often measured in terms of time and space requirements.
- **Deterministic vs. Non-deterministic:**
Some searching algorithms, like binary search, are deterministic, meaning they follow a clear, systematic approach. Others, such as linear search, are non-deterministic, as they may need to examine the entire search space in the worst case.
## Applications of Searching:
Applications of search algorithms
Specific applications of search algorithms include:

- Problems in combinatorial optimization, such as:
    - The vehicle routing problem, a form of shortest path problem
    - The knapsack problem: Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.
    - The nurse scheduling problem
- Problems in constraint satisfaction, such as:
    - The map coloring problem
    - Filling in a sudoku or crossword puzzle
- In game theory and especially combinatorial game theory, choosing the best move to make next (such as with the minmax algorithm)
- Finding a combination or password from the whole set of possibilities
- Factoring an integer (an important problem in cryptography)
- Optimizing an industrial process, such as a chemical reaction, by changing the parameters of the process (like - temperature, pressure, and pH)
- Retrieving a record from a database
- Finding the maximum or minimum value in a list or array
- Checking to see if a given value is present in a set of values
## Types of algorithms:

### **Linear Search:**
- `Example` :
### **Binary Search:**
- `Example` :
## Popular algorithms:
## Classification