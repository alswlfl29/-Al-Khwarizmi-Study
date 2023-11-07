/**
 * 베스트앨범
 * 문제 설명: 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
 *          1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 *          2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 *          3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 *          노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
 *  */

function solution(genres, plays) {
  var answer = [];
  let album = [];
  let hashMap = new Map();
  // 1. 장르-재생 횟수를 해시맵에 생성
  for (let i = 0; i < genres.length; i++) {
    // 해시맵에 장르가 없는 경우 해당 장르와 재생 횟수 저장(이때, 재생 횟수는 배열로)
    if (!hashMap.has(genres[i])) {
      hashMap.set(genres[i], [[plays[i], i]]);
    }
    // 해시맵에 장르가 있는 경우 존재하는 배열에 재생 횟수 추가
    else {
      hashMap.set(genres[i], [...hashMap.get(genres[i]), [plays[i], i]]);
    }
  }
  hashMap.forEach((key, value) => {
    // 2. 장르 안의 재생 횟수를 오름 차순으로 정렬
    key.sort((a, b) => b[0] - a[0]);
    // 3. 장르의 총 재생 횟수 구하기
    let totalPlays = key.reduce((acc, cur) => acc + cur[0], 0);
    // 4. album 배열에 [장르의 재생횟수 최대 2개, 총 재생 횟수] 저장
    album.push([
      key.length > 1 ? [key[0][1], key[1][1]] : [key[0][1]],
      totalPlays,
    ]);
  });
  // 5. 총 재생 횟수를 기준으로 내림차순 정렬
  album.sort((a, b) => b[1] - a[1]);
  // 6. album에 있는 값들을 answer에 저장
  album.map((value) => {
    value[0].map((v) => {
      answer.push(v);
    });
  });
  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
console.log(
  solution(["classic", "pop", "classic", "classic"], [500, 2500, 150, 800])
);
