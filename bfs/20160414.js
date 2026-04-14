/**
 * 민서가 몬서트를 공격하면 민서의 공격력만큼 몬스터의 체력이 깎이며, 몬스터의 체력이 0 이하가 되면 몬스터는 죽는다.
 * 몬스터는 체력은 T, 민서의 공격력은 X
 * 민서가 한 번의 공격으로 몬스터를 처치하지 못하면 민서가 패배하며, 한 번의 공격으로 처치하는데 성공하면 민서가 승리.
 * 민서는 이길 가능성이 없는 대결은 하지 않기 때문에 대결의 승자를 미리 알아내려고 한다.
 *
 * 입력:
 * T: 몬스터의 체력
 *  1<= T <= 1000
 * X: 민서의 공격력
 *  1<= X <= 1000
 *
 * 출력:
 * 민서가 승리하면 1, 패배하면 0
 *
 * 예제:
 * T X return
 * 5 5 1
 * 6 5 0
 *
 */

function solution(T, X) {
  return X >= T ? 1 : 0;
}

/**
 * 가까운 병원 찾기
 * A행성에는 1번부터 n번까지 n개의 나라가 있다. A행성 주민들은 다른 나라로 이동할 때 텔레포트를 사용한다.
 * 단, 텔레포트로 어느 나라든지 갈 수 있는 것은 아니다.
 * 현재 i번 나라에 있는 주민은 i를 나누는 소인수 p에 대하여 i/p번 나라로 텔레포트하거나,
 * i*p <= n을 만족하는 어떤 소수 p에 대하여 i*p번 나라로만 텔레포트할 수 있다.
 *
 * 그러나 이 행성에는, 병원이 있는 나라가 s[0],...,s[s-1]의 s개로 정해져있다.
 *
 * 우리는 어떤 나라의 번호들이 Q[0],...,Q[q-1]의 q개가 있을 때,
 * 최소 몇 번의 텔레포트를 통해 가장 가까운 병원으로 갈 수 있는 각각 구하는 프로그램을 작성해야 한다.
 *
 * 입력:
 *  N : 나라의 개수
 *  1<= N <= 200000
 *
 *  S[i]: 크기가 s인 일차원 배열, 병원이 있는 나라가 저장되어 있다.
 *  1 <= s <= N
 *  1<= S[i] <= N
 *  S[i]는 중복되지 않는다.
 *
 *  Q[i]: 크기가 q인 일차원 배열
 *  1<= q <= 200000
 *  1<= Q[i] <= N
 *
 * 출력:
 *  크기가 q인 일차원 배열 answer
 *  answer[i]: Q[i]에서 몇 번의 텔레포트를 통해 가장 가까운 병원으로 갈 수 있는지.
 *
 * 예제:
 *  N  S       Q        answer
 *  12 [2,3,9] [1,3,12] [1,0,2]
 *
 * 풀이!!!!!!!
 *  answer에는 몇 번의 텔레포트 갯수!!!!!!
 *  행성 A에 나라가 1번~N번까지 있어.
 *  병원은 특정 나라들에만 있고 (S 배열), 나는 Q번 나라에서 출발해서 최소 몇 번 텔레포트로 병원 있는 나라에 갈 수 있냐를 구하는 거야.
 *
텔레포트 규칙 (핵심!)
현재 i번 나라에 있으면 이동 가능한 곳:

i ÷ p (소수 p로 나누기) — 더 작은 번호로 이동
i × p (단, i×p ≤ N) — 더 큰 번호로 이동

여기서 p는 i를 나누는 소수야.
예시로 i=12일 때:

12의 소인수: 2, 3 (1제외)
이동 가능: 12/2=6, 12/3=4, 12×2=24(N=12이면 불가), 12×3=36(불가)
즉 6번, 4번으로 이동 가능
 */

function solution(N, S, Q) {
  const hospital = new Set(S);

  function getPrimeFactors(num) {
    const factors = new Set(); //하나 생성해 리턴할거임
    let n = num;

    //소인수 구하기
    for (let i = 2; i * i <= n; i++) {
      //if가 아닌 while 쓰기
      while (n % i === 0) {
        factors.add(i);
        n = n / i;
      }
    }
    if (n > 1) factors.add(n);
    return factors;
  }

  function bfs(start) {
    if (hospital.has(start)) return 0; // 기본 조건 먼저 넣기!!!

    // 기존 bfs
    const visited = new Set([start]);
    const q = [[start, 0]];

    while (q.length > 0) {
      const [cur, dist] = q.shift();

      const primes = getPrimeFactors(cur); // 소인수 구하기

      for (let prime of primes) {
        const next1 = cur / prime;
        const next2 = cur * prime;

        for (let next of [next1, next2]) {
          if (next < 1 || next > N) continue; // 최소, 최대값 체크

          if (visited.has(next)) continue; // 이미 방문했다면 패스

          if (hospital.has(next)) return dist + 1; // 아예 리턴

          visited.add(next);
          q.push([next, dist + 1]);
        }
      }
    }
  }
  return Q.map((q) => bfs(q));
}
