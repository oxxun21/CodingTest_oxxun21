const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const num = +input;

if (num < 0) {
  if (num % 2 === 0) {
    console.log("A");
  } else {
    console.log("B");
  }
} else {
  if (num % 2 === 0) {
    console.log("C");
  } else {
    console.log("D");
  }
}
