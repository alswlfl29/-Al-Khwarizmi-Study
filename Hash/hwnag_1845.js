//폰켓몬

function solution(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let cnt = 1;
    let num = nums[i];
    if (map.has(num)) {
      map.set(num, cnt + 1);
    } else {
      map.set(num, cnt);
    }
  }

  if (map.size > nums.length / 2) {
    return nums.length / 2;
  }
  if (map.size <= nums.length / 2) {
    return map.size;
  }
}

console.log(solution([3, 3, 3, 2, 2, 2]));
