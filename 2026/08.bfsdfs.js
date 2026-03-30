/* 문제 1 (DFS)
아래 그래프에서 1번 노드부터 DFS로 탐색한 순서를 출력하세요.
const graph = { 1:[2,3], 2:[1,4,5], 3:[1], 4:[2], 5:[2] };
// 기대 출력: 1 2 4 5 3
 */
const graph = { 1: [2, 3], 2: [1, 4, 5], 3: [1], 4: [2], 5: [2] };
const visited = new Set(); // 주의 밖으로 꺼내야 새로 안만들어짐!!

function dfs(node) {
  if (visited.has(node)) return; // 이미 방문 했으면 리턴!!!
  visited.add(node);
  console.log(node);

  for (const next of graph[node]) {
    dfs(next);
  }
}

/* 문제 2 (BFS)
같은 그래프에서 1번 노드부터 BFS로 탐색한 순서를 출력하세요.
// 기대 출력: 1 2 3 4 5
 */
function bfs(start) {
  const visited = new Set([start]);
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();

    for (const next of graph[node]) {
      if (!visited.has(next)) {
        // next와 node를 헷갈리지말자
        visited.add(next);
        queue.push(next);
      }
    }
  }
}

/* 문제 3 (BFS 응용)
1번 노드에서 5번 노드까지 최단 거리(간선 수)를 구하세요.
// 기대 출력: 2 (1→2→5)
 */
function bfs(start) {
  const visited = new Set([start]);
  const queue = [[start, 0]]; // 노드, 현재까지의 거리

  while (queue.length > 0) {
    const [node, dist] = queue.shift(); // dist 추가
    if (node === 5) return dist; // 5번 도착하면 거리 반환

    for (const next of graph[node]) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, dist + 1]); // dist에 1 추가
      }
    }
  }
}
