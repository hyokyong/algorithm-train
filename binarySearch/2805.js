let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let [number, tree] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let start = 0; //0부터 시작
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2); //중간점 계산
  let total = 0;

  // 나무가 더 길다면 잘린만큼만 더해준다.
  for (x of arr) {
    if (x > mid) total += x - mid;
  }

  if (total < tree) {
    end = mid - 1; // 나무의 양이 부족한 경우 높이 낮추기
  } else {
    // 나무의 양이 충분한 경우 높이 키우기
    result = mid; // 일단 저장
    start = mid + 1;
  }

  console.log(mid);
  console.log(start, end);
}

console.log(result);
