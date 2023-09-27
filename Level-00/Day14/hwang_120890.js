// 가까운 수

function solution(array, n) {
  let min = Math.abs(array[0] - n);
  let ans = array[0];
  for (let i = 1; i < array.length; i++) {
    let a = Math.abs(array[i] - n);
    if (a < min) {
      min = a;
      ans = array[i];
    } else if (a === min && array[i] < ans) {
      ans = array[i];
    }
  }
  return ans;
}

console.log(solution([1, 3, 5, 7, 9, 11, 13, 15], 2));

//코드 줄여보기, 시간복잡도 줄여보기
