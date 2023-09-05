/* 순서쌍의 개수
문제 설명
순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 
자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요. */

function solution(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    // Math.sqrt는 주어진 값의 제곱근(square root)을 반환
    if (n % i === 0) {
      count++;
      if (i !== n / i) {
        count++; // 나눈 값과 몫이 다른 경우 두 순서쌍을 카운트
      }
    }
  }
  return count;
}
