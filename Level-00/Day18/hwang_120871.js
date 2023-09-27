//저주의 숫자 3

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += 1;
    while (String(answer).includes('3') || answer % 3 === 0) {
      answer += 1;
    }
  }

  return answer;
}
console.log(solution(15));
