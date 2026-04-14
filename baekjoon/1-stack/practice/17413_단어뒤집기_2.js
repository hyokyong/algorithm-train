/*
[문제]
문자열 S가 주어졌을 때, 이 문자열에서 단어만 뒤집으려고 한다.

먼저, 문자열 S는 아래와과 같은 규칙을 지킨다.

알파벳 소문자('a'-'z'), 숫자('0'-'9'), 공백(' '), 특수 문자('<', '>')로만 이루어져 있다.
문자열의 시작과 끝은 공백이 아니다.
'<'와 '>'가 문자열에 있는 경우 번갈아가면서 등장하며, '<'이 먼저 등장한다. 또, 두 문자의 개수는 같다.
태그는 '<'로 시작해서 '>'로 끝나는 길이가 3 이상인 부분 문자열이고, '<'와 '>' 사이에는 알파벳 소문자와 공백만 있다. 단어는 알파벳 소문자와 숫자로 이루어진 부분 문자열이고, 연속하는 두 단어는 공백 하나로 구분한다. 태그는 단어가 아니며, 태그와 단어 사이에는 공백이 없다.
*/
function solution(string) {
  let temp = "";
  let isTag = false;
  let ans = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "<") {
      isTag = true;
      ans += temp.split("").reverse().join("") + "<";
      temp = "";
    } else if (string[i] === ">") {
      isTag = false;
      ans += temp + ">";
      temp = "";
    } else if (string[i] === " ") {
      ans += (!isTag ? temp.split("").reverse().join("") : temp) + " ";
      temp = "";
    } else {
      temp += string[i];
    }
  }
  return (ans + temp.split("").reverse().join("")).replace(/\n/g, "");
}

console.log(solution("sisisi sososo <tag>momomo"));

//2026 문제 풀이
//괄호랑 뒤집기는 스택!!!!!!!!
//괄호 앞에꺼 뒤집기, 괄호는 그대로까진 생각해냄
function solution2(string) {
  let stack = [];
  let result = [];
  let isTag = false;

  for (let str of string) {
    // 차례로 넣어
    if (str === "<") {
      while (stack.length > 0) {
        result.push(stack.pop());
      }
      isTag = true;
      result.push(str);
    }
    // > 이거 넣어
    else if (str === ">") {
      isTag = false;
      result.push(str);
    }
    // 차례로 넣어
    else if (isTag === true) {
      result.push(str);
    }
    // 태그 밖에
    else {
      // 공백이면
      if (str === " ") {
        //공백 앞 뒤집기
        while (stack.length > 0) {
          result.push(stack.pop());
        }
        result.push(str); // 공백을 결과에 추가해줘야 합니다!
      }
      // 그냥 단어
      else {
        stack.push(str);
      }
    }
  }

  // 문장 마지막에 태그 없이 끝난 단어가 있다면 비워줘야 합니다.
  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result.join("");
}

// 문자열을 활용한 방법.
function solution3(string) {
  let stack = "";
  let result = "";
  let isTag = false;

  for (let str of string) {
    // str = <
    if (str === "<") {
      isTag = true;
      result += stack.split("").reverse().join("");
      result += str;
      stack = "";
    }
    // str = >
    else if (str === ">") {
      isTag = false;
      result += str;
    }
    // str = 공백
    else if (str === " ") {
      if (isTag === true) {
        result += str;
      } else {
        result += stack.split("").reverse().join("");
        result += str;
        stack = "";
      }
    }
    // str = 문자열, 나중에 뒤집을 것을 stack에 추가
    else {
      if (isTag === true) {
        result += str;
      } else {
        stack += str;
      }
    }
  }

  // 문장 마지막에 태그 없이 끝난 단어가 있다면 비워줘야 합니다.
  if (stack.length > 0) {
    result += stack.split("").reverse().join("");
  }

  return result;
}

// 스택 활용 추천!! 스택은 배열
function solution4(string) {
  let stack = [];
  let result = [];
  let isTag = false;

  for (let str of string) {
    // str = <
    if (str === "<") {
      isTag = true;

      // 앞에 문자열 넣어주기
      while (stack.length > 0) {
        result.push(stack.pop());
      }
      result.push(str);
    }
    // str = >
    else if (str === ">") {
      isTag = false;
      result.push(str);
    }
    // str = 공백
    else if (str === " ") {
      // 태그 안이면
      if (isTag === true) {
        result.push(str);
      }
      // 태그 바깥이면 앞에 문자열 넣어주기
      else {
        while (stack.length > 0) {
          result.push(stack.pop());
        }
        result.push(str);
      }
    }
    // 문자열
    else {
      // 태그 안이면
      if (isTag === true) {
        result.push(str);
      }
      // 태그 바깥이면 스택에 넣기
      else {
        stack.push(str);
      }
    }
  }

  // 문장 마지막에 태그 없이 끝난 단어가 있다면 비워줘야 합니다.
  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result.join("");
}
