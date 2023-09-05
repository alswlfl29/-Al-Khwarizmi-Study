//중복된 숫자 개수
function solution(array, n) {
  let cnt = 0;
  array.map((num) => {
    if (num == n) {
      cnt += 1;
    }
  });
  return cnt;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
