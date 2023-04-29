let i = 0;
while (++i < 5) console.log(i);
// 1,2,3,4 => ++i 이기 때문에 5는 항상 증가 이후의 값과 비교
// i = 4 이후에 i의 값이 5로 증가하면 while (5 < 5) 안의 비교가 실패 (탈출)

let j = 0;
while (j++ < 5) console.log(j);
// 1,2,3,4,5 => j++는 j를 증가시키지만 기존값을 반환
// 첫번째 반복시 (0 < 5)로 시작하지만 console.log에는 j가 이미 증가한 이후이기 때문에 1부터 출력
// j = 4 일 때 전위 연산자(++i)은 값이 먼저 증가하기 때문에 5와 비교하지만, 후위 연산(j++)은 기존 값인 4가 비교하게 됨 => 그 후 while (5 < 5)가 되어 5까지 출력

for (let i = 0; i < 5; ++i) console.log(i);
for (let i = 0; i < 5; i++) console.log(i);
// 0,1,2,3,4 
// 1. 모든 작업이 시작되기 전 i = 0
// 2. i < 5 조건이 맞는지 확인
// 3. 조건이 true면 본문 실행 => 이후 증감 실행 (증감연산자가 반환하는 값은 쓰이지 않기 때문에 전위, 후위의 차이가 없음)

for (i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

let k = 0;
while (k < 3) {
  console.log(`number ${k}!`);
  k++;
}

let num;
do {
  num = prompt('100을 초과하는 값을 넣어주세요', 0);
} while (num <= 100 && num)
// num이 100을 초과하는지 확인 && num이 빈 문자열인지 확인

let n = 10;
next:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue next;  // 소수가 아닐 시 다음 i로 넘어가야함
  }
  console.log(i);
}

if (browser === 'Edge') {
  console.log("Edge를 사용하고 계시네요!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  console.log("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
} else {
  console.log('현재 페이지가 괜찮아 보이길 바랍니다!');
}

let a = +prompt('a?', '');
switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break; 
  case 2:
  case 3:
    console.log('2,3');
    break;
}