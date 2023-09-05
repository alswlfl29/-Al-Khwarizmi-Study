// 몫 구하기
function solution(num1, num2) {
  var answer = num1 / num2;
  return Math.trunc(answer);
}

console.log(solution(6, 4));

// trunc와 floor의 차이 trunc는 소수점 이하 버리는거고, floor은 소숫점 내림 ex) -3.5 -> -4, 3.5 -> 3
