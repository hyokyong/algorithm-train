let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = Number(input[0]);
let dist = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

// cost를 비오름차순으로 변환!!!
// 작은거부터 차차 더하는 개념말고 아예 큰거부터 더한다로 생각하자
// 비오름차순 전환하는 방법 - 바로 뒤에꺼랑 비교해서 넣어준다.
// [5,2,4,1] => [5,2,2,1]
let minCost = cost[0];
for (let i = 0; i < number; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

let result = BigInt(0);

// 자바스크립트에서 큰 정수를 처리할때는 bigint 사용!
for (let i = 0; i < number - 1; i++) {
  result += BigInt(cost[i]) * BigInt(dist[i]);
}

console.log(String(result)); // 뒤에 n 빼줘야함

//let arr = input[1].split(" ").map(Number);

// 오름차순 정렬
//arr.sort((a, b) => a - b);

// let sum = 0;

// for (let i = 1; i <= number; i++) {
//   for (let j = 0; j < i; j++) {
//     sum += arr[j];
//   }
// }

// console.log(sum);
