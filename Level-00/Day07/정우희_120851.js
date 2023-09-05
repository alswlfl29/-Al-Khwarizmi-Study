/* 숨어있는 숫자의 덧셈 (1)
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
  let sum = 0;

  for (let char of my_string) {
    if (char >= '0' && char <= '9') {
      // 문자가 숫자인지 확인
      sum += parseInt(char);
    }
  }

  return sum;
}
