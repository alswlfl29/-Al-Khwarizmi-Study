/* 진료 순서 정하기
문제 설명
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
중복된 원소는 없습니다.
1 ≤ emergency의 길이 ≤ 10
1 ≤ emergency의 원소 ≤ 100 */

// 1
function solution(emergency) {
  // 복사한 배열을 내림차순 정렬한다
  const copiedEmergency = [...emergency].sort((a, b) => b - a);

  // 진료순위를 기록할 배열을 만든다
  let rankArr = new Array(emergency.length).fill(0);

  // 진료 순위
  let count = 1;

  for (let i = 0; i < emergency.length; i++) {
    // 내림차순된 배열은 가장 우선 순위가 높은 사람이 맨 앞에 있으므로
    // 원본 배열에서 그 사람의 인덱스를 찾는다
    let index = emergency.indexOf(copiedEmergency[i]);

    // 진료순위 배열에서 해당 인덱스 자리에 진료 순위를 기록한다
    rankArr.splice(index, 1, count);

    // 진료 순위를 증가시킨다
    count++;
  }

  return rankArr;
}

// 2
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
// 1. 원본 배열을 복사해서 내림차순 정렬한다.
// 2. 원본 배열의 값들이 복사된 배열에서는 어느 인덱스에 위치하는지 찾는다.
// 3. 해당 인덱스 + 1을 해서 순위를 매긴다.
