# What is Pseudocode (or Program Design Language)

Pseudocode is a simplified, informal way of describing an algorithm or a program's flow using natural language mixed with standard coding structures. It is an intermediate step between problem-solving in natural language and writing code in a programming language. This approach focuses on the logical steps of a solution without getting bogged down by language-specific syntax, making it ideal for planning, designing, and communicating algorithms.

#### Key Features of Pseudocode:

- **Natural Language-Like Statements:** It uses human-friendly language to describe tasks. For instance, "READ `input`" or "IF `condition` THEN `action`."
- **Language-Independent:** Pseudocode avoids specific programming language constructs, which makes it versatile and applicable to any programming environment.
- **Focus on Logic:** The objective is to outline the sequence of actions needed to achieve the desired result.
- **Detailed Enough for Code Generation:** Well-written pseudocode can easily be converted into actual programming code.

### Purpose of Pseudocode:

1. **Structured Design:** Flowcharts were once the go-to design tool but lacked structure. Pseudocode emphasizes structured programming concepts, such as loops and conditionals, in a more readable format.
2. **Communication:** It helps programmers outline and communicate the algorithmic logic before diving into actual coding.
3. **Detailed Guide for Coding:** It provides a clear roadmap for writing the actual program.

---

### Detailed Explanation: Step-by-Step Guide to Writing Pseudocode

#### 1. **Write One Statement per Line**

Each line in pseudocode should represent only one action or task. By keeping it simple, the flow of the algorithm becomes easier to understand and maintain.

**Example:**
If the task is to calculate employee net pay, the pseudocode will be:

```pseudocode
READ name, hourlyRate, hoursWorked, deductionRate
grossPay = hourlyRate * hoursWorked
deduction = grossPay * deductionRate
netPay = grossPay - deduction
WRITE name, grossPay, deduction, netPay
```

In the example above, each line represents a single action, which aligns with the idea of "one statement per line."

#### 2. **Capitalize Initial Keywords**

Keywords like `READ`, `WRITE`, `IF`, `WHILE` must be capitalized. These keywords are the primary elements that define the actions taken in the algorithm.

**Example:**

```pseudocode
IF grossPay >= 100
    deduction = grossPay * deductionRate
ELSE
    deduction = 0
ENDIF
```

Here, `IF`, `ELSE`, and `ENDIF` are capitalized for clarity and to emphasize their role as control structures.

#### 3. **Indentation to Show Hierarchy**

Indentation is essential in showing the hierarchy of operations. For conditional structures (e.g., `IF` statements) and loops (e.g., `WHILE` loops), the internal statements are indented.

**Example of Indentation:**

```pseudocode
IF grossPay >= 100
    deduction = grossPay * deductionRate
ELSE
    deduction = 0
ENDIF
netPay = grossPay - deduction
WRITE name, grossPay, deduction, netPay
```

Indentation helps clearly show which statements belong inside the conditional or loop structures, ensuring the logic is easier to follow.

#### 4. **End Multiline Structures**

All complex structures, such as `IF`, `WHILE`, or `FOR` loops, must have a clear end keyword like `ENDIF` or `ENDWHILE`. This ensures clarity and avoids confusion.

**Example of Multiline Structure:**

```pseudocode
IF grossPay >= 100
    deduction = grossPay * deductionRate
ELSE
    deduction = 0
ENDIF
```

This pattern is crucial for showing where the structure concludes, making it easier to follow nested logic.

#### 5. **Keep Statements Language-Independent**

To ensure flexibility and ease of conversion, avoid using specific programming syntax from a particular language. Instead, use general constructs that can be translated into any language.

For example, instead of using:

```java
System.out.println("Output");
```

Write:

```pseudocode
WRITE "Output"
```

### Example with Flowchart:

To further enhance understanding, let’s look at an example of pseudocode along with a corresponding flowchart.

#### Problem: Calculate Employee Net Pay

**Pseudocode Example:**

