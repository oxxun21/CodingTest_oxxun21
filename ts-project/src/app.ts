function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("rendering");

    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("logging")
@WithTemplate("<h1>사람 객체</h1>", "app")
class Person {
  name = "max";

  constructor() {
    console.log("사람 객체 만드는중");
  }
}

const pers = new Person();

console.log(pers);
