// 최댓값 만들기 (2)

// function solution(numbers) {
//   let minus = [];
//   let plus = [];

//   for (const number of numbers) {
//     if (number < 0) {
//       minus.push(number);
//     } else if (number > 0) {
//       plus.push(number);
//     }
//   }

//   minus.sort((a, b) => b - a);
//   plus.sort((a, b) => b - a);

//   if (minus.length < 2 && plus.length < 2) {
//     return 0;
//   } else if (minus.length < 2) {
//     return plus[0] * plus[1];
//   } else if (plus.length < 2) {
//     return minus[0] * minus[1];
//   }

//   return Math.max(minus[0] * minus[1], plus[0] * plus[1]);
// }

// console.log(solution([1, -1]));

function solution(numbers) {
  numbers.sort((a, b) => b - a);

  const maxFromPositive = numbers[0] * numbers[1];
  const maxFromNegative =
    numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return Math.max(maxFromPositive, maxFromNegative);
}

console.log(solution([1, -1]));

// 왜 안 되는지 이해가 안 됨

// 이거 개쩌네
// * 더 좋은 문제 풀이 -> 정렬 후, 앞 두 수 곱한 수와 뒤에 있는 두 수 곱한 수 비교
// * function solution(numbers){
// *  var answer = 0;
// *  number.sort((a,b) => a-b); // 오름차순으로 정렬
// *  answer = Math.max(numbers[0]*numbers[1], numbers[number.length-1]*numbers[number.length-2]);
// *  return answer;
// * }
