// 숨어있는 숫자의 덧셈 (2)

function solution(my_string) {
  let num = my_string.match(/\d+/g);
  if (!num) {
    return 0;
  }
  let n = [];
  num.map((a) => n.push(parseInt(a)));

  return n.reduce((acc, cur) => acc + cur);
}

console.log(solution('aAb1B2cC34oOp'));

// 숫자만 골라내는 법 replace로 숫자 아닌것만 정규식으로 골라내서 뽑아내는법
// 숫자 각각 뽑아내고 싶으면 match로 맞는 부분 찾기. 정규식 d+는 숫자로 된 문자 1개 이상인 문자열 뜻함
