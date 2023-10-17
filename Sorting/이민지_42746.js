/**
 * 가장 큰 수
 * 문제 설명: 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 *          예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
 *          0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
 */

function solution(numbers) {
  var answer = "";
  numbers = numbers
    // 1. numbers의 원소들을 문자열로 변환
    .map((number) => String(number))
    // 2. 문자열로 변환한 numbers를 내림차순으로 정렬
    // ex) '6'+'10' -> '610'-'106'
    .sort((a, b) => b + a - (a + b))
    // 3. 정렬된 numbers들을 합치기
    .join("");
  // numbers에 0만 존재할 경우 0으로 출력
  return numbers[0] === "0" ? "0" : numbers;
}

console.log(solution([6, 10, 2])); // 6210
console.log(solution([3, 30, 34, 5, 9])); // 9534330
