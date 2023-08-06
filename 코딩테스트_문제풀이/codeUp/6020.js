// https://codeup.kr/problem.php?id=6020

const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const result = input ? input.replace("-", "") : "''";

console.log(result);

const result2 = input.split("-");
console.log(result2[0] + result2[1]);

const a = input.indexOf("-");
console.log(input.substring(0, a) + input.substring(a + 1));
