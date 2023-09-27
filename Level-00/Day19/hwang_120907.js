//OX퀴즈

function solution(quiz) {
  var answer = quiz.map((a) => {
    const arr = a.split(' ');
    if (arr[1] === '+') {
      return Number(arr[0]) + Number(arr[2]) === Number(arr[4]) ? 'O' : 'X';
    } else {
      return Number(arr[0]) - Number(arr[2]) === Number(arr[4]) ? 'O' : 'X';
    }
  });
  return answer;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
