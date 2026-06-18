//https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  //뒤에 있는것중에 최저값이냐? 랭스 - (i+1). 새 배열에 푸시하기
  //최저가 아닌 경우, 나보다 작아지는 경우를 찾기. 그 index 확인하기. 나부터-작까지.
  //시간초과남 ^^.....

  const answer = [];
  const pricesArr = prices.map((val, idx) => ({
    val: val,
    idx: idx,
  }));

  //굳이 필요없음
  //if(pricesArr.length === 1) {
  //   answer.push(0);
  //    return answer;
  //   }

  //shift쓰는 경우 while 써야됨
  while (pricesArr.length > 0) {
    const first = pricesArr.shift();
    const hasMinPrice = pricesArr.some((price) => price.val < first.val);

    //현재값이 최저가 아닌 경우
    if (hasMinPrice) {
      for (let i = first.idx + 1; i < prices.length; i++) {
        if (first.val > prices[i]) {
          //이부분을 틀림
          //prices.length가 아니라 현재 i - first.idx
          answer.push(i - first.idx);
          break;
        }
      }
    }
    //최저인 경우
    else {
      //랭스 - (i+1)
      answer.push(prices.length - (first.idx + 1));
    }
  }
  return answer;
}

//ai가 풀어준거
function solution(prices) {
  const answer = [];

  // 원본은 건드리지 않고, 숫자로만 index를 가리킵니다. (메모리, 시간 대폭 아낌)
  for (let i = 0; i < prices.length; i++) {
    let count = 0;

    for (let j = i + 1; j < prices.length; j++) {
      count++; // 시간 1초 증가

      if (prices[i] > prices[j]) {
        // 가격이 떨어졌다면
        break; // 즉시 정지
      }
    }
    answer.push(count);
  }

  return answer;
}
