const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const num = +input;

if (num >= 90) {
  console.log("A");
} else if (num >= 70) {
  console.log("B");
} else if (num >= 40) {
  console.log("C");
} else {
  console.log("D");
}
