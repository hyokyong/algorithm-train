// https://www.acmicpc.net/problem/1181
// 해당 문제는 문자열의 중복을 허용하지 않기 때문에 집합(set) 자료형을 사용

function solution() {
  // let fs = require('fs');
  // let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let input = [
    "13",
    "but",
    "i",
    "wont",
    "hesitate",
    "no",
    "more",
    "no",
    "more",
    "it",
    "cannot",
    "wait",
    "im",
    "yours",
  ];

  // 갯수
  let n = Number(input[0]);

  let data = [];
  for (let i = 1; i <= n; i++) {
    data.push(input[i]);
  }

  // 중복된 원소를 제거하기 위해 집합(set)으로 변환 후 배열로 되돌리기
  data = [...new Set(data)];

  // 정렬 수행
  function compare(a, b) {
    if (a.length !== b.legnt) return a.length - b.length;
    else {
      // 문자열 기본 연산 사용
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
  }

  data.sort(compare);

  for (let x of data) {
    console.log(x);
  }
}

solution();
