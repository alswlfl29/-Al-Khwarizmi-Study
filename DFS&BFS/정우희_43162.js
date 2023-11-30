function solution(n, computers) {
  let answer = 0; // 네트워크의 개수를 저장할 변수
  const visited = new Array(n).fill(false); // 방문 여부를 저장하는 배열

  function dfs(start) {
    visited[start] = true; // 현재 노드를 방문으로 표시

    // 현재 노드와 연결된 다른 노드들을 확인
    for (let i = 0; i < n; i++) {
      // 연결되어 있고 아직 방문하지 않은 노드라면 DFS 수행
      if (computers[start][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  // 모든 노드에 대해 반복
  for (let i = 0; i < n; i++) {
    // 아직 방문하지 않은 노드라면 DFS 수행하여 새로운 네트워크 찾기
    if (!visited[i]) {
      dfs(i);
      answer++; // DFS가 끝날 때마다 네트워크 개수 증가
    }
  }

  return answer; // 최종적인 네트워크 개수 반환
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1
