class Manachers_Algorithm:
    def __init__(self, text):
        self.text = text
        self.processed_text = "#" + "#".join(self.text) + "#"
        self.C = [0] * (2 * len(self.processed_text) + 1)  
        self.P = [0] * (2 * len(self.processed_text) + 1) 
        self.C_center = 0
        self.R = 0
    def calculate(self):
        for i in range(1, len(self.processed_text) - 1):
            i_mirror = 2 * self.C_center - i
            if i <= self.R:
                self.P[i] = min(self.R - i, self.P[i_mirror])  
            else:
                self.P[i] = 0
            
            while (i - self.P[i] - 1 >= 0 and i + self.P[i] + 1 < len(self.processed_text) and
                   self.processed_text[i - self.P[i] - 1] == self.processed_text[i + self.P[i] + 1]):
                self.P[i] += 1

            if i + self.P[i] > self.R:
                self.C_center = i
                self.R = i + self.P[i]

        palindromes = []
        for i in range(1, len(self.processed_text) - 1, 2):
            if self.P[i] > 0:
                start_index = (i - self.P[i]) // 2
                length = self.P[i]
                palindromes.append((start_index, length))

        return palindromes

if __name__ == "__main__":
    text = "ABABDABACDABABCABAB"
    manachers = Manachers_Algorithm(text)
    manachers_values = manachers.calculate()

    print("Text:", text)
    print("Manachers-function:", manachers_values)

"""

"""