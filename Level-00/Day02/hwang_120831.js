//짝수의 합
const solution = (num) => {
  var i;
  var answer = 0;
  for (i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      answer = answer + i;
    }
  }
  return answer;
};

console.log(solution(4));
