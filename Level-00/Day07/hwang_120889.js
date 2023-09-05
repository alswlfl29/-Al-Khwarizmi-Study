// 삼각형의 완성조건 (1)
function solution(sides) {
  sides.sort();
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

console.log(solution([1, 2, 3]));
