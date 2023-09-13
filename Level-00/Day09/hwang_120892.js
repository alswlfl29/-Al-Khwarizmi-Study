//암호해독

function solution(cipher, code) {
  let copy = [...cipher];
  let ans = [];
  copy.map((a, i) => ((i + 1) % code == 0 ? ans.push(a) : null));
  return ans.join('');
}

console.log(solution('dfjardstddetckdaccccdegk', 4));
