// 직각삼각형 출력하기
// 못품..

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  let num = Number(input[0]);

  for (let a = 1; a <= num; a++) {
    let arr = [];
    for (let b = 1; b <= a; b++) {
      arr.push('*');
    }
    console.log(arr);
  }
});

// 대부분 repeat을 많이 사용했고
// for(let i = 1; i < n + 1; i++) {
//   console.log('*'.repeat(i));
// }

// 반복문 2번 쓴겄도 있다.
// let answer = "";
// for(let i=0; i<input[0]; i++) {
//     for(let j=0; j<=i; j++) {
//         answer += "*";
//     }
//     answer+="\n";
// }
// console.log(answer);
