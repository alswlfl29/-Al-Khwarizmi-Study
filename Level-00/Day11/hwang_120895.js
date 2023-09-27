// 인덱스 바꾸기

function solution(my_string, num1, num2) {
  let jo = [...my_string];
  let temp1 = jo[num1];
  jo[num1] = jo[num2];
  jo[num2] = temp1;
  return jo.join('');
}

console.log(solution('i love you', 3, 6));

//구조분해할당
//[my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
