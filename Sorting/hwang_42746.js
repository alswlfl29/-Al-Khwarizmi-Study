// 가장 큰 수

function solution(numbers) {
  numbers = numbers.map(String);
  numbers.sort(function (x, y) {
    return y + x - (x + y);
  });
  var answer = numbers.join('');
  if (answer[0] === '0') {
    return '0';
  } else {
    return answer;
  }
}

console.log(solution([6, 10, 2]));
