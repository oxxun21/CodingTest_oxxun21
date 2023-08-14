const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

if (input === "A") {
  console.log("best");
} else if (input === "B") {
  console.log("good");
} else if (input === "C") {
  console.log("run");
} else if (input === "D") {
  console.log("slowly");
} else {
  console.log("what");
}
