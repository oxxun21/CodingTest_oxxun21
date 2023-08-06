// https://codeup.kr/problem.php?id=6017

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

console.log(input, input, input);
