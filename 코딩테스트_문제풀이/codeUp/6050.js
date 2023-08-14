const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const result = +input[0] <= +input[1] ? "True" : "False";
console.log(result);
