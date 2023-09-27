// 2차원으로 만들기

function solution(num_list, n) {
  let ans = [];
  for (let i = 0; i < num_list.length; i += n) {
    let temp = [];

    for (let j = 0; j < n; j++) {
      temp.push(num_list[i + j]);
    }

    ans.push(temp);
  }

  return ans;
}

console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));

// 되게 간단한 방법.. 보면 알겠는데 난 언제즘 이렇게 떠오를까,,ㅋㅎ
// while(num_list.length) {
//   answer.push(num_list.splice(0,n));
// }
