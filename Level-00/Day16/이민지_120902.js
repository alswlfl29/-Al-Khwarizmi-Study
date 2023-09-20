/* 문자열 계산하기
  문제 설명: my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 
          문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
*/

/* 내 풀이(실패 코드)
function solution(my_string) {
  var answer = Number(my_string[0]);
  my_string = my_string.split(" ");
  for (let i = 1; i <= my_string.length - 2; i += 2)
    if (my_string[i] === "+") answer += Number(my_string[i + 1]);
    else if (my_string[i] === "-") answer -= Number(my_string[i + 1]);
  return answer;
}
*/

function solution(my_string) {
  const splited = my_string.split(" ");
  let ans = Number(splited[0]);

  splited.forEach((item, index) => {
    if (item === "+") {
      ans += Number(splited[index + 1]);
    }
    if (item === "-") {
      ans -= Number(splited[index + 1]);
    }
  });

  return ans;
}

console.log(solution("5 - 2"));

// 풀이 참고