```pseudocode
START
READ name, hourlyRate, hoursWorked, deductionRate
grossPay = hourlyRate * hoursWorked
IF grossPay >= 100
    deduction = grossPay * deductionRate
ELSE
    deduction = 0
ENDIF
netPay = grossPay - deduction
WRITE name, grossPay, deduction, netPay
END
```

#### Flowchart:

Here’s how this pseudocode translates into a flowchart:

- **Start**: The process begins.
- **Input (READ)**: Inputs are taken for name, hourlyRate, hoursWorked, and deductionRate.
- **Process (Calculation)**: Calculate grossPay.
- **Decision (IF Statement)**: Check if grossPay >= 100. If true, calculate deduction; if false, set deduction to 0.
- **Process (Calculate netPay)**: Subtract deduction from grossPay.
- **Output (WRITE)**: Output name, grossPay, deduction, and netPay.
- **End**: The process ends.

Here’s a simplified visual of the flowchart:

```
    [Start]
       |
[READ Inputs] ----> [Calculate grossPay]
       |
     [Is grossPay >= 100?] ----> (Yes) [Calculate deduction]
     |                            |
    (No)                      [Set deduction = 0]
       |
[Calculate netPay] ----> [WRITE Outputs] ----> [End]
```

### Advantages of Pseudocode:

1. **Easy to Write and Understand:** Pseudocode doesn’t require any prior knowledge of specific programming languages, making it accessible.
2. **Focuses on Logic:** It emphasizes the logical flow of the program rather than technical details.
3. **Language Flexibility:** Since it avoids language-specific syntax, pseudocode can be translated into multiple programming languages with ease.

## Guessing Game Algorithm: Step-by-Step Pseudocode Explanation

In this problem, we create a number guessing game where the user selects a secret number between 1 and 100, and the computer tries to guess it. The computer's guesses are refined based on feedback ("too high," "too low," or "correct"). The algorithm narrows the guessing range until it finds the correct number.

We'll break this down step by step using pseudocode and flowcharts to illustrate the logic.

### Algorithm Overview:

1. **Initial Setup**:
   - The user picks a secret number between 1 and 100.
   - The computer starts with the smallest possible number (`low = 1`) and the largest possible number (`high = 100`).
2. **Binary Search Strategy**:

   - The computer guesses the middle number between `low` and `high` (`guess = (low + high) // 2`).
   - Based on the user's feedback (whether the guess is too high, too low, or correct), the guessing range is adjusted:
     - If the guess is **too high**, the `high` value is set to `guess - 1`.
     - If the guess is **too low**, the `low` value is set to `guess + 1`.
     - If the guess is correct, the game ends.

3. **Loop Until Correct**:
   - The computer repeats the guessing process until the correct number is found.

---

### Pseudocode:

```pseudocode
START
    OUTPUT "Pick a secret number between 1 and 100."

    low ← 1
    high ← 100
    guess ← (low + high) // 2   # Initial guess is the middle of the range

    WHILE True DO
        OUTPUT "My guess is ", guess
        INPUT "Is my guess too high (H), too low (L), or correct (C)?"

        IF user_input = "C" THEN
            OUTPUT "I guessed your number!"
            BREAK    # End the loop when the correct guess is found
        ELSE IF user_input = "H" THEN
            high ← guess - 1     # Adjust the range, guess was too high
        ELSE IF user_input = "L" THEN
            low ← guess + 1      # Adjust the range, guess was too low

        guess ← (low + high) // 2  # Recalculate the middle guess
    ENDWHILE
END
```

---

### Explanation of Pseudocode Constructs:

1. **Sequence**:
   - The sequence in pseudocode ensures that the instructions are executed one after the other.
   - For example, setting `low`, `high`, and `guess` at the beginning, and later checking the user input happens in sequence.
2. **Selection** (IF-ELSE Statements):
   - This is where decisions are made.
   - If the user says the guess is too high, the `high` is adjusted; if it's too low, the `low` is adjusted. If the guess is correct, the game ends.
3. **Repetition** (WHILE Loop):
   - The loop continues guessing until the correct number is found.
   - It repeatedly narrows the range based on feedback.

---

### Detailed Example:

