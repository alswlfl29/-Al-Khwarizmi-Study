// 모음제거

function solution(my_string) {
  let a = my_string.toLowerCase();
  let copy = [...a];
  let ans = copy.filter(
    (word) =>
      word !== 'a' &&
      word !== 'e' &&
      word !== 'i' &&
      word !== 'o' &&
      word !== 'u'
  );

  return ans.join('');
}

console.log(solution('nice to meet you'));
