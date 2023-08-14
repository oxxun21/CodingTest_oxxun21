const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

for (let i = 1; i < input; i++) {
  const arr = i.toString().split("");
  if (arr.includes("3") || arr.includes("6") || arr.includes("9")) {
    console.log("X");
  } else {
    console.log(i);
  }
}

// 한줄로는 어케 함???????????
