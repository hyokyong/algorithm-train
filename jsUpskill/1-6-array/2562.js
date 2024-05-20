let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let array = input.map(Number);

let result = Math.max(...array); //이것도 방법이다!!
//let result = array.reduce((a,b) => Math.max(a,b));

let index = array.indexOf(result) + 1; // +1해주기!!!!!!!

console.log(result + "\n" + index);
