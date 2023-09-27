//최빈값 구하기

// 문제부터가 잘 이해가 안 됐던 문제.. ㅋㅎㅋㅎ
// 답 참조..

// 그나마 이해가 된 답
function solution(array) {
  var answer = 0;
  var arr = [...new Set(array)];
  var count_arr = [];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < array.length; j++) {
      if (arr[i] === array[j]) {
        count++;
      }
    }
    count_arr.push(count);
  }
  var max = Math.max(...count_arr);
  var j = count_arr.indexOf(max);

  answer = arr[j];

  for (var i = 0; i < arr.length; i++) {
    if (count_arr[i] === max && i != j) {
      answer = -1;
    }
  }

  return answer;
}

// 가장 좋아요 많이 받은 답. map 사용
// function solution(array) {
//   let m = new Map();
//   for (let n of array) m.set(n, (m.get(n) || 0)+1);
//   m = [...m].sort((a,b)=>b[1]-a[1]);
//   return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }

console.log(solution([1, 2, 3, 3, 3, 4]));