**Scenario**: The secret number is **33**.

- **Initial Range**: `low = 1`, `high = 100`
- First Guess: `guess = (1 + 100) // 2 = 50`
  - User says: "Too high"
  - New Range: `low = 1`, `high = 49`
- Second Guess: `guess = (1 + 49) // 2 = 25`

  - User says: "Too low"
  - New Range: `low = 26`, `high = 49`

- Third Guess: `guess = (26 + 49) // 2 = 37`

  - User says: "Too high"
  - New Range: `low = 26`, `high = 36`

- Fourth Guess: `guess = (26 + 36) // 2 = 31`

  - User says: "Too low"
  - New Range: `low = 32`, `high = 36`

- Fifth Guess: `guess = (32 + 36) // 2 = 34`

  - User says: "Too high"
  - New Range: `low = 32`, `high = 33`

- Sixth Guess: `guess = (32 + 33) // 2 = 32`

  - User says: "Too low"
  - New Range: `low = 33`, `high = 33`

- Seventh Guess: `guess = 33`
  - User says: "Correct"
  - Game Over!

---

### Number of Guesses:

- **For 33**: It took 7 guesses.
- **For 7 guesses**: A number like **33** or **66** will likely take 7 guesses.
- **For 8 guesses**: The number **1** or **100** might require 8 guesses in worst-case scenarios where the algorithm continually narrows down the range to the extreme ends.

---

### Legitimate Input:

- The input from the user should be `"H"` (too high), `"L"` (too low), or `"C"` (correct).
- If the user enters something else (invalid input), the game could include an error-checking mechanism:

```pseudocode
INPUT "Is my guess too high (H), too low (L), or correct (C)?"

WHILE user_input NOT IN ["H", "L", "C"] DO
    OUTPUT "Invalid input. Please enter 'H', 'L', or 'C'."
    INPUT user_input
ENDWHILE
```

---

### Flowchart:

The flowchart visualizes the logic of the guessing game, highlighting how the binary search algorithm continually narrows the range of guesses:

```
+------------------+
| Start            |
+------------------+
        |
        v
+-------------------+
| low = 1, high = 100|
+-------------------+
        |
        v
+---------------------+
| guess = (low+high)//2|
+---------------------+
        |
        v
+-----------------------------+
| Output guess; Input response |
+-----------------------------+
        |
        v
+-------------------------------------+
| Is the response 'H', 'L', or 'C'?   |
+-------------------------------------+
      /   |        |    \
     /    |        |     \
   (H)   (L)     (C)    Invalid
   /      |        |        |
+---------|---+    |    +----------------------+
| high = guess-1 |  |    | Output "Correct!"    |
+----------------|--+    +----------------------+
                 |               |
+----------------|------------+  |
| low = guess+1                |  |
+----------------------------+ |  |
                        +----------------------+
                        | End                  |
                        +----------------------+
```

---

## Five Components of Pseudo Code

1. **Variables**:
   Variables store data values that a program can use and manipulate. A variable has a name, a data type (such as integer, string, etc.), and a value. For example:

   ```
   Set x = 5
   Set y = "Hello"
   ```

   In this example, `x` is assigned the integer value 5, and `y` is assigned the string "Hello".

2. **Assignment**:
   The act of assigning a value to a variable. In pseudo code, assignment statements are written as:

   ```
   Set var_name = value
   ```

   Example:

   ```
   Set x = 10
   Set total = num1 + num2
   ```

   In this case, the value 10 is assigned to `x`, and the sum of `num1` and `num2` is assigned to `total`.

3. **Input/Output**:
   Input is when data is read from an external source (e.g., user input), and output is when the program displays or outputs data.

   - **Input**:
     ```
     Read num1
     ```
     This means to take input and store it in the variable `num1`.
   - **Output**:
     ```
     Write "Hello, World!"
     Write result
     ```
     This displays the text "Hello, World!" and the value stored in the variable `result`.

