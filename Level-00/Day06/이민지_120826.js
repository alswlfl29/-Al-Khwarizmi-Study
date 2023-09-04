/* 특정 문자 제거하기
  문제 설명: 문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
          my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/
function solution(my_string, letter) {
  var answer = "";
  const newReg = new RegExp(letter, "g");
  answer = my_string.replace(newReg, "");
  return answer;
}
/**
 * 문자열에서 특정 문자 제거하는 방법
 * 문자열.replace(제거할 문자,'') -> 문자열에서 제일 먼저 등장한 문자만 제거
 * 문자열.replace(/제거할 문자/g,'') -> 제거할문자를 모두 제거 (g는 global을 의미)
 * 문자열.replace(/제거할 문자/i,'') -> 제거할문자를 대소문자 구분 없이 제거 (i는 ignore case을 의미)
 * 문자열.replace(/제거할 문자/ig,'') -> 제거할문자를 대소문자 구분 없이 모두 제거
 */

/**
 * replace에 변수 사용하기
 * -> RegExp 객체 활용하기!
 * ex) let newReg = new RegExp(patter,"g");
 */
