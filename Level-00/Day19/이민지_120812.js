/* 최빈값 구하기
  문제 설명: 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
          정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 
          최빈값이 여러 개면 -1을 return 합니다.
*/
function solution(array) {
  var answer = 0;
  const result = {};
  let count = 0;
  array.forEach((x) => {
    result[x] ? (result[x] += 1) : (result[x] = 1);
  });
  let max = Math.max(...Object.values(result));
  Object.keys(result).forEach((x) =>
    result[x] === max ? (count += 1) : count
  );
  answer =
    count > 1
      ? -1
      : parseInt(Object.keys(result).find((key) => result[key] === max));
  return answer;
}
console.log(solution([1, 1, 2, 2]));

/**
 * 객체 다루기(key-value)
 * - key만 뽑아내기: Object.keys(객체)
 * - value만 뽑아내기: Object.values(객체)
 */
