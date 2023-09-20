/* 평행
  문제 설명: 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
          [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
          주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(dots) {
  var answer = 0;

  // 기울기 구하는 함수
  function calculation(a, b, c, d) {
    let abInclination, cdInclination;

    abInclination = (b[1] - a[1]) / (b[0] - a[0]);
    cdInclination = (d[1] - c[1]) / (d[0] - c[0]);

    if (abInclination === cdInclination) answer += 1;
  }

  calculation(dots[0], dots[1], dots[2], dots[3]);
  calculation(dots[0], dots[2], dots[1], dots[3]);
  calculation(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}

/**
 * 틀린 코드
 * function solution(dots) {
      var answer = 0;
      let inclination1 = 0;
      let inclination2 = 0;
      let count = 0;
      while (inclination1 !== inclination2) {
        if (count === 3) {
          answer = -1;
          break;
        }
        inclination1 =
          (dots[0][0] - dots[1 + count][0]) / (dots[0][1] - dots[1 + count][1]);
        inclination2 =
          (dots[2 - count][0] - dots[3 - count][0]) /
          (dots[2 - count][1] - dots[3 - count][1]);
        count += 1;
      }

      return answer;
    }
 */

// 풀이참고
