// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let [number, total] = input[0].split(" ").map(Number);

let number = 10;
let total = 4200;

let input = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];
let array = [];

// 숫자 배열 만들어줌 - total 보다 크면 빼버리기
for (let i = number; i > 0; i--) {
  let dd = input[i];
  if (dd <= total) {
    array.push(dd);
  }
}

let sum = 0;

for (let i = 0; i < array.length; i++) {
  let na = total % array[i]; // 나머지 - 어차피 total이 더 큰 경우에는 값이 0이 되어 상관이 없음. if문으로 나눌 필요 없음

  // 나머지가 나누려는 수보다 큰 경우만!
  if (total > array[i]) {
    sum += parseInt(total / array[i]);
    total = na;
  }

  // 나머지가 0인 경우
  else if (na == 0) {
    sum += parseInt(total / array[i]);
    total = na;
  }

  if (total == 0) break;
}

console.log(sum);
