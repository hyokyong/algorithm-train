let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]); // 전체 노드 갯수
let m = Number(input[1]); // 연결된 쌍 갯수

let graph = [];
// 양의정수 1부터 시작
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

//2부터 시작임 input[2] 부터 시작이라!
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x); //ex) 1,5면 1이랑 5랑 배열에 서로를 넣어줌
}

let result = 0;
// 배열은 0부터 시작하니까 n+1로 해야 갯수가 맞음
// n으로 하면 0-6까지만 있음
let visited = new Array(n + 1).fill(false);

console.log(graph);

// 깊이 우선 탐색
function dfs(index) {
  visited[index] = true; // 현재 노드 방문 처리
  result++;
  for (let x of graph[index]) {
    //x = 2,5
    // 2로 다시 dfs 호출
    if (!visited[x]) dfs(x);
  }
}

dfs(1);
console.log(result - 1);
// -1을 하는 이유는 시작노드부터 카운트 하기 때문! 연결된 노드의 갯수만 구하려면 시작노드 빼야됨
