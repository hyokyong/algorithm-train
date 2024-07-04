function solution(n, lost, reserve) {
  // 실제로 체육복이 없는 학생들의 목록에서 여벌이 있는 학생을 제외시킴
  let realLost = lost.filter((l) => !reserve.includes(l));
  // 여벌 체육복을 가진 학생들의 목록에서 도난당한 학생을 제외시킴
  let realReserve = reserve.filter((r) => !lost.includes(r));

  // 체육복을 빌려주는 로직
  for (let i = 0; i < realReserve.length; i++) {
    let lendTo = realLost.find(
      (l) => l === realReserve[i] - 1 || l === realReserve[i] + 1
    );
    if (lendTo !== undefined) {
      realLost = realLost.filter((l) => l !== lendTo);
      realReserve = realReserve.filter((r) => r !== realReserve[i]);
    }
  }

  // 전체 학생 수에서 실제로 체육복이 없는 학생 수를 빼고 반환
  return n - realLost.length;
}

// 테스트 케이스
console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
