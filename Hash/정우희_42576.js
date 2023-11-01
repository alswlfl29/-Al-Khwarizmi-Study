/* 완주하지 못한 선수
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요. */

function solution(participant, completion) {
  const participantHash = new Map();

  // 참가자 배열을 해시맵에 이름과 개수로 저장
  for (const name of participant) {
    if (participantHash.has(name)) {
      participantHash.set(name, participantHash.get(name) + 1);
    } else {
      participantHash.set(name, 1);
    }
  }

  // 완주한 선수들을 해시맵에서 이름 개수를 하나씩 빼면서 업데이트 함
  for (const name of completion) {
    participantHash.set(name, participantHash.get(name) - 1);
  }

  // 해시맵에서 값이 1인 이름을 찾아서 반환
  for (const [name, count] of participantHash) {
    if (count === 1) {
      return name;
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
); // "vinko"
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
); // "mislav"
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['mislav', 'ana', 'mislav'])
);
console.log(
  solution(
    ['mislav', 'stanko', 'mislav', 'ana', 'ana'],
    ['mislav', 'ana', 'ana', 'stanko']
  )
);
console.log(solution(['a', 'b', 'c'], ['b', 'c']));
