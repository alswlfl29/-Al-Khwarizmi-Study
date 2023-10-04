// 기능개발

// 테스트 실패가 더 많은 코드
// function solution(progresses, speeds) {
//   let b = [];
//   for (let i = 0; i < progresses.length; i++) {
//     let a = 100 - progresses[i];
//     b.push(Math.ceil(a / speeds[i]));
//   }
//   let cnt = 1;
//   let ans = [];

//   for (let i = 0; i < b.length; i++) {
//     if (b[i] >= b[i + 1]) {
//       cnt++;
//     } else {
//       ans.push(cnt);
//       cnt = 1;
//     }
//   }
//   return ans;
// }

// 성공한 코드
function solution(progresses, speeds) {
  const n = progresses.length;
  const daysNeeded = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let remainingProgress = 100 - progresses[i];
    daysNeeded[i] = Math.ceil(remainingProgress / speeds[i]);
  }

  const ans = [];
  let cnt = 1;
  let prevDay = daysNeeded[0];

  for (let i = 1; i < n; i++) {
    if (prevDay >= daysNeeded[i]) {
      cnt++;
    } else {
      ans.push(cnt);
      cnt = 1;
      prevDay = daysNeeded[i];
    }
  }
  ans.push(cnt);

  return ans;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 94], [3, 3]));
console.log(solution([20, 20], [30, 5]));

// 우수한 코드, 얼추 비슷한 느낌
// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//   let maxDay = days[0];

//   for(let i = 0, j = 0; i< days.length; i++){
//       if(days[i] <= maxDay) {
//           answer[j] += 1;
//       } else {
//           maxDay = days[i];
//           answer[++j] = 1;
//       }
//   }

//   return answer;
// }
