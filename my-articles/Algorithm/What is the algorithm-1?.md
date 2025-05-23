# What is the algorithm?

## Introduction to Algorithms Book :

Informally:
A defined calculation method (completely defined) that takes a long time to take a value from the input and produce a value!

So the algorithm is a sequence of calculations
Steps that convert input into output

It can also be said that the algorithm is a tool for solving calculations!

> (that is, both a calculation method and a tool for calculation)

### Problem

The problem can be said that =>

Input/output relationship with problem instances and arbitrary size

In general, algorithms provide a specific computational method to establish the relationship between inputs and outputs for all types of problems.

### example :

For example, think that we have to arrange a sequence of numbers uniformly!

Here is how we formally define the sorting problem:

Input: A sequence of n numbers(a1,a2,.....,an).

Output: A permutation (reordering) (a1,a2,......,an) of the input sequence such

that a1 <= a2 <= .... a`n.

Thus, given the input sequence (31,41,59,26,41,58) a correct sorting algorithm

returns as output the sequence (26,31,41,41,58,59) Such an input sequence is called an instance of the sorting problem

(It might be confusing, but we take the jumbled input and give the sorted output from small to large)

### **Choosing the Right Algorithm:**

The best algorithm for a specific task depends on various factors such as the number of items to be sorted, the degree to which they are already sorted, any restrictions on the values of the items, the computer's architecture, and the storage devices being used (like main memory, disks, or tapes).

### **Correctness of Algorithms:**

- An algorithm is considered correct if, for every input provided, it finishes its computation within a finite amount of time and produces the correct solution.
- A correct algorithm solves the given computational problem accurately.

> . However, incorrect algorithms may not finish running at all on certain inputs, or they might produce incorrect results. Sometimes, though, incorrect algorithms can still be useful, especially if you can control their error rate.

### What kinds of problems are solved by algorithms?

Practical applications of algorithms are everywhere and include the following:

- The Human Genome Project is working to identify all human genes and decode the sequences in human DNA. This involves using advanced algorithms to store and analyze genetic data efficiently. Techniques like dynamic programming help solve biological problems, especially those related to DNA sequence similarities. These algorithms save time and money, allowing scientists to extract more information from their experiments.

- The internet allows people worldwide to access vast amounts of information quickly. Clever algorithms help websites manage and process this data efficiently. Examples of problems where algorithms play a crucial role include finding optimal data routes and using search engines to locate specific information on web pages

- Electronic commerce allows for the electronic negotiation and exchange of goods and services. It relies on the privacy and security of personal information like credit card numbers, passwords, and bank statements. The key technologies used in electronic commerce include public-key cryptography and digital signatures, which are based on numerical algorithms and number theory (discussed in Chapter 31). These technologies help ensure the security of transactions and protect sensitive information during online exchanges.

- Manufacturing and commercial enterprises often face the challenge of allocating limited resources effectively. For example:
  - An oil company may need to decide where to place wells to maximize profits.
  - A political candidate may want to spend campaign funds strategically to increase their chances of winning an election.
  - Airlines need to assign crews to flights efficiently, ensuring coverage while meeting regulatory requirements.
  - Internet service providers may need to decide where to allocate resources to better serve their customers.
    > These are all examples of problems that require optimization, where algorithms can help find the most beneficial solutions.

### We also demonstrate how to solve many specific problems, including the following:

- You have a road map with distances between intersections marked, and you want to find the shortest route from one intersection to another. With countless possible routes, how do you determine the shortest one? You can start by modeling the road map as a graph, where intersections are vertices and roads are edges. Then, you can use algorithms to find the shortest path from one vertex (intersection) to another. Chapter 22 explains how to efficiently solve this problem.

#### **These lists of algorithmic problems, though not exhaustive, share two common characteristics:**

1. **Many Candidate Solutions:** These problems typically have numerous possible solutions, but the vast majority of them do not actually solve the problem. Finding the best or optimal solution without explicitly examining every possibility can be quite challenging.

2. **Practical Applications:** The problems listed often have practical applications in various fields. For example, finding the shortest path in transportation networks has financial implications for companies like trucking or railroad firms, as shorter paths result in lower costs. Similarly, routing nodes on the internet need to find the shortest path to route messages quickly, and individuals use navigation apps to find driving directions efficiently.

While not every algorithmic problem has a readily identifiable set of candidate solutions, there are still practical applications. For instance, the discrete Fourier transform, which converts signals from the time domain to the frequency domain, plays a crucial role in signal processing, data compression, and other fields.

---

# Grokking Algorithms Book:

An algorithm is a set of instructions for accomplishing a task

> Every piece of code could be called an algorithm

# Exercises:

1. **Understanding Algorithms:**

   - Define what an algorithm is in your own words. Explain why algorithms are important in computer science and problem-solving.

2. **Real-life Algorithms:**

   - Think of a common task you perform regularly, such as making a sandwich or getting ready for school/work. Describe the step-by-step instructions for completing this task. Discuss whether these instructions can be considered an algorithm and why.

3. **Algorithm Identification:**

   - Look around your environment and identify a process or task that involves a series of steps. Write down these steps and analyze whether they constitute an algorithm. Provide reasons for your analysis.

4. **Sorting Algorithm Understanding:**

   - Explain the concept of a sorting algorithm using a real-life example. Describe how sorting algorithms work in terms of rearranging items in a specific order.

5. **Algorithm Complexity:**

   - Discuss the concept of algorithmic complexity using examples from your daily life. Provide scenarios where the complexity of an algorithm impacts its efficiency in solving a problem.

6. **Algorithm Correctness:**

   - Describe a situation where the correctness of an algorithm is crucial. Explain why it is important for algorithms to produce correct results, even if they may take longer to execute.

7. **Algorithm Efficiency:**

   - Consider a problem-solving scenario and compare two different algorithms for solving it. Evaluate the efficiency of each algorithm based on factors like runtime and resource usage.

8. **Algorithm Applications:**

   - Identify a problem in your community or society that could benefit from algorithmic solutions, such as optimizing traffic flow or managing waste disposal. Discuss how algorithms could be applied to address this problem effectively.

9. **Algorithm Optimization:**

   - Take a basic algorithm, such as a simple sorting or searching algorithm, and brainstorm ways to optimize it for better performance. Discuss potential optimizations and their impact on the algorithm's efficiency.

10. **Algorithm Design:**
    - Design an algorithm to solve a specific problem, such as finding the shortest route between two locations in a city or organizing a list of tasks based on priority. Describe the step-by-step process of your algorithm and its expected outcome.
