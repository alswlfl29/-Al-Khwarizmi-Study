//베스트앨범

function solution(genres, plays) {
  let genreSongs = new Map();
  let genreTotalPlays = new Map();

  for (let i = 0; i < genres.length; i++) {
    let view = plays[i];
    let genre = genres[i];

    if (genreSongs.has(genre)) {
      genreSongs.get(genre).push({ index: i, play: view });
    } else {
      genreSongs.set(genre, [{ index: i, play: view }]);
      genreTotalPlays.set(genre, 0);
    }

    genreTotalPlays.set(genre, genreTotalPlays.get(genre) + view);
  }

  const sortedGenres = [...genreTotalPlays.keys()].sort(
    (a, b) => genreTotalPlays.get(b) - genreTotalPlays.get(a)
  );
  let answer = [];
  for (const genre of sortedGenres) {
    const songs = genreSongs.get(genre);
    songs.sort((a, b) => b.play - a.play || a.index - b.index);
    const top2 = songs.slice(0, 2);

    for (const song of top2) {
      answer.push(song.index);
    }
  }
  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);
