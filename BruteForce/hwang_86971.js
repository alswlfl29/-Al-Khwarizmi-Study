//전력망을 둘로 나누기
//bfs , 블로그 참고

function solution(n, wires) {
  const towers = {};
  const result = [];
  for (let wire of wires) {
    const [tower1, tower2] = wire;
    if (!towers[tower1]) towers[tower1] = [];
    if (!towers[tower2]) towers[tower2] = [];
    towers[tower1].push(tower2);
    towers[tower2].push(tower1);
  }

  function searchTower(tower, cutTower) {
    const visited = Array.from({ length: n + 1 }, () => false);
    const stack = [];
    let count = 1;
    stack.push(tower);

    visited[tower] = true;
    while (stack.length) {
      const current = stack.pop();
      towers[current].forEach((next) => {
        if (next !== cutTower && !visited[next]) {
          visited[next] = true;
          stack.push(next);
        }
      });
      count++;
    }
    return count;
  }
  wires.forEach((wire) => {
    const [a, b] = wire;
    const gap = Math.abs(searchTower(a, b) - searchTower(b, a));

    result.push(gap);
  });

  return Math.min(...result);
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
