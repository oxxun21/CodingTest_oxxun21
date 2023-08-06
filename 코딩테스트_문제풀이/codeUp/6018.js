// https://codeup.kr/problem.php?id=6018

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(":");

const a = input[0];
const b = input[1];

console.log(`${a}:${b}`);
