/**
 * 게입 맵 최단거리
 * ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다.
 * 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.
 * 지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다.
 * 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.
 * 위 그림에서 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다. 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
 * 아래 예시는 캐릭터가 상대 팀 진영으로 가는 두 가지 방법을 나타내고 있습니다.
 **/

function solution(maps) {
  let rowL = maps.length; // 행 길이
  let colL = maps[0].length; // 열 길이
  let goalR = rowL - 1; // 목적지 행 위치
  let goalC = colL - 1; // 목적지 열 위치

  // 상, 하, 좌, 우 이동 방향
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [curR, curC, move] = queue.shift(); // 큐에서 현재 위치와 이동한 칸 수 빼냄
    if (curR === goalR && curC === goalC) return move; // 목적지 도달 시 이동한 칸 반환

    for (let i = 0; i < 4; i++) {
      const nextR = curR + directions[i][0];
      const nextC = curC + directions[i][1];
      if (
        nextR >= 0 &&
        nextR < rowL &&
        nextC >= 0 &&
        nextC < colL &&
        maps[nextR][nextC] === 1
      ) {
        queue.push([nextR, nextC, move + 1]);
        maps[nextR][nextC] = 0; // 지나온 칸 0으로 만들기
      }
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
