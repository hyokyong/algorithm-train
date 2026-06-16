//https://school.programmers.co.kr/learn/courses/30/lessons/1845

//내가푼거
//전체 length가 있을거고
//그거 이분의일 한거만큼 뽑을거고. ex)3종류

//map의 크기가 반종류보다 크면 반종류.
//작으면 Map 크기

function solution(nums) {
  let numsMap = new Map();

  for (const num of nums) {
    numsMap.set(num, (numsMap.get(num) || 0) + 1);
  }

  let numsChoose = nums.length / 2;

  if (numsMap.size >= numsChoose) return numsChoose;
  else return numsMap.size;
}

// ai 답안
function solution(nums) {
  // 1. 가져갈 수 있는 최대 마리수 계산
  const maxSelect = nums.length / 2;

  // 2. Set을 이용해 중복 제거 (종류 수 파악)
  const pokemonTypes = new Set(nums).size;

  // 3. 둘 중 작은 값이 내가 가질 수 있는 최대 종류의 수
  return Math.min(maxSelect, pokemonTypes);
}

/* 
패턴 1: 자바스크립트 배열 중복 제거 (`new Set(배열)`)
- 자바스크립트에서 배열의 중복 원소를 없애고 고유한 값만 남기고 싶을 때는  `new Set(array)`를 쓰면 가장 빠르고 깔끔하게 중복이 제거됩니다.

패턴 2: Set의 크기는 `.length`가 아니라 `.size`다!
- 일반 배열은 `.length`로 길이를 재지만, `Map`과 `Set` 같은 특수 자료구조는 내부에 저장된 데이터 개수를 셀 때 **`.size`** 프로퍼티를 사용합니다. size() 아니고 size

*/
