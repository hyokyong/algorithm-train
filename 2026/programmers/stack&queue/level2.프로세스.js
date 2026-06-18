//https://school.programmers.co.kr/learn/courses/30/lessons/42587

//내가 푼거
//abcd 우선순위
//큐에 따라서 어떻게 실행될지!!
//location은 알고싶은 프로세스의 위치!!
//push, shift

function solution(priorities, location) {
  let find = priorities[location]; //3

  let count = 0; // 실행된 프로세스

  for (let i = 0; i < priorities.length; i++) {
    const first = queue.shift(); // 같은 숫자가 여러개인 경우 못찾음.

    //나보다 큰 수가 나머지중에 있다면 맨뒤로 push
    //some 함수 사용하기!
    const highPrio = priorities.some((prio) => {
      return prio > first;
    });

    //맨뒤로 푸시
    if (highPrio) {
      priorities.push(first);
    } else {
      count++;

      if (first === find) return count;
    }
  }
}

function solution(priorities, location) {
  const queue = priorities.map((prio, index) => ({ val: prio, idx: index }));

  let count = 0;

  //배열의 크기가 계속 변하므로 for 대신 while 쓰기
  while (queue.length > 0) {
    const first = queue.shift(); // 맨앞에 하나 꺼내기

    //some 함수 사용하기!!
    const highPrio = queue.some((prio) => {
      return prio.val > first.val;
    });

    // 우선순위 높은게 있으면
    if (highPrio) {
      queue.push(first);
    } else {
      //우선순위가 높은게 제일 앞에 오는 경우
      count++;

      if (first.idx === location) {
        return count;
      }
    }
  }
}
