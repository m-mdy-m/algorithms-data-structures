const { close, createInterface } = require("readline/promises");
(async () => {
  const { question } = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const interger = +question("An integer");
  const output = interger % 2 === 0 ? "even" : "odd";
  console.log(output);
  close();
})();
