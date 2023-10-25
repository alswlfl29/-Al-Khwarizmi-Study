// 디스크 컨트롤러

function solution(jobs) {
  let curr = 0; //현재 시점
  let result = 0; //
  let n = jobs.length;

  while (jobs.length > 0) {
    let waitList = jobs.filter((job) => job[0] <= curr); // 현재 시점이거나 이전에 요청된 작업 걸르기
    waitList.sort((a, b) => a[1] - b[1]); // 작업시간을 기준으로 오름차순으로 정렬, 작업 짧은거부터 해줘야 하니까
    let restList = jobs.filter((job) => job[0] > curr); // 현재 시점보다 시점이 큰 작업일 경우 restList에
    if (waitList.length > 0) {
      let x = waitList.shift(); // wL첫번째 값을 가져옴
      curr += x[1]; // 현재 시점 이동
      result += curr - x[0]; // 원래 요청에서 종료까지 기다린 시간을 result에 더해주기
    } else {
      curr += 1;
    }
    jobs = waitList.concat(restList); // 해결 될 때마다 jobs 리뉴얼
  }

  return Math.floor(result / n);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
