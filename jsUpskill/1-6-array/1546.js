let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = input[0];
let array = input[1].split(" ").map(Number);

let max = Math.max(...array);

let sum = 0;
for (let i = 0; i < number; i++) {
  sum += (array[i] / max) * 100;
}

console.log(sum / number);
