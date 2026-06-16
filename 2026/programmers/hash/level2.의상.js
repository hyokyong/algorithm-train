//https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 다른옷 조합 (종류, 이름)
// 겹치지 않게 입어야함
// 하루에 한 개 이상의 의상 입어야함. 아예 안입는건 안됨

// 각 종류 별 의상이 몇개인지 파악
// 계산
function solution(clothes) {
  const clothMap = new Map();

  for (const [name, type] of clothes) {
    clothMap.set(type, (clothMap.get(type) || 0) + 1);
  }

  let answer = 1;

  for (const val of clothMap.values()) {
    answer *= val + 1;
  }

  return answer - 1;
}
