// 7의 개수

function solution(array) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i].toString();
    for (let j = 0; j < num.length; j++) {
      if (num[j] === '7') {
        cnt++;
      }
    }
  }
  return cnt;
}

console.log(solution([7, 77, 17]));

// 진짜 어떻게 이렇게 생각하지
// function solution(array) {

//   return array.join('').split('7').length - 1;
// }
