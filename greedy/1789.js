//let fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let sum = 200;

//서로 다른 자연수의 합중에 자연수 N의 최대값을 구하려면 가장 작은수부터 차례대로 더해주면 된다!

let a = 1;

while ((a * (a + 1)) / 2 <= sum) {
  a++;
}

// -1을 해줘야 마지막 반복문 도는거 방지 할 수 있음
console.log(a - 1);
