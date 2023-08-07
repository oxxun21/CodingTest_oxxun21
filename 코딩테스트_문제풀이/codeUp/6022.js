// https://codeup.kr/problem.php?id=6022

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

console.log(`${input[0]}${input[1]} ${input[2]}${input[3]} ${input[4]}${input[5]}`);
