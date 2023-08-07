// https://codeup.kr/problem.php?id=6023

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(":");

console.log(input[1]);
