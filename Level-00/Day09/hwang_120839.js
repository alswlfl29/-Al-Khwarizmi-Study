//가위바위보
// 가위 == 2
// 바위 == 0
// 보 == 5

function solution(rsp) {
  let copy = [...rsp];
  let ans = copy.map((a) => {
    if (a === '2') return '0';
    if (a === '0') return '5';
    if (a === '5') return '2';
  });
  return ans.join('');
}

console.log(solution('205'));
