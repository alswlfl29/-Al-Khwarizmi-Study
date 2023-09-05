/* 숨어있는 숫자의 덧셈 (1)
  문제 설명: 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
  var answer = 0;
  my_string = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .map((x) => (answer += Number(x)));
  return answer;
}

/**
 * 문자열 안 숫자만 출력하기
 * → 정규식 이용 (/[^0-9]/g): 숫자가 아닌 문자를 모두 선택
 * 문자열.replace(/[^0-9]/g,'')
 */
