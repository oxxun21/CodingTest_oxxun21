const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const a = input[0];
const b = input[1];
const c = input[2];

for (let i = a; i <= c; i++) {
  i = i + b;
  console.log(i);
}
