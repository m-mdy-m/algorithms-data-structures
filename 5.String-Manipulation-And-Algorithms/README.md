# String Manipulation and Algorithms
## Introduction

The digital world thrives on information, and a substantial portion of this information resides in the form of text. String manipulation and searching algorithms serve as the foundation for processing and analyzing this textual data. These algorithms empower us to perform a wide range of operations on strings, from the fundamental act of combining words (concatenation) to the intricate task of identifying specific patterns buried within vast amounts of text. 

* **String Manipulation:** Imagine building with words. String manipulation algorithms act as our tools, allowing us to create new strings by joining existing ones (concatenation), extract specific portions (substrings), or determine the length of our textual building blocks. These fundamental operations are the backbone for tasks like preparing data for analysis, generating text, and extracting valuable information from documents.

**A Real-World Example:  Genomic Research and String Searching**

In the realm of genomic research, scientists analyze vast amounts of DNA sequence data. String searching algorithms become instrumental here. Imagine a scenario where researchers aim to identify specific genes within a long DNA sequence. These algorithms function as powerful tools, allowing scientists to efficiently locate these gene sequences (specific patterns) within the DNA data. This process enables them to pinpoint genes associated with specific diseases or traits, ultimately furthering our understanding of human biology. 

## String Searching Algorithms: A Complexity Perspective

* **Time Complexity: A Measure of Algorithmic Speed**

Time complexity quantifies the execution time of an algorithm, typically expressed as a function of the input data size (often denoted by "n"). In the context of string searching, the input data encompasses the text string (length n) and the pattern string to be located. Time complexity analysis facilitates our understanding of how the execution time scales with increasing input size. Ideally, we seek algorithms with time complexity that exhibits slow growth or remains constant as the input size expands. This ensures efficient execution even when dealing with vast amounts of textual data.

* **Space Complexity: Analyzing Memory Footprint**

Space complexity, on the other hand, delves into the amount of additional memory space an algorithm requires beyond the input data itself. This additional space is often utilized for temporary variables or data structures employed during the search process. In the context of string searching algorithms, space complexity analysis sheds light on the memory footprint of the algorithm, allowing us to determine its suitability for scenarios with limited memory resources. Ideally, we prefer algorithms with space complexity that remains constant or grows slowly as the input size increases. This ensures efficient memory utilization and avoids resource constraints, particularly when processing large datasets.

## **Brute-Force Search: A Baseline Approach**

The brute-force search serves as a foundational and intuitive technique for locating patterns within text. However, its simplicity comes at a cost in terms of computational efficiency.

**Algorithm Description: A Methodical Comparison**

The brute-force search algorithm adopts a straightforward approach. It systematically iterates through the text string, comparing the pattern string character by character at each potential starting position. If a mismatch occurs between corresponding characters in the text and pattern strings, the algorithm promptly shifts the pattern one position to the right and restarts the comparison process. This continues until either a complete match is identified or the entire text string has been scanned without success.

**Real-World Example:  Searching for Keywords in a Legal Document**

Imagine a lawyer meticulously searching for a specific legal term within a lengthy contract. This scenario exemplifies the brute-force approach in action. The lawyer methodically reads through the contract (text string), comparing each word (character) to the specific legal term (pattern string). If a mismatch occurs, they simply move on to the next word and repeat the comparison. While effective for small documents, this approach becomes increasingly time-consuming and laborious as the document size (text string length) grows. 

**Complexity Analysis: Unveiling the Efficiency Bottleneck**

While intuitively straightforward, the brute-force search suffers from significant limitations in terms of efficiency. Its time complexity, denoted by O(n*m), reveals its Achilles' heel. Here, "n" represents the length of the text string and "m" represents the length of the pattern string. This implies that the execution time grows proportionally to the product of the text and pattern lengths. For large datasets, this translates to a substantial increase in processing time. Additionally, the space complexity of the brute-force algorithm is typically O(1), signifying a constant memory footprint independent of the input size. This is an advantage, but the trade-off lies in the significant time complexity bottleneck.

**Limitations and the Need for More Sophisticated Approaches**

The brute-force search, while conceptually simple, exhibits a critical limitation - its inefficiency for large datasets. The exponential growth in execution time with increasing input size renders it unsuitable for practical applications involving vast amounts of textual data. This paves the way for exploring more sophisticated string searching algorithms designed to achieve superior efficiency and handle real-world text processing demands. 

