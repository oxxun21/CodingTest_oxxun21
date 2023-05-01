function A() { }
function B() { }
let a = new A;
let b = new B;
alert( a == b ); // true
function A() { return obj }
function B() { return obj }
// => 객체를 return 하면 this 대신 객체가 반환되기 때문에 같은 객체를 반환하면 a == b가 된다.


function Calculator(){
  this.read = function(){
    this.a = +prompt('숫자 입력1');
    this.b = +prompt('숫자 입력2'); 
  },
  this.sum = function(){
    return this.a + this.b;
  },
  this.mul = function(){
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


function Accumulator(startingValue){  // 파라미터 : 임의의 데이터를 함수 안에 전달 (아규먼트에 값 전달 안할 시 undefined가 됨)
  this.value = startingValue; 
  this.read = function(){
    this.value += +prompt('값을 입력하세요', 0);
  }
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함