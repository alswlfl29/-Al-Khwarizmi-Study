/* 최댓값 만들기(1)
  문제 설명: 정수 배열 numbers가 매개변수로 주어집니다.
          numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  var answer = 0;
  let max = 0;
  let max2 = 0;
  numbers.map((x) => {
    if (max < x) max = x;
  });
  numbers.splice(numbers.indexOf(max), 1);
  numbers.map((x) => {
    if (max2 < x) max2 = x;
  });
  answer = max * max2;
  return answer;
}
