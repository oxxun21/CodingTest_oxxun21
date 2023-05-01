let a = +prompt('수 입력1');
let b = +prompt('수 입력2');
let result = a + b
alert(result);

function readNumber(){
  let num;
  do{
    num = prompt('숫자 입력');
  } while (!isFinite(num)){
    if (num === null || num === "") return null;
    return +num;
  }
}
alert(`read: ${readNumber()}`);

function random(min, max) {
  return Math.floor(min + Math.random() * (max - min))
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
// => 더 정확한 random을 위해 보완이 필요함


function ucFirst(str){
  return str[0].toUpperCase() + str.slice(1); // 첫글자 자르고 그 앞에 대문자로 변환한 글자 더함
}
console.log(ucFirst("john"));

function checkSpam(str){
  let lower = str.toLowerCase();

  return lower.includes('viagra') || lower.includes('xxx');
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

function truncate(str, maxlength){
  return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '...' : str;
}

truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);

function extractCurrencyValue(str){
  return Number(str.slice(1));
  // return +str.slice(1);
}

alert( extractCurrencyValue('$120'));

// 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
// "Rock-n-Roll"을 배열 끝에 추가합니다.
// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
// 배열의 첫 번째 요소를 꺼내서 출력합니다.
// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
const styles = ["Jazz", "Blues"];
styles.push = "Rock-n-Roll";
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap","Reggae");

function sumInput(){
  let nums = [];
  while (true){
    let value = prompt('숫자를 입력하세요');
    if (value === "" || value === null || !isFinite(value)) break;
    nums.push(+value);
  }

  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}
alert(sumInput());