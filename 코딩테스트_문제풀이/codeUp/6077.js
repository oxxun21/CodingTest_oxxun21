const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let n = +input;
let s = 0;
for (let i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    s = s + i;
  }
}
console.log(s);
