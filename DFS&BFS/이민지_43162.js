/**
 * 네트워크
 * 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
 * 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
 * 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
 * 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.
 *  *  */

function solution(n, computers) {
  let answer = 0;

  let visited = Array(n).fill(false);

  // dfs 메서드
  const dfs = (computers, v, visited) => {
    visited[v] = true; // 현재 노드 방문 처리
    for (let i = 0; i < computers[v].length; i++) {
      if (computers[v][i] === 1 && !visited[i]) {
        dfs(computers, i, visited);
      }
    }
  };

  for (let c = 0; c < n; c++) {
    // 방문하지 않은 곳 dfs 메서드 실행
    if (!visited[c]) {
      dfs(computers, c, visited);
      // dfs 메서드를 한 번 실행하면 네트워크 하나 찾은것과 동일
      answer += 1;
    }
  }
  return answer;
}

// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1],
//   ])
// );
// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ])
// );

// console.log(
//   solution(4, [
//     [1, 1, 0, 0],
//     [1, 1, 0, 0],
//     [0, 0, 1, 1],
//     [0, 0, 1, 1],
//   ])
// );

// console.log(
//   solution(4, [
//     [1, 1, 0, 0],
//     [1, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//   ])
// );

// console.log(
//   solution(3, [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 1],
//   ])
// );

// console.log(
//   solution(7, [
//     [1, 0, 0, 0, 0, 0, 1],
//     [0, 1, 1, 0, 1, 0, 0],
//     [0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 1, 1, 1],
//     [1, 0, 0, 0, 0, 1, 1],
//   ])
// );

// console.log(
//   solution(4, [
//     [1, 0, 0, 0],
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//   ])
// );

console.log(
  solution(4, [
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 0, 1, 1],
  ])
);
