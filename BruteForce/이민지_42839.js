/**
 * 소수 찾기
 * 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
 * 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
 */

function solution(numbers) {
  var answer = [];
  // 문자열을 배열로 변환
  numbers = numbers.split("");

  // 소수 구하기
  const isPrime = (num) => {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 순열을 이용하여 가능한 모든 조합 구하기
  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newNum = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        if (!answer.includes(Number(newNum)) && isPrime(Number(newNum)))
          answer.push(Number(newNum));
        getPermutation(copyArr, newNum);
      }
    }
  };
  getPermutation(numbers, "");
  return answer.length;
}

console.log(solution("17")); // 3
console.log(solution("011")); // 2
