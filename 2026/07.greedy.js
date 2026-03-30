/* 01
동전 종류가 [500, 100, 50, 10]이고 거스름돈이 1260원일 때, 필요한 최소 동전 개수를 구하세요.
// 기대 출력: 6 (500×2, 100×2, 50×1, 10×1)
 */
const coin = [500, 100, 50, 10];
let num = 1260;
let count = 0;

for (let i = 0; i < coin.length; i++) {
  // '/'가 나눗셈, %가 나머지!!!!!!! 처음에 헷갈림
  // 그냥 나누면 소수점이 생겨서 Math.floor를 이용해서 내려준다.
  count += Math.floor(num / coin[i]);
  num = num % coin[i];
}

console.log(count);

Math.floor(4.9); // 4  → 내림
Math.ceil(4.1); // 5  → 올림
Math.round(4.5); // 5  → 반올림

Math.max(1, 2, 3); // 3  → 최댓값
Math.min(1, 2, 3); // 1  → 최솟값

/* 02
숫자 배열에서 두 수를 골라 곱했을 때 가장 작은 값을 구하세요. 단, 배열엔 음수도 있어요.
const arr = [-5, -3, 1, 2, 4];
// 기대 출력: -20 (-5 × 4)
 */

//내가 푼것!! 범위에 국한됨..
//이렇게 풀면 음수만 있거나 양수만 있는 경우에 해당 안 됨
const arr = [-5, -3, 1, 2, 4];
let result = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if ((arr[i] < 0 && arr[j] > 0) || (arr[i] > 0 && arr[j] < 0)) {
      if (result > arr[i] * arr[j]) result = arr[i] * arr[j];
    }
  }
}

//클로드 추천
let result2 = arr[0] * arr[1]; // 첫 쌍으로 초기화!!

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] * arr[j] < result2) {
      result2 = arr[i] * arr[j];
    }
  }
}

/* 03
n개의 일을 처리해야 해요. 각 일은 [걸리는 시간, 마감 기한]으로 주어져요. 최대한 많은 일을 마감 기한 안에 끝내려면 몇 개까지 할 수 있나요?
const tasks = [[1,2], [2,3], [1,1], [3,4]];
// 기대 출력: 3
// 힌트: 마감 기한이 빠른 순서로 정렬 후 선택
*/
const tasks = [
  [1, 2],
  [2, 3],
  [1, 1],
  [3, 4],
];

tasks.sort((a, b) => a[1] - b[1]); //마감 기한 별 소팅
// [1,1], [1,2], [2,3], [3,4]
let time = tasks[0][0]; //첫째값 설정
let count3 = 1;

for (let i = 1; i < tasks.length; i++) {
  if (time + tasks[i][0] <= tasks[i][1]) {
    count3++;
    time += tasks[i][0];
  }
}
