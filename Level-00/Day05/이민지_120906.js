/* 자릿수 더하기
  문제 설명: 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
*/
function solution(n) {
  var answer = 0;
  const arr = Array.from(String(n));
  arr.map((x) => (answer += Number(x)));
  return answer;
}
