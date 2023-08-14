const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let s = 0;
let n = 0;
while (true) {
  s += n;
  n += 1;
  if (s >= input) break;
}

console.log(s);
