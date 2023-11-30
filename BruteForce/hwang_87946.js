//피로도

function DFS(k, cnt, dungeons, check) {
  let maxCount = cnt;
  for (let i = 0; i < dungeons.length; i++) {
    if (check[i] === 0 && k >= dungeons[i][0]) {
      check[i] = 1;
      const result = DFS(k - dungeons[i][1], cnt + 1, dungeons, check);
      maxCount = Math.max(maxCount, result);
      check[i] = 0;
    }
  }
  return maxCount;
}

function solution(k, dungeons) {
  const check = new Array(dungeons.length).fill(0);
  const result = DFS(k, 0, dungeons, check);
  return result;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
