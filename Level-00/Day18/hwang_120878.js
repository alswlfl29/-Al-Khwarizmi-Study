//유한소수 판별하기

function solution(a, b) {
  let k = 2;
  let max = a > b ? a : b;
  for (let i = max; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
      break;
    }
  }
  while (1) {
    if (b % k === 0) {
      b /= k;
    } else break;
  }
  k = 5;
  while (1) {
    if (b % k === 0) {
      b /= k;
    } else break;
  }
  return b === 1 ? 1 : 2;
}

console.log(solution(7, 20));
