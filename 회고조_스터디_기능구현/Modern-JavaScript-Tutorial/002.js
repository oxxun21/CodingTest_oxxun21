const question = prompt('자바스크립트의 공식 이름은 무엇일까요?');
if(question === 'ECMAScript'){
  alert('정답입니다');
} else {
  alert('모르셨나요? 정답은 ECMAScript 입니다!');
}

let input = prompt('숫자를 입력해주세요');
if(input > 0){
  alert(1);
} else if(input < 0){
  alert(-1);
} else {
  alert(0);
}

let result = (a + b < 4) ? '미만' : '이상';

let message = login == '직원' ? '안녕하세요.' : 
              (login == '임원') ? '환영합니다.' : 
              (login == '') ? '로그인이 필요합니다.' :
              '';

if(age >= 14 && age <= 90){}
if(age < 14 || age > 90){}

let login = prompt('아이디를 입력해주세요.');
if (login === "Admin"){
  let password = prompt('비밀번호를 입력해주세요.');
  if (password === "TheMaster"){
    alert('환영합니다!')
  } else if (password == "" || password == null) {
    alert('취소되었습니다.')
  } else {
    alert('인증에 실패하였습니다.')
  }
} else if (password == "" || password == null) {
  alert('취소되었습니다.')
} else {
  alert('인증되지 않은 사용자입니다.');
}