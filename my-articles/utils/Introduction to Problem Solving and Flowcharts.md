## **Introduction to Problem Solving and Flowcharts**

When solving complex problems using computers, programmers need to create a clear plan of action. This process involves breaking down the problem into smaller, manageable steps to find a solution. To achieve this, an **algorithmic approach** is often used, and flowcharts play an essential role in representing these algorithms visually.

### Steps in Problem Solving:

1. **Study the Problem**: Understand the problem thoroughly, identifying its requirements and challenges.
2. **Redefine the Problem**: Clarify and refine the problem, ensuring you have a clear understanding of what needs to be solved.
3. **Identify Input/Output**: Identify what data you will input into the system and what output is expected, as well as any limitations.
4. **Explore Alternative Solutions**: Consider different approaches to solving the problem.
5. **Choose the Best Method**: Select the most efficient or appropriate method to solve the problem.
6. **List Steps and Procedures**: Prepare a list of steps (an algorithm) that will guide you to the solution.
7. **Generate Output**: Implement the solution to produce the desired result.

### **Algorithms and Their Characteristics**

An **algorithm** is a structured sequence of steps designed to solve a problem. To be effective, an algorithm must have the following characteristics:

- **Clarity**: Each instruction must be clear and unambiguous.
- **Finiteness**: The algorithm must complete its steps in a finite amount of time.
- **Termination**: The algorithm should have a clear endpoint.
- **Correctness**: When the algorithm terminates, it should deliver the expected output.

For example, an algorithm for making a cup of tea could be as simple as:

1. Boil water.
2. Add tea leaves to a teapot.
3. Pour boiling water over the tea leaves.
4. Steep for 5 minutes.
5. Serve.

---

## **What is a Flowchart?**

A **flowchart** is a visual representation of the sequence of steps in a process or algorithm. It uses various shapes, symbols, and arrows to depict how a process flows from one step to another. Flowcharts help programmers visualize the logic before writing code, making it easier to spot potential issues or inefficiencies.

### **Why Use Flowcharts?**

1. **Simplification**: Flowcharts simplify complex processes by breaking them down into simple steps.
2. **Improved Communication**: They are useful for communicating the logic of a process to others, especially for team-based projects.
3. **Easier Debugging**: Flowcharts make it easier to identify and fix logical errors before coding.
4. **Efficient Planning**: Developing flowcharts before programming allows for more efficient planning and execution of the task.

### **Basic Flowchart Symbols**

- **Oval**: Represents the **start** or **end** of a process.
- **Rectangle**: Depicts a **process** or **action** step (e.g., calculations, operations).
- **Diamond**: Symbolizes a **decision** or branching point where the flow splits based on a condition (e.g., yes/no, true/false).
- **Parallelogram**: Represents **input/output** operations, such as reading data or displaying results.
- **Arrows**: Indicate the flow or direction of the process from one step to another.

