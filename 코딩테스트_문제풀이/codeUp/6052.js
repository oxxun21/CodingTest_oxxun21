const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

console.log(parseInt(input[0]) === 0 ? "False" : "True");
