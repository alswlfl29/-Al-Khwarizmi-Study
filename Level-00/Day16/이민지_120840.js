/* 구슬을 나누는 경우의 수
  문제 설명: 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 
          구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
*/

// 조합문제
function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
function factorial(n) {
  let returnFactorial = BigInt(1);
  for (let i = n; i >= 2; i--) {
    returnFactorial *= BigInt(i);
  }
  return returnFactorial;
}
/**
 * 실패 코드
 * function solution(balls, share) {
      var answer = 0;
      let molecule = 1;
      let denominator1 = 1;
      let denominator2 = 1;
      for (let i = 1; i <= balls; i++) {
        molecule *= i;
      }
      for (let i = 1; i <= share; i++) {
        denominator1 *= i;
      }
      for (let i = 1; i <= balls - share; i++) {
        denominator2 *= i;
      }
      answer = molecule / (denominator1 * denominator2);
      return answer;
    }
 */

console.log(solution(5, 3));

// 풀이참고
