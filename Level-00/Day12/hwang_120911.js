//문자열 정렬하기(2)

function solution(my_string) {
  let a = my_string.toLowerCase();

  let asc = [];
  for (let i = 0; i < a.length; i++) {
    asc.push(a.charCodeAt(i));
  }

  asc.sort((a, b) => a - b);

  let num = [];
  asc.map((j, n) => num.push(String.fromCharCode(j)));

  return num.join('');
}

console.log(solution('Bcad'));

// ㅋㅋ.ㅋ.ㅋ.ㅋ..........ㅋㅋㅋ.... 보고 웃음만 나왔다

// function solution(s) {
//   return [...s.toLowerCase()].sort().join('')
// }
