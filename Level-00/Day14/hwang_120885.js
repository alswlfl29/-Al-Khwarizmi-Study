// 이진수 더하기

// function solution(bin1, bin2) {
//   ans = parseInt(bin1, 2) + parseInt(bin2, 2);
//   return ans.toString(2);
// }

// 2진수 더하기
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v);

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join('')).toString();
}

console.log(solution('1001', '1111'));

//dec.toString(2); 10 -> 2
//parseInt(bin, 2); 2 -> 10