## Efficient String Searching Algorithms: Beyond Brute Force

The limitations of the brute-force search algorithm necessitate the exploration of more efficient techniques for string searching. Enter the realm of sophisticated algorithms engineered to locate patterns within text with remarkable speed and minimal resource consumption. Here, we delve into the Z-algorithm, a powerful tool that leverages pre-computed information to achieve superior efficiency.

### **A. The Z-Algorithm: Unveiling Prefix Matches**

The Z-algorithm hinges on a clever concept known as the Z-function. The Z-function, denoted by Z[i], for a given string S, calculates the length of the longest substring starting at index i that also occurs as a prefix of the string S.  In essence, the Z-function pre-computes information about potential matches between prefixes and suffixes within the text string.

 **Algorithm Explanation: Exploiting Pre-computed Knowledge:**

The Z-algorithm leverages the Z-function to efficiently locate occurrences of the pattern P within the text string T. It constructs a Z-array for the concatenated string formed by adding a special separator character between P and T (denoted as PT). This separator ensures that no prefixes and suffixes within P can match each other. By iterating through the Z-array, the algorithm identifies positions where Z[i] is equal to the length of the pattern P. These positions correspond to potential starting points of pattern matches within the text string T.

 **Real-World Example:  Musical Plagiarism Detection:**

Imagine a musician analyzing a new melody to check for potential plagiarism. The Z-algorithm can be employed here. The musician's original melody (text string) is concatenated with the suspected plagiarized melody (pattern string) using a unique separator symbol. The Z-function then identifies sections within the combined melody where a significant portion of the suspected melody matches a prefix of the original melody. This expedites the plagiarism detection process, allowing the musician to focus on potential matches flagged by the algorithm. 

 **Complexity Analysis: Efficiency Gains:**

The Z-algorithm boasts a significant advantage over the brute-force search in terms of efficiency. Its time complexity is typically linear, O(n+m), where n is the length of the text string and m is the length of the pattern string. This implies that the execution time grows proportionally to the sum of the text and pattern lengths, a substantial improvement over the brute-force algorithm's exponential growth. The space complexity of the Z-algorithm is also linear, O(n), requiring additional memory proportional to the text string length to store the Z-array.

---

### B. Manacher's Algorithm : A Champion for Palindromes

While the Z-algorithm excels at general string searching, specific problems demand specialized solutions. Manacher's algorithm emerges as a powerful tool for identifying palindromic substrings within a text string with remarkable efficiency.

**What is Palindromic? :**

A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward, such as "madam" or "racecar". Here are some key points about palindromes:

* **Direction-independent:** The sequence of characters reads the same regardless of whether you start from the beginning or the end. 
* **Examples:** Common examples of palindromes include words like "noon", "level", "rotor", and phrases like "A man, a plan, a canal: Panama" or "Race car, race!". Numbers can also be palindromes, such as 1111, 1221, or 5885.
* **Variations:** Palindromes can be single characters ("A"), single words ("noon"), or even entire sentences ("Madam, I'm Adam"). 
* **Case-sensitivity:** Depending on the context, palindromes might be considered case-sensitive (e.g., "Noon" is not a palindrome) or case-insensitive (e.g., "Noon" is considered the same as "noon").

* **Etymology:** The word "palindrome" comes from the Greek words "palin" (meaning "back again") and "dromos" (meaning "course").
* **Mathematical Applications:** Palindromes have applications in computer science, linguistics, and even recreational mathematics. For instance, they can be used in data validation (checking if an input is a palindrome) or exploring properties of numbers.
* **Cultural Significance:** Palindromes appear in literature, wordplay, and even historical writings. They can be found in puzzles, riddles, and creative writing as a form of wordplay or artistic expression.

**Palindromic Substring Problem: Finding Words that Read the Same Backwards and Forwards**

A palindrome is a captivating word or phrase that reads the same backward and forward, like "racecar" or "madam." The palindromic substring problem seeks to locate all such substrings within a given text string.

**Algorithm Explanation: A Linear Scan with a Twist**

