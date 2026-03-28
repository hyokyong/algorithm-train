/* 01
1부터 n까지의 합을 재귀로 구하세요.
sum(5); // 15 (1+2+3+4+5)
 */
//내가푼거!!
function sum(num) {
  if (num === 0) return;
  return num + sum(num - 1);
}

//but return 빈값은 에러난다. 아래 코드 추천
if (num === 1) return 1;
if (num === 0) return 0;

/* 02
배열의 모든 요소의 합을 재귀로 구하세요.
const arr = [1, 2, 3, 4, 5];
sumArray(arr); // 15
 */

const arr = [1, 2, 3, 4, 5];
function arrSum(i) {
  if (i === -1) return;
  return arr[i] + arrSum(i - 1);
}

//같은 실수!
if (i === 0) return arr[0]; // ✅ 인덱스 0에서 멈춤

/* 03
n번째 피보나치 수를 재귀로 구하세요.
```
피보나치: 0, 1, 1, 2, 3, 5, 8, 13 ...
fib(0) = 0
fib(1) = 1
fib(6) = 8
힌트: fib(n) = fib(n-1) + fib(n-2)
 */

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1; // 종료 조건이 2개임. 여기서 안멈추면 fib(-1)
  return fib(n - 1) + fib(n - 2);
}
