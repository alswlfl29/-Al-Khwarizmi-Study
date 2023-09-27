//종이 자르기

function solution(M, N) {
  let 가로 = M - 1;
  let 세로 = (N - 1) * M;
  return 가로 + 세로;
}

console.log(solution(2, 2));
