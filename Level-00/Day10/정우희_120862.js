/* 최댓값 만들기 (2)
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers 의 길이 ≤ 100 */

//실패한 풀이법
function solution(numbers) {
  var answer = 0;
  let multiples = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] !== numbers[j]) {
        multiples.push(numbers[i] * numbers[j]);
      }
    }
  }
  answer = Math.max(...multiples);
  return answer;
}

//원인 파악 및 성공.
function solution(numbers) {
  let sortNum = numbers.sort((a, b) => b - a);
  return Math.max(
    sortNum[0] * sortNum[1],
    sortNum[sortNum.length - 1] * sortNum[sortNum.length - 2]
  );
}
