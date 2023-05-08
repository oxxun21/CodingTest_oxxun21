// 문제 설명
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 중복된 원소는 없습니다.
// 1 ≤ emergency의 길이 ≤ 10
// 1 ≤ emergency의 원소 ≤ 100

function solution(emergency) {
  let sort = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sort.indexOf(v) + 1);
}

// sort 변수에 emergency를 복사한 배열을 정렬
// emergency.map를 사용해서 indexOf문의 값을 결과로 배열을 만듬
// emergency 요소들을 하나씩 v에 넣고 sort에는 몇 번째 순위인지 (indexOf) 찾아서 반환