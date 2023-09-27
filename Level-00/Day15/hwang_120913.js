// 잘라서 배열로 저장하기

function solution(my_str, n) {
  let ans = [];
  for (let i = 0; i < my_str.length; i += n) {
    ans.push(my_str.slice(i, i + n));
  }
  return ans;
}

console.log(solution('abc1Addfggg4556b', 6));
