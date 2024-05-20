let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = input[0];

let add = 0;
let kkk = "";

for (let i = 1; i <= number; i++) {
  let array = input[i].split(" ").map(Number);

  for (let j = 1; j <= array[0]; j++) {
    add += array[j];
  }

  let result = add / array[0]; // 평균
  add = 0;

  //여기까지 풀었음 근데?
  //이렇게 하면 여기서 array를 쓸수가 있네!
  //아직 for문 안임.

  let cnt = 0; //넘는 애들

  for (let j = 1; j <= array[0]; j++) {
    if (array[j] > result) {
      cnt += 1;
    }
  }

  kkk += `${((cnt / array[0]) * 100).toFixed(3)}%\n`;
  cnt = 0;
}

console.log(kkk);
