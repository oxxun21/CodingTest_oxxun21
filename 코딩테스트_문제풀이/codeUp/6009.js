// https://codeup.kr/problem.php?id=6009

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

console.log(parseInt(input));
