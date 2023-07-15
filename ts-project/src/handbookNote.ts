let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;

let exName: string = "boo";
let sentence: string = `Hello, my name is ${exName}`;

let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 10];
// x = [10, "hello"] -> 오류

console.log(x[0].substring(1));
// console.log(x[1].substring(1)); -> number 에는 substring이 없음

// x[3] = "world" -> [string, number] 타입에는 프로퍼티 3이 없음

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName);

let notSure: any = 4;
notSure = "뭘 넣어도 오류가 안나요";
notSure = false;

function warnUser(): void {
  console.log("오류 메세지");
}

// never 를 반환하는 함수는 함수의 마지막에 도달할 수 없음
function error(message: string): never {
  throw new Error(message);
}

// 반환 타입이 never로 추론
function fail() {
  return error("fail");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없음
function infiniteLoop(): never {
  while (true) {}
}

let someValue: any = "문자열";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

//////////////////////////////////////////////////////////////////////////

// function printLabel(labelObj: { label: string }) {
//   console.log(labelObj.label);
// }

// let myObj = { size: 10, label: "크가가 10인 객체" };
// printLabel(myObj);

interface LabeledValue {
  label: string;
}

function printLabel(labelObj: LabeledValue) {
  console.log(labelObj.label);
}

let myObj = { size: 10, label: "크가가 10인 객체" };
printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; -> error

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12;
// ro.push(5);
// a = ro;
// => error

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["boo", "foo"];

let myStr: string = myArray[0];

// class AnimalEx {
//   name: string;
// }

// class Dog extends AnimalEx {
//   breed: string;
// }

// interface NotOk {
//   // [x: number]: AnimalEx; -> error 숫자형 문자열로 인덱싱을 하면 다른 타입의 AnimalEx를 얻게 될 것 입니다.
//   [x: string]: Dog;
// }

interface Number {
  [index: string]: number;
  length: number;
  // name: string; -> error 'name'의 타입은 인덱서의 하위 타입이 아님
}

interface NumberOrString {
  [index: string]: number | string;
  length: number;
  name: string;
}

interface ReadonlyStringArr {
  readonly [index: number]: string;
}

let myArr: ReadonlyStringArr = ["boo", "foo"];
// myArr[2] = "hi"; -> error

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

// interface ClockConstructor {
//   new (hour: number, minute: number);
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   // setTime(d: Date) {
//   //   this.currentTime = d;
//   // }
//   constructor(h: number, m: number) {}
// }

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLenth: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLenth = 10;
square.penWidth = 5.0;

///////////////////////////////////////////////////////////
