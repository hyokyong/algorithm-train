//https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    //종료 조건 (맨끝노드까지 왔는데)
    if (index === numbers.length) {
      // 원하는 합계가 나왔다면
      if (sum === target) {
        a;
        answer++;
      }
      //리턴은 반드시 이곳에 써준다. 그래야 맨끝노드에서 함수 종료.
      return;
      //이제 dfs 아랫줄 실행하면서 오른쪽노드 순회한다.
    }

    dfs(index + 1, sum + numbers[index]); // 왼쪽 나뭇가지로 진격 (+1)
    dfs(index + 1, sum - numbers[index]); // 오른쪽 나뭇가지로 진격 (-1)
  }

  dfs(0, 0);

  return answer;
}
