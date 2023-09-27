// 숫자 찾기

function solution(num, k) {
  let a = String(num);
  let i = 0;
  let ans = -1;

  while (i < a.length) {
    if (a[i] == k) {
      ans = i;
      break;
    }
    i++;
  }
  if (ans === -1) {
    return -1;
  }
  return ans + 1;
}
console.log(solution(29183, 1));

// 다른 사람 풀이
// function solution(num, k) {
//   return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
// }