![](https://wcs.smartdraw.com/flowchart/img/basic-symbols-table.jpg?bn=15100111938)

### **Common Flowchart Example: Adding Two Numbers**

Below is a basic flowchart example that illustrates the steps to add two numbers.

```
Start → Input A → Input B → C = A + B → Output C → End
```

The corresponding flowchart is simple and helps visualize the sequence of actions from start to finish:

```plaintext
         +--------+
         |  Start |
         +--------+
              |
      +----------------+
      |  Input A and B  |
      +----------------+
              |
      +----------------+
      |  C = A + B      |
      +----------------+
              |
      +----------------+
      |  Output C       |
      +----------------+
              |
         +--------+
         |   End  |
         +--------+
```

---

## **Flowcharting in Detail: Step-by-Step**

### 1. **Start with the Problem Statement**

Clearly define what the problem is. For instance, "We need a flowchart to find the sum of two numbers."

### 2. **Break Down the Problem into Steps**

Write down the step-by-step actions needed to solve the problem:

- Input two numbers.
- Add the two numbers.
- Display the result.

### 3. **Choose the Symbols**

Select appropriate symbols for each step. For example:

- An **oval** for the **start** and **end**.
- A **parallelogram** for **input** and **output** steps.
- A **rectangle** for the **addition** process.

### 4. **Draw the Flowchart**

Draw the flowchart with the correct symbols and arrows, ensuring the flow moves logically from start to finish.

### 5. **Test the Flowchart**

Ensure the flowchart correctly represents the process by walking through the steps. Verify that it provides the correct result for different inputs.

---

## **Advantages of Flowcharting**

- **Clarity**: Flowcharts offer a clear, graphical representation of a process, making it easier to understand.
- **Error Identification**: It’s easier to find logical errors in a process before translating it into code.
- **Improved Documentation**: Flowcharts serve as good documentation for processes, making them easy to review and maintain.

---

## **Flowchart Example: Checking if a Number is Even or Odd**

Problem Statement: Create a flowchart to check if a number is even or odd.

### Algorithm:

1. Start.
2. Input a number.
3. Check if the number is divisible by 2.
4. If true, output "Even".
5. If false, output "Odd".
6. End.

### Flowchart:

```plaintext
         +--------+
         |  Start |
         +--------+
              |
      +----------------+
      |  Input number   |
      +----------------+
              |
      +------------------------+
      |  Is number divisible by |
      |  2?                    |
      +------------------------+
      /            \
  yes /              \ no
    /                  \
+--------+           +--------+
|  Even  |           |  Odd   |
+--------+           +--------+
    |                    |
+--------+           +--------+
|  End   |           |  End   |
+--------+           +--------+
```

---

### Types of Flowcharts

There are two primary types of flowcharts commonly used in the computer world:

#### 1 Program Flowcharts:

Program flowcharts are used by developers to show the detailed flow of control within a program. They focus on the **program structure**, outlining the sequence of operations such as:

- The **logic** that drives the decision-making in a program.
- The flow of **input and output** through various stages.
- **Branching and looping** sequences.
- **Data processing** steps, like arithmetic operations and data movement.
- The overall **results** of a program.

For example, a flowchart representing a login system would show the steps of accepting user input (username/password), checking the validity, and granting or denying access based on the outcome.

#### 2 System Flowcharts:

System flowcharts are used by systems analysts to describe how data flows through various subsystems in a system, such as:

- The **subsystems** within the entire system.
- The **data processes**, their inputs, outputs, and the transformations they undergo.

For this material, we will focus on **program flowcharts**, as they are more relevant for programming and algorithm development.

---

### 1.4 Flowchart Symbols

Flowchart symbols are standardized to ensure consistency and clarity in representing different actions. The American National Standards Institute (ANSI) has standardized several shapes for different operations in flowcharts. These symbols should be used correctly, as the shape is crucial for understanding the flow.

Here’s an overview of the primary flowchart symbols:

1. **Terminal Symbol**:
   - Shape: Oval
   - Function: Indicates the start or end of a flowchart. The words "START" or "END" are usually written inside this symbol.
   - Example:
     ```
     ┌───────────┐
     │   START   │
     └───────────┘
     ```
2. **Input/Output Symbol**:

   - Shape: Parallelogram
   - Function: Represents input or output operations. For example, reading input from a user or displaying output to a screen.
   - Example:
     ```
     ┌───────────────┐
     │ Read Number  │
     └───────────────┘
     ```

3. **Process Symbol**:

   - Shape: Rectangle
   - Function: Represents any operation, such as a calculation or a task to be performed.
   - Example:
     ```
     ┌─────────────┐
     │  Add A + B  │
     └─────────────┘
     ```

4. **Decision Symbol**:

   - Shape: Diamond
   - Function: Represents decision points in a program where the flow can branch based on a condition (e.g., "if-else" in programming).
   - Example:
     ```
     ┌───────────────────┐
     │ A > B ?           │
     └───────────────────┘
     ```

5. **Flow Lines**:

   - Shape: Arrows
   - Function: Show the direction in which the steps flow.
   - Example:
     ```
     ┌───────────┐       ↓
     │  START    │ ------>
     └───────────┘
     ```

6. **Connectors**:
   - Shape: Small Circle
   - Function: Help to avoid crossing lines in large flowcharts. Connectors link different parts of the flowchart and help maintain clarity across multiple pages.
   - Example:
     ```
     ┌─────────┐    ┌─────────┐
     │ CONNECT │    │ CONNECT │
     │    A    │----│    A    │
     └─────────┘    └─────────┘
     ```

---

### Example: Flowchart for a Simple Login Process

Let’s build a simple flowchart for a login system.

1. **Start** – The program starts.
2. **Input** – User is prompted to enter a username and password.
3. **Process** – The system checks if the credentials match.
4. **Decision** – Is the login successful?
   - If yes, display "Login successful."
   - If no, display "Invalid credentials."
5. **End** – The process terminates.

Diagram:

```
┌───────────┐
│   START   │
└───────────┘
     ↓
┌──────────────┐
│ Enter login  │
│ credentials  │
└──────────────┘
     ↓
┌──────────────┐
│ Check login  │
│  details     │
└──────────────┘
     ↓
┌──────────────┐  YES    ┌───────────────┐
│  Login OK?   ├────────>│ Display "OK"  │
└──────────────┘         └───────────────┘
     ↓  NO
┌──────────────┐
│ Display "Invalid" │
└──────────────┘
     ↓
┌───────────┐
│   STOP    │
└───────────┘
```

---

### 1.5 ADVANTAGES OF FLOWCHARTS

Flowcharts are a powerful tool for problem-solving and program design. Their visual nature provides a simplified and organized method for understanding complex systems, making it easier to develop, communicate, and debug solutions.

---

1. **Visual Representation of Logic**:
   A flowchart provides a graphical way to represent a program's logic flow. By using standard symbols and arrows to depict processes and decisions, the programmer can focus on understanding the logical flow without worrying about language syntax. This makes it an effective tool for **communicating ideas** to others, particularly for explaining complex algorithms.

   **Example**: When designing a program to calculate the sum of two numbers, the flowchart clearly shows the flow of input, processing (addition), and output.

---

2. **Simplifies Problem-Solving**:
   Before diving into code, a flowchart helps developers outline the main sequence of the program. This can be broken down into smaller, more manageable tasks for further study. As a result, it helps **organize the problem-solving process** by giving a high-level view, which can then be refined into detailed components.

   **Example**: If you're developing a billing system, you can start with a macro flowchart that shows the main processes, such as "Generate Bill," "Apply Discounts," and "Calculate Total." Each step can be expanded into more detailed sub-processes.

---

3. **Collaboration-Friendly**:
   In real-world projects, several programmers work together on different parts of the system. Each programmer can create their own flowchart for their module, and later these can be merged into a larger system-wide flowchart. This promotes **teamwork and coordination**, ensuring that different modules integrate correctly.

   **Example**: A team is developing a banking system. One programmer works on the account creation module, another on the transaction module, and a third on the reporting module. Each flowchart is developed separately and later combined for testing the entire system.

---

4. **Helps in Writing Code**:
   Once the flowchart is complete, writing code becomes simpler because the entire program's logic is already laid out. **No step is missed**, as the flowchart covers the complete sequence from start to finish. It serves as a roadmap, reducing the chance of errors or missing logic while coding.

   **Example**: When writing a program to sort numbers, a flowchart helps ensure that the steps for comparing, swapping, and iterating through the array are not skipped, resulting in a more reliable algorithm.

---

5. **Effective for Debugging**:
   Flowcharts are extremely useful for debugging. When there is a bug in the program, the flowchart can help identify where the logic went wrong. Programmers can **trace back the steps** to locate and fix the error systematically.

   **Example**: If a program is not generating the expected output, you can follow the flowchart and check each step against the program’s execution to find where the logic breaks down.

---

6. **Improves Testing Efficiency**:
   During testing, flowcharts can guide the developer to test every possible path through the program. Different sets of input data can be fed into the program, and the flowchart can be used to ensure that every branch and loop has been tested properly.

   **Example**: In an insurance claim system, the flowchart can help test whether the program correctly handles various conditions, such as "Claim Approved" or "Claim Denied," based on different criteria.

---

### 1.6 DEVELOPING FLOWCHARTS

Creating a flowchart requires careful planning. The following steps outline how to develop a clear and effective flowchart:

1. **Define the Problem**:
   Clearly state the problem you are trying to solve. This helps in identifying the purpose of the flowchart.

   **Example**: "Find the average of three numbers" is the problem that needs solving.

---

2. **Identify Steps for the Solution**:
   Break down the solution into a sequence of steps. These steps must be logical and sequential.

   **Example**: For calculating the average of three numbers, the steps are:

   - Get three numbers
   - Add them together
   - Divide the sum by 3
   - Output the result

---

3. **Determine Input and Output**:
   Identify what inputs are needed to solve the problem and what outputs will be generated.

   **Example**: The input will be the three numbers, and the output will be the calculated average.

---

4. **Specify Expected Input and Output Values**:
   It is useful to have an idea of the expected values so that you can validate the flowchart.

   **Example**: For an average calculation, if the inputs are 5, 10, and 15, the expected output should be 10.

---

5. **Determine Computations and Decisions**:
   Clearly outline any computations (such as addition, subtraction) and decisions (such as comparisons or conditions).

   **Example**: For the greatest of two numbers, the decision is whether the first number is greater than the second. If it is, the first number is the output; otherwise, the second number is the output.

---

### EXAMPLES OF FLOWCHARTS

#### 1. **Flowchart for Adding Two Numbers**

Steps:

1. Start
2. Get two numbers (N1, N2)
3. Add N1 and N2
4. Output the result
5. Stop

**Flowchart:**

```
+----------+
|  Start   |
+----------+
     |
     v
+----------+
|  Input   |
| N1, N2   |
+----------+
     |
     v
+----------+
|  Add     |
| N1 + N2  |
+----------+
     |
     v
+----------+
|  Output  |
| Result   |
+----------+
     |
     v
+----------+
|   Stop   |
+----------+
```

---

#### 2. **Flowchart for Finding the Greatest of Two Numbers**

Steps:

1. Start
2. Input two numbers (A, B)
3. Compare A > B
4. If true, print A; otherwise, print B
5. Stop

**Flowchart:**

```
+----------+
|  Start   |
+----------+
     |
     v
+----------+
|  Input   |
| A, B     |
+----------+
     |
     v
+-----------------+
| A > B?          |
+-----------------+
    /     \
  Yes     No
  /         \
+----+   +----+
| A  |   | B  |
+----+   +----+
  |         |
  v         v
+----------+
|  Output  |
| Larger   |
+----------+
     |
     v
+----------+
|   Stop   |
+----------+
```

---

### **1.7.1 Flowcharts for Computations**

**Computations** refer to calculations done by a computer. When designing a program, you often have to perform calculations. The flowchart for computations helps break down the steps involved in performing mathematical operations.

#### **Steps for Flowcharting Computations:**

1. **Start:** Every flowchart begins with the start symbol, indicating the beginning of the process.
2. **Create memory variables (memvars):** Memory variables are used to store values that will be used in the computation (e.g., Fahrenheit and Celsius).
3. **Get input:** Read the input values needed for the calculation (e.g., read temperature in Celsius).
4. **Perform the calculation:** Carry out the required operation (e.g., convert Celsius to Fahrenheit using a formula).
5. **Print the result:** Output the result to the user.
6. **Stop:** The process ends with a stop symbol.

#### **Example: Convert Celsius to Fahrenheit**

The formula for converting Celsius to Fahrenheit is:

$
F = \frac{9}{5} \times C + 32
$

**Steps:**

1. Start
2. Create variables `C` and `F` for Celsius and Fahrenheit
3. Read value of Celsius (`C`)
4. Calculate Fahrenheit using the formula
5. Print the value of Fahrenheit (`F`)
6. Stop

#### **Flowchart:**

```
   [Start]
      |
      v
[Create variables C and F]
      |
      v
 [Read Celsius C]
      |
      v
 [F = (9/5) * C + 32]
      |
      v
 [Print F]
      |
      v
    [Stop]
```

This is a simple flowchart that shows the logical steps for a computation.

#### **Another Example: Convert Inches to Centimeters**

The formula for converting inches to centimeters is:

$
C = I \times 2.54
$

**Steps:**

1. Start
2. Create variables `I` (Inches) and `C` (Centimeters)
3. Read value of `I`
4. Calculate Centimeters (`C`)
5. Print `C`
6. Stop

#### **Flowchart:**

```
   [Start]
      |
      v
[Create variables I and C]
      |
      v
 [Read Inches I]
      |
      v
 [C = I * 2.54]
      |
      v
 [Print C]
      |
      v
    [Stop]
```

---

### **1.7.2 Flowcharts for Decision Making**

In decision making, a condition is evaluated, and the program chooses one path based on whether the condition is true or false. The **decision symbol** (diamond shape) is used to represent this in flowcharts.

#### **Steps for Flowcharting Decision Making:**

1. **Start:** Begin the process.
2. **Create variables (memvars):** Define variables that will hold values for evaluation.
3. **Read input values:** Obtain the values that need to be tested.
4. **Perform the test:** Test the condition (e.g., whether marks are greater than or equal to 35).
5. **Branch based on the test result:** If the condition is true, take one path; if it is false, take another.
6. **End the process.**

#### **Example: Pass or Fail Decision Based on Marks**

If a student has marks greater than or equal to 35 in three subjects, they pass; otherwise, they fail.

**Steps:**

1. Start
2. Create memory variables for marks (`m1`, `m2`, `m3`)
3. Read the marks for three subjects
4. If `m1 >= 35` AND `m2 >= 35` AND `m3 >= 35`, print "Pass"
5. Otherwise, print "Fail"
6. Stop

#### **Flowchart:**

```
   [Start]
      |
      v
[Create memvars m1, m2, m3]
      |
      v
  [Read marks m1, m2, m3]
      |
      v
    [Are m1, m2, and m3 >= 35?]
    /      \
  Yes        No
  /            \
[Print Pass]  [Print Fail]
     |            |
     v            v
   [Stop]      [Stop]
```

In this flowchart, the decision-making process is represented by the diamond shape, which evaluates the condition.

---

### **1.7.3 Flowcharts for Loops**

**Loops** allow a block of statements to be executed repeatedly. There are two types of loops:

- **Fixed loop:** Executes a specific number of times.
- **Variable loop:** Executes until a specific condition is met.

#### **Steps for Flowcharting Loops:**

1. **Start:** Initiate the loop process.
2. **Initialize a counter (for fixed loops):** Set a starting value for the loop counter.
3. **Perform operations:** Execute the loop body.
4. **Check condition:** Test if the loop should continue (e.g., counter has reached its limit).
5. **Update counter:** For fixed loops, increment the counter.
6. **Repeat or exit loop:** Continue the loop or exit it based on the condition.

#### **Example: Find the Sum of First N Numbers**

This example illustrates a fixed loop where the sum of the first `N` numbers is calculated.

**Steps:**

1. Start
2. Create memory variables `S` (Sum), `N` (limit), and `I` (counter)
3. Read value of `N`
4. Set `S` to 0 (initialize sum)
5. Set `I` to 1 (initialize counter)
6. Add `I` to `S`
7. Increment `I`
8. If `I <= N`, go back to step 6
9. Print `S`
10. Stop

#### **Flowchart:**

```
   [Start]
      |
      v
[Create memvars S, N, I]
      |
      v
   [Read N]
      |
      v
 [Set S = 0]
      |
      v
 [Set I = 1]
      |
      v
  [S = S + I]
      |
      v
 [Increment I]
      |
      v
 [Is I <= N?]
    /     \
   Yes     No
   /         \
 [Go to step 6] [Print S]
                  |
                  v
                [Stop]
```

---

### **1.7.4 Predefined Process**

A **predefined process** represents a task or function that has already been written and is reused as part of a larger flowchart. This helps modularize the flowchart, allowing for cleaner and more maintainable designs.

For instance, in programming, library routines are predefined processes that can be used without needing to understand the internal workings.

---

### **Summary of Flowcharting Techniques**

- **Flowcharts for Computations:** Illustrate how calculations are performed.
- **Flowcharts for Decision Making:** Show how decisions are made based on conditions.
- **Flowcharts for Loops:** Represent repeated operations until a condition is met.
- **Predefined Process:** Represents the use of reusable blocks or functions in a larger flowchart.

Flowcharts are an excellent way to visually represent the flow of logic in a program, making it easier to understand, communicate, and debug complex processes.

---

### 1.8 SUMMARY (Improved Version)

In this chapter, we covered essential concepts related to algorithms and flowcharts, which are critical tools for problem-solving and program development. Let's break down the main points in detail:

#### **Algorithm**

- **Definition**: An algorithm is a well-defined set of instructions or steps designed to perform a specific task or solve a particular problem. The sequence of steps must be executed in a specific order to achieve the desired result.
- **Key Characteristics**:
  1. **Precise and Finite**: Each step of the algorithm should be clear, unambiguous, and the entire algorithm must complete after a finite number of steps.
  2. **Sequential Execution**: The steps are performed one after another in a predefined order, ensuring the correct execution flow.

#### **Flowchart**

- **Definition**: A flowchart is a graphical representation of an algorithm or a process. It uses standardized symbols to depict the sequence of operations to be performed.
- **Purpose**: It helps to visually map out the logical flow of a task, making it easier to understand, analyze, and communicate the solution.

#### **Types of Flowcharts**

1. **Program Flowcharts**: These are used by programmers to design and represent the logical flow and sequence of operations in a program.
2. **System Flowcharts**: These are more comprehensive and are used by system analysts to depict entire systems, showing data flow, processes, and sub-systems.

#### **Flowchart Symbols**

- Flowcharts use a set of standardized symbols (as defined by the American National Standards Institute, ANSI) to represent different types of operations. Common symbols include:
  - **Start/End**: Represented by an oval, it marks the beginning and end of a flowchart.
  - **Process**: Represented by a rectangle, this symbol indicates any operation or computation.
  - **Decision**: Represented by a diamond, this indicates decision-making points where the flow can branch into different paths.
  - **Input/Output**: Represented by a parallelogram, this shows where data is inputted or outputted.
  - **Predefined Process**: Represented by a rectangle with double lines on each side, this indicates a sub-process or a module (a black box).

#### **Flowcharting Techniques**

We explored various types of flowcharts to depict computations, decision-making, loops, and predefined processes.

---

### 1.9 CHECK YOUR PROGRESS - ANSWERS (Improved Version)

#### 1.2 & 1.3

1. **a)** **Algorithm**: An algorithm is a sequence of well-defined instructions that, when executed in a specific order, produces a desired result. Each instruction must be clear and finite, meaning the algorithm completes after a limited number of steps. It is important that the algorithm yields the correct result based on the provided input.

   **b)** **Flowchart**: A flowchart is a graphical tool used to represent the logic of a process or an algorithm. It shows the sequence of steps visually and helps in designing and debugging the program.

   **c)** **Types of Flowcharts**:

   - **Program Flowcharts**: Used by programmers to visualize the sequence of operations in a program. These charts aid in program development and debugging.
   - **System Flowcharts**: Used by system analysts to depict the overall flow of data and processes within a system. They give a high-level view of how data flows and how different subsystems interact.

   **d)** **Problem-solving steps**:

   1. Detailed study and understanding of the problem.
   2. Identification of required inputs, outputs, and constraints.

