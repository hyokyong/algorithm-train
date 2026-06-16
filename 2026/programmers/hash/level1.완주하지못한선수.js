//https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  let pMap = new Map();

  // 해시맵으로 만들어서
  // 한명씩 다시 빼기
  // 남은 사람 체크
  for (const pname of participant) {
    pMap.set(pname, (pMap.get(pname) || 0) + 1);
  }

  for (const cname of completion) {
    pMap.set(cname, pMap.get(cname) - 1);
  }

  for (const [name, count] of pMap.entries()) {
    if (count > 0) {
      return name;
    }
  }
}

/* 

패턴 1: 빈도수 카운팅 (`(map.get(key) || 0) + 1`)

패턴 2: `map.entries()`를 활용한 구조 분해 할당**
- `Map`에 들어있는 Key와 Value를 동시에 꺼내서 비교해야 할 때는 `for (const [key, val] of map.entries())` 문법을 사용해 깔끔하게 순회합니다.

*/
