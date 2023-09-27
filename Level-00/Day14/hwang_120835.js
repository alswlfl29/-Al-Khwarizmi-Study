//진료순서 정하기

function solution(emergency) {
  let copy = [...emergency];
  let sort = copy.sort((a, b) => b - a);
  let iSave = {};
  let ans = [];
  for (let i = 0; i < emergency.length; i++) {
    iSave[sort[i]] = i + 1;
  }

  for (let a = 0; a < emergency.length; a++) {
    ans.push(iSave[emergency[a]]);
  }

  return ans;
}

console.log(solution([3, 76, 24]));

// let sorted = emergency.slice().sort((a,b)=>b-a);
// 기존 배열을 변경하지 않고 새로운 배열을 할당하는 법
