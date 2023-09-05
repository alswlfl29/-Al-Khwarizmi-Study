//점의 위치 구하기
function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    return 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    return 3;
  } else {
    return 4;
  }
}

console.log(solution([2, 4]));

// 다른사람 코드 ( 개쩐다 )

// const [num,num2] = dot;
// const check = num * num2 > 0;
// return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);

//return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
