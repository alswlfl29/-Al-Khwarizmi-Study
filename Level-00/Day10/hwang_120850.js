// 문자열 정렬하기 (1)

function solution(my_string) {
  let copy = [...my_string];
  let ans = [];
  copy.map((a) => (!isNaN(Number(a)) ? ans.push(Number(a)) : null));
  ans.sort();
  return ans;
}

console.log(solution('hi12392'));
