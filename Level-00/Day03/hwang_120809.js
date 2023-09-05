// 배열 두배 만들기
function solution(arr) {
  return Array.from(arr, (x) => 2 * x);
}

let arr = [1, 2, 3, 4, 5];

console.log(solution(arr));

//다른사람들 풀이
// map, reduce 난리 났다
