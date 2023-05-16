// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

function solution(s) {
  if (s.length === 4 || s.length === 6){
      return s.split("").every(a => !isNaN(a));
  } else {
      return false;
  }
}
// every(() => {}) : 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트, Boolean 값 반환

// 정규표현식
function solution(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}


function solution(s){
    return ((s.length == 4 || s.length == 6) && isNaN(s) == false) ? true : false;
}