4. **Selection**:
   This involves decision-making with conditions. Conditional statements check if a condition is true and then execute a corresponding block of code.

   ```
   If condition
      Then statement list
   Else
      Statement list
   End If
   ```

   Example:

   ```
   If age >= 18
      Write "You are an adult."
   Else
      Write "You are a minor."
   End If
   ```

5. **Repetition**:
   Used for loops where instructions are repeated multiple times. In pseudo code, repetition can be written as:
   ```
   While condition
      statement list
   End While
   ```
   Example:
   ```
   Set i = 1
   While i <= 5
      Write i
      Set i = i + 1
   End While
   ```

### Detailed Step-by-Step Examples

---

**Example 1: Multiply Two Numbers**

1. **Pseudo Code**:

   - Read two numbers from the user.
   - Multiply them.
   - Display the result.

   ```
   Read num1, num2
   Set product = num1 * num2
   Write product
   ```

---

**Example 2: Number Comparison (Not 5 or 6)**

1. **Pseudo Code**:

   - Read a number from the user.
   - Check if the number is 5 or 6.
   - Display appropriate messages.

   ```
   Read number
   If number = 5
      Write "Your number is 5."
   Else If number = 6
      Write "Your number is 6."
   Else
      Write "Your number is not 5 or 6."
   End If
   ```

---

**Example 3: Color Selection Based on Number Range**

1. **Pseudo Code**:

   - Ask the user to enter a number.
   - Print different colors based on the range of the number.

   ```
   Read number
   If number >= 0 AND number <= 10
      Write "Blue"
   Else If number > 10 AND number <= 20
      Write "Red"
   Else If number > 20 AND number <= 30
      Write "Green"
   Else
      Write "Not a correct color option"
   End If
   ```

---

**Example 4: Print Multiples of 5 Between 1 and 100**

1. **Pseudo Code**:

   - Start at 1.
   - Check if the number is a multiple of 5.
   - Print multiples of 5 up to 100.

   ```
   Set x = 1
   While x <= 100
      If x MOD 5 = 0
         Write x
      End If
      Set x = x + 1
   End While
   ```

---

**Example 5: Count Even Numbers Up to a User-Defined Stopping Point**

1. **Pseudo Code**:

   - Get stopping point from the user.
   - Count and display even numbers.

   ```
   Read stopping_point
   Set count = 0
   For i = 1 To stopping_point
      If i MOD 2 = 0
         Set count = count + 1
         Write i
      End If
   End For
   Write "Total even numbers: ", count
   ```

---

**Homework 1: Sorting Three Numbers**

1. **Pseudo Code**:

   - Read three numbers.
   - Sort them in ascending order.
   - Print the sorted numbers.

   ```
   Read num1, num2, num3
   If num1 > num2 Swap num1 and num2
   If num1 > num3 Swap num1 and num3
   If num2 > num3 Swap num2 and num3
   Write num1, num2, num3
   ```

---

**Homework 2: Running Sum**

1. **Pseudo Code**:

   - Initialize sum to 0.
   - Read numbers and add them to the sum.
   - Stop when a negative number is encountered.
   - Print the sum.

   ```
   Set sum = 0
   Read number
   While number >= 0
      Set sum = sum + number
      Read number
   End While
   Write sum
   ```

---

> Pseudo code is a great tool for mapping out logic in an understandable way before translating it into a formal programming language. The five components—variables, assignment, input/output, selection, and repetition—form the basis of creating robust algorithms in pseudo code. Each example demonstrates how to use pseudo code to solve common programming problems, and the accompanying flowcharts help visualize the logic flow.

## Step-by-Step Rules for Writing Pseudocode

### 1. Write Only One Statement Per Line

Each line of pseudocode should clearly represent a single action or step. Breaking actions into individual steps makes the logic easier to follow.

**Example**:

- Task list:
  - Read input values (name, hourly rate, hours worked, deduction rate).
  - Calculate gross pay, deductions, and net pay.
  - Display results.

**Pseudocode**:

```
READ name, hourlyRate, hoursWorked, deductionRate
grossPay = hourlyRate * hoursWorked
deduction = grossPay * deductionRate
netPay = grossPay – deduction
WRITE name, grossPay, deduction, netPay
```

