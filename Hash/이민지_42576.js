/**
 * 완주하지 못한 선수
 * 문제 설명: 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 *          마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 *  */

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
// function solution(participant, completion) {
//   var answer = "";
//   let hashMap = new Map();
//   // 1. 배열 participant를 순회하며 해시맵에 저장(이름-false);
//   participant.map((name) => {
//     !hashMap.has(name) ? hashMap.set(name, false) : (answer = name);
//   });

//   // 2. 배열 completion을 순회하며 해시맵에 저장된 이름을 true로 변경
//   completion.map((name) => hashMap.set(name, true));

//   // 3. 해시맵을 순회하면서 value가 false인 이름을 반환
//   // 이때, "/"를 제거하여 반환
//   hashMap.forEach((value, key) => {
//     if (!value) answer = key;
//   });
//   return answer;
// }

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["mislav", "ana", "mislav"])
);
console.log(
  solution(
    ["mislav", "stanko", "mislav", "ana", "ana"],
    ["mislav", "ana", "ana", "stanko"]
  )
);
console.log(solution(["a", "b", "c"], ["b", "c"]));
