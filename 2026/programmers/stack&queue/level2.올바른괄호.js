//https://school.programmers.co.kr/learn/courses/30/lessons/12909

//내가 푼거
function solution(s) {
  const arr = [];

  if (s[0] === ")") {
    return false;
  }

  arr.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push("(");
    } else {
      // 닫힌 괄호(')')를 만났는데 스택이 비어있다면?
      //에러남
      arr.pop();
    }
  }

  return arr.length === 0;
}

//추천
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("("); // 열리면 스택에 추가
    } else {
      // 닫힌 괄호(')')를 만났는데 스택이 비어있다면?
      // 이미 짝이 맞지 않으므로 조기 탈락!
      if (stack.length === 0) {
        return false;
      }
      stack.pop(); // 짝을 찾았으니 스택에서 제거
    }
  }

  return stack.length === 0;
}

function solution(s) {
  let count = 0; // 스택 대신 사용할 카운터 변수

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++; // push 대신 숫자를 올림
    } else {
      if (count === 0) {
        return false; // 비어있는데 닫으려고 하면 즉시 false
      }
      count--; // pop 대신 숫자를 내림
    }
  }

  return count === 0; // 다 돌았을 때 0이어야 안전하게 다 닫힌 것
}