Each statement performs a specific task, making it easy to understand and debug.

---

### 2. Capitalize Initial Keywords

Certain key actions like `READ`, `WRITE`, `IF`, `WHILE`, and `ENDIF` are keywords in pseudocode and should be capitalized to make them stand out. These keywords often represent control flow structures or specific tasks.

**Pseudocode**:

```
READ name, hourlyRate, hoursWorked
grossPay = hourlyRate * hoursWorked
IF grossPay >= 100
    deduction = grossPay * deductionRate
ELSE
    deduction = 0
ENDIF
netPay = grossPay – deduction
WRITE name, grossPay, deduction, netPay
```

Here, `READ`, `WRITE`, `IF`, `ELSE`, and `ENDIF` are keywords that control the flow of the program and are capitalized for clarity.

---

### 3. Indent to Show Hierarchy

Indentation is essential to show which statements belong inside a particular structure, such as a conditional block or loop. It visually organizes the logic so that it's clear which parts of the code depend on conditions or loops.

#### Example (with selection structure):

- Task: If the gross pay is less than 100, no deduction is applied; otherwise, calculate the deduction.

**Pseudocode**:

```
READ name, hourlyRate, hoursWorked
grossPay = hourlyRate * hoursWorked
IF grossPay >= 100
    deduction = grossPay * deductionRate
ELSE
    deduction = 0
ENDIF
netPay = grossPay – deduction
WRITE name, grossPay, deduction, netPay
```

In this example, statements inside the `IF` and `ELSE` blocks are indented, making the structure clear. The indentation visually groups related statements.

#### Example (with looping structure):

If you need to calculate total earnings for multiple employees, a loop structure would look like this:

**Pseudocode**:

```
WHILE moreEmployees
    READ name, hourlyRate, hoursWorked, deductionRate
    grossPay = hourlyRate * hoursWorked
    deduction = grossPay * deductionRate
    netPay = grossPay – deduction
    WRITE name, grossPay, deduction, netPay
    READ moreEmployees
ENDWHILE
```

Each statement inside the loop is indented to show that these steps repeat for each employee.

---

### 4. End Multiline Structures

When using structures such as `IF`, `WHILE`, or loops, always close them with an appropriate `END` keyword (e.g., `ENDIF`, `ENDWHILE`). This makes it clear where the conditional logic or loop ends, which is particularly important in larger algorithms.

**Example**:

```
IF grossPay >= 100
    deduction = grossPay * deductionRate
ELSE
    deduction = 0
ENDIF
```

The `ENDIF` marks the end of the conditional structure.

Similarly, for loops:

```
WHILE moreEmployees
    // Instructions inside the loop
ENDWHILE
```

---

### 5. Keep Statements Language-Independent

Pseudocode should not be written in a specific programming language syntax. Avoid using language-specific features unless you are certain the pseudocode will only be implemented in that particular language. The idea is to keep pseudocode simple and universally understandable.

**Incorrect**:

```
let grossPay = hourlyRate * hoursWorked; // JavaScript syntax
```

**Correct**:

```
grossPay = hourlyRate * hoursWorked // Language-independent
```

---

### Detailed Example with Flowchart

Let’s expand on the previous example to make it more comprehensive. We’ll calculate gross pay, deductions, and net pay for employees, with deductions only applied if gross pay is over a certain threshold.

### Task List

1. Read employee details: name, hourly rate, hours worked, deduction rate.
2. Calculate gross pay (hours worked multiplied by hourly rate).
3. If gross pay is greater than or equal to $100, apply the deduction.
4. Calculate net pay by subtracting the deduction from gross pay.
5. Output the employee’s name, gross pay, deduction, and net pay.

### Pseudocode

```
READ name, hourlyRate, hoursWorked, deductionRate
grossPay = hourlyRate * hoursWorked
IF grossPay >= 100
    deduction = grossPay * deductionRate
ELSE
    deduction = 0
ENDIF
netPay = grossPay – deduction
WRITE name, grossPay, deduction, netPay
```

