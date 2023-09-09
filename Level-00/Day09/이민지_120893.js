/* 대문자와 소문자
  문제 설명: 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
*/
function solution(my_string) {
  var answer = "";
  my_string = my_string.split("");
  my_string.map((x) => {
    if (x.toUpperCase() === x) {
      answer += x.toLowerCase();
    } else if (x.toLowerCase() === x) {
      answer += x.toUpperCase();
    }
  });
  return answer;
}
/**
 * 대문자 -> 소문자 변경: 문자.toLowerCase()
 * 소문자 -> 대문자 변경: 문자.toUpperCase()
 * 대소문자 확인 방법 -> 해당 문자가 대문자, 소문자 변경했을 때랑 같은지 비교
 */
