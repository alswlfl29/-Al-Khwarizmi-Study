//겹치는 선분의 길이

function solution(lines) {
  const linesArr = [...lines[0], ...lines[1], ...lines[2]];
  const min = Math.min(...linesArr);
  const max = Math.max(...linesArr);

  const result = Array(max - min + 1).fill(0);

  for (let line of lines) {
    line.sort((a, b) => a - b);
    if (min < 0) {
      line[0] += Math.abs(min);
      line[1] += Math.abs(min);
    }

    for (let i = line[0]; i < line[1]; i++) {
      result[i]++;
    }
  }
  return result.filter((x) => x > 1).length;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);

// 창의적이네..
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
