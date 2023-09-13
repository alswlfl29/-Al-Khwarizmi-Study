//중앙값 구하기

function solution(my_string) {
  my_string.sort((a, b) => a - b);
  let a = Math.trunc(my_string.length / 2);
  return my_string[a];
}
let a = [1, 2, 7, 10, 11];
console.log(solution(a));
