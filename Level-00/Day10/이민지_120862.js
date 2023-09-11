/* 최댓값 만들기 (2)
  문제 설명: 정수 배열 numbers가 매개변수로 주어집니다. 
          numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/
function solution(numbers) {
  var answer = 0;
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers.slice(i + 1).map((x) => newArr.push(numbers[i] * x));
  }
  answer = Math.max(...newArr);
  return answer;
}

console.log(solution([1, 2, -3, 4, -5]));

/**
 * 더 좋은 문제 풀이 -> 정렬 후, 앞 두 수 곱한 수와 뒤에 있는 두 수 곱한 수 비교
 * function solution(numbers){
 *  var answer = 0;
 *  number.sort((a,b) => a-b); // 오름차순으로 정렬
 *  answer = Math.max(numbers[0]*numbers[1], numbers[number.length-1]*numbers[number.length-2]);
 *  return answer;
 * }
 */
