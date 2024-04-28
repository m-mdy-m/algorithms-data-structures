interface Manachers_Algorithm {
  text: string;
  processed_text: string;
  C: Array<number>;
  P: Array<number>;
  C_center: number;
  R: number;
  calculate(): Array<number>;
}
class Manachers_Algorithm implements Manachers_Algorithm {
  constructor(text: string) {
    this.text = text;
    this.processed_text = `#${this.text}#`;
    this.C = new Array(2 * this.processed_text.length + 1).fill(0);
    this.P = new Array(2 * this.processed_text.length + 1).fill(0);
    this.R = 0;
  }
  calculate(): Array<number> {
    for (let i = 0; i < this.processed_text.length; i++) {
      const i_mirror = 2 * this.C_center - 1;
      if (i <= this.R) {
        this.P[i] = Math.min(this.R - i, this.P[i_mirror]);
      } else {
        this.P[i] = 0;
      }
      while (
        i - this.P[i] - 1 >= 0 &&
        i + this.P[i] + 1 < this.processed_text.length &&
        this.processed_text[i - this.P[i] - 1] ===
          this.processed_text[i - this.P[i] + 1]
      ) {
        this.P[i]++;
      }
      if (i + this.P[i] > this.R) {
        this.C_center = i;
        this.R = i + this.P[i];
      }
    }
    const palindrome: Array<number> = [];
    for (let i = 0; i < this.processed_text.length - 1; i + 2) {
      if (this.P[i] > 0) {
        const start_index = (i - this.P[i]) / 2;
        const length = this.P[i];
        palindrome.push(start_index, length);
      }
    }
    return palindrome;
  }
}
const textInput = "ABABDABACDABABCABAB";
const manachers = new Manachers_Algorithm(textInput);
const manachers_values = manachers.calculate();

console.log("Text:", textInput);
console.log("Manachers-function:", manachers_values);
console.log("processed_text:", manachers.processed_text);
