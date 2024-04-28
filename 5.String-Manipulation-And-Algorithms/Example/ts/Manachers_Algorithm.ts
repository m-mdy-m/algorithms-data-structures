class ManachersAlgorithm {
  text: string;
  processed_text: string;
  C: Array<number>;
  P: Array<number>;
  C_center: number;
  R: number;
  constructor(text: string) {
    this.text = text;
    this.processed_text = `#${this.text.split("").join("#")}#`;
    this.C = new Array(2 * this.processed_text.length + 1).fill(0);
    this.P = new Array(2 * this.processed_text.length + 1).fill(0);
    this.C_center = 0;
    this.R = 0;
  }
  calculate(): Array<number[]>  {
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
          this.processed_text[i - this.P[i] + 1]
      ) {
        this.P[i] += 1;
      }
      if (i + this.P[i] > this.R) {
        this.C_center = i;
        this.R = i + this.P[i];
      }
    }
    const palindrome: Array<number[]> = [];
    for (let i = 0; i < this.processed_text.length - 1; i += 2) {
      if (this.P[i] > 0) {
        const startIndex = (i - this.P[i]) / 2;
        const length = this.P[i];
        palindrome.push([startIndex, length]);
      }
    }
    return palindrome;
  }
}
const textInput = "ABABDABACDABABCABAB";
const manachers = new ManachersAlgorithm(textInput);
const manachersValues = manachers.calculate();

console.log("Text:", textInput);
console.log("Manachers-function:", manachersValues);
console.log("processed_text:", manachers.processed_text);
