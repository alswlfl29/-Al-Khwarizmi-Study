/* 숨어있는 숫자의 덧셈(2)
  문제 설명: 문자열 my_string이 매개변수로 주어집니다. 
          my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. 
          my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
  var answer = 0;
  my_string.split("").reduce((acc, cur, idx) => {
    if (!isNaN(Number(cur))) acc += cur;
    else {
      answer += Number(acc);
      acc = 0;
    }
    if (my_string.length - 1 === idx) answer += Number(acc); // 마지막에 숫자가 있는 경우 생각
    return acc;
  }, 0);
  return answer;
}

console.log(solution("ddcsf23d4"));
