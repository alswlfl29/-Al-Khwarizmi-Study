/* 잘라서 배열로 저장하기
  문제 설명: 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
*/
function solution(my_str, n) {
  var answer = [];
  while (my_str !== "") {
    answer.push(my_str.substr(0, n));
    my_str = my_str.substr(n);
  }
  return answer;
}
console.log(solution("abc1Addfggg4556b", 6));

/**
 * 문자열 자르기
 * 1. substr(시작위치, 길이)
 * ex) 문자열.substr(0, 2);
 * 2. substring(시작위치, 종료위치)
 * ex) 문자열.substring(0, 2);
 */
