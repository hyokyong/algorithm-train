let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0; // 가장 끝에 +1
  }

  // 맨 뒤에 넣음
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  // 맨 앞에꺼 뺌
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  //다음꺼 골라
  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let n = Number(input[0]);
let a = [];
for (let i = 0; i < n; i++) {
  a.push(1 + n * i);
}

let result = "";

for (let i of a) {
  let l = Number(input[i]);
  let [cx, cy] = input[i + 1].split(" ").map(Number); // 현위치
  let [ax, ay] = input[i + 2].split(" ").map(Number); // 도착위치

  //   let visited = new Array(l + 1).fill(0); // 각 위치까지의 최단거리
  let visited = [];
  for (let i = 0; i < l + 1; i++) {
    visited.push(new Array(l).fill(0));
  } //이렇게 각 i마다 배열을 넣어준다

  q = new Queue();

  q.enqueue([cx, cy]); // 내 위치를 넣어

  while (q.getLength() != 0) {
    let cur = q.dequeue(); // 빼

    // 뺀 값이 도착지인 경우
    if (cur == [ax, ay]) {
      result += visited[cur] + "\n"; // 시간 출력
    }

    // 경우의 수 배열 만들기
    let arr = [
      [cur[0] - 1, cur[1] + 2],
      [cur[0] - 2, cur[1] + 1],
      [cur[0] + 1, cur[1] + 2],
      [cur[0] + 2, cur[1] + 1],
      [cur[0] - 2, cur[1] - 1],
      [cur[0] - 1, cur[1] - 2],
      [cur[0] + 2, cur[1] - 1],
      [cur[0] + 1, cur[1] - 2],
    ];
    for (let j = 1; j <= arr.length; j++) {
      let x = arr[0];
      let y = arr[1];
      // 공간 벗어난 경우 무시
      if (x < 0 || y < 0 || x >= l + 1 || y >= l + 1) continue;

      // 아직 방문하지 않았다면
      if (visited[j] == 0) {
        visited[j] = visited[cur] + 1; // 1번 감
        q.enqueue(arr[j]);
      }
    }
  }
}

console.log(result);
