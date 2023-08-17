const input = `1 1 1 1 1 1 1 1 1 1
1 0 0 1 0 0 0 0 0 1
1 0 0 1 1 1 0 0 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 1 0 1 0 1
1 0 0 0 0 1 2 1 0 1
1 0 0 0 0 1 0 0 0 1
1 0 0 0 0 0 0 0 0 1
1 1 1 1 1 1 1 1 1 1`;

const arr = input.split("\n").map((i) => i.split(" ").map(Number));
let x = 1,
  y = 1;

while (true) {
  if (arr[x][y] === 0) {
    arr[x][y] = 9;
  } else if (arr[x][y] === 2) {
    arr[x][y] = 9;
    break;
  }

  if (arr[x][y + 1] !== 1) {
    y += 1;
  } else if (arr[x + 1][y] !== 1) {
    x += 1;
  } else {
    break;
  }
}

arr.forEach((item) => console.log(item.join(" ")));

/**
 * 한스텝에서 해야하는 일에 대해 정리
 * 현재 위치가 0인지 2인지 판별하기
 * * 0이야 -> 현재위치를 9로 바꿔
 * * 2야 -> 현재위치를 9로 바꾸고 멈춰
 * 오른쪽이 벽인지 -> 벽이아니야 -> 오른쪽으로 이동
 * * 벽이야 -> 아래가 벽인지 -> 아래로 이동
 * * * 아래가 벽이야 -> 멈춰
 * break
 */
