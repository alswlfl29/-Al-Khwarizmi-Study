// 배열의 평균값

function solution(numbers) {
  let sum = 0;
  numbers.map((num) => (sum += num));
  let avg = sum / numbers.length;
  return avg;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(solution(numbers));

//다른사람 풀이에서 reduce 쓴 사람
// ex) ((누적값, 현재값) => (누적 + 현재), 초기값)
