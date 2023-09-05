// 배열 자르기

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

let numbers = [1, 2, 3, 4, 5];

console.log(solution(numbers, 1, 3));
