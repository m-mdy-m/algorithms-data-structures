function encodeRLE(input: string): string {
  let encoded = "";
  let count = 1;

  for (let i = 1; i <= input.length; i++) {
    if (i < input.length && input[i] === input[i - 1]) {
      count++;
    } else {
      if (count === 1) {
        encoded += input[i - 1];
      } else if (count === 255) {
        encoded += "255" + String.fromCharCode(count) + input[i - 1];
      } else {
        encoded += count + input[i - 1];
      }
      count = 1;
    }
  }
  return encoded;
}
function decodeRLE(encoded: string): string {
  let decoded = "";
  let i = 0;

  while (i < encoded.length) {
    if (
      encoded[i] === "2" &&
      encoded[i + 1] === "5" &&
      encoded[i + 2] === "5"
    ) {
      let count = encoded.charCodeAt(i + 3);
      let character = encoded[i + 4];
      decoded += character.repeat(count);
      i += 5;
    } else if (!isNaN(parseInt(encoded[i]))) {
      let count = "";
      while (i < encoded.length && !isNaN(parseInt(encoded[i]))) {
        count += encoded[i];
        i++;
      }
      let character = encoded[i];
      decoded += character.repeat(parseInt(count));
      i++;
    } else {
      // Handle single characters (no run length)
      decoded += encoded[i];
      i++;
    }
  }

  return decoded;
}

function getSizeInBits(str: string): number {
  return str.length * 8; // 1 character = 1 byte = 8 bits
}
let input = "aaabccdddd";
let encoded = encodeRLE(input);
let decoded = decodeRLE(encoded);
console.log("Original input:", input);
console.log("Size before compression:", getSizeInBits(input));
console.log("Encoded output:", encoded);
console.log("Size after compression:", getSizeInBits(encoded));
console.log("Decoded output:", decoded);
console.log("Size Decode:", getSizeInBits(decoded));
console.log("======================================");
