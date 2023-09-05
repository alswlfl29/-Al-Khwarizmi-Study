// 문자 반복 출력하기
function solution(my_string, n) {
  let a = '';

  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      a += my_string[i];
    }
  }
  return a;
}

console.log(solution('hello', 3));

//다른사람 코드 좀더 js 스럽게 생각해보기
//var answer = [...my_string].map(v => v.repeat(n)).join("");
