/* 문제 1
문자열에서 가장 많이 등장한 문자와 그 횟수를 반환하세요. 같은 횟수면 알파벳 순서가 빠른 것을 반환하세요.
const str = "aabbccddde";
// 기대 출력: { char: "d", count: 3 }
*/
// 해시맵. 배열로 변환. 소팅
const str = "aabbccddde";

const obj = {};

for (const item of str) {
  obj[item] = (obj[item] || 0) + 1;
}

const objArr = Object.entries(obj);
objArr.sort((a, b) => {
  if (a[1] === b[1]) return a[0].localeCompare(b[0]);
  else return b[1] - a[1];
});

const result = {};
result["char"] = objArr[0][0];
result["count"] = objArr[0][1];

/* 문제 3
괄호 문자열이 주어졌을 때, 올바른 괄호면 true, 아니면 false를 반환하세요.
const str1 = "(()())";  // true
const str2 = "((()";    // false
const str3 = ")(";      // false
*/
//스택
const str1 = "(()())"; // true
const stack = [];

for (const item of str1) {
  if (item === "(") {
    stack.push("(");
  } else {
    if (stack.length > 0) stack.pop();
  }
}

console.log(stack.length === 0);

/* 문제 3
숫자 배열에서 두 수의 합이 target이 되는 쌍이 존재하면 true, 없으면 false를 반환하세요.
*/
//투포인터
const arr = [4, 1, 9, 7, 5, 3];
const target = 10;

arr.sort((a, b) => a - b); // 투 포인터에서는 정렬된 배열을 반드시 사용해야함.

let left = 0;
let right = arr.length - 1;
let result;

while (left < right) {
  const sum = arr[left] + arr[right];

  if (sum === target) {
    result = true;
    break; // 빠져 나가지 않으면 무한 루프 돈다......
  } else if (sum < target) {
    left++;
  } else {
    right--;
  }
}

if (!result) result = false;

/* 문제 2
두 배열에서 공통 요소의 개수를 반환하세요.
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
// 기대 출력: 3
*/

/* 문제 4
숫자 배열을 뒤집으세요.
jsconst arr = [1, 2, 3, 4, 5];
// 기대 출력: [5, 4, 3, 2, 1]
*/

/* 문제 5
두 배열의 교집합을 구하세요. (중복 없이)
jsconst a = [1, 2, 2, 3, 4];
const b = [2, 3, 3, 5];
// 기대 출력: [2, 3]
*/

/* 문제 6
배열에서 한 번만 등장하는 숫자를 반환하세요.
const arr = [1, 2, 3, 2, 1, 4];
// 기대 출력: [3, 4]
*/

/* 문제 7
숫자 n을 받아 1부터 n까지 배열로 반환하세요.
makeArr(5); // [1, 2, 3, 4, 5]
*/

/* 문자열을 뒤집으세요.
reverse("hello"); // "olleh"
*/

/* 문제 9
배열에서 세 수의 합이 0이 되는 모든 조합을 구하세요.
jsconst arr = [-2, 0, 1, 2, -1];
// 기대 출력: [[-2,0,2], [-1,0,1]]
*/

/*
문제 10
두 수의 합이 target이 되는 쌍이 존재하면 true, 없으면 false를 반환하세요.
jsconst arr = [4, 1, 9, 7, 5, 3];
const target = 10;
// 기대 출력: true
*/

/*
문제 11
회의 목록에서 최대한 많은 회의를 선택하세요.
jsconst meetings = [[1,3],[2,4],[3,5],[4,6],[5,7]];
// 기대 출력: 3
*/

/*
문제 12
최소 동전 개수로 거스름돈을 만드세요.
jsconst coins = [1, 5, 10, 50, 100];
let amount = 178;
// 기대 출력: 9
*/

/*
문제 13
그래프에서 1번 노드와 연결된 노드 개수를 반환하세요.
jsconst graph = { 1:[2,3], 2:[1,4], 3:[1], 4:[2], 5:[6], 6:[5] };
// 기대 출력: 4
*/

/*
문제 14
1번에서 6번까지 최단 거리를 구하세요.
jsconst graph = { 1:[2,3], 2:[1,4,5], 3:[1], 4:[2,6], 5:[2,6], 6:[4,5] };
// 기대 출력: 3
*/

/*
문제 15
정렬된 배열에서 합이 target인 모든 쌍을 구하세요.
jsconst arr = [1, 2, 3, 4, 5, 6, 7];
const target = 8;
// 기대 출력: [[1,7],[2,6],[3,5]]
*/

/*
문제 16
연속된 k개의 평균 중 최댓값을 구하세요.
jsconst arr = [1, 3, 2, 6, 4, 8, 5];
const k = 3;
// 기대 출력: 6
*/

/*
문제 17
배열을 절댓값 기준 오름차순으로 정렬하세요.
jsconst arr = [-5, 3, -2, 8, -1];
// 기대 출력: [-1, -2, 3, -5, 8]
*/

/*
문제 17
배열을 절댓값 기준 오름차순으로 정렬하세요.
jsconst arr = [-5, 3, -2, 8, -1];
// 기대 출력: [-1, -2, 3, -5, 8]
*/

//4. sort 내림차순. for문 거꾸로 돌기
//5. new set 돌리고, map변환. 새배열에 push
//6. object로 몇번 나오는지 체크. arr 숫자로 소팅. for 1인것만
//7. for문 push
//8. 걍 리버스 쓰면 안돼?
//9. 백트레킹
//10.동일
//11. 그리디
//12. 그리디
//13. bfs 먼소리임
//14. bfs
//15. 투포인터
//16. 창문
//17.
