//삼각형의 완성조건 (2)
// 답을 봐도 잘 이해가 안 가버림...
// 그나마 이해 되는 코드
const findExtras = (widths) => {
  let [min, max] = [Math.min(...widths), Math.max(...widths)];
  let answerSet = new Set();
  // max가 가장 긴 변인 경우
  /*
  0 < x
  min + x > max
  x < max
  */
  for (let i = 1; i < max; i++) {
    if (i > max - min) {
      answerSet.add(i);
    }
  }
  // newbie가 가장 긴 변인 경우
  /*
  x >= max
  x < min+max
  */
  for (let i = max; i < min + max; i++) {
    answerSet.add(i);
  }
  return answerSet.size;
};
function solution(sides) {
  return findExtras(sides);
}

console.log(solution([1, 2]));

// 어지러운 코드
// function solution(sides) {
//   return Math.min(...sides)*2-1
// }
