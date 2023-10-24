/**
 * 디스크 컨트롤러
 * 문제 설명: 하드디스크는 한 번에 하나의 작업만 수행할 수 있습니다. 디스크 컨트롤러를 구현하는 방법은 여러 가지가 있습니다. 가장 일반적인 방법은 요청이 들어온 순서대로 처리하는 것입니다.
 *          각 작업에 대해 [작업이 요청되는 시점, 작업의 소요시간]을 담은 2차원 배열 jobs가 매개변수로 주어질 때, 작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요. (단, 소수점 이하의 수는 버립니다)
 *  */

function solution(jobs) {
  let j = 0;
  let time = 0;
  let sum = 0;
  let priorityQueue = [];
  jobs.sort((a, b) => a[0] - b[0]);

  while (jobs.length > j || priorityQueue.length !== 0) {
    if (jobs.length > j && time >= jobs[j][0]) {
      priorityQueue.push(jobs[j++]);
      priorityQueue.sort((a, b) => a[1] - b[1]);
      continue;
    }
    if (priorityQueue.length !== 0) {
      time += priorityQueue[0][1];
      sum += time - priorityQueue[0][0];
      priorityQueue.shift();
    } else {
      time = jobs[j][0];
    }
  }
  return Math.floor(sum / jobs.length);
}
// 참고: https://zzemal.tistory.com/102
// 아직 이해 안됨...

// function solution(jobs) {
//   let answer = 0;
//   let currentTime = 0;
//   let processTime = 0;
//   let waitQueue = [];
//   let currentProcess = [];
//   let jobsLength = jobs.length;
//   jobs.sort((a, b) => a[0] - b[0]);
//   currentProcess.push(jobs.shift());
//   while (jobs.length !== 0 || currentProcess.length !== 0) {
//     if (jobs.length !== 0 && jobs[0][0] === currentTime) {
//       waitQueue.push(jobs.shift());
//       waitQueue.sort((a, b) => a[1] - b[1]);
//     }
//     if (currentProcess.length !== 0 && currentProcess[0][1] === processTime) {
//       answer += currentTime - currentProcess[0][0];
//       currentProcess = [];
//       if (waitQueue.length !== 0) {
//         currentProcess.push(waitQueue.shift());
//         processTime = 0;
//       }
//     }
//     processTime += 1;
//     currentTime += 1;
//   }
//   return Math.floor(answer / jobsLength);
// }

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
); // 9
console.log(
  solution([
    [0, 3],
    [10, 1],
  ])
); // 2
console.log(
  solution([
    [7, 8],
    [3, 5],
    [9, 6],
  ])
); // 9
console.log(
  solution([
    [1, 4],
    [7, 9],
    [1000, 3],
  ])
); // 5
console.log(
  solution([
    [0, 1],
    [2, 2],
    [2, 3],
  ])
); // 2
