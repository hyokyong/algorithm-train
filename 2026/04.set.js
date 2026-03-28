/* 01 중복제거
배열에서 중복을 제거한 새 배열을 반환하세요.
const arr = [1, 2, 2, 3, 4, 4, 5];
// 기대 출력: [1, 2, 3, 4, 5]
 */
const arr = [1, 2, 2, 3, 4, 4, 5];
const newArr = [...new Set(arr)];
console.log(newArr);

/* 02 존재확인
배열에 중복된 값이 하나라도 있으면 true, 없으면 false를 반환하세요.
const arr1 = [1, 2, 3, 4, 5];    // false
const arr2 = [1, 2, 2, 3, 4];    // true
 */
const arr2 = [1, 2, 2, 3, 4]; // true
const newArr2 = [...new Set(arr2)];
//내가 푼거!!
console.log(arr2.length === newArr2.length ? false : true);
//클로드 추천!!
console.log(arr2.length !== new Set(arr2).size);

/* 03
두 배열의 합집합을 구하세요. (중복 없이)
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
// 기대 출력: [1, 2, 3, 4, 5, 6]
 */

//내가푼거!!
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

for (const item of b) {
  a.push(item);
}

const newArr3 = [...new Set(a)];
console.log(newArr3);

//클로드 추천!! 스프레드 연산자 사용하기
//const newArr3 = [...new Set([...a, ...b])];
