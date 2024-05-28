let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = Number(input[0]);
let arr = []; // 초기화 꼭 할것!!!!!

for (let i = 1; i <= number; i++) {
  let data = input[i].split(" ").map(Number); // [1,3]
  arr.push(data); //[[1,3], [4,5]]
}

//오름차순 정렬을 하되, 값이 동일한 경우를 체크하기!!! 이 부분 때문에 틀린다
arr.sort((a, b) => a[1] - b[1]);

let max = arr[0][1];
let result = 0; // 초기화 꼭 할것!!!!!

for (let i = 1; i < arr.length; i++) {
  if (max <= arr[i][0]) {
    result++;
    max = arr[i][1];
  }
}

console.log(result + 1); // +1을 잊지말고 해줄것!!
