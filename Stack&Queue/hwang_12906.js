// 같은 숫자는 싫어

function solution(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      continue;
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));

// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }
