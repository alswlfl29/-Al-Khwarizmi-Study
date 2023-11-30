//게임 맵 최단거리

function solution(maps) {
  //행과 열, 방문한 위치 추적용, q는 bfs용 큐
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const q = [];

  q.push([0, 0]);
  // dx, dy로 이동
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  visited[0][0] = true;

  while (q.length > 0) {
    const [y, x] = q.shift();

    for (let i = 0; i < 4; i++) {
      // 상, 하, 좌, 우의 네 방향에 대해 반복
      const nx = x + dx[i]; //이동된 새 위치 계산
      const ny = y + dy[i];

      if (0 <= nx && nx < m && 0 <= ny && ny < n && maps[ny][nx] === 1) {
        //새로 계산한 위치가 유효한지 확인, 0<=x<m , 0<=y<n, 벽이 아닌지
        if (!visited[ny][nx]) {
          //방문한적 없으면
          visited[ny][nx] = true; // 방문 표시 하고
          q.push([ny, nx]); //큐에 넣어서 새로운 위치에서 탐색 가능하게
          maps[ny][nx] = maps[y][x] + 1; //현재 위치까지의 경로 길이에 1을 더한 값을 새로운 위치에 저장
        }
      }
    }
  }

  if (maps[n - 1][m - 1] === 1) {
    //그대로 1이면 -1리턴
    return -1;
  } else {
    return maps[n - 1][m - 1]; // 아니면 리턴
  }
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
