let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = []; // 순열을 계산하고자 하는 원소가 담긴 배열 (1,2,3,4)
for (let i = 1; i <= n; i++) {
  // 1부터 넣음
  arr.push(i);
}

let isVisited = new Array(n).fill(false); // 각 원소 인덱스 별 방문 여부
let selectIndex = []; // 현재 순열에 포함된 인덱스

let answer = "";

// depth가 m이 될때까지!
function dfs(arr, depth) {
  if (depth == m) {
    for (let i of selectIndex) answer += arr[i] + " ";
    answer += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (isVisited[i]) continue; // 중복을 허용하지 않음으로 이미 처리된 원소라면 무시
    selectIndex.push(i); // 현재 원소 선택
    isVisited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth + 1);
    selectIndex.pop(); // 현재 원소 선택 취소
    isVisited[i] = false; // 현재 원소 방문 처리 취소
  }
}

dfs(arr, 0);
console.log(answer);
