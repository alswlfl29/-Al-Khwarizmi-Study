/* 소수 찾기
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
 */

// 어려움.. 코드 참조(아직 이해 잘 안됨)
function isPrime(num) {
  if (num <= 1) return false; // 0과 1은 소수가 아님
  if (num === 2) return true; // 2는 소수
  if (num % 2 === 0) return false; // 짝수는 소수가 아님

  // 3부터 제곱근까지의 홀수로 나누어 소수 여부 확인
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
  }
  return true; // 나누어 떨어지지 않으면 소수
}

function solution(numbers) {
  const numArr = numbers.split(''); // 문자열을 배열로 분리
  const visited = Array(numArr.length).fill(false); // 숫자 사용 여부를 표시하는 배열
  const resultSet = new Set(); // 중복을 방지하기 위한 Set

  function generatePermutations(currNum) {
    if (currNum.length > 0) {
      // 숫자 조합을 소수로 확인하여 Set에 추가
      const num = parseInt(currNum.join(''));
      if (isPrime(num)) {
        resultSet.add(num);
      }
    }

    for (let i = 0; i < numArr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        currNum.push(numArr[i]);
        generatePermutations(currNum);
        currNum.pop();
        visited[i] = false;
      }
    }
  }

  generatePermutations([]);

  return resultSet.size;
}

console.log(solution('17')); // 3
console.log(solution('011')); // 2
