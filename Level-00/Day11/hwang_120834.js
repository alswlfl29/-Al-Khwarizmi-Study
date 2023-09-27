//외계행성의 나이

function solution(age) {
  const alpha = 'abcdefghij';
  let ans = [];
  while (age > 0) {
    // console.log(alpha[Math.trunc(age / 10)]);
    // console.log(alpha[age % 10]);
    ans.unshift(alpha[age % 10]);
    age = Math.trunc(age / 10);
  }
  return ans.join('');
}

console.log(solution(100));

// 참고
// return age
// .toString()
// .split("")
// .map((v) => "abcdefghij"[v])
// .join("");
// }
