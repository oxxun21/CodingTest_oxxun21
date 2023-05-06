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