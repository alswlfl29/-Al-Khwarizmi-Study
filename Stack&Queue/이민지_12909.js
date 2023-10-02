/**
 * 올바른 괄호
 * 문제 설명: 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
 *          - "()()" 또는 "(())()" 는 올바른 괄호입니다.
 *          - ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
 *          '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
 */
function solution(s) {
  let stack = [];
  if (s[0] === ")") {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
}

/* 모범 풀이
  function solution(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      sum += s[i] === "(" ? 1 : -1;
      if(sum < 0) return false;
    }
    return sum ? false : true;
  }
 */
console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
