let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let [number, sum] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= number; i++) {
  arr.push(input[i]);
}

let start = 0; //0부터 시작
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 항상 니가 기준
  let total = 0;

  for (x of arr) {
    if (x >= mid) total += parseInt(x / mid);
  }

  if (total < sum) {
    //만들수 있는 랜선의 갯수가 작은 경우, total을 늘리고 싶어! mid를 작게 해야 total이 커짐!!
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
