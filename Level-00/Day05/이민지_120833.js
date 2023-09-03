/* 배열 자르기
  문제 설명: 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
*/
function solution(numbers, num1, num2) {
  var answer = [];
  answer = numbers.slice(num1, num2 + 1);
  return answer;
}

/**
 * slice vs splice
 * slice(시작 index, 마지막 index)
 * splice(시작 index, 시작부터 몇개를 잘라낼지의 int값)
 */
