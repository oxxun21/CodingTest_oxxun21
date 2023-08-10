const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [n, input] = require("fs").readFileSync(filePath).toString().trim().split("\n");
const inputArr = input.trim().split(" ");

+inputArr.sort((a, b) => a - b);
console.log(inputArr[0]);
