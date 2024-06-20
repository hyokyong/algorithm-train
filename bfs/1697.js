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

let MAX = 100001; // 최대 1000이므로 +1 해줌
let [n, m] = input[0].split(" ").map(Number);
let visited = new Array(MAX).fill(0); // 각 위치까지의 최단시간

function bfs() {
  q = new Queue();

  q.enqueue(n); // 내 거리를 넣어

  while (q.getLength() != 0) {
    let cur = q.dequeue(); // 빼

    // 뺀 값이 동생 위치인 경우
    if (cur == m) {
      return visited[cur]; // 시간 출력
    }

    // 경우의 수 배열 만들기
    let arr = [cur - 1, cur + 1, cur * 2];
    for (let x of arr) {
      // 공간 벗어난 경우 무시
      if (x < 0 || x >= MAX) continue;

      // 아직 방문하지 않았다면
      if (visited[x] == 0) {
        visited[x] = visited[cur] + 1; // 1초씩 더해줌
        q.enqueue(x);
      }
    }
  }
}

console.log(bfs());
