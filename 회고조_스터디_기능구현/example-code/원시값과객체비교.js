// 11-03
let str = 'Hello';
str = 'world';

// 11-04
let str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
console.log(str[0]);   // s

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str.length);  // 6
console.log(str.toUpperCase()); // STRING

str[0] = "L";
console.log(str); // string

// 11-06
let score = 80;
let copy = score;

console.log(score); // 80
console.log(copy);  // 80

score = 100;

console.log(score); // 100
console.log(copy);  // 80

// 11-08
let score = 80;
let copy = score;

console.log(score, copy); // 80 80
console.log(score === copy);  // true

score = 100;

console.log(score); // 100 80
console.log(score === copy);  // false

// 11-11
// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
let person = {
  name: 'Lee'
};

// person 변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다.
console.log(person);  // {name: "Lee"}

// 11-13
let person = {
  name: "Lee"
};

// 프로퍼티 값 갱신
person.name = "Kim";

// 프로퍼티 동적 생성
person.address = "Seoul";

console.log(person);  // {name: 'Kim', address: 'Seoul'}

// 11-14
const o = {x: {y: 1}};

// 얕은 복사
const c1 = {...o}; 
console.log(c1 === 0);  // false
console.log(c1.x === o.x);  // true

// 깊은 복사 (lodash를 설치하여 Node.js 환경에서 실행 가능)
const _ = require('lodash');

const c2 = _.cloneDeep(o);
console.log(c2 === o);  // false
console.log(c2.x === o.x);  // false

// 11-16
let person = {
  name: "Lee"
};

// 참조 값을 복사(얕은 복사)
let copy = person;

// 11-17
let person = {
  name: "Lee"
};

// 참조 값을 복사(얕은 복사), copy와 person은 동일한 참조 값을 갖는다.
let copy = person;

console.log(copy === person); // true

// copy를 통해 객체 변경
copy.name = "Kim";

// person을 통해 객체 변경
person.address = "Seoul";

// copy와 person은 동일한 객체를 가리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
console.log(person);  // {name: 'Kim', address: 'Seoul'}
console.log(copy);  // {name: 'Kim', address: 'Seoul'}

// 11-18
let person1 = {
  name: "Lee"
};

let person2 = {
  name: "Lee"
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true