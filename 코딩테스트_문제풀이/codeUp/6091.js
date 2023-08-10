const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let d = 1;
while (d % +input[0] !== 0 || d % +input[1] !== 0 || d % +input[2] !== 0) {
  d += 1;
}
console.log(d);
