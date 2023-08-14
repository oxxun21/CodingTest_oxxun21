const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

for (let i = 1; i <= input; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
