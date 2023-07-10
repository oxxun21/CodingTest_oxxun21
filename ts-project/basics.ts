// 문자열, 숫자, 불리언
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number: number;
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

// 객체, 배열
// const person: {
//   name: string;
//   age: number;
// } = {
// 타입은 추론될 수 있도록 두기
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // 튜플 타입은 선언 명시
} = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

// person.role[1] = 10; -> 문자열 자리
// person.role.push('admin'); -> push가 막히진 않음
// person.role = [0, 'admin', 'user']; -> 재할당하면 길이도 검사

let activities: string[];
activities = ["sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

// enum
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  // ADMIN = 5, 시작값 추가 가능
  // ADMIN = 'admin', 문자열 설정 가능
  READ_ONLY,
  AUTHOR,
}

const person1 = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.AUTHOR,
};

if (person1.role === Role.AUTHOR) {
  console.log("is author");
}

// 유니언, 리터럴
function combine(
  input1: string | number,
  input2: string | number,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(20, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("20", "26", "as-number");
console.log(combinedAges);

const combinedNames = combine("max", "anna", "as-text");
console.log(combinedNames);
