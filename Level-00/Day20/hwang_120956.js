//옹알이 (1)

function solution(babbling) {
  var answer = 0;
  babbling.forEach((a) => {
    while (true) {
      if (a === '') {
        answer += 1;
        break;
      } else if (a.startsWith('aya')) {
        a = a.substr(3);
        if (a.startsWith('aya')) {
          break;
        }
      } else if (a.startsWith('ye')) {
        a = a.substr(2);
        if (a.startsWith('ye')) {
          break;
        }
      } else if (a.startsWith('woo')) {
        a = a.substr(3);
        if (a.startsWith('woo')) {
          break;
        }
      } else if (a.startsWith('ma')) {
        a = a.substr(2);
        if (a.startsWith('ma')) {
          break;
        }
      } else {
        break;
      }
    }
  });
  return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));

// 정규식 적응 하자..
// function solution(babbling) {
//   var answer = 0;
//   const regex = /^(aya|ye|woo|ma)+$/;

//   babbling.forEach(word => {
//     if (regex.test(word)) answer++;
//   })

//   return answer;
// }
