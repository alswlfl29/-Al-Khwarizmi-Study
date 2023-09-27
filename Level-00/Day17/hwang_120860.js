//직사각형 넓이 구하기

function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  let x = dots[2][0] - dots[0][0];
  let y = dots[1][1] - dots[0][1];
  return x * y;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
