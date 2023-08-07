const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [n, input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

console.log(input.repeat(n));
