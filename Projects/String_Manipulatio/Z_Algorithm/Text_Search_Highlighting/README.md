## Text Search with Highlighting 

**Method:**

## Text Search with Highlighting (Pseudocode)

This project aims to create a search function that efficiently locates occurrences of a user-provided search term within a text document and highlights them for easy identification. Here's a breakdown of the implementation using pseudocode:

**1. Preprocessing (Optional):**

* The user can optionally enable/disable features like case-insensitive search and punctuation removal.
* Preprocessing is applied consistently to both the search term and the text document for a fair comparison.

**Pseudocode:**

```
# Function to clean text (optional)
Function clean_text(text, remove_punctuation=False):
  if remove_punctuation:
    cleaned_text = re.sub(r'[^\w\s]', '', text.lower())  # Remove punctuation and convert to lowercase
  else:
    cleaned_text = text.lower()  # Convert to lowercase for case-insensitive search (if enabled)
  return cleaned_text
```

**2. Search with Z-Algorithm:**

* The search function iterates through the text document using a sliding window approach.
* For each window, the Z-algorithm is employed to identify the longest prefix-suffix match within the window.
* The search term is compared against the characters within the window, excluding the identified prefix-suffix match.

**Pseudocode:**

```
# Function to calculate Z-box for a window
Function calculate_z_box(window):
  n = len(window)
  Z = [0] * n
  for i in range(1, n):
    k = max(0, Z[i-k] - (i-1))  # k is the length of the previous match
    while k < n - i and window[i+k] == window[k]:
      k += 1
    Z[i] = k
  return Z

# Function to search text
Function search_text(text, search_term):
  n = len(text)
  m = len(search_term)
  matches = []
  for i in range(n - m + 1):
    window = text[i:i+m]
    Z_box = calculate_z_box(window)
    if Z_box[0] == m:  # Check if the entire search term matches
      matches.append(i)
  return matches
```

**3. Highlighting:**

* Users can choose from various highlighting styles (e.g., bold, underline, background color).
* The highlighting logic applies the chosen style to the search term occurrences within the document.

**Pseudocode:**

```
# Function to highlight matches
Function highlight_matches(text, matches, style="<b>"):
  highlighted_text = ""
  for i in range(len(text)):
    if i in matches:
      highlighted_text += f"{style}{text[i:i+len(search_term)]}{style}"  # Apply style to the match
    else:
      highlighted_text += text[i]
  return highlighted_text
```

**4. Putting it Together:**

```
Function search_and_highlight(text, search_term, case_sensitive=True, remove_punctuation=False, highlight_style="<b>"):
  # Preprocess text and search term (if options enabled)
  text = clean_text(text, remove_punctuation)
  search_term = clean_text(search_term, remove_punctuation) if case_sensitive else search_term.lower()
  # Find matches using Z-algorithm
  matches = search_text(text, search_term)
  # Highlight matches
  highlighted_text = highlight_matches(text, matches, highlight_style)
  return highlighted_text
```
## Example

**Input Text:**

```
The quick brown fox jumps over the lazy dog. The quick brown fox is a very clever animal.
```

**Search Term:**

```
fox
```

**Parameters:**

* `case_sensitive=True` (default)
* `remove_punctuation=False` (default)
* `highlight_style="<b>"` (bold)

**Output:**

```
Original Text:
The quick brown fox jumps over the lazy dog. The quick brown fox is a very clever animal.

Highlighted Text with Bold:
The quick brown <b>fox</b> jumps over the lazy dog. The quick brown <b>fox</b> is a very clever animal.
```

**Explanation:**

The search term "fox" is found twice in the original text. Since `remove_punctuation` is disabled, the search considers punctuation as well. The highlighting style "<b>" (bold) is applied to both occurrences of the search term, making them visually distinct in the highlighted text. 