// 합성수 찾기

function solution(n) {
  let ans = 0;
  for (let i = 4; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
      }
      if (cnt >= 3) {
        ans++;
        break;
      }
    }
  }
  return ans;
}

console.log(solution(6));