Manacher's algorithm employs a clever data structure called a P-array to efficiently identify palindromic substrings.  The P-array, denoted by P[i], for a given string S and index i, stores the largest palindrome centered at index i (considering the character at i as the center). The algorithm performs a single linear scan through the text string, cleverly utilizing the P-values of previously processed characters to expand or contract the search for palindromes centered at the current position.

**Real-World Example:  DNA Sequence Analysis and Palindrome Detection**

In the realm of DNA research, scientists often encounter palindromic sequences that play a crucial role in gene regulation. Manacher's algorithm can be employed here. The DNA sequence (text string) is processed, and the P-array identifies all palindromic substrings within the sequence. This expedites the discovery of these potentially significant DNA features, aiding researchers in unraveling the mysteries of the genetic code.

**Complexity Analysis: Linear Efficiency for Palindrome Hunting**

Manacher's algorithm exhibits exceptional efficiency for the palindromic substring problem. Its time complexity is typically linear, O(n), where n is the length of the text string. This implies that the execution time grows proportionally to the text string length, a significant advantage over algorithms that might require repeated substring comparisons. The space complexity of Manacher's algorithm is also linear, O(n), due to the P-array it utilizes.

**Advantage over Z-Algorithm for Palindromes:**

While the Z-algorithm can be adapted to find palindromes, Manacher's algorithm is specifically designed for this task. It leverages the concept of palindromes centered at each index, resulting in a more efficient linear scan compared to the Z-algorithm's approach for general string searching.


## **Applications of String Searching Algorithms**


String searching algorithms transcend theoretical concepts; they serve as the backbone for a multitude of real-world applications that rely on efficiently locating specific patterns within text data. Here, we explore some prominent examples:

* **Text Editors: The Find Function - A Familiar Friend**

The ubiquitous "find" functionality in text editors exemplifies the practical application of string searching algorithms. When you search for a specific word or phrase within a document, the underlying algorithm swiftly scans the text, identifying occurrences of the search pattern (your query) with remarkable speed. This empowers you to navigate large documents efficiently and locate relevant information effortlessly. 

* **Bioinformatics: Unveiling the Secrets of Life within DNA Sequences**

In the realm of bioinformatics, string searching algorithms play a critical role in analyzing DNA sequences. Scientists utilize these algorithms to identify specific patterns within these sequences, such as genes, regulatory elements, or repetitive motifs. By efficiently locating these patterns, researchers gain valuable insights into the genetic code, furthering our understanding of biological processes and paving the way for advancements in medicine and biotechnology.

* **Plagiarism Detection: Protecting Intellectual Property**

String searching algorithms serve as the foundation for plagiarism detection software. This software scans submitted text against a vast database of existing works, searching for potential matches or significant overlaps. By efficiently identifying instances of copied content, these algorithms help safeguard intellectual property and ensure the originality of academic and creative works.

* **Network Intrusion Detection Systems: Guardians of the Digital Realm**

Network intrusion detection systems (NIDS) rely heavily on string searching algorithms to protect against cyber threats. These systems constantly monitor network traffic, searching for malicious patterns or suspicious strings often embedded within malicious code or attack attempts. By efficiently identifying these patterns, NIDS can trigger alarms and take preventive measures to safeguard computer networks from unauthorized access and data breaches.

> These are just a few examples of how string searching algorithms have revolutionized various fields.

## Implementation

### How Implement Z-Algorithm 


```
Z_algorithm(Text)
  Input: Text - String to search within
  Output: Z - List containing the Z-function values for each index in Text

  n = length(Text)
  Z = list of size n (initialized with zeros)

  l = 0  # Left pointer for tracking the longest prefix match
  r = 0  # Right pointer for tracking the longest prefix match

  for i in range(1, n):
    # Check if the current index is within the window of a previously found match
    if i <= r:
      k = i - l
      # Check if the character at index i matches the character at index k (within the window)
      if Text[i] == Text[k]:
        Z[i] = Z[k]  # Match extends within the window
      else:
        # Match ends, need to expand the window
        l = i
        r = i + Z[k] - 1
    else:
      # Current index is outside the window, search for a new match
      l = r = i
      while r < n and Text[r] == Text[r - l]:
        r += 1
      Z[i] = r - l - 1  # Length of the longest prefix match starting at i

  return Z
```

**Explanation:**

