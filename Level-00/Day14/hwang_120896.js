// 한 번만 등장한 문자

// function solution(s) {
//   const cnt = {};
//   for (let i of s) {
//     cnt[i] = (cnt[i] || 0) + 1;
//   }

//   let one = [];

//   for (let i in cnt) {
//     if (cnt[i] === 1) {
//       one.push(i);
//     }
//   }

//   return one.sort().join('');
// }

function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);

  return res.sort().join('');
}

console.log(solution('abcabcadc'));
