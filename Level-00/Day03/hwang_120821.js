// 배열 뒤집기

function solution(arr) {
  let new_arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    new_arr.push(arr[i]);
  }
  return new_arr;
}

let arr = [1, 2, 3, 4, 5];

console.log(solution(arr));

//unshift, pop 등 여러 방법이 있다
// reverse로 편하게 할 수 있음
