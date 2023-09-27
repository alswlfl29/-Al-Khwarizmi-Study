//가장 큰 수 찾기

function solution(array) {
  let index = 0;
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      index = i;
    }
  }
  return [max, index];
}

console.log(solution([1, 8, 3]));

// indexOf 참고
// let max = Math.max(...array);
// return [max, array.indexOf(max)];
