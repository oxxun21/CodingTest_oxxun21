// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// my_string에는 숫자가 한 개 이상 포함되어 있습니다.
// my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.

function solution(my_string) {
  let answer = my_string.split("").map(Number).filter((v) => !Number.isNaN(v)).sort((a, b) => a - b);
  return answer;
}

// 1. split("") 배열로 만들어서 하나씩 구별해두기
// 2. map(Number) string으로 되어있는 배열 요소 숫자로 모두 변환
// 3. filter((v) => !Number.isNaN(v)) 요소 순회하면서 NaN이 아닌 것들 골라냄 (number만 구별)
// 4. sort((a, b) => a - b) 숫자 오름차순 정렬