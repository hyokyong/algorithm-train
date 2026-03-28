/* 01 Map
숫자 배열이 주어졌을 때, 각 숫자를 제곱한 새 배열을 반환하세요.
const input = [1, 2, 3, 4, 5];
기대 출력: [1, 4, 9, 16, 25]
*/
const input = [1, 2, 3, 4, 5];
const newMapArray = input.map((item) => item * item);
console.log(newMapArray);

/* 02 Filter
문자열 배열에서 길이가 4 이상인 단어만 추려내세요.
const words = ["cat", "apple", "dog", "banana", "hi"];
기대 출력: ["apple", "banana"]
*/
const words = ["cat", "apple", "dog", "banana", "hi"];
const newFilterArray = words.filter((item) => item.length > 3);
console.log(newFilterArray);

/* 03 Reduce
숫자 배열에서 가장 큰 수를 구하세요. (Math.max 사용 금지)
const nums = [3, 1, 7, 2, 9, 4];
기대 출력: 9
*/
const nums = [3, 1, 7, 2, 9, 4];
const max = nums.reduce((acc, cur) => {
  return cur > acc ? cur : acc;
}, 0);
console.log(max);

// !!!!!주의!!!!!
// 배열이 양수라 맞았지만 음수면 틀림 !! 배열의 경우 초깃값 설정을 빼면 배열의 첫요소로 설정됨
const max2 = nums.reduce((acc, cur) => (cur > acc ? cur : acc));

/* 04 Sort
숫자 배열을 내림차순으로 정렬하세요.
const nums = [5, 2, 8, 1, 9, 3];
기대 출력: [9, 8, 5, 3, 2, 1]
*/
const nums2 = [5, 2, 8, 1, 9, 3];
const newSortArray = nums2.sort((a, b) => b - a);
console.log(newSortArray);

/* 05 Slice
배열에서 앞의 2개를 제외한 나머지를 반환하세요.
const arr = [10, 20, 30, 40, 50];
기대 출력: [30, 40, 50]
*/
const arr = [10, 20, 30, 40, 50];
const newSliceArray = arr.slice(2); //2부터 쭈욱
console.log(newSliceArray);

/* 06 Sort + Slice
숫자 배열에서 가장 큰 수 2개를 구하세요.
const nums = [4, 1, 7, 3, 9, 2];
기대 출력: [9, 7]
*/
const nums3 = [4, 1, 7, 3, 9, 2];
nums3.sort((a, b) => b - a);
const newSortSliceArray = nums3.slice(0, 2);
console.log(newSortSliceArray);
