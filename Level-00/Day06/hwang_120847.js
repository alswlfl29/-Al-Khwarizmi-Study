// 최댓값 만들기(1)
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

console.log(solution([4, 3, 2, 1, 5]));
