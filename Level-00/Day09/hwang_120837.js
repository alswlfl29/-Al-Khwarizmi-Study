//개미 군단
// 장군 == 5, 병정 == 3, 일 == 1

function solution(hp) {
  let gen = Math.trunc(hp / 5);
  let sol = Math.trunc((hp % 5) / 3);
  let work = Math.trunc(((hp % 5) % 3) / 1);

  return gen + sol + work;
}

console.log(solution(2));
