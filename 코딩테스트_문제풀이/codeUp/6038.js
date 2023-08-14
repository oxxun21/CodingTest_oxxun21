const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

// console.log(input[0]  ** input[1]); 38번 문제
console.log(parseFloat(input[0]) ** parseFloat(input[1])); // 39번 문제
