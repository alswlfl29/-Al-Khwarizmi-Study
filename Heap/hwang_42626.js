// 더 맵게

function solution(scoville, K) {
  let answer = 0;

  scoville.sort((a, b) => a - b);
  let newscoville = [];
  let sIndex = 0; // 스코빌 인덱스
  let nsIndex = 0; // 뉴스코빌 인덱스
  let scovileOk = false; // k 이상인지

  if (scoville[sIndex] >= K) {
    return 0;
  }

  newscoville.push(scoville[0] + scoville[1] * 2);
  sIndex = 2;
  answer++;

  while (!scovileOk) {
    let min1 = -1;
    let min2 = -1;

    if (scoville.length === sIndex && newscoville.length === nsIndex) {
      return -1;
    }

    if (scoville.length === sIndex) {
      min1 = newscoville[nsIndex];
      nsIndex++;
    } else if (newscoville.length === nsIndex) {
      min1 = scoville[sIndex];
      sIndex++;
    } else if (newscoville[nsIndex] < scoville[sIndex]) {
      min1 = newscoville[nsIndex];
      nsIndex++;
    } else {
      min1 = scoville[sIndex];
      sIndex++;
    }

    if (min1 >= K) {
      break;
    }

    if (scoville.length === sIndex && newscoville.length === nsIndex) {
      return -1;
    }

    if (scoville.length === sIndex) {
      min2 = newscoville[nsIndex];
      nsIndex++;
    } else if (newscoville.length === nsIndex) {
      min2 = scoville[sIndex];
      sIndex++;
    } else if (newscoville[nsIndex] < scoville[sIndex]) {
      min2 = newscoville[nsIndex];
      nsIndex++;
    } else {
      min2 = scoville[sIndex];
      sIndex++;
    }

    newscoville.push(min1 + min2 * 2);
    answer++;
  }

  return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
