/* 몫 구하기
문제 설명
정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요. */

function solution(num1, num2) {
  var answer = parseInt(num1 / num2);
  return answer;
}

function solution(num1, num2) {
  var answer = num1 / num2;
  return Math.floor(answer);
}

/* 위 아래 방식 차이점
첫 번째 함수 (parseInt)는 음수를 올림하여 처리
두 번째 함수 (Math.floor)는 음수를 내림하여 처리
따라서 양수에 대해서는 두 함수가 동일한 결과를 반환하지만, 음수에 대해서는 다른 결과를 반환함 */
