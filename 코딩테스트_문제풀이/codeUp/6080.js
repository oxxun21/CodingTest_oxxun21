const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let n = +input[0];
let m = +input[1];

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    console.log(i, j);
  }
}
