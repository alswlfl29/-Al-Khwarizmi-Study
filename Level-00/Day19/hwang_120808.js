//분수의 덧셈

function solution(denum1, num1, denum2, num2) {
  let answer = [];
  const resultDenum = denum1 * num2 + denum2 * num1;
  const resultnum = num1 * num2;

  let G = 0;
  let val = resultDenum > resultnum ? resultDenum : resultnum;

  // 최대공약수 구하기
  for (let i = 1; i <= val; i++) {
    if (resultDenum % i == 0 && resultnum % i == 0) {
      G = i;
    }
  }

  answer.push(parseInt(resultDenum / G));
  answer.push(parseInt(resultnum / G));
  return answer;
}

console.log(solution(1, 2, 3, 4));

// 이해 잘 되는 코드
// const solution = (denum1, num1, denum2, num2) => {
//   let [ denum, num ] = [denum1 * num2 + denum2 * num1, num2 * num1]

//   while(true) {
//       let isContinue = false

//       const min = denum < num ? denum : num

//       for (let i=2; i<=min; i++) {
//           if (denum % i === 0 && num % i === 0) {
//               denum = denum / i
//               num = num / i
//               isContinue = true
//               break
//           }
//       }

//       if (!isContinue) {
//           break
//       }
//   }

//   return [ denum, num ]
// }
