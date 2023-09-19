/* 다음에 올 숫자
  문제 설명: 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
*/
function solution(common) {
  var answer = 0;
  let tap = common[1] - common[0];
  common.reduce((acc, cur) => {
    console.log("acc: ", acc);
    console.log("cur: ", cur);
    if (cur - acc === tap) {
      tap = cur - acc;
      answer = cur + tap;
    } else {
      tap = cur / acc;
      answer = cur * tap;
    }
    acc = cur;
    return acc;
  });
  return answer;
}
console.log(solution([3, 6, 9]));
