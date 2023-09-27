//다항식 더하기

function solution(p) {
  let X = (str) => {
    let count = 0;
    let spl = str.split(' ');

    for (let i = 0; i < spl.length; i++) {
      if (spl[i].includes('x')) {
        if (spl[i].length === 1) count++;
        let noX = spl[i].split('').slice(0, spl[i].indexOf('x'));
        count += Number(noX.join(''));
      }
    }
    return count === 0 ? 0 : count === 1 ? 'x' : `${count}x`;
  };

  let num = (str) => {
    let sum = 0;
    let spl = str.split(' + ');

    for (let i = 0; i < spl.length; i++) {
      if (!spl[i].includes('x')) {
        sum += Number(spl[i]);
      }
    }
    return sum;
  };

  let temp = [];
  X(p) === 0 ? temp : temp.push(X(p));
  num(p) === 0 ? temp : temp.push(num(p));
  return temp.join(' + ');
}

console.log(solution('3x + 7 + x'));

// 고통.. 이렇게 간단히 되는거였다니
// function solution(polynomial) {
//   const arr = polynomial.split(' + ');
//   const xNum = arr
//     .filter((n) => n.includes('x'))
//     .map((n) => n.replace('x', '') || '1')
//     .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
//   const num = arr
//     .filter((n) => !isNaN(n))
//     .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

//   let answer = [];
//   if (xNum) answer.push(`${xNum === 1 ? '' : xNum}x`);
//   if (num) answer.push(num);

//   return answer.join(' + ');
// }
