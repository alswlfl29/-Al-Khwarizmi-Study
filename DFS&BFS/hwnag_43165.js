// 타겟넘버

function dfs(array, numbers, target, size) {
  let answer = 0;
  if (array.length === size) {
    if (array.reduce((acc, val) => acc + val, 0) === target) {
      return 1;
    } else {
      return 0;
    }
  } else {
    const A = numbers.shift();
    for (const i of [1, -1]) {
      array.push(A * i);
      answer += dfs(array, numbers, target, size);
      array.pop();
    }
    numbers.push(A);
    return answer;
  }
}

function solution(numbers, target) {
  let answer = 0;
  answer += dfs([numbers[0]], numbers.slice(1), target, numbers.length);
  answer += dfs([-numbers[0]], numbers.slice(1), target, numbers.length);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 3));
