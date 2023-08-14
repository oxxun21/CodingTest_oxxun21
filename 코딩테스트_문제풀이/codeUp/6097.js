const input = `5 5
3
2 0 1 1
3 1 2 3
4 1 2 5`;

const qArr = input.split("\n").map((i) => i.split(" ").map(Number));

const result = [];

for (let i = 0; i < qArr[0][0]; i++) {
  result.push([]);
  for (let j = 0; j < qArr[0][1]; j++) {
    result[i].push(0);
  }
}
// 격자판 만듬

// for (let i = 0; i < qArr[1]; i++) {
//   let z = qArr.slice(2)[i][0];
//   let a = qArr.slice(2)[i][1];
//   let x = qArr.slice(2)[i][2];
//   let y = qArr.slice(2)[i][3];
//   for (let j = 0; j < z; j++) {
//     if (a === 0) {
//       result[x - 1][y - 1 + j] = 1;
//     } else {
//       result[x - 1 + j][y - 1] = 1;
//     }
//   }
/////////////////////////////////////////////////////////////////
//   // 오답
//   // for (let j = 0; j < result.length; j++) {
//   //   if (result[j][x - 1] === 0 && result[y - 1][j] === 0) {
//   //     if (a === 0) {
//   //       for (let k = 0; k < z; k++) {
//   //         result[y - 1][k] = 1;
//   //       }
//   //     } else {
//   //       for (let k = 0; k < z; k++) {
//   //         result[k][z - 1] = 1;
//   //       }
//   //       // for (let k = 0; k < a; k++) {
//   //       //   result[k][x - 1] = 1;
//   //       // }
//   //     }
//   //   }
//   // }
// }

for (let i = 0; i < qArr[1]; i++) {
  let [z, a, x, y] = qArr.slice(2)[i];
  x -= 1;
  y -= 1;

  if (a === 0) {
    for (let j = y; j < z + y; j++) {
      result[x][j] = 1;
    }
  } else {
    for (let j = x; j < z + x; j++) {
      result[j][y] = 1;
    }
  }
}
console.log(result);
