const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// console.log(input.charCodeAt());
// console.log("a".charCodeAt());
// console.log(String.fromCharCode(101));

let n = input.charCodeAt();
let arr = [];
while (n >= 97) {
  arr.push(String.fromCharCode(n));
  n = n - 1;
}
console.log(arr.sort());
// 문자열 한줄로는 어떻게 만들지????????????
