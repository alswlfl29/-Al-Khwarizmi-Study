// 약수 구하기

function solution(n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    Number.isInteger(n / i) ? ans.push(n / i) : null;
  }
  ans.sort((a, b) => a - b);
  return ans;
}

console.log(solution(24));
