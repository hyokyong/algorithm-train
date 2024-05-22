let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = Number(input[0]);

let arr = input[1].split(" ").map(Number);

// 오름차순 정렬
arr.sort((a, b) => a - b);

let sum = 0;

for (let i = 1; i <= number; i++) {
  for (let j = 0; j < i; j++) {
    sum += arr[j];
  }
}

console.log(sum);
