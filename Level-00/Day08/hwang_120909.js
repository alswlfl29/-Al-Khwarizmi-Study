// 제곱수 판별하기

function solution(num) {
  return Number.isInteger(Math.sqrt(num)) ? 1 : 2;
}

console.log(solution(144));
