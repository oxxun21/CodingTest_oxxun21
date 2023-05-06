// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y){
  return x + y;
}

// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();

// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
console.log(inst);  // {}

// 객체를 반환하는 일반 함수
function createUser(name, role){
  return {name, role};
}

// 일반 함수를 new 연산자와 함께 호출
inst = new createUser('Lee', 'admin');

// 함수가 생성한 객체를 반환한다.
console.log(inst);    // {name: 'Lee', role: 'admin'}


//생성자 함수
function Circle(radius){
  this.radius = radius;
  this.getDiameter = function(){
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수 호출을 하면 일반 함수로서 호출된다.
const circle = Circle(5);
console.log(circle); // undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius); // 5
console.log(getDiameter());   // 10

circle.getDiameter();  //Uncaught TypeError: Cannot read properties of undefined


// 생성자 함수
function Circle(radius){
  // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
  if(!new.target){
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function(){
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());  // 10