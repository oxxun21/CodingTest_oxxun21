const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [n, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const newArray = input.map((str) => str.replace(/\r$/, ""));

let d = [];
for (let i = 0; i < 20; i++) {
  d.push([]);
  for (let j = 0; j < 20; j++) {
    d[i].push(0);
  }
}

for (let i = 0; i < newArray.length; i++) {
  const [x, y] = newArray[i].split(" ");
  d[x][y] = 1;
}

for (let i = 1; i < 20; i++) {
  for (let j = 1; j < 20; j++) {
    process.stdout.write(d[i][j] + " ");
  }
  console.log();
}
