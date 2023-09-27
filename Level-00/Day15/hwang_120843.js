// 공 던지기

// function solution(numbers, k) {
//   let index = 0;

//   for (let i = 0; i < k - 1; i++) {
//     index += 2;
//     if (index >= numbers.length) {
//       index = index % numbers.length;
//     }
//   }
//   return numbers[index];
// }

function solution(numbers, k) {
  return numbers[(2 * (k - 1)) % numbers.length];
}

console.log(solution([1, 2, 3], 3));
