let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let arr = input[1].split(" ").map(Number);
let all = Number(input[2]);

let start = 1; // 이진 탐색을 위한 시작, 끝 설정
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점 (상한액)
  let total = 0;
  for (x of arr) {
    total += Math.min(mid, x); // 상한액과 값 중에 작은걸로 더해줌
  }

  if (total <= all) {
    //조건 만족하면 상한액을 최대화하기 위해서 증가시키기!
    result = mid;
    start = mid + 1;
  }
  // 조건 만족 못하면 상한액 감소
  else {
    end = mid - 1;
  }
}

console.log(result);

//탐색 범위가 엄청 크다는거에 주목!!!!!!
//미드의 값이 상한 금액이 되도록 만들어줘라
