const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
  if (input[i] === "q\r") {
    return;
  }
}

// console.log(input);
// console.log(
//   input.some((elem) => {
//     return elem === "q\r";
//   })
// );
// 이거 왜 \r 이 들어가는지 몰겠음;;;
