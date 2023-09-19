/* 문자열 계산하기
  문제 설명: my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 
          문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
*/
function solution(my_string) {
  var answer = 0;
  my_string = my_string.split(" ");
  if (my_string[1] === "+")
    answer = Number(my_string[0]) + Number(my_string[2]);
  if (my_string[1] === "-")
    answer = Number(my_string[0]) - Number(my_string[2]);
  return answer;
}
console.log(solution("5 - 2"));

// 실패
