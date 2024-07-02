let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let a = arr.map((value, index) => ({ value, index }));
a.sort((a, b) => a.value - b.value || a.index - b.index);

console.log(a);

let b = a.map((item) => item.index);

console.log(b);
