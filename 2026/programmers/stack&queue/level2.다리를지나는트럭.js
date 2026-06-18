//https://school.programmers.co.kr/learn/courses/30/lessons/42583

//내가 푼거
function solution(bridge_length, weight, truck_weights) {
  //다리의길이
  //최대무게. 다음트럭과의 비교

  //하나 shift. secount++, 다음꺼랑 웨이트 비교해서 배열에 넣을지 체크

  //지나가는중 배열
  //다 지나가면 second++

  const movingTruck = [];
  const doneTruck = [];
  let second = 0;

  for (
    let i = 0;
    i < truck_weights.length;
    i++ //나중에 마지막 세컨드에 +1하기.
  ) {
    let currentTruck = truck_weights[i];
    movingTruck.push(currentTruck);
    second++;

    //더 탈수있다면
    if (currentTruck + truck_weights[i + 1] <= weight) {
      movingTruck.push(truck_weights[i + 1]);
    }
    //더 못탄다면
    else {
    }
  }

  return second + 1;
}

//답변
function solution(bridge_length, weight, truck_weights) {
  //다리 길이만큼 0으로 가득찬 큐 만들기!!!!!
  const movingTruck = Array(bridge_length).fill(0);
  let second = 0;
  let weightSum = 0; // 다리위 총 무게

  while (truck_weights.length > 0 || weightSum > 0) {
    second++;

    // 일단 다리 맨 앞 칸을 비웁니다 (나가는 트럭 처리) 0부터 시작
    const firstTruck = movingTruck.shift();
    weightSum -= firstTruck;

    // 2. 이제 다음 트럭이 들어올 수 있는지 체크합니다
    if (truck_weights.length > 0) {
      //무게가 적다면
      if (weightSum + truck_weights[0] <= weight) {
        const nextTruck = truck_weights.shift();
        movingTruck.push(nextTruck);
        weightSum += nextTruck;
      } else {
        // 무게 초과면 빈 공간(0)을 밀어 넣기
        movingTruck.push(0);
      }
    }
  }

  return second;
}

//내가 생각 못한 것. 다리위에 총 무게..!!!!
