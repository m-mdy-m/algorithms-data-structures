class ZAlgorithm {
  constructor(text) {
    this.text = text;
    this.n = text.length;
    this.z_values = new Array(this.n).fill(0);
  }

  calculate() {
    let l = 0,
      r = 0;
    for (let i = 1; i < this.n; i++) {
      if (i <= r) {
        let k = i - l;
        if (this.text[i] === this.text[k]) {
          this.z_values[i] = Math.min(r - i + 1, this.z_values[k]);
        } else {
          l = i;
          r = i + this.z_values[k] - 1;
        }
      } else {
        l = r = i;
        while (r < this.n && this.text[r] === this.text[r - 1]) {
          r += 1;
        }
        this.z_values[i] = r - l - 1;
      }
    }
    return this.z_values;
  }
}
const text = "ABABDABACDABABCABAB";
const z_algorithm = new ZAlgorithm(text);
const z_values = z_algorithm.calculate();

console.log("Text:", text);
console.log("Z-function:", z_values);
