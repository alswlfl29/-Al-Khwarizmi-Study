//최소 직사각형

function solution(sizes) {
  let garo = [];
  let sero = [];
  for (let i = 0; i < sizes.length; i++) {
    garo.push(sizes[i][0]);
    sero.push(sizes[i][1]);
  }
  let max_length = Math.max(Math.max(...garo), Math.max(...sero)); // 가로 세로 구분않고 우선 가장 큰 값을 찾는다

  if (garo.includes(max_length)) {
    // 만약 가로에 가장 큰 값이 있으면
    for (let i = 0; i < garo.length; i++) {
      if (garo[i] < sero[i]) {
        // 세로가 더 큰 부분은 가로와 세로 바꿔서 세로 배열에 가로세로 중 작은 값들만 모이게 한 후
        [garo[i], sero[i]] = [sero[i], garo[i]];
      }
    }
    answer = max_length * Math.max(...sero); // 그중 가장 큰 세로크기와 가로 가장 큰 크기와 곱해서 반환
  } else if (sero.includes(max_length)) {
    // 세로도 같은 방식
    for (let i = 0; i < garo.length; i++) {
      if (garo[i] > sero[i]) {
        [garo[i], sero[i]] = [sero[i], garo[i]];
      }
    }
    answer = max_length * Math.max(...garo);
  }
  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

// 다른사람 풀이
// reduce를 사용하면 간단하게 구현 가능
// h,v는 누산기 a,b는 현재 매개변수
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
