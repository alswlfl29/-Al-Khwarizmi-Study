/* 숫자 비교하기
문제 설명
정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요. */

function solution(num1, num2) {
  if (num1 === num2) return 1;
  else return -1;
}

// 이렇게 하고 다른 사람들 풀이 참고해보니 삼항연산자 쓰는 게 리액트에선 맞는 답인 거 같은 너낌이여서 추가함....(머쓱)
function solution(num1, num2) {
  var answer = num1 === num2 ? 1 : -1;
  return answer;
}
