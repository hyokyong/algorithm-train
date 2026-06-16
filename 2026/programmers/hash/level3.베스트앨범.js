//https://school.programmers.co.kr/learn/courses/30/lessons/42579

//2개씩 출시
//1. 재생 가장 많이, 2. 장르내 많이 재생된거 먼저 3. 같은 경우 고유 낮은거먼저
//장르에 곡이 하나면 하나만 선택

// 장르 별 총합.
// 장르별 - 3:800, 0: 500,

// 장르 별 총합 크기별로 줄세우기.
// 1번 장르 2개, 2번장르 2개, 3번장르 1개...

// classic : {3: 800, 0: 500, }

// 위에까지가 생각한 부분인데, 잘 생각했음.
// /근데 저장할때 classic: [] 배열로. 그 배열안에 [{id: i, play: play }] 형태로 저장함!!!!

function solution(genres, plays) {
  // 장르 총합
  let gMap = new Map();

  //원래는 여기서 장르 총합만 구하려고 했는데.. 여기서 play목록도 같이 넣어줌.
  let pMap = new Map();

  for (let i = 0; i < genres.length; i++) {
    // 장르 총합
    gMap.set(genres[i], (gMap.get(genres[i]) || 0) + plays[i]);

    // 노래 세팅. 해시 맵에 배열이 들어가야하는 경우 빈 배열 먼저 세팅
    if (!pMap.has(genres[i])) {
      pMap.set(genres[i], []);
    }

    // push!!!
    pMap.get(genres[i]).push({ id: i, play: plays[i] });
  }

  // ex [['classic', 1200], ['pop', 150]]
  // 내림차순 정렬. 새 변수에 담아주자.

  // 내림차순. 해당 map 찾아서 다시 내림차순 정렬 해서 2개만 찾기.
  const gArray = [...gMap].sort((a, b) => b[1] - a[1]);

  const answer = [];

  for (const [genre, time] of gArray) {
    let pArray = pMap.get(genre);

    // 객체 배열. a,b는 객체
    pArray.sort((a, b) => {
      if (b.play === a.play) {
        return a.id - b.id; // 재생 횟수가 같으면 id 오름차순
      } else {
        return b.play - a.play; // 다르면 재생 내름차순
      }
    });

    // 앞에서 2개만 꺼낼때 slice 쓰면 에러안남
    // forEach로 걍 돌림
    pArray.slice(0, 2).forEach((play) => {
      answer.push(play.id);
    });
  }
  return answer;
}

/*
패턴 1: Map의 Value로 배열 활용하기 (`if (!map.has(key)) map.set(key, [])`)
- 해시맵에 단순히 숫자나 문자열만 넣는 게 아니라, 복잡한 객체 배열을 그룹화할 때 쓰는 정석 코드입니다. 방이 없으면 빈 배열(`[]`)을 먼저 만들어주고, 그 뒤에 `.push()`를 채우는 흐름을 통째로 외우셔야 합니다.

패턴 2: 다중 조건 정렬 (`sort` 안에서 `if`문 분기)
- "A 조건이 같으면 B 조건으로 정렬하라"는 요구사항은 코테에 단골로 나옵니다. `sort((a, b) => { if (조건이 같으면) return 값; return 다른값; })` 구조는 기계적으로 튀어나올 수 있게 암기해 두는 것이 좋습니다.

패턴 3: 안전하게 개수 제한하기 (`slice(0, 2)`)
- 노래가 1개밖에 없을 때 `songs[0]`, `songs[1]`을 수동으로 꺼내려고 하면 `undefined` 에러가 날 수 있습니다. 자바스크립트의 `slice(0, 2)`는 배열 안에 아이템이 1개만 있으면 1개만 잘라주므로 예외 처리를 자동으로 해주는 아주 안전한 무기입니다.
*/
