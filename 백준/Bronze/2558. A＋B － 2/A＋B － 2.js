const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

console.log(parseInt(input[0]) + parseInt(input[1]));
