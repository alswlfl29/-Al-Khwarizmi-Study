// 주사위의 개수

function solution(box, n) {
  const min = Math.min(...box);

  const x = Math.trunc(box[0] / n);
  const y = Math.trunc(box[1] / n);
  const z = Math.trunc(box[2] / n);

  const ans = x * y * z;

  return ans;
}

console.log(solution([1, 1, 1], 1));
