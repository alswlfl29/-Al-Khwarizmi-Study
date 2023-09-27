//연속된 수의 합

function solution(num, total) {
  var answer = [];
  if (num % 2 > 0) {
    let n = total / num;
    let start = n - Math.floor(num / 2);
    for (let i = start; i < start + num; i++) {
      answer.push(i);
    }
  } else {
    let n = (total + num / 2) / num;
    let start = n - Math.floor(num / 2);
    for (let i = start; i < start + num; i++) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(solution(3, 12));

// 흠.....
// function solution(num, total) {
//   var min = Math.ceil(total / num - Math.floor(num / 2));
//   var max = Math.floor(total / num + Math.floor(num / 2));

//   return new Array(max - min + 1).fill(0).map((el, i) => {
//     return i + min;
//   });
// }
