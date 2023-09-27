//안전지대

//답 참조

function solution(board) {
  let answer = 0;

  const visited = Array.from({ length: board.length }, () =>
    Array(board.length).fill(0)
  );
  const dx = [0, -1, -1, -1, 0, 1, 1, 1];
  const dy = [1, 1, 0, -1, -1, -1, 0, 1];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) bfs([i, j]);
    }
  }

  function bfs([i, j]) {
    visited[i][j] = 1;
    const queue = [[i, j]];

    const [x, y] = queue.shift();
    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (nx < 0 || nx >= board.length || ny < 0 || ny >= board.length)
        continue;
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (visited[i][j] === 0) answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

//2차원 배열 너무 햇갈림...
// function solution(board) {

//   let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
//   let safezone = 0;

//   board.forEach((row, y, self) => row.forEach((it, x) => {
//       if (it === 1) return false;
//       return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
//              ? false : safezone++;
//   }));

//   return safezone;
// }
