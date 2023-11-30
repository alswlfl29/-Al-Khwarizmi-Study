// 카펫

function solution(brown, yellow) {
  let ans = [];
  let sum = brown + yellow;
  let index = 1;
  let yaksu = []; //약수를 담을 배열
  while (index < sum / 2) {
    //약수를 구하는 반복문
    if (sum % index === 0 && index > 2) {
      //index > 2 하는 이유는 어차피 최소 값이 3x3은 나와야 함으로 3이상부터 약수에 넣기 위함
      yaksu.push(index);
    }
    index++;
  }
  if (yaksu.length % 2 === 1) {
    let solo = yaksu[Math.floor(yaksu.length / 2)];
    ans.push(solo, solo);
  }
  while (yaksu.length !== 0) {
    let sero = yaksu.shift(); // 0번째
    let garo = yaksu.pop(); // 마지막번째
    if ((garo - 2) * (sero - 2) === yellow) {
      ans.push(garo, sero);
    }
  }
  return ans;
}

console.log(solution(44, 100));
10, 2;
8, 1;
24, 24;

// 다른사람 풀이
function solution(brown, red) {
  var answer = [];
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }

  return [x, i];
}
