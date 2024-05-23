//let fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 큰 수를 나누면서

let a = 2;
let number = 162;

let result = 1;
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

  //   console.log("1", String(number)[getLastIndex(number)]);

  // 2의 배수면?
  if (number % 2 == 0) {
    number = parseInt(number / 2);
  }
  // 마지막 자리가 1이면?
  else if (String(number)[getLastIndex(number)] == 1) {
    let slice = String(number).slice(0, getLastIndex(number)); //여기서 String 빠트림!!!!
    number = Number(slice[0]); // 여기서 Number 빠트림!!!!
    // console.log(slice);
    // console.log(number);
  } else break;

  //   console.log(number);

  result++; // 목표는 result의 횟수!
}

console.log(!flag ? -1 : result);
