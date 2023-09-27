// 피자 나눠먹기(2)

function solution(n) {
  let piz = 6;
  let ans = 0;

  while (1) {
    (piz * ans) % n;
    ans++;
    console.log(ans);
    if ((piz * ans) % n == 0) break;
  }
  return ans;
}

console.log(solution(6));
