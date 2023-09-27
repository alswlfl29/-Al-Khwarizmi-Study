// 팩토리얼

function solution(n) {
  function fact(num) {
    if (num == 0) return 1;
    else return num * fact(num - 1);
  }
  let cnt = 0;
  while (1) {
    if (n < fact(cnt)) break;
    cnt++;
  }
  return cnt - 1;
}

console.log(solution(3628800));

//while() f*=++i 팩토리얼 쉽게 하는법
