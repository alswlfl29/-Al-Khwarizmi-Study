/* 7의 개수
  문제 설명: 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 
          정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
*/

function solution(array) {
  var answer = 0;
  let newArr = [];
  array.map((x) => {
    x.toString()
      .split("")
      .map((y) => newArr.push(y));
  });
  newArr.map((x) => (Number(x) === 7 ? (answer += 1) : answer));
  return answer;
}
console.log(solution([10, 29]));
