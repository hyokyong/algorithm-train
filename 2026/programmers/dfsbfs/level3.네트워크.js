function solution(n, computers) {
  let answer = 0;

  //방문 여부 체크. false로 만들어두기
  const visited = Array(n).fill(false);

  function dfs(node) {
    // 현재 컴퓨터 방문
    // node - 컴퓨터,
    visited[node] = true;

    for (let nextNode = 0; nextNode < n; nextNode++) {
      // 1. 나랑 연결되어 있고 (computers[node][nextNode] === 1)
      // 2. 아직 방문한 적이 없는 새로운 컴퓨터라면?
      if (computers[node][nextNode] === 1 && !visited[nextNode]) {
        dfs(nextNode); // 그 친구 집으로 파고들어가서 연결된 무리들을 또 찾아라!
      }
    }
  }

  // 0번 컴퓨터부터 n-1번 컴퓨터까지 순서대로 순회합니다.
  for (let i = 0; i < n; i++) {
    // 아직 어떤 네트워크에도 속하지 않은(도장이 안 찍힌) 새로운 컴퓨터를 발견했다면?
    if (!visited[i]) {
      dfs(i); // 이 컴퓨터와 연결된 모든 무리들을 전부 도장 찍어버려라!
      answer++; // 하나의 독립된 네트워크(덩어리)를 찾아냈으니 카운트 +1!
    }
  }

  return answer;
}
