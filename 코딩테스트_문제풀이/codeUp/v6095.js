const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [n, input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let d = [];
for (let i = 0; i < 20; i++) {
  d.push([]);
  for (let j = 0; j < 20; j++) {
    d[i].push(0);
  }
}

// 좌표 어케 넣는겨

for (let i = 1; i <= 19; i++) {
  for (let j = 1; j <= 19; j++) {
    process.stdout.write(d[i][j] + " ");
  }
  console.log();
}
