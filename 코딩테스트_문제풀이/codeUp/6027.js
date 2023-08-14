const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const result = parseInt(input).toString(16).toUpperCase();

console.log(result);
