/* 가까운 수
  문제 설명: 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
*/
function solution(array, n) {
  var answer = array[0];
  let interval = 0;
  let min = array[0] - n < 0 ? -(array[0] - n) : array[0] - n;
  for (let i = 0; i < array.length; i++) {
    interval = array[i] - n < 0 ? -(array[i] - n) : array[i] - n;
    console.log(interval);
    if (min > interval) {
      min = interval;
      answer = array[i];
    } else if (min === interval && answer > array[i]) {
      answer = array[i];
    }
  }
  return answer;
}

console.log(solution([10, 11, 12], 13));