#### 1.4

1. **a)** **Decision Box**: This symbol represents a point in the flowchart where a decision needs to be made. Based on the evaluation of a condition, the flow branches into different paths (e.g., Yes or No). The condition to be checked is written inside the decision box, and arrows indicate the flow for each possible outcome.

   **b)** **Flowlines**: These are lines with arrowheads that indicate the direction of flow in a flowchart. They connect symbols and show the sequence in which operations are carried out.

#### 1.5

1. **Advantages of Flowcharts**:
   - **Simplified Logic**: Flowcharts display the logical sequence of operations without the complexities of programming syntax, making it easier to follow the thought process.
   - **Collaboration**: In large systems where different programmers work on separate modules, flowcharts help integrate the parts by visually combining them. This helps identify errors in the logic before implementation.

#### 1.6

1. **a)** Example of flowchart for calculating the average of three numbers (a, b, c):

   **Steps**:

   1. Start.
   2. Create memory variables `a`, `b`, `c`, and `avg`.
   3. Read values for `a`, `b`, and `c`.
   4. Calculate the average: `avg = (a + b + c) / 3`.
   5. Output `avg`.
   6. Stop.

   The flowchart for this would show an input/output symbol for reading values, a process box for the calculation, and an output symbol for displaying the result.

   **b)** Example of flowchart to calculate the area of a rectangle:

   **Steps**:

   1. Start.
   2. Create memory variables `length`, `breadth`, and `area`.
   3. Read the values of `length` and `breadth`.
   4. Calculate `area = length * breadth`.
   5. Output `area`.
   6. Stop.

