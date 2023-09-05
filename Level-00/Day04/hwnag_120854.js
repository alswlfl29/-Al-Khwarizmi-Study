// 배열 원소의 길이

function solution(arr) {
  let new_arr = [];
  arr.map((str) => new_arr.push(str.length));
  return new_arr;
}

let arr = ['we', 'are', 'the', 'world!'];

console.log(solution(arr));

// 다른 사람 풀이 보니까
// function solution(strlist) {
//   return strlist.map((el) => el.length);
// }
// 그냥 이렇게만 했어도 됐다.....이런
