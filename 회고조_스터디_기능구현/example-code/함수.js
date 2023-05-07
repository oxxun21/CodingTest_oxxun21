// f(x, y) = x + y
function add(x, y){
  return x + y;
}

// f(2, 5) = 7
add(2 ,5);  // 7


// 함수 정의
function add(x, y){
  return x + y;
}

// 함수 호출
let result = add(2, 5);
// 함수 add에 인수 2, 5를 전달하면서 호출하면 반환값 7을 반환한다.
console.log(result);

// 변수에 함수 리터럴 할당
let f = function add(x, y){
  return x + y;
};


// 함수 선언문
function add(x, y){
  return x + y;
}

// 함수 표현식
let add = function(x, y){
  return x + y;
}

// Function 생성자 함수 
let add = new Function('x', 'y', 'return x + y');

// 화살표 함수
let add = (x, y) => x + y


// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
let add = function add(x, y){
  return x + y;
};

// 함수 호출
console.log(add(2, 5));   // 7


// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {console.log('foo');}
foo();  // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar(){console.log('bar');});
bar();  // Uncaught ReferenceError: bar is not defined


let add = function(x, y){
  return x + y;
};

console.log(add(2, 5));


// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // Uncaught TypeError: sub is not a function

// 함수 선언문
function add(x, y){
  return x + y;
};

// 함수 표현식
var sub = function add(x, y){
  return x + y;
};


let add1 = (function (){
  let a = 10;
  return function(x, y){
    return x + y + a;
  };
}());

console.log(add1(1, 2));  // 13

let add2 = (function (){
  let a = 10;
  return new Function('x', 'y', 'return x + y + a;');
}());

console.log(add2(1, 2));  // Uncaught ReferenceError: a is not defined


const add = (x, y) => x + y;
console.log(add(2, 5)); // 7


function add(x, y){
  return x + y;
};

console.log(add(2));  // NaN

function add(x, y){
  return x + y;
};

console.log(add(2, 5, 10));  // 7

function add(x, y){
  console.log(arguments);   // Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  return x + y;
};

console.log(add(2, 5, 10)); 


// 코드 상으로는 어떤 타입의 인수를 전달해야 하는지, 어떤 타입의 값을 반환하는지 명확하지 않다.
function add(x, y){
  return x + y;
};

console.log(add(2));  // NaN
console.log(add('a', 'b')); // 'ab'


function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number'){
    // 매개변수를 통해 전달된 인수의 타입이 타입이 부적절한 경우 에러 발생
    throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
  }

  return x + y;
}

console.log(add(2));  // TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.

function add(a, b, c){
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add(1, 2, 3));  // 6
console.log(add(1, 2));   // 3
console.log(add(1));    // 1
console.log(add());    // 0

function add(a = 0, b = 0, c = 0){
  return a + b + c;
}

console.log(add(1, 2, 3));  // 6
console.log(add(1, 2));   // 3
console.log(add(1));    // 1
console.log(add());    // 0


function multiply(x, y){
  return x * y; // 반환문
};

// 함수 호출은 반환값으로 평가된다.
let result = multiply(3, 5);
console.log(result);  // 15

function multiply(x ,y){
  return x + y; // 반환문
  // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
  console.log('실행되지 않는다.');
}

console.log(multiply(3, 5));  // 15

function foo(){
  return;
}

console.log(foo());   // undefined


// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달 받는다.
function changeVal(primitive, obj){
  primitive += 100;
  obj.name = 'Kim';
}

// 외부 상태
let num = 100;
let person = { name: 'Lee' };

console.log(num); // 100
console.log(person);  // {name: 'Lee'}

// 원시 값은  값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person);  // {name: 'Kim'}


// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있고 인수를 전달할 수 있다.
let res = (function(){
  let a = 3;
  let b = 5;
  return a + b;
}());

console.log(res); // 15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function(a, b){
  return a + b;
}(3, 5));

console.log(res); // 15


// 12-43
// 10부터 0까지 출력하는 함수
function countdown(n){
  for(let i = n; i >= 0; i--) console.log(i);
}

countdown(10);

// 12-44
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);  // 재귀 호출
}

countdown(10);

// 12-45
// 재귀 함수로 팩토리얼 구현
// 팩토리얼은 1부터 자신까지의 모든 양의 정수의 곱이다.
function factorial(n){
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춤
  if (n <= 1) return 1;
  // 재귀 호출
  return n * factorial(n - 1);
}

console.log(factorial(0));  // 0! = 1
console.log(factorial(1));  // 1! = 1
console.log(factorial(2));  // 2! = 2 * 1 = 2
console.log(factorial(3));  // 3! = 3 * 2 * 1 = 6
console.log(factorial(4));  // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5));  // 5! = 5 * 4 * 3 * 2 * 1 = 120

// 12-47
// factorial while문으로 구현
function factorial(n) {
  if (n <= 1) return 1;

  let res = n;
  while(--n) res *= n;
  return res;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3)); 
console.log(factorial(4));
console.log(factorial(5));

// 12-48
function outer(){
  let x = 1;

  // 중첩 함수
  function inner(){
    let y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }
  inner();
}
outer();


// 12-49
// 어떤 일을 반복 수행하는 함수
function repeat1(n){
  for(let i = 0; i < n; i++) console.log(i);
}

repeat1(5);  // 0 1 2 3 4

// i가 홀수일 때만 출력
function repeat2(n){
  for(let i = 0; i < n; i++){ 
    if (i % 2) console.log(i);
  }
}

repeat2(5);  // 1 3

// 12-51
function repeat(n, f){
  for(let i = 0; i < n; i++){
    f(i);   // i를 전달하면서 f를 호출
  }
}

let logAll = function(i){
  console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll);  // 0 1 2 3 4

let logOdds = function(i){
  if(i % 2) console.log(i);
}

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds);  // 1 3

// 12-52
// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function(i){
  if(i % 2) console.log(i);
})  // 1 3

// 12-53
// logOdds 함수는 단 한 번만 생성된다.
let logOdds = function(i){
  if(i % 2) console.log(i);
};

// 고차 함수에 함수 참조를 전달
repeat(5, logOdds)  // 1 3

// 12-54
// 콜백 함수를 사용한 이벤트 처리
//myButton을 클릭하면 콜백 함수를 실행한다.
document.getElementById('myButton').addEventListener('click', () => {
  console.log('button clicked');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후 메세지를 출력한다.
setTimeout(() => {
  console.log('1초 경과');
}, 1000);

// 12-55
// 콜백 함수를 사용하는 고차 함수 map
let res = [1, 2, 3].map((item) => item * 2);
console.log(res); // [2, 4, 6]

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter((item) => item % 2);
console.log(res); // [1, 3]

// 콜백 함수를 사용하는 고차 함수 reduce
res = [1, 2, 3].reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(res);

// 12-56
let count = 0;  // 현재 카운트를 나타내는 상태

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n){
  return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2

// 12-57
let count = 0;  // 현재 카운트를 나타내는 상태 : increase 함수에 의해 변화한다.

// 비순수 함수
function increase(){
  return ++count;   // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); // 1

increase();
console.log(count); // 2