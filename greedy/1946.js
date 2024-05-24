let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = Number(input[0]);
let line = 1;

for (let tc = 0; tc < number; tc++) {
  n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data); // 배열로 만들어서 배열에 넣음
  }
  arr.sort((a, b) => a[0] - b[0]); // 첫번째 성적 기준으로 오름차순 정렬한다.

  let count = 0;
  let minValue = 1000001; // 가장 큰수를 적어줌

  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }

  line += n + 1;
  console.log(count);
}
