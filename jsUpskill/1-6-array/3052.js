let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let array = input.map(Number);

let a = 0;
let result = new Set(); // 애초에 집합 자료형으로 만들기

for (let i = 0; i < 10; i++) {
  a = array[i] % 42;
  result.add(a); // add로 더해준다
}

console.log(result.size); // 집합 사이즈
