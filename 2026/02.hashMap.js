/* 01 빈도 카운팅
문자열이 주어졌을 때, 각 문자가 몇 번 나오는지 Object로 반환하세요.
const str = "hello";
 기대 출력: { h: 1, e: 1, l: 2, o: 1 }
 */
const str = "hello"; //문자열은 배열처럼 인덱스 접근 가능
const count = {};

for (const item of str) {
  count[item] = (count[item] || 0) + 1;
}
console.log(count);

/* 02 존재 확인
두 배열이 주어졌을 때, 두 배열에 공통으로 있는 요소만 추려내세요.
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
// 기대 출력: [3, 4, 5]
 */

// 내가 푼거!!
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
const map = new Map();
const result = [];

for (const item of b) {
  map.set(item, item);
}

for (let i = 0; i < a.length; i++) {
  if (a[i] === map.get(a[i])) {
    result.push(a[i]);
  }
}
console.log(result);

// 클로드가 추천해준 답변!!
// b의 요소들을 Object에 저장해두고, a를 filter 돌리면서 Object에 있는지 확인하는 방식이에요.
// 이 패턴 코딩테스트에서 자주 나오니까 기억해두세요!
const set = {};
for (const item of b) set[item] = true;
const result2 = a.filter((item) => set[item]);
console.log(result2);

// 커서가 푼거!!
const common = a.filter((item) => b.includes(item));
console.log(common);

/* 03 빈도 카운트 응용
배열에서 가장 많이 등장한 요소를 반환하세요.
const arr = ["a", "b", "a", "c", "b", "a"];
// 기대 출력: "a"
 */
const arr2 = ["a", "b", "a", "c", "b", "a"];
const count2 = {};

for (const item of arr2) {
  count2[item] = (count2[item] || 0) + 1;
}

const countArray = Object.entries(count2);
countArray.sort((a, b) => b[1] - a[1]);
console.log(countArray[0][0]);
