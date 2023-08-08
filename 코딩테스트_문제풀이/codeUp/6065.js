const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const arr = input.map(Number);

if (arr[0] % 2 === 0) console.log(arr[0]);
if (arr[1] % 2 === 0) console.log(arr[1]);
if (arr[2] % 2 === 0) console.log(arr[2]);

for (let i = 0; i < arr.length + 1; i++) {
  if (arr[i] % 2 === 0) console.log(arr[i]);
}
