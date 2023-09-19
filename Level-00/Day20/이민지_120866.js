/* 안전지대
  문제 설명: 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
          지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
          지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
*/
function solution(board) {
  var answer = 0;
  let danger = [];
  let newBoard = [...board];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        danger.push([i, j]);
      }
    }
  }
  danger.map((x) => {
    if (x[0] - 1 > -1) newBoard[x[0] - 1][x[1]] = 1;
    if (x[0] + 1 < newBoard.length) newBoard[x[0] + 1][x[1]] = 1;
    if (x[1] - 1 > -1) newBoard[x[0]][x[1] - 1] = 1;
    if (x[1] + 1 < newBoard[0].length) newBoard[x[0]][x[1] + 1] = 1;
    if (x[0] - 1 > -1 && x[1] - 1 > -1) newBoard[x[0] - 1][x[1] - 1] = 1;
    if (x[0] - 1 > -1 && x[1] + 1 < newBoard[0].length)
      newBoard[x[0] - 1][x[1] + 1] = 1;
    if (x[0] + 1 < newBoard.length && x[1] - 1 > -1)
      newBoard[x[0] + 1][x[1] - 1] = 1;
    if (x[0] + 1 < newBoard.length && x[1] + 1 < newBoard[0].length)
      newBoard[x[0] + 1][x[1] + 1] = 1;
  });
  newBoard.map((x) => {
    x.map((y) => {
      if (y === 0) answer += 1;
    });
  });
  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ])
);