---

### Programming Considerations for Flowcharting Techniques (Enhanced)

#### a) **Computation**:

- Most programming languages allow you to declare memory variables (memvars) to store data during computation. These variables must be initialized before use. Flowcharts for computations typically follow this structure:
  1.  Create memvars.
  2.  Input data into the memvars.
  3.  Perform calculations.
  4.  Output the result.

Example: A flowchart to convert Celsius to Fahrenheit would first create memvars for storing the Celsius and Fahrenheit temperatures, then perform the conversion `F = (C * 9/5) + 32`, and finally output the result.

#### b) **Decision Making**:

- Decision points in flowcharts are represented using decision boxes (diamonds). These boxes contain conditions that determine which path to follow. Programming languages support this logic with constructs such as `if-else`, `switch`, and `case` statements.

Example: A flowchart to determine if a student passes based on their marks would use decision boxes to check if each mark is above a passing grade. Depending on the outcome, the student either passes or fails.

#### c) **Loops**:

- Loops allow repetitive execution of steps. Flowcharts for loops contain a condition check and a process that repeats until the condition is met. The loop could be a fixed loop (with a predetermined number of iterations) or a conditional loop.

Example: A flowchart that sums the first `N` numbers would loop through the addition process until the counter equals `N`.

#### d) **Predefined Process**:

- A predefined process in a flowchart represents a subroutine or a module that encapsulates multiple steps. This allows for modularity and reuse. Flowchart symbols for predefined processes are drawn as rectangles with double lines, indicating that the actual implementation of the process is abstracted away.
