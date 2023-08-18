const fs = require("fs")
let input = fs.readFileSync("/dev/stdin", "utf8").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let arr = input[i].split(" ").map(Number)
  console.log(arr[0] + arr[1]);
}
