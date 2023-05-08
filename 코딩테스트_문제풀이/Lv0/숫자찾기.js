// 문제 설명
// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < num < 1,000,000
// 0 ≤ k < 10
// num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

function solution(num, k) {   
  return String(num).indexOf(k) + 1 ||  -1;
}

// 문자로 바꿔서 k랑 비교 indexOf로 위치 찾을 수 있음
// 1번째~ 순이라 + 1 필요
// indexOf에 값이 없을 때 -1이 반환되지만 +1 떄문에 출력 X
// 값이 없는 경우 || 로 -1 출력되게 작성