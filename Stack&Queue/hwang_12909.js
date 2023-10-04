// 올바른 괄호

//효율성 둘다 실패
// function solution(arr) {
//   let stack = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == '(') {
//       stack.push(arr[i]);
//     } else if (arr[i] == ')') {
//       if (stack.pop() !== '(') {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

//효율성 1번 실패
// function solution(arr) {
//   let cnt = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == '(') {
//       cnt++;
//     } else if (arr[i] == ')') {
//       cnt--;
//     }
//     if (cnt < 0) {
//       return false;
//     }
//   }
//   return cnt === 0;
// }

//효율성 통과 (답 참고)
function solution(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += s[i] === '(' ? 1 : -1;
    if (sum < 0) return false;
  }
  return sum ? false : true;
}

console.log(solution('()'));