1. The `Z_algorithm` function takes a text string (`Text`) as input.
2. It initializes an empty list `Z` of size `n` (length of the text) to store the Z-function values.
3. Two variables, `l` and `r`, are used as left and right pointers to track the longest prefix match found so far. They represent the window within which characters have already been matched.
4. The loop iterates through the text string starting from index 1 (excluding the first character).
5. **Within the window:**
    - If the current index (`i`) is within the window of a previously found match (i.e., `i <= r`), it checks if the character at the current index (`Text[i]`) matches the character at the corresponding index within the window (`Text[k]`).
        - If a match is found (`Text[i] == Text[k]`), it implies the longest prefix match extends within the window. The Z-value at the current index is simply copied from the corresponding Z-value within the window (`Z[i] = Z[k]`).
        - Otherwise, the match ends at the current index, and the window needs to be expanded (`l = i`, `r = i + Z[k]`) to encompass the new potential match starting at the current index.
6. **Outside the window:**
    - If the current index (`i`) is outside the window (i.e., `i > r`), it initiates a new search for the longest prefix match starting from this index.
    - It expands the window (`l = r = i`) by setting both pointers to the current index. 
    - The `while` loop iterates, comparing characters outwards until a mismatch occurs (`r < n and Text[r] == Text[r - l]`) or the end of the text is reached.
    - The Z-value at the current index is set to the length of the longest prefix match found during this expansion (`Z[i] = r - l - 1`). 
7. Finally, the function returns the `Z` list containing the Z-function values for each index in the text string.

