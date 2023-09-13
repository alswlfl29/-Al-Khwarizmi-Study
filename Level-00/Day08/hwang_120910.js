//세균 증식

function solution(n, t) {
  return n * Math.pow(2, t);
}

console.log(solution(7, 15));

// 다른사람 풀이

// function solution(n, t) {
//   return n << t;
// }
// 같다. 어떤 전공시간에 얼핏 봤던 기억이 있긴 한데
// 9 << 3; // 72
// 9 * (2 ** 3) = 9 * (8) = 72
