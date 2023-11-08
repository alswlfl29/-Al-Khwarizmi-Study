function solution(genres, plays) {
  const genreMap = {}; // 장르별 총 재생 횟수를 저장하기 위한 객체
  const songMap = {}; // 장르별 노래 정보를 저장하기 위한 객체

  // 장르별 총 재생 횟수 계산
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreMap[genre]) {
      genreMap[genre] = play;
    } else {
      genreMap[genre] += play;
    }

    // 노래 정보 저장
    if (!songMap[genre]) {
      songMap[genre] = [{ id: i, play }];
    } else {
      songMap[genre].push({ id: i, play });
    }
  }

  // 장르별 총 재생 횟수를 내림차순으로 정렬
  const sortedGenres = Object.keys(genreMap).sort(
    (a, b) => genreMap[b] - genreMap[a]
  );

  const answer = [];

  // 장르별로 최대 2개씩 노래 선택
  for (const genre of sortedGenres) {
    const songs = songMap[genre].sort((a, b) => {
      if (a.play === b.play) {
        return a.id - b.id;
      }
      return b.play - a.play;
    });

    answer.push(songs[0].id); // 가장 많이 재생된 노래 추가

    if (songs.length > 1) {
      answer.push(songs[1].id); // 두 번째로 많이 재생된 노래 추가
    }
  }

  return answer;
}

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays)); // [4, 1, 3, 0]
