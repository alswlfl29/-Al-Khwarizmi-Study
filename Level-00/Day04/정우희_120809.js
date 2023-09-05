/* 배열 두배 만들기
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(numbers) {
  return numbers.map((num) => num * 2);
}

// 다른 사람 풀이(=reduce 사용법)
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
