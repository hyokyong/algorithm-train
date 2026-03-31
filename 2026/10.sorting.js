/*  문제 1
학생 배열을 점수 내림차순으로 정렬하세요. 점수가 같으면 이름 가나다순으로 정렬하세요.
const students = [
  { name: "철수", score: 90 },
  { name: "영희", score: 85 },
  { name: "민수", score: 90 },
  { name: "지수", score: 85 }
];
// 기대 출력: [민수90, 철수90, 영희85, 지수85]
 */
// 내가 푼거!!
const students = [
  { name: "철수", score: 90 },
  { name: "영희", score: 85 },
  { name: "민수", score: 90 },
  { name: "지수", score: 85 },
];

students.sort((a, b) => {
  if (a.score === b.score) return a.name.localeCompare(b.name);
  return b.score - a.score; // 내림차순
});

//이건 틀린 로직 - 애초에 reduce 쓰면 안됨
//문제 1: 초기값이 없어요
//초기값 없으면 acc가 첫 번째 객체 { name: '철수', score: 90 } 이 돼요. 거기에 문자열 더하면 [object Object]민수90 이런 식으로 나와요.
//문제 2: acc를 안 써요
//reduce는 acc + 현재값 으로 누적해야 해요. 지금은 cur만 반환하고 있어요.
const newArr = students.reduce((acc, cur) => {
  return cur.name + String(cur.score);
});

const resultStudent = students.map((student) => student.name + student.score);
//여기서 join을 쓰면 문자열로 반환
//students.map((student) => student.name + student.score).join(", ");

/*  문제 2
숫자 배열을 이어붙여 만들 수 있는 가장 큰 수를 구하세요.
const nums = [10, 2, 15, 1];
// 기대 출력: "21510 1" 아니고 "21511 0"...
// 정답: "21510" → 2, 15, 1, 10 순서
 */
const nums = [10, 2, 15, 1];

nums.sort((a, b) => {
  const ab = String(a) + String(b);
  const ba = String(b) + String(a);
  return ba - ab; //내림차순
});

const result = nums.join(""); // 반드시 새 변수에 담아줘야함
