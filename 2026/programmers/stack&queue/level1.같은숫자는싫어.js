//https://school.programmers.co.kr/learn/courses/30/lessons/12906

//내가푼거
// 앤써랑 arr 비교
function solution(arr) {
  const answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== answer[answer.length - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

function solution(arr) {
  // 내 현재 원소(val)가 내 바로 다음 원소(arr[index + 1])와 다른 것만 남기기
  return arr.filter((val, index) => val !== arr[index + 1]);
}
