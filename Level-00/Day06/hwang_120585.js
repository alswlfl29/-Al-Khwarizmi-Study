//머쓱이보다 키 큰 사람

function solution(array, height) {
  let a = [];
  array.map((h) => {
    if (h > height) {
      a.push(h);
    }
  });
  return a.length;
}

console.log(solution([149, 180, 192, 170], 167));

//문제를 잘못읽고 배열을 출력했다가 사람 수를 출력하는거였었다. 그냥 카운트 쓸걸

// 다른사람 코드 filter 쓰면 되더라..
