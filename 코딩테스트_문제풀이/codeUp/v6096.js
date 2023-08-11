const q = `0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0`;

// const qArr = q.split("\n").map((i) => i.split(" ").map(Number));
// const coor = ["10 10", "12 12"];

// for (let i = 0; i < coor.length; i++) {
//   const [x, y] = coor[i].split(" ").map(Number);

//   for (let j = 1; j < 20; j++) {
//     if (qArr[j][y] === 0) {
//       qArr[j][y] = 1;
//     } else {
//       qArr[j][y] = 0;
//     }

//     if (qArr[x][j] === 0) {
//       qArr[x][j] = 1;
//     } else {
//       qArr[x][j] = 0;
//     }
//   }
// }

// console.log(qArr);

////////////////////////////////////////////////////////////////////////

// const input = `
// 1 2 3 4 5
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5
// `;

// const n = 2;
// const m = 3;

// // 출력
// // n번째 행 출력
// // n번째 열 출력
// // m번째 행 출력
// // m번째 열 출력

// const a = input
//   .split("\n")
//   .slice(1, 6)
//   .map((i) => i.split(" ").map(Number));

// // for (let i =0; i<a.length; i++){

// // }

// let string = "";
// for (let i = 0; i < a.length; i++) {
//   string = string + " " + a[i][n];
// }
// console.log(string);

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i][m]);
// }

let input = `1 2 3 4 5
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5
4`;

// 출력
// n = 4;
// 4번째 열을 뽑으면
// 4 2 3 4 5 -> 0 2 3 0 5
// n = 3;
// 3번째 열을 뽑으면
// 3 2 3 4 5 -> 0 2 0 4 5
// n번째 열을 뽑고 뽑은 열에서 n과 같은 수는 0으로 만들기

const a = input.split("\n").map((i) => i.split(" ").map(Number));

let n = Number(a[5]);

let string = "";
for (let i = 0; i < a.length - 1; i++) {
  if (a[i][n - 1] === n) {
    string = string + 0;
  } else {
    string = string + a[i][n - 1];
  }
}
console.log(string);
