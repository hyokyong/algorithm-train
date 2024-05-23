//let fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 3a + 5b
// 가장 큰 b를 찾는 것은 가장 작은 a를 찾는 것과 같다.
// 반복적으로 3을 빼면서 5로 나누어질때를 찾기.

let number = 11;

let a = 0;
let b = 0;
let flag = false;

// n이 마이너스가 아닌 이상 계속 반복함. 더 이상 반복할 수 없을 때까지 반복함
while (number >= 0) {
  //5로 나누어 떨어지면?
  if (number == 0 || number % 5 == 0) {
    b += parseInt(number / 5);
    flag = true;
    break; // 바로 끝내
  }

  number -= 3;
  a += 1;
}

console.log(!flag ? -1 : a + b);

// // 5,3 둘다 나눠짐
// if (number % 5 == 0 && number % 3 == 0) {
//   result = number / 5;
// }
// // 5로 나누고 3으로 나눠짐
// else if ((number % 5) % 3 == 0) {
//   result = parseInt(number / 5);
//   result += parseInt((number % 5) / 3);
// }
// // 3로 나누고 5으로 나눠짐
// else if ((number % 3) % 5 == 0) {
//   result = parseInt(number / 3);
//   result += parseInt((number % 3) / 5);
// }
// // 5로만 나눠짐
// else if (number % 5 == 0) {
//   result = number / 5;
// }
// // 3로만 나눠짐
// else if (number % 3 == 0) {
//   result = number / 3;
// } else {
//   result = -1;
// }
