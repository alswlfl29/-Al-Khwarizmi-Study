/* 종이 자르기
  문제 설명: 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
*/

function solution(M, N) {
  var answer = 0;
  let width = M - 1;
  let height = (N - 1) * M;
  answer = width + height;
  return answer;
}

console.log(solution(1, 1));
