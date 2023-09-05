// 양꼬치

function solution(n, k) {
  return 12000 * n + 2000 * k - 2000 * Math.trunc(n / 10);
}

console.log(solution(64, 6));

// 다른 사람 풀이 참고
// ~~ : 더블 틸트 (tilde) 는 math.floor 대신 사용 가능
// ~ : NOT의 기능을 한다 생각 0,1 반전
