// 369게임

function solution(order) {
  let a = String(order);
  let copy = [...a];
  let cnt = 0;

  copy.map((a) => (a == '3' || a == '6' || a == '9' ? cnt++ : null));
  return cnt;
}

console.log(solution(29423));

// matchAll(/[3|6|9]/g)이런거 좀더 활용해보면서 풀어보기
// var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
//     return answer;
