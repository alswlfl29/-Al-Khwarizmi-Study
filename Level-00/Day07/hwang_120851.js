// 숨어있는 숫자의 덧셈(1)
function solution(my_string) {
  let arr = [...my_string];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    const b = parseInt(a);

    if (!isNaN(b)) {
      sum += b;
    }
  }
  return sum;
}

console.log(solution('aAb1B2cC34oOp'));

// 비슷하지만 훨씬 짧은 풀이
//return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
// reduce와 친숙해지자