### Flowchart

The flowchart below visually represents the pseudocode logic, from reading employee details to displaying the final output.

```plaintext
            +-----------------------------------+
            | Start                             |
            +-----------------------------------+
                           |
                           V
            +-----------------------------------+
            | Read name, hourlyRate,            |
            | hoursWorked, deductionRate        |
            +-----------------------------------+
                           |
                           V
            +-----------------------------------+
            | Calculate grossPay                |
            +-----------------------------------+
                           |
                           V
            +-----------------------------------+
            | Is grossPay >= 100?               |
            +-----------------------------------+
               |                           |
           Yes |                           | No
               V                           V
   +-------------------------+     +------------------+
   | Calculate deduction      |     | Set deduction = 0|
   | (grossPay * deductionRate)|     +------------------+
   +-------------------------+
               |
               V
   +-------------------------------+
   | Calculate netPay (grossPay -   |
   | deduction)                     |
   +-------------------------------+
               |
               V
   +-------------------------------+
   | Write name, grossPay,          |
   | deduction, netPay              |
   +-------------------------------+
               |
               V
            +-----------------------------------+
            | End                               |
            +-----------------------------------+
```

---

### Summary

Pseudocode helps structure the logic of a program in a clear, language-agnostic way. By following these key rules:

1. Writing one statement per line.
2. Capitalizing initial keywords.
3. Indenting to show hierarchy.
4. Ending multiline structures with appropriate `END` keywords.
5. Keeping the pseudocode language-independent.

## Step-by-Step Guide to Writing Pseudocode for a Robot

### 1. Define the Goal of the Program

The first step is to clearly articulate what the robot needs to accomplish. This involves understanding the desired outcome and defining it succinctly.

**Example Goal**: The robot needs to navigate a square path around a box. It starts on a designated line, facing north, and must return to the starting position on the line, still facing north.

### 2. Plan How the Robot Will Achieve This Goal

Next, think about the specific actions the robot will take to achieve the goal. Consider the movements required, the direction changes, and any other relevant tasks.

**Specific Steps**:

- Move forward a specific distance.
- Turn to change direction.
- Repeat these actions until the goal is met.

### 3. Outline Each Step the Robot Will Take

Document each action in sequence. Start with the initial position and direction, and list each movement or decision the robot needs to make.

**Step-by-Step Actions**:

1. Move forward 10 inches.
2. Turn left 90 degrees.
3. Move forward 10 inches.
4. Turn left 90 degrees.
5. Move forward 10 inches.
6. Turn left 90 degrees.
7. Move forward 10 inches.
8. Turn left 90 degrees to return to the starting position.

### 4. Include Repetitive Tasks

If any steps are repeated multiple times, make that clear in your pseudocode. This helps to condense the code and make it more readable.

**Pseudocode**:

```
START
SET initial position and direction (North)
FOR i FROM 1 TO 4
    MOVE FORWARD 10 inches
    TURN LEFT 90 degrees
END FOR
END
```

### 5. Determine If the Task Is Repetitive or Infinite

Decide whether the robot will perform its task indefinitely or if it will stop after completing a defined series of actions. For the square path, the robot completes its task after one full round.

### Complete Example of Pseudocode

Combining the above steps, here’s a more structured example of the pseudocode for our robot:

**Goal**: The robot must navigate around a square box, starting and ending on a line facing north.

**Pseudocode**:

```
START
SET initial position at (0, 0)
SET initial direction to North
REPEAT 4 TIMES
    MOVE FORWARD 10 inches
    TURN LEFT 90 degrees
END REPEAT
RETURN TO (0, 0)  // Position on the line
FACING North
END
```

### Flowchart Representation

To visualize the logic of the pseudocode, a flowchart can be helpful. Below is a simplified flowchart representing the steps:

