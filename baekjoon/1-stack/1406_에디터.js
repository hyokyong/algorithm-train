/*
[문제]
한 줄로 된 간단한 에디터를 구현하려고 한다. 이 편집기는 영어 소문자만을 기록할 수 있는 편집기로, 최대 600,000글자까지 입력할 수 있다.
이 편집기에는 '커서'라는 것이 있는데, 커서는 문장의 맨 앞(첫 번째 문자의 왼쪽), 문장의 맨 뒤(마지막 문자의 오른쪽), 또는 문장 중간 임의의 곳(모든 연속된 두 문자 사이)에 위치할 수 있다. 즉 길이가 L인 문자열이 현재 편집기에 입력되어 있으면, 커서가 위치할 수 있는 곳은 L+1가지 경우가 있다.
이 편집기가 지원하는 명령어는 다음과 같다.
L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
B	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
P $	$라는 문자를 커서 왼쪽에 추가함

[입력]
첫째 줄에는 초기에 편집기에 입력되어 있는 문자열이 주어진다. 이 문자열은 길이가 N이고, 영어 소문자로만 이루어져 있으며, 길이는 100,000을 넘지 않는다. 둘째 줄에는 입력할 명령어의 개수를 나타내는 정수 M(1 ≤ M ≤ 500,000)이 주어진다. 셋째 줄부터 M개의 줄에 걸쳐 입력할 명령어가 순서대로 주어진다. 명령어는 위의 네 가지 중 하나의 형태로만 주어진다.

[출력]
첫째 줄에 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열을 출력한다.
*/
function solution(string, commands) {
  // 커서가 맨 오른쪽에 있는 상태
  const leftStack = string.split('');
  const rightStack = [];

  for (let i = 0; i < commands.length; i++) {
    const [command, value] = commands[i].split(' ');

    switch (command) {
      case 'L':
        // 문장 맨앞이면 무시 조건
        if (leftStack.length !== 0) {
          rightStack.push(leftStack.pop());
        }
        break;
      case 'D':
        if (rightStack.length !== 0) {
          leftStack.push(rightStack.pup());
        }
        break;
      case 'B':
        if (leftStack.length !== 0) {
          leftStack.pop();
        }
        break;
      case 'P':
        leftStack.push(value);
        break;
    }
  }
  const right = rightStack.reverse();
  const result = leftStack.concat(right).join('');
  return result;
}

const string = 'abcd';
const commands = ['P x', 'L', 'P y'];

console.log(solution(string, commands));
