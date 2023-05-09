// 18-01
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function(num){
  return ++num;
};

const decrease = function(num){
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const auxs = {increase, decrease};

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux){
  let num = 0;

  return function(){
    num = aux(num);
    return num;
  };
}

// 3. 함수는 매개변수에 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -

// 18-04
function multiply(x, y){
  console.log(arguments);
  return x * y;
}

console.log(multiply());  // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2));  // 2
console.log(multiply(1, 2, 3)); // 2

// 18-06
function sum(){
  let res = 0;

  // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문을 순회할 수 있다.
  for(let i = 0; i < arguments.length; i++){
    res += arguments[i];
  }
  return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3));  // 6

// 18-07
function sum(){
  // arguments 객체를 배열로 변환
  const array = Array.prototype.slice.call(arguments);
  return array.reduce((per, cur) => {
    return per + cur;
  }, 0);
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5));  // 15

// 18-08
// Rest parameter
function sum(...args){
  return args.reduce((per, cur) => per + cur, 0);
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5));  // 15

// 18-09
function foo(func){
  return func();
}

function bar(){
  return 'caller: ' + bar.caller;
}

console.log(foo(bar));  // caller: null
console.log(bar()); // undefined

// 18-10
function foo(){}
console.log(foo.length);

function bar(x){
  return x;
}
console.log(bar.length);  // 1

function baz(x, y){
  return x * y;
}
console.log(baz.length);  // 2

// 18-11
// 기명 함수 표현식
var namedFunc = function foo(){};
console.log(namedFunc.name);  // foo

// 익명 함수 표현식
var anonymousFunc = function(){};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name);  // anonymousFunc

// 함수 선언문
function bar(){};
console.log(bar.name);  // bar

// 18-12
const obj = { a : 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype 이다.
console.log(obj.__proto__ === Object.prototype);  // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('__proto__')); // false

// 18-13
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function (){}).hasOwnProperty('prototype');  // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); // false