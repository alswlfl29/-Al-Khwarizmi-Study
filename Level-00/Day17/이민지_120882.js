/* 등수 매기기
  문제 설명: 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
          영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/
function solution(score) {
  let avg = score.map((x) => (x[0] + x[1]) / 2); // 각 score 평균 점수 구하기
  let sorted = avg.slice().sort((a, b) => b - a); // 각 평균 점수를 내림차순으로 정렬
  return avg.map((v) => sorted.indexOf(v) + 1);
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);

// 풀이 참고
