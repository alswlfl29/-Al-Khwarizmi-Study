/* 합성수 찾기
문제 설명
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요. */

function solution(n) {
  const primeNum = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return true;
    }
    return false;
  };

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (primeNum(i)) count += 1;
  }

  return count;
}
