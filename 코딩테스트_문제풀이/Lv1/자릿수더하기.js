// 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

function solution(n){
  return (n + '').split("").reduce((a, c) => parseInt(a) + parseInt(c), 0);
}

// 마지막 테스트 케이스 오류 : reduce()의 초기값을 지정해주지 않아서, 초기값이 문자열로 더해지는 바람에 생기는 오류