// 아이스 아메리카노

function solution(money) {
  let ii = 5500;
  let a = Math.trunc(money / ii);
  let b = money % ii;
  return [a, b];
}

console.log(solution(7000));
