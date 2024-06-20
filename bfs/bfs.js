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

let graph = [];
let visited = new Array(MAX).fill(false);

function bfs(start) {
  q = new Queue();
  q.enqueue(start); // 현재 노드 방문 처리
  visited[start] = true;

  // 큐가 빌때까지 반복
  while (q.getLength() != 0) {
    v = q.dequeue(); // 큐에서 하나 뽑아
    console.log(v);

    for (let x of graph[v]) {
      if (!visited[x]) {
        q.enqueue(x);
        visited[x] = true;
      }
    }
  }
}
