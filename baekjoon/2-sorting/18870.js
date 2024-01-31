// https://www.acmicpc.net/problem/18870
// 서로 다른 좌표의 갯수가 같아야한다 = 중복 원소 제거
// 좌표 압축 = 크기 순위로 변경하는 것 ex) [2, 4, -10, 4, -9] -> [2, 3, 0, 3, 1]

function solution() {
  // let fs = require('fs');
  // let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let input = ["2", "4 -10 4 -9"];

  // 갯수
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);

  // set을 이용하여 중복 제거
  let uniqueArray = [...new Set(arr)];
  uniqueArray.sort((a, b) => a - b); // 오름차순 정렬 수행

  // 0부터 차례대로 매핑 수행
  let myMap = new Map();
  for (let i = 0; i < uniqueArray.length; i++) {
    myMap.set(uniqueArray[i], i);
  }

  let answer = "";
  for (x of arr) {
    answer += myMap.get(x) + " ";
  }

  console.log(answer);
}

solution();
