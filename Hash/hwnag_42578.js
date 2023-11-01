//의상

//테스트케이스에서 오류가 너무 많이 나옴
// function solution(clothes) {
//   let map = new Map();
//   for (let i = 0; i < clothes.length; i++) {
//     let cnt = 1;
//     let category = clothes[i][1];
//     if (map.has(category)) {
//       map.set(category, cnt + 1);
//     } else {
//       map.set(category, cnt);
//     }
//   }
//   if (map.size == 1) {
//     return clothes.length;
//   } else {
//     let ans = 1;
//     map.forEach((count) => {
//       ans *= count + 1; // (종류별 의상 개수)+1, +1 이유는 아무것도 선택하지 않는 경우도 포함하기 위해
//     });

//     return ans - 1;
//   }
// }
// +1 하는 이유 예시
// 만약, 상의가 스웨터, 반팔, 와이셔츠 이렇게 3 종류가 있다면
// 가능한 경우의 수는 스웨터, 반팔, 와이셔츠, 아무것도 선택 안 함 이렇게 4가지가 있다
// -> 종류별 의상 개수에 1을 더하는 이유

// 참조
// 뭐가 다른거지
function solution(clothes) {
  let answer = 1;
  const dic = {};

  for (let i = 0; i < clothes.length; i++) {
    const kind = clothes[i][1];
    if (dic[kind] !== undefined) {
      dic[kind] += 1;
    } else {
      dic[kind] = 1;
    }
  }

  for (let k in dic) {
    answer *= dic[k] + 1;
  }

  answer -= 1;
  return answer;
}

console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
);
