const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const value = input.charCodeAt() + 1;

console.log(String.fromCharCode(value));
