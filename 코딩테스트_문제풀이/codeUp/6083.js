const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let a = input[0];
let b = input[1];
let c = input[2];

const leng = [];

for (let i = 0; i < a; i++) {
  for (let j = 0; j < b; j++) {
    for (let k = 0; k < c; k++) {
      leng.push([i, j, k]);
      console.log(i, j, k);
    }
  }
}
console.log(leng.length);
