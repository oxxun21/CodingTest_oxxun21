const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const a = parseFloat(input[0]);
const b = parseFloat(input[1]);

console.log(a + b);
