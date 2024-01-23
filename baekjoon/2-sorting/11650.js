// https://www.acmicpc.net/problem/11650

function solution() {
  // let fs = require('fs');
  // let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let input = ['5', '3 4', '1 1', '1 -1', '2 2', '3 3'];

  // 갯수
  let n = Number(input[0]);

  let data = [];
  for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number); // split으로 쪼개진 배열을 숫자로 변환, 구조분해할당으로 배열 만듦
    data.push([x, y]);
  }

  function compare(a, b) {
    if (a[0] != b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  }

  console.log(data);
  // [ [ 3, 4 ], [ 1, 1 ], [ 1, -1 ], [ 2, 2 ], [ 3, 3 ] ]

  data.sort(compare);

  let answer = '';
  for (let point of data) {
    answer += point[0] + ' ' + point[1] + '\n';
  }

  console.log(answer);
}

solution();
