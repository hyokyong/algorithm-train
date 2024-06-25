let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;

for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

let number = Number(input[0]);
for (let i = 1; i <= number; i++) {
  let n = Number(input[i]);

  if (n == 0) console.log(1, 0);
  else console.log(d[n - 1], d[n]);
}
