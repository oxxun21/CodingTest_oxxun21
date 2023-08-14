const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const num = +input;

if (num === 12 || num === 1 || num === 2) {
  console.log("winter");
} else if (num === 3 || num === 4 || num === 5) {
  console.log("spring");
} else if (num === 6 || num === 7 || num === 8) {
  console.log("summer");
} else {
  console.log("fall");
}
