//영어가 싫어요

// function solution(numbers) {
//   let ans = [];
//   let i = 0;

//   while (i < numbers.length) {
//     let key = numbers[i] + numbers[i + 1];

//     switch (key) {
//       case 'ze':
//         ans.push(0);
//         i += 4;
//         break; // break 추가

//       case 'on':
//         ans.push(1);
//         i += 3;
//         break; // break 추가

//       case 'tw':
//         ans.push(2);
//         i += 3;
//         break; // break 추가

//       case 'th':
//         ans.push(3);
//         i += 5;
//         break; // break 추가

//       case 'fo':
//         ans.push(4);
//         i += 4;
//         break; // break 추가

//       case 'fi':
//         ans.push(5);
//         i += 4;
//         break; // break 추가

//       case 'si':
//         ans.push(6);
//         i += 3;
//         break; // break 추가

//       case 'se':
//         ans.push(7);
//         i += 5;
//         break; // break 추가

//       case 'ei':
//         ans.push(8);
//         i += 5;
//         break; // break 추가

//       case 'ni':
//         ans.push(9);
//         i += 4;
//         break; // break 추가

//       default:
//         break;
//     }
//   }

//   return Number(ans.join(''));
// }

// 원래 이런식으로 하고 싶었는데.
function solution(numbers) {
  const number = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i);
  }
  return +numbers;
}

console.log(solution('onetwothreefourfivesixseveneightnine'));
