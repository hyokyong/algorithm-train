//https://school.programmers.co.kr/learn/courses/30/lessons/42586

//각 수마다 100에서 뺀 값을 스피드로 나눠서 기간을 계산
//계산한 기간을 새 배열에 담아둠
//새 배열에 첫번째 기간은 담아두고, 나머지 기간과 비교하여 담기

function solution(progresses, speeds) {
  const dateArr = [];

  for (let i = 0; i < progresses.length; i++) {
    let progress = progresses[i];
    let speed = speeds[i];
    let date = 0;

    //올림 처리
    date = Math.ceil((100 - progress) / speed);
    dateArr.push(date);
  }

  //5,10,1,1,20,1
  //1,3,2

  //7,3,9
  //2,1

  //dateArr과 비교
  const answer = [];

  let maxDay = dateArr[0];
  let count = 1;

  for (let i = 1; i < dateArr.length; i++) {
    if (dateArr[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      maxDay = dateArr[i];
      count = 1;
    }
  }

  //마지막에 else를 타지 못하고 끝난 경우!!!
  answer.push(count);

  return answer;
}
