// confirm에 들어온 값은 기본적으로 문자열로 저장
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('보호자의 동의를 받으셨나요?');
  }
}

function checkAge(age) {
  return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}

function checkAge(age) {
  return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

function min(a, b){
  return a < b ? a : b; 
}
min(2, 5)
min(3, -1)
min(1, 1)

function pow(x, n){
  let result = x;
  for(let i = 1; i < n; i++){
    result *= x
  } 
  return result;
}
let x = prompt('x');
let n = prompt('n');
if (n < 1){
  alert('n은 1 이상 자연수여야 합니다');
} else {
  alert(pow(x, n));
}

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);

ask("동의하십니까?", 
() => alert("동의하셨습니다."),
() => alert("취소 버튼을 누르셨습니다.")
);