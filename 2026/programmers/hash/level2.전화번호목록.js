//https://school.programmers.co.kr/learn/courses/30/lessons/42577

//내가푼거
// 1. 해시맵 사용
function solution(phone_book) {
  let phoneMap = new Map();

  //해시맵으로 만들기
  for (const phone of phone_book) {
    phoneMap.set(phone, 1);
  }

  //전화번호부랑 비교하기
  // 핵심 - phone의 한글자씩 비교해보기!!!!
  for (const phone of phone_book) {
    let prefix = "";

    // 핵심 - leng -1 까지만 체크한다. 끝까지 체크하면 자기 자신을 찾음;;
    for (let i = 0; i < phone.length - 1; i++) {
      prefix += phone[i];

      if (phoneMap.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}

//2. 정렬, startsWith 함수
function solution(phone_book) {
  phone_book.sort(); // 문자열 오름차순 정렬

  //루프를 돌면서 현재 번호와 '바로 다음 번호'만 비교
  //마지막 원소는 i+1이 없으므로 leng-1까지만 비교한다.
  for (let i = 0; i < phone_book.length - 1; i++) {
    // startsWith 함수!!!!
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

//3. 정렬, slice, substring 함수
function solution(phone_book) {
  phone_book.sort(); // 문자열 오름차순 정렬

  for (let i = 0; i < phone_book.length - 1; i++) {
    //substring 또는 slice
    const cutString = phone_book[i + 1].slice(0, phone_book[i].length);

    if (cutString === phone_book[i]) return false;
  }

  return true;
}

/*
패턴 1: 자바스크립트 기본 정렬은 문자열 사전순이다 (`arr.sort()`)
- 흔히 숫자를 정렬할 때 `arr.sort((a, b) => a - b)`를 쓰시던 기억이 있을 겁니다. 하지만 인자를 아무것도 넣지 않고 `arr.sort()`를 실행하면 기본적으로 **문자열 사전순 정렬**이 됩니다.

패턴 2: 특정 문자열로 시작하는지 확인 (`str.startsWith(searchString)`)
- 프론트엔드 실무에서도 종종 쓰이는 ES6 문자열 메서드입니다. `substring`이나 `slice`로 문자열을 쪼개서 비교할 필요 없이, `A.startsWith(B)` 한 줄이면 A가 B로 시작하는지 여부를 `true/false`로 완벽하게 판별해 줍니다.
*/
