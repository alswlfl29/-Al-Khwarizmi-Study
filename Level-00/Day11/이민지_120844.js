/* 배열 회전시키기
  문제 설명: 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
          배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
*/
function solution(numbers, direction) {
  var answer = [];
  if (direction === "right") {
    let num = numbers[numbers.length - 1];
    numbers = numbers.splice(0, numbers.length - 1);
    numbers.unshift(num);
  } else if (direction === "left") {
    let num = numbers[0];
    numbers = numbers.splice(1, numbers.length - 1);
    numbers.push(num);
  }
  answer = numbers;
  return numbers;
}

console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));

/**
 * 배열.unshift(값) -> 배열의 해당 값을 배열 앞에 추가
 * 배열.shift() -> 배열 첫 번째 원소 뽑아냄
 */
