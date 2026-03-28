/* 01 스택
배열을 스택처럼 사용해서, 아래 순서대로 동작하는 코드를 짜세요.
```
1, 2, 3을 순서대로 push
pop을 두 번 실행
최종 스택 상태 출력
// 기대 출력: [1]
 */
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);

/* 02 큐
배열을 큐처럼 사용해서, 아래 순서대로 동작하는 코드를 짜세요.
```
1, 2, 3을 순서대로 push
shift를 두 번 실행
최종 큐 상태 출력
// 기대 출력: [3]
 */
const queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.shift();
queue.shift();
console.log(queue);

/* 03
문자열이 주어졌을 때, 괄호가 올바르게 열리고 닫히는지 확인하세요.
const str1 = "(()())";  // true
const str2 = "(()";     // false
const str3 = ")(";      // false
힌트: (를 만나면 스택에 push, )를 만나면 pop. 마지막에 스택이 비어있으면 올바른 괄호예요.
 */
const str = "(()())";
const check = [];
for (const item of str) {
  if (item === "(") {
    check.push("(");
  } else {
    check.pop();
  }
}
console.log(check.length === 0);

// pop은 빈 배열에 해도 undefined를 반환하기 때문에, 문제는 없지만,
// 코드를 더 명확하게 하기 위해서는 조건문을 추가하는 것이 좋습니다.
if (check.length > 0) check.pop(); // ✅ 의도가 바로 읽힘
if (check.length === 0) return false; // ✅ 더 엄밀한 버전
