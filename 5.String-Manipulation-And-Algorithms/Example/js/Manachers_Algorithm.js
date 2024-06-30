class ManachersAlgorithm {
  constructor(text) {
    this.text = text;
    this.processed_text = `#${this.text.split("").join("#")}#`;
    this.C = new Array(this.processed_text.length).fill(0);
    this.P = new Array(this.processed_text.length).fill(0);
    this.C_center = 0;
    this.R = 0;
  }
  calculate() {
    for (let i = 1; i < this.processed_text.length - 1; i++) {
      const i_mirror = 2 * this.C_center - i;
      if (i <= this.R) {
        this.P[i] = Math.min(this.R - i, this.P[i_mirror]);
      } else {
        this.P[i] = 0;
      }

      while (
        i - this.P[i] - 1 >= 0 &&
        i + this.P[i] + 1 < this.processed_text.length &&
        this.processed_text[i - this.P[i] - 1] ===
          this.processed_text[i + this.P[i] + 1]
      ) {
        this.P[i]++;
      }

      if (i + this.P[i] > this.R) {
        this.C_center = i;
        this.R = i + this.P[i];
      }
    }
    const palindromes = [];
    for (let i = 1; i < this.processed_text.length - 1; i += 2) {
      if (this.P[i] > 0) {
        const startIndex = Math.floor((i - this.P[i]) / 2);
        const length = this.P[i];
        palindromes.push([startIndex, length]);
      }
    }
    return palindromes;
  }
}
const textInput = "ABABDABACDABABCABAB";
const manachers = new ManachersAlgorithm(textInput);
const manachersValues = manachers.calculate();

console.log("Text:", textInput);
console.log("Manachers-function:", manachersValues);
console.log("processed_text:", manachers.processed_text);
/**
 - > output : 

 Text: ABABDABACDABABCABAB
 Manachers-function: [
   [ 0, 1 ],  [ 0, 3 ],  [ 1, 3 ],
   [ 3, 1 ],  [ 4, 1 ],  [ 5, 1 ],
   [ 5, 3 ],  [ 7, 1 ],  [ 8, 1 ],
   [ 9, 1 ],  [ 10, 1 ], [ 10, 3 ],
   [ 11, 3 ], [ 13, 1 ], [ 14, 1 ],
   [ 15, 1 ], [ 15, 3 ], [ 16, 3 ],
   [ 18, 1 ]
 ]
 processed_text: #A#B#A#B#D#A#B#A#C#D#A#B#A#B#C#A#B#A#B#-> length : 39
 ---
 
 
 | Index (i) | Processed Text Slice | Start Index (original text) | Length | Reason |
 |-----------|----------------------|-----------------------------|--------|--------|
 | (0, 1)    | `#` | 0              | 1                           | Single character 'A' at index 0 is a palindrome of length 1. |
 | (0, 3)    | `#A#B#`              | 0                           | 3      | Palindrome "ABA" centered at index 1 (considering `#` as boundaries). |
 | (1, 3)    | `#A#`                | (1 - 3) // 2 = -1 (ignored) | 3      | Center of this palindrome is at index 1, but it extends beyond the beginning of the processed text (invalid). |
 | (3, 1)    | `#B#A#`              | 3 // 2 = 1                  | 1      | Single character 'B' at index 1 is a palindrome of length 1. |
 | (4, 1)    | `#A#B#`              | 4 // 2 = 2                  | 1      | Single character 'A' at index 2 is a palindrome of length 1. |
 | (5, 1)    | `#D#A#`              | 5 // 2 = 2                  | 1      | Single character 'D' at index 2 is a palindrome of length 1. |
 | (5, 3)    | `#D#A#B#`            | 5 // 2 = 2                  | 3      | Palindrome "BAB" centered at index 3. |
 | (7, 1)    | `#A#C#`              | 7 // 2 = 3                  | 1      | Single character 'C' at index 3 is a palindrome of length 1. |
 |-----------|----------------------|-----------------------------|--------|--------|
 | (18, 1)   | `#B#`                | 18 // 2 = 9                 | 1      | Single character 'B' at index 9 is a palindrome of length 1. |
 
 ```
       i (center)
    0 # A # B #  #  #  #  #
    -3-2-1--0--1--2--3--4-
           R (right boundary)
           P[i] = 1
 ```
 ```
 
  */