/* https://school.programmers.co.kr/learn/courses/30/lessons/42576 */

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

console.log(solution(['sisisi', 'sososo', 'momomo'], ['sososo', 'momomo']));

// 해시 사용
function solution2(participant, completion) {
  const completedRunnerMapper = {};
  let unfinishedRunner = '';

  completion.forEach((runner) => {
    completedRunnerMapper[runner] = completedRunnerMapper[runner]
      ? completedRunnerMapper[runner] + 1
      : 1;
  });

  participant.forEach((runner) => {
    if (completedRunnerMapper[runner]) {
      completedRunnerMapper[runner] = completedRunnerMapper[runner] - 1;
    } else {
      unfinishedRunner = runner;
    }
  });

  return unfinishedRunner;
}

console.log(solution2(['sisisi', 'sososo', 'momomo'], ['sososo', 'momomo']));
