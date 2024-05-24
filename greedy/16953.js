//let fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = 100;
let number = 40021;

let result = 1; // 최솟값이 1을 더한값이므로 +1을 해줌!
let flag = false;

function getLastIndex(number) {
  let string = String(number);
  let lastIndex = Number(string.length - 1); // string 마지막 index
  return lastIndex;
}

// 162 -> 81 -> 8 -> 4 -> 2
// 2의 배수이거나 1인 경우 + 위에 경우가 모두 해당되지 않는 경우까지 생각했어야함!!!
while (number >= a) {
  // 같아지면? 목표
  if (number == a) {
    flag = true;
    break;
  }

  let stringNumber = String(number);

  // 2의 배수면?
  if (number % 2 == 0) {
    number = parseInt(number / 2);
  }
  // 마지막 자리가 1이면?
  else if (stringNumber[getLastIndex(number)] == 1) {
    let slice = stringNumber.slice(0, getLastIndex(number)); //여기서 String 빠트림!!!!
    number = Number(slice); // 여기서 string에 대한 slice이니까 return값이 배열이 아닌 string임!
  } else break;

  result++; // 목표는 result의 횟수!
}

console.log(!flag ? -1 : result);
