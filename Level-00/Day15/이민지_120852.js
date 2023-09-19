/* 소인수분해
  문제 설명: 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 
          예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 
          따라서 12의 소인수는 2와 3입니다. 
          자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
  var answer = [];
  let prime = 2; // 2부터 시작(1은 소인수가 아님)
  while (n !== 1) {
    // n이 더이상 나눠질 수 없을 때까지
    if (n % prime === 0) {
      answer.push(prime);
      while (n % prime === 0) n /= prime;
    }
    prime++;
  }
  return answer;
}

// 풀이참고
