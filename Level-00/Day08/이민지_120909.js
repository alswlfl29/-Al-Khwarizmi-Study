/* 제곱수 판별하기
  문제 설명: 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 
          정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
*/
function solution(n) {
  var answer = 0;
  answer = Math.sqrt(n) % 1 === 0 ? 1 : 2;
  return answer;
}

/**
 * Math.sqrt(number) -> number의 제곱근 구함
 * 정수인지 실수인지 확인하는 방법
 * - 숫자 % 1 === 0 인 경우 정수, 아니면 실수
 */
