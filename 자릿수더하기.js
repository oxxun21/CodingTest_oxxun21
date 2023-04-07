// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000

function solution(n) {
  let answer =  String(n).split("").reduce((a,c) => a + c * 1, 0)
  return answer;
}

// 정수로 들어오는 것을 문자열로 바꾸어야 split 가능
// 더하려면 숫자가 되어야 하기 때문에 * 1로 형변환