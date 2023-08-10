const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let a = +input[0];
let n = 1;

while (true) {
  a = a * +input[1] + +input[2];
  n = n + 1;

  if (n === +input[3]) {
    console.log(a);
    break;
  }
}
