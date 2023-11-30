function solution(word) {
  const alphabet = ['A', 'E', 'I', 'O', 'U'];
  const dict = {};

  // 사전에 있는 단어들을 저장
  const words = [];
  for (const a of alphabet) {
    words.push(a);
    for (const b of alphabet) {
      words.push(a + b);
      for (const c of alphabet) {
        words.push(a + b + c);
        for (const d of alphabet) {
          words.push(a + b + c + d);
          for (const e of alphabet) {
            words.push(a + b + c + d + e);
          }
        }
      }
    }
  }

  // 사전에 있는 단어들의 순서 계산
  for (let i = 0; i < words.length; i++) {
    dict[words[i]] = i + 1;
  }

  return dict[word];
}

console.log(solution('AAAAE')); // 6
console.log(solution('AAAE')); // 10
console.log(solution('I')); // 1563
console.log(solution('EIO')); // 1189
