// 배열 회전시키기

function solution(numbers, direction) {
  let temp;
  if (direction == 'left') {
    temp = numbers[0];
    for (let i = 0; i < numbers.length - 1; i++) {
      numbers[i] = numbers[i + 1];
    }
    numbers[numbers.length - 1] = temp;
  }
  if (direction == 'right') {
    temp = numbers[numbers.length - 1];
    for (let i = numbers.length - 2; i >= 0; i--) {
      numbers[i + 1] = numbers[i];
    }
    numbers[0] = temp;
  }
  return numbers;
}

console.log(solution([1, 2, 3], 'right'));

// 아직 배열 가지고 노는거에 덜 익숙한거 같다. slice나 shift, unshift 등등 자주 사용하기
