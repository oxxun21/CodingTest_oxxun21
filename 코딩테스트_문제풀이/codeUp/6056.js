const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = (Boolean(a) && !Boolean(b)) || (!Boolean(a) && Boolean(b));

console.log(c);
