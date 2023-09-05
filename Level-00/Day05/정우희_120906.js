/* 자릿수 더하기
문제 설명
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요 */

function solution(n) {
  let sum = 0;

  String(n)
    .split('')
    .forEach((digit) => {
      sum += parseInt(digit);
    });

  return sum;
}

// String(n)을 사용하여 숫자 n을 문자열로 변환
// split('')을 사용하여 문자열로 변환된 숫자를 각 자릿수별로 분리하여 배열로 만듦
// forEach를 사용하여 분리된 각 자릿수를 순회하며, parseInt를 사용하여 문자열로 된 자릿수를 다시 숫자로 변환하여 sum에 더함
