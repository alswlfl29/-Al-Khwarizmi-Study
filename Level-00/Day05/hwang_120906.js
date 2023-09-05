// 자릿수 더하기
function solution(num) {
  const str = num.toString();

  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }

  return sum;
}

console.log(solution(1234));

// 다른 사람 코드
// while (n > 0) {
//   result += n % 10;

//   n = Math.floor(n/10);
// }
