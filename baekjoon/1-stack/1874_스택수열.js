/*
[문제]
스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념이다. 스택은 자료를 넣는 (push) 입구와 자료를 뽑는 (pop) 입구가 같아 제일 나중에 들어간 자료가 제일 먼저 나오는 (LIFO, Last in First out) 특성을 가지고 있다.
1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다.
이때, 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자.
임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지를 알아낼 수 있다. 이를 계산하는 프로그램을 작성하라.

[입력]
첫 줄에 n (1 ≤ n ≤ 100,000)이 주어진다. 둘째 줄부터 n개의 줄에는 수열을 이루는 1이상 n이하의 정수가 하나씩 순서대로 주어진다. 물론 같은 정수가 두 번 나오는 일은 없다.

[출력]
입력된 수열을 만들기 위해 필요한 연산을 한 줄에 한 개씩 출력한다. push연산은 +로, pop 연산은 -로 표현하도록 한다. 불가능한 경우 NO를 출력한다.
*/

// 2026 문제 풀이
// 스택은 원래 제일 뒤에 있는거 빼는거잖아. 생각을 해라.
function solution(arr) {
  let result = [];
  let stack = [];
  let pointer = 1; // 1부터 n까지 숫자. 점점 증가함. 스택에 넣어야할 다음 숫자를 관리함.

  for (let i = 0; i < arr.length; i++) {
    const target = arr[i];

    //for만 생각하지 말고 while도 생각하자..
    //target이 될때까지 push
    while (pointer <= target) {
      stack.push(pointer);
      pointer++; //바로 증가시키기!!!!!!
      result.push("+");
    }

    let stackPop = stack.pop(); // stack 원본이 자체가 변하고 숫자만 변수에 담김.
    result.push("-");

    // 스택에서 빼낸 마지막 숫자와 target이 다르면
    if (stackPop !== target) {
      // NO로 교체하고 종료
      return "NO";
    }
  }

  return result;
}
console.log(solution([8, 4, 3, 6, 8, 7, 5, 2, 1]));
