// 짝수 홀수 개수

function solution(num_list) {
  let even = 0;
  let odd = 0;
  num_list.map((num) => {
    if (num % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  });
  return [even, odd];
}

console.log(solution([1, 2, 3, 4, 5]));

// 다른사람 코드중 가장 눈에 들어온 코드
// return [
//   num_list.filter((num) => num % 2 === 0).length,
//   num_list.filter((num) => num % 2 === 1).length,
// ];

// 이것도 신박했다 갈길이 멀군..
// for(let a of num_list){
//   answer[a%2] += 1
// }
