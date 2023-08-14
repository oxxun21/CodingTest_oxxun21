const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [n, input] = require("fs").readFileSync(filePath).toString().trim().split("\n");
const inputArr = input.trim().split(" ");

// const numarr = inputArr.reduce((a, c) => {
//   a[c] = (a[c] || 0) + 1;
//   return pv;
// }, {});

// console.log(numarr);

const a = +n;
const numArr = inputArr.map(Number);
const d = Array(23).fill(0);

for (let i = 0; i < a; i++) {
  d[numArr[i]] += 1;
}
console.log(d);
// 맨 앞에 0은 뭐지?????????????
