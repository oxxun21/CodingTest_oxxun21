// 문제 설명
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 10 ≤ price ≤ 1,000,000
// price는 10원 단위로(1의 자리가 0) 주어집니다.
// 소수점 이하를 버린 정수를 return합니다.

// function solution(price) {
//   if (price >= 100000) {
//     return Math.floor(price - price * 0.05);
//   } else if (price >= 300000) {
//     return Math.floor(price - price * 0.1);
//   } else if (price >= 500000) {
//     return Math.floor(price - price * 0.2);
//   }
//   return price;
// }

// if-else if-else 문 : 조건식을 차례대로 판별해 내려가면서 가장 처음으로 조건을 만족하는 경우의 코드를 실행
// 위 코드는 10만원만 넘어가면 바로 리턴되기 때문에 30만원 ~ 50만원 계산은 이루어지지 않는다. => 통과 X

function solution(price) {
  if (price >= 500000) {
    return Math.floor(price - price * 0.2);
  } else if (price >= 300000) {
    return Math.floor(price - price * 0.1);
  } else if (price >= 100000) {
    return Math.floor(price - price * 0.05);
  }
  return price;
}