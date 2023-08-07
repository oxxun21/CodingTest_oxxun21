const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

// 40번
console.log(parseInt(input[0] / input[1]));

// 41번
console.log(parseInt(input[0] % input[1]));
