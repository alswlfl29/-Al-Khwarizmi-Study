/**
 * Count Pairs Whose Sum is Less than Target
 * 문제 설명: Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target. */

var countPairs = function (nums, target) {
  let count = 0; // target보다 작은 경우의 수를 담을 변수
  // 1. nums를 오름차순으로 정렬
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 2. 하나를 선택하여 그 뒤에 있는 원소들과 더했을 때 target보다 작은 경우의 수를 구함
      if (nums[i] + nums[j] < target) {
        count += 1;
      } else {
        // 3. 만약 target보다 크게 되면 더 이상 진행하지 않음
        break;
      }
    }
  }
  return count;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2));
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));
