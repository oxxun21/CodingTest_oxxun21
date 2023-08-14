const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let n = +input;
let s = 0;
for (let i = 0; i < n; i++) {
  s = s + i;
  if (s >= n) {
    console.log(i);
    return;
  }
}
