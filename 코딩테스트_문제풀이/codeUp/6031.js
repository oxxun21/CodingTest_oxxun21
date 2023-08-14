const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const num = parseInt(input);

console.log(String.fromCharCode(num));
