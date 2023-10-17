/**
 * H-Index
 * 문제 설명: H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다.
 *          어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
 *          어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
 *          어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
 */

function solution(citations) {
  let answer = 0;
  // 1. citations를 오름차순으로 정렬
  citations.sort((a, b) => a - b);
  for (let i = 1; i < citations.length + 1; i++) {
    // 2. citations의 뒤에서부터 i번째 원소를 가져옴
    let min_num = citations.at(-i);
    // 3. min_num이 i보다 크거나 같으면 answer에 i를 할당
    if (min_num >= i) {
      answer = i;
    }
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
