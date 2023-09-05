// 순서쌍의 개수
// function solution(n) {

// }

// console.log(solution(20));

// 모르겠어서... 답 봄

function solution(n) {
  const answer = [];
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.length;
}

console.log(solution(20));

// 또 문제 잘못읽었네...
