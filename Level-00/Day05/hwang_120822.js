// 문자열 뒤집기
function solution(my_string) {
  return my_string.split('').reverse().join('');
}

console.log(solution('jaron'));

//split메서드 말고 "스프레드 문법" 쓰는것도 좋은 방법 다음엔 생각해 보자
