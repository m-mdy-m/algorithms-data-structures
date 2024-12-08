# Project for String Algorithms

## **[1. String Parsing for Natural Language Understanding](./1/)**

**Objective**: Build a parser that processes natural language text into a structured representation like a syntax tree.

### **Requirements**:

1. Implement **tokenization**: Break the text into words and punctuation marks.
2. Implement **part-of-speech (POS) tagging**: Assign grammatical tags (e.g., noun, verb) to each token.
3. Build a basic **syntax tree**: Show relationships between words (e.g., subject, verb, object).

### **Example Input**:

```plaintext
Sentence: "The cat sat on the mat."
```

### **Example Output**:

```plaintext
Tokens: ["The", "cat", "sat", "on", "the", "mat", "."]
POS Tags: [Det, Noun, Verb, Prep, Det, Noun, Punct]
Syntax Tree:
(Sentence
  (NP (Det The) (Noun cat))
  (VP (Verb sat) (PP (Prep on) (NP (Det the) (Noun mat))))
)
```

### **Implement**:

- A tokenizer for splitting words and punctuation.
- A basic POS tagging system using a rule-based approach.
- A recursive algorithm to generate a syntax tree.
- Extend the project for different languages and grammatical rules.

---

## **2. String Compression Validator**

**Objective**: Design a tool that validates whether a compressed string representation is correct according to a specific encoding scheme.

### **Requirements**:

1. Support different compression schemes, such as **Run-Length Encoding (RLE)** and **Dictionary-Based Encoding**.
2. Verify whether a compressed string accurately represents the original string.
3. Optionally, reconstruct the original string from the compressed representation.

### **Example Input**:

```plaintext
Original String: "aaabccdddd"
Compressed String (RLE): "3a1b2c4d"
```

### **Example Output**:

```plaintext
Validation: True
Reconstructed String: "aaabccdddd"
```

### **Implement**:

- Custom parsers for different encoding schemes.
- Algorithms to decompress and reconstruct the original string.
- A validation mechanism to compare the input and compressed versions.

---

## **3. Anagram Generator and Optimizer**

**Objective**: Build a tool that generates all valid anagrams of a string and optimizes their generation by avoiding duplicates and sorting them lexicographically.

### **Requirements**:

1. Generate all unique anagrams of a given string.
2. Filter anagrams based on a dictionary of valid words.
3. Support optimizations for large strings with repeated characters.

### **Example Input**:

```plaintext
String: "cat"
Dictionary: ["act", "cat", "at", "tac"]
```

### **Example Output**:

```plaintext
Anagrams: ["act", "cat", "tac"]
```

### **Implement**:

- A backtracking algorithm for generating anagrams.
- A mechanism to avoid generating duplicates.
- A dictionary filter to validate anagrams.

---

## **4. Longest Repeated Substring Finder**

**Objective**: Find the longest substring that appears more than once in a string.

### **Requirements**:

1. Implement a **suffix array** to preprocess the string.
2. Use the **Longest Common Prefix (LCP)** array to identify repeated substrings.
3. Optimize for large strings with efficient preprocessing.

### **Example Input**:

```plaintext
String: "banana"
```

### **Example Output**:

```plaintext
Longest Repeated Substring: "ana"
```

### **Implement**:

- Algorithms for building a suffix array and LCP array.
- An efficient search mechanism for repeated substrings.
- Extend functionality to handle multiple strings.

---

## **5. String Similarity Matrix**

**Objective**: Build a matrix representing the similarity between pairs of strings in a dataset.

### **Requirements**:

1. Compute pairwise similarities using metrics like:
   - **Jaccard Similarity** (based on character sets).
   - **Cosine Similarity** (based on character frequency vectors).
   - **Longest Common Subsequence (LCS)**.
2. Generate a similarity matrix for a set of strings.
3. Visualize the matrix as a heatmap or graph.

### **Example Input**:

```plaintext
Strings: ["cat", "bat", "rat", "car"]
Metric: LCS
```

### **Example Output**:

```plaintext
Similarity Matrix:
    cat  bat  rat  car
cat  1.0  0.5  0.5  0.33
bat  0.5  1.0  0.5  0.33
rat  0.5  0.5  1.0  0.33
car  0.33 0.33 0.33 1.0
```

### **Implement**:

- Similarity metrics from scratch.
- A dynamic programming approach for LCS-based similarity.
- A visualization tool to render the matrix.
