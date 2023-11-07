// //완주하지 못한 선수

//효율성 통과 못한 코드
// function solution(participant, completion) {
//   let map = new Map();
//   for (let i = 0; i < participant.length; i++) {
//     let cnt = 1;
//     let people = participant[i];
//     if (map.has(people)) {
//       map.set(people, cnt + 1);
//     } else {
//       map.set(people, cnt);
//     }
//   }
//   for (let i = 0; i < completion.length; i++) {
//     let person = completion[i];
//     map.set(person, map.get(person) - 1);
//   }
//   for (let [person, count] of map) {
//     if (count > 0) {
//       return person;
//     }
//   }

//   return null;
// }

// console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

// 효율성 통과한 코드(참조)
function solution(participant, completion) {
  let answer = '';
  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  if (answer === '') {
    answer = participant[participant.length - 1];
  }
  return answer;
}

// 예시 사용법
const participants = ['Alice', 'Bob', 'Charlie'];
const completions = ['Bob', 'Charlie'];
const result = solution(participants, completions);
console.log(result); // 출력: "Alice"
