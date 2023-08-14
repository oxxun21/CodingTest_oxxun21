const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let n = +input;

while (n !== 0) {
  n = n - 1;
  console.log(n);
}
