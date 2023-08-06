// https://codeup.kr/problem.php?id=6012

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const a = input[0];
const b = input[1];
console.log(parseInt(a));
console.log(parseInt(b));
