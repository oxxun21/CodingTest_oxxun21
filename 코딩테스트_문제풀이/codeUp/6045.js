const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const add = +input[0] + +input[1] + +input[2];
const avg = parseFloat(add / input.length).toFixed(2);

console.log(add, avg);
