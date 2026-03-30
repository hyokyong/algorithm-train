/* 01 중첩 반복문
배열에서 두 수를 더해서 나올 수 있는 모든 합을 구하세요. (중복 제거)
const arr = [1, 2, 3, 4];
// 기대 출력: [3, 4, 5, 6, 7] (순서 무관)
 */

const arr = [1, 2, 3, 4];
const result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    result.push(arr[i] + arr[j]);
  }
}

const resultArr = [...new Set(result)];

//sorting까지 하면 더 완벽
resultArr.sort((a, b) => a - b);

/* 02 완전탐색 응용
배열에서 두 수의 곱이 가장 큰 경우를 구하세요.
const arr = [1, 4, 2, 6, 3];
// 기대 출력: 24 (4 × 6)
 */
const arr2 = [1, 4, 2, 6, 3];
let result2 = 0;

for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] * arr2[j] > result2) {
      //result2 === arr2[i] * arr2[j]; 이 부분 틀림 조심
      result2 = arr2[i] * arr2[j];
    }
  }
}

/* 03 재귀 응용
[1, 2, 3, 4] 에서 3개를 고르는 모든 조합을 구하세요.
// 기대 출력: [[1,2,3], [1,2,4], [1,3,4], [2,3,4]]
 */
const arr3 = [1, 2, 3, 4];
let result3 = [];

function combine(start, cur) {
  if (cur.length === 3) {
    result3.push([...cur]);
    return;
  }

  for (let i = start; i < arr3.length; i++) {
    cur.push(arr3[i]);
    combine(i + 1, cur);
    cur.pop();
  }
}

combine(0, []);
console.log(result3);
