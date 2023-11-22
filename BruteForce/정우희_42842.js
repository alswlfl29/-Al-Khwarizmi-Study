function solution(brown, yellow) {
  for (let width = 1; width <= yellow; width++) {
    if (yellow % width === 0) {
      const height = yellow / width;
      if (2 * (width + height) + 4 === brown) {
        // 갈색 격자 수가 일치하면 가로와 세로 크기를 반환
        return [Math.max(width, height) + 2, Math.min(width, height) + 2];
      }
    }
  }
}

// 예시 테스트
console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
