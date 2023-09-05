// 특정 문자 제거하기

// function solution(my_string, letter) {
//   let ans = my_string.replace(/letter/gi, '');
//   return ans;
// }

// console.log(solution('abcdeffF', 'f'));

// 이런 식으로 // 안 에 삭제하고 싶은 변수를 넣고 싶은데 먹히질 않아서 고민하다 다른사람 풀이 봄 ..

// 찾아보니 이렇게 하면 되는거였음 RegExp이걸 완전 몰랐다....
// let reg = new RegExp(letter, 'g');
//     return my_string.replace(reg, '');
// 이 외에도 replaceAll, split으로 분리 후 배열로 변환 하는 방법 등 여러 방법이 있었다.
