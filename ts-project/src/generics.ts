// const names: Array<string> = []; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// T extends object : T가 일단 객체여야함을 명시 (제약조건)
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj = merge({ name: "max" }, { age: 30 }) as {name: string, age: number};
const mergedObj = merge({ name: "max" }, { age: 30 });
console.log(mergedObj.age);

const mergedObj2 = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "max", hobbies: ["cook"] },
  { age: 30 }
);

interface Lengthy {
  length: number;
}

function countAndDesc<T extends Lengthy>(element: T): [T, string] {
  let descText = "값 없음";
  if (element.length > 0) {
    descText = `${element.length} element`;
  }
  return [element, descText];
}

console.log(countAndDesc("hi"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "max" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("max");
textStorage.addItem("manu");
textStorage.removeItem("max");
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'max'}
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "manu" });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItem());

interface CourseGoal {
  title: string;
  desc: string;
  complete: Date;
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
  // return {title: title, desc: desc, complete: date}

  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.desc = desc;
  courseGoal.complete = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["max", "sports"];
// names.push("manu");
