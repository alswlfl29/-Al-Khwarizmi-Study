//중복된 문자 제거

function solution(my_string) {
  return [...new Set(my_string)].join('');
}

console.log(solution('We are the world'));

//set은 중복 없이 유일한값들만 존재
