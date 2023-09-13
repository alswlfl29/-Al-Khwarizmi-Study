//짝수는 싫어요

function solution(n) {
  let arr = [];
  for (let a = 0; a <= n; a++) {
    if (a % 2 != 0) {
      arr.push(a);
    }
  }
  return arr;
}

console.log(solution(15));
