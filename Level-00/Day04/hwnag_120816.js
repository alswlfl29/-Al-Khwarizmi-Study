// 피자 나눠먹기(3)

function sol(slice, n) {
  if (n % slice === 0) {
    return n / slice;
  } else {
    return Math.trunc(n / slice) + 1;
  }
}

console.log(sol(7, 15));

// 처음에 생각할 때 나누고 나머지가 있으면 그냥 수를 올림해버리는걸 생각했는데 반올림(round) 빼고 생각이 안나서
// 그냥 생각나는데로 풀고 찾아보니 ceil이 있었다

// return n % slice ? parseInt(n / slice) + 1 : n / slice 3항연산법
