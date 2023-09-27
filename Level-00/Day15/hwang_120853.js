//컨트롤 제트

function solution(s) {
  const ans = [];
  s.split(' ').forEach((value) => {
    if (value === 'Z' && ans.length) {
      ans.pop();
    } else if (value !== 'Z') {
      ans.push(+value);
    }
  });

  return ans.reduce((acc, cur) => acc + cur, 0);
}
console.log(solution('1 2 Z 3'));
