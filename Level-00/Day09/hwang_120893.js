//대문자와 소문자

function solution(my_string) {
  let a = [...my_string];
  let b = a.map((str) =>
    str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
  );
  return b.join('');
}

console.log(solution('cccCCC'));
