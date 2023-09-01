//각도기

const solution = (angle) => {
  console.log(typeof angle);
  if (0 < angle && angle < 90) {
    return 1;
  } else if (angle == 90) {
    return 2;
  } else if (90 < angle && angle < 180) {
    return 3;
  } else if (angle == 180) {
    return 4;
  }
};

console.log(solution(170));

// 다른 사람 코드.. 생각을 넓히자..!
// function solution(angle) {
//     return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
// }