```plaintext
        +-------------------+
        |      Start        |
        +-------------------+
                 |
                 V
       +---------------------+
       | Set initial position |
       | at (0, 0) and      |
       | direction to North  |
       +---------------------+
                 |
                 V
      +------------------------+
      | Repeat 4 times         |
      |  +-------------------+ |
      |  | Move forward 10"  | |
      |  +-------------------+ |
      |  +-------------------+ |
      |  | Turn left 90°     | |
      |  +-------------------+ |
      |  +-------------------+ |
      |  | End Repeat         | |
      |  +-------------------+ |
      +------------------------+
                 |
                 V
       +---------------------+
       | Return to (0, 0)   |
       | Facing North        |
       +---------------------+
                 |
                 V
        +-------------------+
        |        End        |
        +-------------------+
```

---

## Pseudocode Language Constructs

### 1. Computation/Assignment

These constructs perform calculations and assign values to variables.

#### Examples:

- **Compute**: Calculate the sum of two variables.
  - `Compute sum as the sum of x and y`
- **Assign**: Assign a value or expression to a variable.
  - `Assign result to var2`
- **Increment**: Increase a variable's value.
  - `Increment counter1`

#### Example Pseudocode:

```
x = 5
y = 10
sum = x + y
counter1 = counter1 + 1  // Increment counter1
```

### 2. Input/Output

These constructs handle user input and output display.

#### Examples:

- **Input**: Gather data from the user.
  - `Input: Get var1, var2`
- **Output**: Display data to the user.
  - `Output: Display sum, counter1`

#### Example Pseudocode:

```
Input var1, var2
Output "The sum is", sum
```

### 3. Selection

Selection constructs allow the program to make decisions based on conditions.

#### 3.1 Single-Selection IF

If a condition is true, execute the corresponding statement(s).

#### Example:

```
IF x > y THEN
    Output "x is greater than y"
ENDIF
```

#### 3.2 Double-Selection IF

This construct includes an ELSE block for when the condition is false.

#### Example:

```
IF x > y THEN
    Output "x is greater than y"
ELSE
    Output "y is greater than or equal to x"
ENDIF
```

#### 3.3 SWITCH Statement

A more organized way to handle multiple conditions.

#### Example:

```
SWITCH dayOfWeek TO
    CASE 1: Output "Monday"
    CASE 2: Output "Tuesday"
    DEFAULT: Output "Invalid day"
ENDSWITCH
```

### 4. Repetition

Repetition constructs are used to execute statements multiple times.

#### 4.1 WHILE Loop

Execute statements as long as a condition is true.

#### Example:

```
WHILE counter < 5 DO
    Output counter
    counter = counter + 1
ENDWHILE
```

#### 4.2 DO-WHILE Loop

Guarantees at least one execution of the statements before checking the condition.

#### Example:

```
DO
    Output counter
    counter = counter + 1
WHILE counter < 5
```

#### 4.3 FOR Loop

Specifically designed to repeat a block a set number of times.

#### Example:

```
FOR i FROM 1 TO 5 DO
    Output i
ENDFOR
```

## Flowchart Representation

Flowcharts are a visual representation of the logic in pseudocode. They help illustrate how data flows through the algorithm.

### Flowchart Example

Here is a simple flowchart based on the double-selection IF pseudocode example above.

```plaintext
+--------------------+
|   Start            |
+--------------------+
          |
          V
+--------------------+
|  Get input x, y   |
+--------------------+
          |
          V
+--------------------+
|   IF x > y THEN    |
|        /           |
|   Output "x is     |
|   greater than y"  |
|        \           |
|   ELSE             |
|   Output "y is     |
|   greater or equal  |
|   to x"           |
+--------------------+
          |
          V
+--------------------+
|        End         |
+--------------------+
```

## Summary

Pseudocode serves as an excellent tool for planning and visualizing algorithms. It allows programmers to outline their ideas without getting bogged down by syntax details. By using constructs for computation, input/output, selection, and repetition, you can create clear and understandable pseudocode. Utilizing flowcharts in conjunction with pseudocode can further clarify the flow of logic in the algorithm.

For more comprehensive examples and standards, refer to the [Pseudocode Standard](http://users.csc.calpoly.edu/~jdalbey/SWE/pdl_std.html).
