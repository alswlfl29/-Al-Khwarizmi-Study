/**
 * 더 맵게
 * 문제 설명: 매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.
 *          섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
 *          Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
 *          Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.
 *  */

class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
    ) {
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (currentIndex * 2 + 1 < this.heap.length) {
      let minChildIndex =
        currentIndex * 2 + 2 < this.heap.length &&
        this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1]
          ? currentIndex * 2 + 2
          : currentIndex * 2 + 1;

      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }

      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      currentIndex = minChildIndex;
    }

    return minValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHaep = new MinHeap();

  for (const sco of scoville) {
    minHaep.push(sco);
  }
  let mixedCount = 0;

  while (minHaep.size() >= 2 && minHaep.peek() < K) {
    const first = minHaep.pop();
    const second = minHaep.pop();
    const mixedScov = first + second * 2;
    minHaep.push(mixedScov);
    mixedCount += 1;
  }

  return minHaep.peek() < K ? -1 : mixedCount;
}
// 참고 자료: https://velog.io/@kwb020312/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8D%94-%EB%A7%B5%EA%B2%8C
// 뭔소리지...??

// function solution(scoville, K) {
//   let answer = 0;
//   while (true) {
//     scoville.sort((a, b) => a - b);
//     if (scoville[0] >= K) break;
//     if (scoville[1] >= K) return -1;
//     let newScoville = scoville[0] + scoville[1] * 2;
//     scoville.shift();
//     scoville.shift();
//     scoville.unshift(newScoville);
//     answer += 1;
//   }
//   return answer;
// }

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
// 1. scoville 배열을 오름차순으로 정렬
// 2. 정렬된 scovile 배열의 첫 번째 원소가 K보다 작은 경우 스코빌 지수 공식대로 계산하기
// 3. 계산한 값을 scovile 배열의 첫 번째 원소로 넣고 정렬하기
