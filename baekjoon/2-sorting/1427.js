// https://www.acmicpc.net/problem/1427
// 총 10개의 숫자가 존재하며 각 숫자를 내림차수로 정렬. 빈도수를 체크한다.

function solution() {
  // let fs = require('fs');
  // let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let input = ["2143"];

  // 갯수
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let age = Number(input[i].split(" ")[0]);
    let name = input[i].split(" ")[1];
    arr.push([age, name]);
  }

  arr.sort((a, b) => a[0] - b[0]); // node.js에서 정렬은 기본적으로 stable!!!!

  // set을 이용하여 중복 제거
  let uniqueArray = [...new Set(arr)];
  uniqueArray.sort((a, b) => a - b); // 오름차순 정렬 수행

  let answer = "";
  for (x of arr) {
    answer += x[0] + " " + x[1] + "\n";
  }

  console.log(answer);
}

solution();
