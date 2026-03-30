/* 문제 1 (투 포인터)
정렬된 배열에서 합이 9인 모든 쌍을 구하세요.
const arr = [1, 2, 3, 4, 5, 6, 7];
// 기대 출력: [2,7] [3,6] [4,5]
 */
const arr = [1, 2, 3, 4, 5, 6, 7];
const target = 9;
const result = [];

let left = 0;
let right = arr.length - 1;

while (left < right) {
  const sum = arr[left] + arr[right];

  if (sum === target) {
    result.push([arr[left], arr[right]]);
    left++;
    right--;
  } else if (sum < target) {
    left++;
  } else {
    right--;
  }
}

/* 문제 2 (슬라이딩 윈도우)
배열에서 연속된 3개의 합 중 최솟값을 구하세요.
const arr = [4, 2, 1, 5, 3];
// 기대 출력: 6 (2+1+3 아니고 연속이어야 함, 2+1+5=8? 아니고 1+5+3=9? 아니고 4+2+1=7? 2+1+5=8)
// 정답은 7 (4+2+1)
 */
const arr2 = [4, 2, 1, 5, 3];
const num = 3;

let addNum = 0;
for (let i = 0; i < num; i++) addNum += arr2[i];

let min = addNum;

for (let i = num; i < arr2.length; i++) {
  //여기서 3이라고 쓰지말고 num처리!!
  addNum += arr[i];
  addNum -= arr[i - num];
  min = Math.min(addNum, min);
}

console.log(min);

/* 문제 3 (투 포인터 응용)
정렬된 배열에서 합이 target 이하인 쌍의 개수를 구하세요.
const arr = [1, 2, 3, 4, 5];
const target = 6;
// 기대 출력: 6
 */
const arr3 = [1, 2, 3, 4, 5];
const target3 = 6;
let count = 0;

let left3 = 0;
let right3 = arr3.length - 1;

while (left3 < right3) {
  const sum = arr3[left3] + arr3[right3];

  if (sum === target3) {
    // arr[left3]와 함께 쌍을 이룰 수 있는 숫자는
    // arr[left3+1]부터 arr[right3]까지 총 (right3 - left3)개입니다.
    count += right3 - left3;

    // 왼쪽 포인터를 옮겨 다음 기준 숫자로 넘어갑니다.
    left3++;
  } else {
    // 합이 target보다 크면 숫자를 줄여야 하므로 오른쪽 포인터를 왼쪽으로 옮깁니다.
    right3--;
  }
}

console.log(count);
