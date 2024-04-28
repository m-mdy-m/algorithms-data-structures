import java.util.ArrayList;
import java.util.List;
public class ManachersAlgorithm {

  private final String text;
  private final String processedText;
  private final int[] C;
  private final int[] P;
  private int C_center;
  private int R;

  public ManachersAlgorithm(String text) {
    this.text = text;
    this.processedText = "#" + String.join("#", text.split("")) + "#";
    this.C = new int[2 * processedText.length() + 1];
    this.P = new int[2 * processedText.length() + 1];
    this.C_center = 0;
    this.R = 0;
  }

  public int[][] calculate() {
    for (int i = 1; i < processedText.length() - 1; i++) {
      int i_mirror = 2 * C_center - i;
      if (i <= R) {
        P[i] = Math.min(R - i, P[i_mirror]);
      } else {
        P[i] = 0;
      }

      while (i - P[i] - 1 >= 0 && i + P[i] + 1 < processedText.length() &&
             processedText.charAt(i - P[i] - 1) == processedText.charAt(i + P[i] + 1)) {
        P[i]++;
      }

      if (i + P[i] > R) {
        C_center = i;
        R = i + P[i];
      }
    }

    List<int[]> palindromes = new ArrayList<>();
    for (int i = 1; i < processedText.length() - 1; i += 2) {
      if (P[i] > 0) {
        int startIndex = (i - P[i]) / 2;
        int length = P[i];
        palindromes.add(new int[]{startIndex, length});
      }
    }
    return palindromes.toArray(new int[palindromes.size()][]);
  }

  public static void main(String[] args) {
    String textInput = "ABABDABACDABABCABAB";
    ManachersAlgorithm manachers = new ManachersAlgorithm(textInput);
    int[][] manachersValues = manachers.calculate();

    System.out.println("Text:");
    System.out.println(textInput);
    System.out.println("Manachers-function:");
    for (int[] palindrome : manachersValues) {
      System.out.println("Start Index: " + palindrome[0] + ", Length: " + palindrome[1]);
    }
    System.out.println("processed_text:");
    System.out.println(manachers.processedText);
  }
}
/**
- > output : 

Text: ABABDABACDABABCABAB
Manachers-function:
Start Index: 0, Length: 1
Start Index: 0, Length: 3
Start Index: 1, Length: 3
Start Index: 3, Length: 1
Start Index: 4, Length: 1
Start Index: 5, Length: 1
Start Index: 5, Length: 3
Start Index: 7, Length: 1
Start Index: 8, Length: 1
Start Index: 9, Length: 1
Start Index: 10, Length: 1
Start Index: 10, Length: 3
Start Index: 11, Length: 3
Start Index: 13, Length: 1
Start Index: 14, Length: 1
Start Index: 15, Length: 1
Start Index: 15, Length: 3
Start Index: 16, Length: 3
Start Index: 18, Length: 1

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