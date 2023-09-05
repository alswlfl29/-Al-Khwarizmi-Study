// 문자열 안에 문자열
function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}

console.log(solution('ab6CDE443fgh22iJKlmn1o', '6CD'));
// if 말고 3항연산 자주 써보자
