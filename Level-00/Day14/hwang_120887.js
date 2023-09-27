// k의 개수

function solution(i, j, k) {
  let cnt = 0;

  for (let num = i; num <= j; num++) {
    let str = num.toString();

    for (let oneNum of str) {
      if (oneNum === k.toString()) {
        cnt++;
      }
    }
  }
  return cnt;
}

console.log(solution(1, 13, 1));
