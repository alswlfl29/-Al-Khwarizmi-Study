//등수 매기기

function solution(score) {
  let n = score.length;
  let ranks = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    let [english, math] = score[i];
    let avg = (english + math) / 2;

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        let [otherEnglish, otherMath] = score[j];
        let otherAvg = (otherEnglish + otherMath) / 2;

        if (avg > otherAvg) {
          ranks[j]++;
        }
      }
    }
  }
  return ranks;
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);

// function solution(score) {
//   let avg = score.map(v=>(v[0]+v[1])/2);
//   let sorted = avg.slice().sort((a,b)=>b-a);
//   return avg.map(v=>sorted.indexOf(v)+1);
// }