> Example Z-algorithm in (Go,Java,python,Js,Ts)
- [Go](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/5.String-Manipulation-And-Algorithms/Example/golong/Z_algorithm.go)
- [Java](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/5.String-Manipulation-And-Algorithms/Example/java/Z_algorithm.java)
- [TypeScript](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/5.String-Manipulation-And-Algorithms/Example/ts/Z_algorithm.ts)
- [JavaScript](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/5.String-Manipulation-And-Algorithms/Example/js/Z_algorithm.js)
- [Python](https://github.com/m-mdy-m/algorithms-data-structures/blob/main/5.String-Manipulation-And-Algorithms/Example/golong/python.py)


**Output**->
```
Text: ABABDABACDABABCABAB
Z-function: [0, -1, 1, -1, 0, 2, -1, 1, 0, -1, 3, -1, 1, -1, 0, 3, -1, 1, -1]
```
Explanations:
```
  A  B  A  B D A  B A C  D A  B A  B C A  B A  B
[ 0 -1  1 -1 0 2 -1 1 0 -1 3 -1 1 -1 0 3 -1 1 -1 ]
```

Index   | Text Character  | Z-function Value  | Explanation (Visualized)
------- | --------------  | ----------------- | ------------------------
0       | A               | 0                 | The first character, so no prefix match (empty string). Represented by an empty box.
1       | B               | -1                | No prefix match starting at index 1 is a substring of the entire string. Represented by a box with "X" indicating no match.
2       | A               | 1                 | "A" itself is the longest prefix match starting at index 2. Represented by a box containing "A".
3       | B               | -1                | No prefix match starting at index 3 is a substring of the entire string. Represented by a box with "X".
4       | D               | 0                 | No prefix match starting at index 4 is a substring of the entire string (since "AB" is not a prefix of "ABABDABACDABABCABAB"). Represented by an empty box.
5       | A               | 2                 | The longest prefix match starting at index 5 is "AB" (shown as a highlighted box).
6       | B               | -1                | No prefix match starting at index 6 is a substring of the entire string. Represented by a box with "X".
7       | A               | 1                 | "A" itself is the longest prefix match starting at index 7. Represented by a box containing "A".
8       | C               | 0                 | No prefix match starting at index 8 is a substring of the entire string. Represented by an empty box.
9       | D               | -1                | No prefix match starting at index 9 is a substring of the entire string. Represented by a box with "X".
10      | A               | 3                 | The longest prefix match starting at index 10 is "ABA" (shown as a highlighted box).
11      | B               | -1                | No prefix match starting at index 11 is a substring of the entire string. Represented by a box with "X".
12      | A               | 1                 | "A" itself is the longest prefix match starting at index 12. Represented by a box containing "A".
13      | B               | -1                | No prefix match starting at index 13 is a substring of the entire string. Represented by a box with "X".
14      | C               | 0                 | No prefix match starting at index 14 is a substring of the entire string. Represented by an empty box.
15      | A               | 3                 | The longest prefix match starting at index 15 is "ABA" (shown as a highlighted box).
16      | B               | -1                | No prefix match starting at index 16 is a substring of the entire string. Represented by a box with "X".
17      | A               | 1                 | "A" itself is the longest prefix match starting at index 17. Represented by a box containing "A".
18      | B               | -1                | No prefix match starting at index 18 is a substring of the entire string. Represented by a box with "X".

```
  A      B     A     B    D    A     B    A    C     D     A      B    A     B     C     A     B   A     B
[ 0( ) -1(X) 1(A) -1(X) 0( ) 2(AB) -1(X) 1(A) 0( ) -1(X) 3(ABA) -1(X) 1(A) -1(X) 0( ) 3(ABA) -1(X) 1(A) -1(X) ]
```

---

### How Implement Manachers Algorithm 
```
Manachers_Algorithm(Text)
  Input: Text - String to search for palindromes
  Output: Palindromes - List containing starting indices and lengths of all palindromes in Text

  # Preprocess the text by adding a special character between each character
  Processed_Text = "#" + "#".join(Text) + "#"

  C = list of size (2 * len(Processed_Text) + 1) (initialized with zeros)  # Center array for palindrome information
  P = list of size (2 * len(Processed_Text) + 1) (initialized with zeros)  # Length array for palindrome lengths
  C_center = 0  # Center of the current palindrome
  R = 0  # Right boundary of the current palindrome

  for i in range(1, len(Processed_Text) - 1):
    # Check if the current index is within the previously found palindrome's boundary
    i_mirror = 2 * C_center - i
    if i <= R:
      P[i] = min(R - i, P[i_mirror])  # Utilize mirrored index for efficiency
    else:
      P[i] = 0  # No existing palindrome centered at this index

    # Expand the palindrome centered at the current index
    while i - P[i] - 1 >= 0 and i + P[i] + 1 < len(Processed_Text) and Processed_Text[i - P[i] - 1] == Processed_Text[i + P[i] + 1]:
      P[i] += 1

    # Update center and right boundary if a larger palindrome is found
    if i + P[i] > R:
      C_center = i
      R = i + P[i]

  # Extract starting indices and lengths of palindromes from the P array
  Palindromes = list 
  for i in range(1, len(Processed_Text) - 1, 2):
    if P[i] > 0:
      start_index = (i - P[i]) // 2
      length = P[i]
      Palindromes.append((start_index, length))

  return Palindromes
```

**Explanation:**

1. The `Manachers_Algorithm` function takes a text string (`Text`) as input.
2. It creates a preprocessed version of the text (`Processed_Text`) by adding a special character "#" between each character in the original text. This allows for efficient character comparisons during palindrome checks.
3. Two empty lists are initialized: `C` (center array) and `P` (length array) of size (2 * len(Processed_Text) + 1) to store information about palindromes. These arrays track the center and length of the expanding palindrome for each index in the processed text.
4. Two variables, `C_center` and `R`, are used to track the center and right boundary of the currently expanding palindrome.
5. The loop iterates through each character (excluding the first and last special characters) of the `Processed_Text`.
6. It first checks if the current index (`i`) falls within the previously found palindrome's boundary (`i <= R`). If so, it utilizes mirroring to efficiently determine the potential palindrome length. The `i_mirror` index is calculated based on the `C_center` and reflects the mirrored position within the palindrome. The `P[i]` value is then set to the minimum of the remaining length within the previous palindrome (`R - i`) and the corresponding `P` value at the mirrored index (`P[i_mirror]`).
7. Otherwise, it initializes `P[i]` to 0, signifying no existing palindrome centered at this index.
8. The loop then expands the potential palindrome centered at the current index (`i`), comparing characters outwards until a mismatch occurs or the boundaries are reached. The `P[i]` value is updated with the current palindrome length.
9. If the expanded palindrome extends beyond the previously found palindrome (`i + P[i] > R`), the `C_center` and `R` are updated to reflect the new center and right boundary.
10. After processing all characters, the algorithm extracts starting indices and lengths of palindromes from the `P` array. It iterates through the `P` array with a step of 2 (skipping the special characters) and checks for non-zero `P` values. If a non-zero value is found, it calculates the starting index based on the current index (`i`) and the palindrome length (`P[i]`).

> Example Manachers algorithm in (Go,Java,python,Js,Ts)
- [Go]()
- [Java]()
- [TypeScript]()
- [JavaScript]()
- [Python]()



**Output**->
```
Text: ABABDABACDABABCABAB
Manachers-function: [(0, 1), (0, 3), (1, 3), (3, 1), (4, 1), (5, 1), (5, 3), (7, 1), (8, 1), (9, 1), (10, 1), (10, 3), (11, 3), (13, 1), (14, 1), (15, 1), (15, 3), (16, 3), (18, 1)]
processed_text: #A#B#A#B#D#A#B#A#C#D#A#B#A#B#C#A#B#A#B# -> length : 39
```

- **Text:** This represents the original input string that will be analyzed for palindromes.
- **Manachers-function:** This is a list of tuples, where each tuple encodes the starting index and length of a palindrome discovered within the processed text.
- **processed_text:** This showcases a preprocessed version of the original text. Special characters (`#`) are inserted between each character and additional `#` are placed at the beginning and end. This preprocessing step simplifies the palindrome identification process by exploiting character symmetry.

| Index (i) | Processed Text Slice | Start Index (original text) | Length | Reason |
|---|---|---|---|---|
| (0, 1) | `#` | 0 | 1 | Single character 'A' at index 0 in the original text is a palindrome of length 1. |
| (0, 3) | `#A#B#` | 0 | 3 | Palindrome "ABA" centered at index 1 (considering `#` as boundaries). |
| (1, 3) | `#A#` | (1 - 3) // 2 = -1 (ignored) | 3 | Center of this palindrome is at index 1, but it extends beyond the beginning of the processed text (invalid). |
| (3, 1) | `#B#A#` | 3 // 2 = 1 | 1 | Single character 'B' at index 1 is a palindrome of length 1. |
| (4, 1) | `#A#B#` | 4 // 2 = 2 | 1 | Single character 'A' at index 2 is a palindrome of length 1. |
| (5, 1) | `#D#A#` | 5 // 2 = 2 | 1 | Single character 'D' at index 2 is a palindrome of length 1. |
| (5, 3) | `#D#A#B#` | 5 // 2 = 2 | 3 | Palindrome "BAB" centered at index 3. |
| (7, 1) | `#A#C#` | 7 // 2 = 3 | 1 | Single character 'C' at index 3 is a palindrome of length 1. |
| ... | ... | ... | ... | ... |
| (18, 1) | `#B#` | 18 // 2 = 9 | 1 | Single character 'B' at index 9 is a palindrome of length 1. |

The Manachers Algorithm leverages two key concepts: a "center" (`C_center`) and a "right" boundary (`R`). It employs a `P` array to store the "palindrome radius" for each index, representing the maximum length of a palindrome centered at that index within the current boundaries.

Consider the palindrome "ABA" (centered at index 1) for illustration:

```
      i (center)
   0 # A # B #  #  #  #  #
   -3-2-1--0--1--2--3--4-
          R (right boundary)
          P[i] = 1
```

## Conclusion
String manipulation and efficient string searching algorithms are the unsung heroes of the digital world. They empower us to navigate, analyze, and modify textual data with remarkable efficiency.

This exploration delved into two powerful algorithms:

* **Z-Algorithm:** This algorithm pre-computes information about potential prefix matches within the text, enabling swift pattern searching. It excels at general string searching tasks.
* **Manacher's Algorithm:** This algorithm leverages a clever data structure to efficiently identify palindromic substrings within a text string. It caters specifically to the problem of finding these intriguing words or phrases that read the same backward and forward.

While Z-algorithm and Manacher's algorithm provide robust solutions, the realm of string searching extends beyond these. Algorithms like the Knuth-Morris-Pratt algorithm offer even faster pattern matching when the search pattern itself exhibits specific characteristics.

This glimpse into the world of string searching algorithms paves the way for further exploration. As the volume and complexity of textual data continue to surge, efficient string searching algorithms will remain at the forefront, empowering us to unlock the valuable insights hidden within the vast ocean of words.
