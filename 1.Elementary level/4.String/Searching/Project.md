# Project for String Searching Algorithms

## **1. DNA Sequence Matcher (Exact and Approximate Matching)**

**Objective**: Develop a tool that searches for exact and approximate matches of DNA subsequences within a long DNA sequence.

### **Requirements**:

1. Implement **Knuth-Morris-Pratt (KMP)** for exact matches.
2. Extend the project to handle **Approximate Matching** using a custom algorithm or dynamic programming (e.g., Levenshtein distance).
3. Input a DNA sequence and pattern, along with a mismatch tolerance.

### **Example Input**:

```plaintext
DNA Sequence: "ACGTACGTGACG"
Pattern: "ACGT"
Tolerance: 1
```

### **Example Output**:

```plaintext
Exact Matches: [0, 4]
Approximate Matches (1 mismatch): [0, 3, 4]
```

### **Implement**:

- **Exact Matching**: KMP or Boyer-Moore.
- **Approximate Matching**: Dynamic programming-based approach for mismatches.
- Optimize for large DNA datasets (millions of base pairs).
- Visualize matches with a graphical representation.

---

## **2. Plagiarism Detector (Multi-String Matching)**

**Objective**: Create a plagiarism detection tool that compares a given text to multiple documents for matching phrases.

### **Requirements**:

1. Implement the **Aho-Corasick algorithm** for multi-string matching.
2. Compare phrases from the input text to a database of documents.
3. Highlight matches and percentage similarity for each document.

### **Example Input**:

```plaintext
Input Text: "The quick brown fox jumps over the lazy dog."
Documents: ["A quick brown fox leaped over a sleeping dog.",
            "The fox jumped over the dog."]
```

### **Example Output**:

```plaintext
Document 1 Matches: ["quick brown fox", "over the dog"] (50% match)
Document 2 Matches: ["fox", "over the dog"] (30% match)
```

### **Implement**:

- Efficient pattern preprocessing for multiple strings.
- Match reporting with positions and phrase frequencies.
- A performance test to handle large-scale document datasets.

---

## **3. Log File Analyzer (Regex-Based Pattern Matching)**

**Objective**: Analyze system log files to extract error messages, warnings, or specific patterns.

### **Requirements**:

1. Implement a custom **regular expression engine** to search patterns in logs.
2. Handle large log files efficiently.
3. Include user-defined regex patterns to extract specific information (e.g., IP addresses, timestamps).

### **Example Input**:

```plaintext
Log File:
[INFO] 2024-12-01 12:00:00 Connection established from 192.168.1.1
[ERROR] 2024-12-01 12:05:00 Unable to connect to database
[WARNING] 2024-12-01 12:10:00 High memory usage detected

Pattern: "\[ERROR\] .*"
```

### **Example Output**:

```plaintext
Matches:
[ERROR] 2024-12-01 12:05:00 Unable to connect to database
```

### **Implement**:

- Regex pattern matching (without using libraries).
- Efficient parsing for streaming log files.
- Extend functionality for approximate matches in patterns.

---

## **4. Code Syntax Highlighter (Pattern Matching)**

**Objective**: Build a syntax highlighter that identifies and highlights keywords, operators, and strings in programming languages.

### **Requirements**:

1. Implement **finite automata** or **regular expression engines** to identify patterns.
2. Handle multi-line comments, string literals, and nested constructs.
3. Support at least three programming languages (e.g., C, Python, JavaScript).

### **Example Input**:

```plaintext
Code:
int main() {
    printf("Hello, World!");
    return 0;
}
```

### **Example Output**:

```plaintext
Highlighted:
[int] main() {
    [printf]("Hello, World!");
    [return] 0;
}
```

### **Implement**:

- Tokenization for code elements.
- Add flexibility for user-defined language syntax rules.
- Provide a color-coded output for visual clarity.

---

## **5. Approximate Search in Large Text Corpus**

**Objective**: Develop a tool to find similar phrases in a large corpus of text (e.g., books or articles).

### **Requirements**:

1. Implement **Levenshtein Automata** for approximate string matching.
2. Input a query phrase and retrieve all close matches from the corpus with their positions and similarity scores.
3. Include support for phrase length normalization.

### **Example Input**:

```plaintext
Corpus: "Alice in Wonderland. The rabbit hole was very dark and deep. Alice followed it."
Query: "rabbit hole deep"
Tolerance: 2
```

### **Example Output**:

```plaintext
Matches:
Position: 21, Match: "rabbit hole was very dark", Score: 85%
```

### **Implement**:

- Index the corpus for faster searching.
- Approximate matching with scoring based on edit distance.
- Optimize memory usage for large datasets.

---

## **6. Compressed Text Search (Advanced Challenge)**

**Objective**: Search for patterns in compressed text (e.g., using Huffman or LZW encoding) without decompressing it fully.

### **Requirements**:

1. Implement a custom **compressed pattern matching** algorithm.
2. Handle search directly in the encoded representation.
3. Support exact matching and provide proof of correctness.

### **Example Input**:

```plaintext
Compressed Text: [Encoded binary stream]
Pattern: "search"
```

### **Example Output**:

```plaintext
Positions: [12, 34, 56]
```

### **Implement**:

- Encoding/decoding algorithms (Huffman, LZW).
- Search algorithms for compressed domains.
- Compare performance with traditional uncompressed matching.
