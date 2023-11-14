/**
 * 카펫
 * Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
 * Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
 * Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 *  */

function solution(brown, yellow) {
  // 적용 가능한 수식
  // 1. bh = yh + 2, bw = yw + 2
  // 2. yellow + brown = bh * bw = (yh + 2) * (yw + 2)
  // 3. yellow = yh * yw = (bh - 2)*(bw - 2)
  // 4. brown = bh + bh + bw + bw - 4

  // 가로 >= 세로 이므로 bh는 절반보다 크면 안됨
  for (let bh = 1; bh <= parseInt(brown / 2); bh++) {
    // 4번 식
    let bw = parseInt((brown - 2 * bh + 4) / 2);
    // 1번 식
    let yh = bh - 2;
    let yw = bw - 2;
    // 2, 3번 식
    if (yellow === yh * yw && yellow + brown === bh * bw) {
      return [bw, bh];
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
