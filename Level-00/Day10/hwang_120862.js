// 최댓값 만들기 (2)

function solution(numbers) {
  let minus = [];
  let plus = [];
  for (const number of numbers) {
    if (number < 0) {
      minus.push(number);
    } else if (number > 0) {
      plus.push(number);
    }
  }

  minus.sort((a, b) => b - a);
  plus.sort((a, b) => b - a);

  if (minus.length < 2 && plus.length < 2) {
    return 0;
  } else if (minus.length < 2) {
    return plus[0] * plus[1];
  } else if (plus.length < 2) {
    return minus[0] * minus[1];
  }

  return Math.max(minus[0] * minus[1], plus[0] * plus[1]);
}

console.log(solution([10, 20, 30, 5, 5, 20, 5]));

// 왜 안 되는지 이해가 안 됨
