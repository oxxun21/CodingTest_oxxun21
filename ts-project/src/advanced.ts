interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: "max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable1 = string | number;
type Numeric = number | boolean;

type Universal = Combinable1 | Numeric;

// 함수 오버로드
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
//
function add2(a: Combinable1, b: Combinable1) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add2("max", "schwarz");
result.split(" ");

const fetchedUserDate = {
  id: "ul",
  name: "max",
  job: { title: "CEO", desc: "my company" },
};

console.log(fetchedUserDate?.job?.title);

const userInput1 = null;

// const storedData = userInput1 || "DEFAULT"; Falsy 값
const storedData = userInput1 ?? "DEFAULT"; // null & undefined

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log(`name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

printEmployeeInfo({ name: "max", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(100);
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if ('flyingSpeed' in animal){
  //   console.log(`moving with speed: ${animal.flyingSpeed}`);
  // }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log(`moving at speed ${speed}`);
}

moveAnimal({ type: "horse", runningSpeed: 10 });

// const userInputEl = <HTMLInputElement>document.getElementById("user-input")!;
const userInputEl = document.getElementById("user-input")! as HTMLInputElement;

userInputEl.value = "there";

// const userInputEl = document.getElementById("user-input");
// if (userInputEl){
//   (userInputEl as HTMLInputElement).value = "there";
// }

interface ErrorContain {
  // id: string;
  [prop: string]: string;
}

const errorBag: ErrorContain = {
  email: "유효하지 않음",
  username: "첫글자는 대문자로 시작",
};
