const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let res = (input[0] * input[1] * input[2]) / 8 / 1024 / 1024;

console.log(`${res.toFixed(2)} MB`);
