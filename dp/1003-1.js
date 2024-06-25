let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let num = Number(input[0]);
let zero = 0;
let one = 0;
let result = "";

function fibonacci(n) {
  if (n == 0) {
    zero++;
    return 0;
  } else if (n == 1) {
    one++;
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

for (let i = 1; i <= num; i++) {
  fibonacci(Number(input[i]));
  result += zero + " " + one + "\n";
  zero = 0;
  one = 0;
}

console.log(result);
