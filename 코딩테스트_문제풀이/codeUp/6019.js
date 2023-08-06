// https://codeup.kr/problem.php?id=6019

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(".");

const a = input[0];
const b = input[1];
const c = input[2];
console.log(`${c}-${b}-${a}`);
