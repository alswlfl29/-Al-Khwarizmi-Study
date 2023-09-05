// 배열의 유사도

function solution(s1, s2) {
  let sum = 0;
  s1.map((i) =>
    s2.map((j) => {
      if (i == j) {
        sum += 1;
      }
    })
  );
  return sum;
}

let arr1 = ['a', 'b', 'c'];
let arr2 = ['com', 'b', 'd', 'p', 'c'];

console.log(solution(arr1, arr2));

//다른사람 풀이
// s1.filter((x) => s2.includes(x)); s2에 있는것만 필터
// Array.from(new Set(s1.concat(s2))) 이것도 많이 사용함
// 겹치지 않게 새로 만들어서 기존 배열 그대로 합친거랑 길이로 빼버림 ㄷ ㄷ ㄷ
