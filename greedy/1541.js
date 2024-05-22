// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let inputString = "00009-00009-5555+908-222+3-4";
let input = inputString.split("-"); // 마이너스로 구분지어줌

let sum = 0;
for (let i = 0; i < input.length; i++) {
  let add = input[i]
    .split("+")
    // 이 부분 빠트려서 틀렸었음 주의해라
    .map(Number)
    .reduce((a, b) => a + b); // 다시 +로 쪼개어 합을 구해줌

  if (i == 0) {
    sum += add; // 가장 처음에는 무조건 더해줌
  } else {
    sum -= add;
  }
}

console.log(sum);
