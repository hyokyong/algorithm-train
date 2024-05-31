let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [ball, team] = input[0].split(" ").map(Number);

// 1부터 team까지 더한게 최소갯수임
sum = parseInt((team * (team + 1)) / ball);

let result;

if (sum > ball) {
  result = -1;
} else if (sum == ball) {
  result = team - 1;
} else {
  // sum <ball 이면
  let left = ball - sum;

  // 남은수가 team보다 작다면
  if (left <= team) {
    result = team + 1 - 1;
  }
  //남은수가 team보다 크다면
  else {
    let q = parseInt(left / team);
    let t = left % team;
    result = team + q - (1 + q);
  }
}
