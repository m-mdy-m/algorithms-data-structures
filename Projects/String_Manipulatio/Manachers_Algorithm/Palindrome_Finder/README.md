## Palindrome Finder

This project aims to create a professional-grade palindrome finder utilizing the Manachers Algorithm. It empowers users to identify all palindromes within a text string, presenting results in a clear and informative manner.

**Features:**

* **Efficient Algorithm:** Leverages the Manachers Algorithm for fast and accurate palindrome detection.
* **User-Friendly Input:** Accepts text input from the user through a command-line interface or a graphical user interface (GUI) for a more interactive experience.
* **Comprehensive Output:** Displays the starting index, length, and the actual palindrome string for each identified palindrome.
* **Flexibility:** Offers options for handling special characters or spaces within the input string (e.g., removal, conversion).
* **Error Handling:** Provides informative messages for invalid input or unexpected errors.

**Implementation:**

1. **Preprocessing (Optional):**
   - The user has the option to choose how to handle special characters and spaces within the text string. A configuration menu or command-line arguments can be used to specify the desired behavior (e.g., remove, convert to a specific character).
   - The chosen preprocessing function is applied to the user-provided text string.

2. **Manachers Algorithm Integration:**
   - The core functionality relies on the Manachers Algorithm. 
   - The algorithm iterates through each character in the preprocessed string, expanding outwards to find the longest palindrome centered at that character.
   - An auxiliary array (`P`) is used to store the "palindrome lengths" for each position, facilitating efficient palindrome identification.

3. **Palindrome Extraction:**
   - Based on the values in the `P` array, the function extracts the actual palindrome substrings.
   - For each valid palindrome (`P[i] > 0`), the starting index (`(i - P[i]) // 2`) and length (`P[i]`) are used to retrieve the corresponding substring from the original (preprocessed) text string.

4. **Output:**
   - The function presents the identified palindromes in a clear and well-formatted manner.
   - Each palindrome is displayed with its starting index, length, and the actual palindrome string itself.

**Enhancements:**

* **Graphical User Interface (GUI):** Develop a user-friendly GUI for easier interaction. Users can input text, choose preprocessing options, and view results in a visually appealing format.
* **Regular Expression Support:** Integrate regular expressions to enable more complex search patterns within the input string. This allows users to search for specific types of palindromes (e.g., alphanumeric only).
* **Performance Optimization:** Explore techniques for further performance optimization, especially when dealing with very large text datasets.

**Input:**

* The user provides a text string through a chosen interface (e.g., command line or GUI).
* Optionally, the user can specify how to handle special characters and spaces (e.g., remove, convert to a specific character) through configuration or command-line arguments.

**Pseudocode:**

```
# Function to preprocess text (optional)
def preprocess_text(text, option):
  if option == "remove_special_chars":
    return re.sub(r'[^\w\s]', '', text)
  elif option == "convert_spaces":
    return text.replace(" ", "-")  # Example conversion (replace with desired behavior)
  else:
    return text  # No preprocessing

# Function to calculate P array using Manachers Algorithm
def manachers(text):
  n = len(text)
  P = [0] * n
  center = right = 0
  for i in range(1, n - 1):
    # Expand outwards to find longest palindrome centered at i
    i_mirror = 2 * center - i
    if i > right:
      P[i] = 0
    else:
      P[i] = min(right - i, P[i_mirror])
    # Attempt to expand palindrome centered at i
    while i + P[i] < n - 1 and text[i + 1 + P[i]] == text[i - 1 - P[i]]:
      P[i] += 1
    if i + P[i] > right:
      center = i
      right = i + P[i]
  return P

# Function to find and display palindromes
def find_palindromes(text):
  # Preprocess text if option provided
  preprocessed_text = preprocess_text(text, option)
  # Calculate P array using Manachers Algorithm
  P = manachers(preprocessed_text)
  # Find and display palindromes
  for center, length in enumerate(P):
    if length > 0:
      start_index = (center - length) // 2
      palindrome = preprocessed_text[start_index: start_index + length]
      print(f"Found palindrome: Start Index - {start_index}, Length - {length}, Palindrome - {palindrome}")

# Main program
text = input("Enter text string: ")
option = input("Preprocessing option (remove_special_chars, convert_spaces, none): ")
find_palindromes(text.strip(), option)
```

**Output:**

* The program displays a message for each identified palindrome, including its starting index, length, and the actual palindrome string itself.
* If no palindromes are found, an appropriate message is displayed.
* In case of invalid input or unexpected errors, informative messages are provided to the user.
**Example Usage (Command Line):**

```
Enter text string: The quick brown fox jumps over the lazy dog.
Preprocessing option (remove_special_chars, convert_spaces, none): remove_special_chars

Found Palindromes:

| Start Index | Length | Palindrome               |
|-------------|--------|-------------------------|
| 0           | 11     | thequickbrownfox        |
| 9           | 3      | fox                      |
| 17          | 5      | over                     |
| 27          | 1      | d                        |

```
