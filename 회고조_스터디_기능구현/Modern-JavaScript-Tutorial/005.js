const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let schedule = {};
schedule["8:30"] = "get up";

function isEmpty(obj){
  for (const key in obj) {
    return false;             // return 키워드를 사용하면 함수 즉시 종료!!!
  }
  return true;
}

alert(isEmpty(schedule)); // true
alert(isEmpty(schedule)); // false

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (const key in salaries) {
  sum += salaries[key]
}
console.log(sum);

// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
  for (const key in obj) {
    if(typeof(obj[key]) === 'number'){
      obj[key] *= 2
    }
  }
}

multiplyNumeric(menu);