//문자열 밀기

function solution(A, B) {
  var answer = -1;
  let arr1 = A.split(''),
    arr2 = B.split('');
  if (A === B) return (answer = 0);
  for (let i = 0; i < arr1.length; i++) {
    const x = arr1.pop();
    arr1.unshift(x);

    if (arr1.join('') === arr2.join('')) {
      return (answer = i + 1);
    }
  }

  return answer;
}

console.log(solution('hello', 'ohell'));
