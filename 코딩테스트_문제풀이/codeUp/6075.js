const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let n = +input;
for (let i = 0; i <= n; i++) {
  console.log(i);
}
