//문자열 계산하기

function solution(my_string) {
  let num = [];
  let temp = '';

  for (let i = 0; i < my_string.length; i++) {
    let char = my_string[i];

    if (char === ' ') {
      if (temp !== '') {
        num.push(temp);
        temp = '';
      }
    } else {
      temp += char;
    }
  }

  if (temp !== '') {
    num.push(temp);
  }

  let result = Number(num[0]);
  for (let i = 1; i < num.length; i += 2) {
    let operator = num[i];
    let number = Number(num[i + 1]);

    if (operator === '+') {
      result += number;
    } else if (operator === '-') {
      result -= number;
    }
  }

  return result;
}

console.log(solution('3 + 4 + 5'));

//이런 함수가 있다는거 정도만 알아두자. 알아보니 그렇게 많이 사용된다곤 안 함
// var solution = eval;
