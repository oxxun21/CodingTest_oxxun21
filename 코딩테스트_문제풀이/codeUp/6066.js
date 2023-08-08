const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const arr = input.map(Number);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
