const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [n, input] = require("fs").readFileSync(filePath).toString().trim().split("\n");
const inputArr = input.trim().split(" ");

console.log(inputArr.reverse());
