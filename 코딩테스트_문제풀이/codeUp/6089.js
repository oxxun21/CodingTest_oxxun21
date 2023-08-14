const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let a = +input[0];
const b = +input[1];
const c = +input[2];
let i = 1;

while (i < c) {
  i++;
  a = a * b;
}
console.log(a);
