// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.
function camelize(str){
  return str
    .split('-')
    .map((word, idx) => idx == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

// 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.
// 새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b){
  arr.filter(item => a <= item && item <= b)
}
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);


// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b
// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.
function filterRangeInPlace(arr, a, b){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < a || arr[i] < b){
      arr.splice(i, 1);
      i--;
    }
  }
}
filterRangeInPlace(arr, 1, 4);
alert(arr); 

// 내림차순 정렬
let arrSort = [5, 2, 1, -10, 8];
arrSort.sort((a, b) => b - a);
alert(arrSort); // 8, 5, 2, 1, -10

// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.
// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.
let arrString = ["HTML", "JavaScript", "CSS"];
function copySorted(arrString){
  return arrString.slice().sort();  // sort 전 slice를 하여 원본배열 변경을 막음
}
let sorted = copySorted(arrString);

alert(sorted); // CSS, HTML, JavaScript
alert(arrString); // HTML, JavaScript, CSS (no changes)

