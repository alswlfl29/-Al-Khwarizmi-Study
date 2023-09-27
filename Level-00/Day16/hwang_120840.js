// 구슬을 나누는 경우의 수

function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

//재귀
//const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)

console.log(solution(30, 15));
