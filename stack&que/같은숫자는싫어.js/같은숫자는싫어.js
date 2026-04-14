function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

console.log(solution([1, 1, 3, 5, 7, 7, 7, 8, 9]));

//2026 문제 풀이
function solution2(arr) {
  return [...new Set(arr)];
}
