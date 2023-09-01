// 숫자 비교하기
function solution(num1, num2) {
  if (num1 === num2) {
    answer = 1;
  } else if (num1 !== num2) {
    answer = -1;
  }

  return answer;
}

// function solution(num1, num2) {
//     var answer = num1 === num2 ? 1 : -1;
//     return answer;
// }
// 삼항연산자를 애용해보자! 간결해짐..
