//특이한 정렬

function solution(numlist, n) {
  var answer = [];
  answer = numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
