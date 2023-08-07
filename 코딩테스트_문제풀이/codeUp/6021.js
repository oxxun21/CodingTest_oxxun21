// https://codeup.kr/problem.php?id=6021

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

console.log(input[0]);
console.log(input[1]);
console.log(input[2]);
console.log(input[3]);
console.log(input[4]);
