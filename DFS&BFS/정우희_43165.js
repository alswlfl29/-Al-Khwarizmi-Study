function solution(numbers, target) {
  let answer = 0;

  // 깊이 우선 탐색 (DFS)을 활용한 재귀 함수
  function dfs(index, currentSum) {
    // 모든 숫자를 다 사용한 경우
    if (index === numbers.length) {
      // 현재까지의 합이 타겟 넘버와 일치하면 정답 카운트 증가
      if (currentSum === target) {
        answer++;
      }
      return;
    }

    // 현재 숫자를 더한 경우와 뺀 경우 각각 재귀 호출
    dfs(index + 1, currentSum + numbers[index]); // 더하기
    dfs(index + 1, currentSum - numbers[index]); // 빼기
  }

  // DFS 시작
  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
