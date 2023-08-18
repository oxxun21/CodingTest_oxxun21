const fs = require("fs")
let input = fs.readFileSync("/dev/stdin", "utf8").toString().split("\n");

const arr = input.map((i) => i.split(" ").map(Number));

for (let i = 1; i <= input[0]; i++) {
  let arr = input[i].split(" ").map(Number)
  console.log(arr[0] + arr[1]);
}