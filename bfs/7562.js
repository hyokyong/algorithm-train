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

//2026 문제 풀이
function solution(size, start, target) {
  // 배열 비교는 문자로 하기!!!!!
  // 같은 경우에 리턴 조건 꼭 까먹지 말기!!!!
  // bfs 함수로 감싸지 않아도 된다

  const [sx, sy] = start; // startx
  const [tx, ty] = target; // targetx
  if (sx === tx && sy === ty) return 0; // 조건 까먹지마!!!!!!

  //문자열로 넣기!!!!!!!!!! 배열로 넣으면 같은 배열인지 비교못함.
  const visited = new Set([`${sx},${sy}`]);
  const q = [[sx, sy, 0]];

  while (q.length > 0) {
    const [cx, cy, dist] = q.shift();

    for (let [nx, ny] of [
      [cx - 2, cy + 1],
      [cx - 1, cy + 2],
      [cx + 1, cy + 2],
      [cx + 2, cy + 1],
      [cx - 2, cy - 1],
      [cx - 1, cy - 2],
      [cx + 2, cy - 1],
      [cx + 1, cy - 2],
    ]) {
      if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue; // =도 붙여야한다!! 체스판은 size -1까지기 때문!!!

      if (visited.has(`${nx},${ny}`)) continue;

      if (nx === tx && ny === ty) return dist + 1;

      visited.add(`${nx},${ny}`); // 문자열 저장
      q.push([nx, ny, dist + 1]);
    }
  }
}
