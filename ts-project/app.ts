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
