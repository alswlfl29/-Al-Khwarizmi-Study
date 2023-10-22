/**
 * 이중우선순위큐
 * 문제 설명: 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.
 *          명령어	수신 탑(높이)
 *          I 숫자  큐에 주어진 숫자를 삽입합니다.
 *          D 1	   큐에서 최댓값을 삭제합니다.
 *          D -1	 큐에서 최솟값을 삭제합니다.
 * 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.
 *  */

// 1. operations 길이만큼 배열 반복
// 2. 새로운 큐를 만들어서 I일 경우 큐에 넣기
// 3. 만약 삭제할 때 큐가 비어있으면 continue
// 3. 배열이 끝나면 큐에 값이 있는지 확인한 후 없으면 [0,0], 있으면 [최대값, 최소값] 반환
function solution(operations) {
  let newQueue = [];
  operations.map((operation) => {
    operation = operation.split(" ");
    if (operation[0] === "I") {
      newQueue.push(Number(operation[1]));
    } else if (operation[0] === "D") {
      if (newQueue.length !== 0) {
        if (operation[1] === "1") {
          let max = Math.max(...newQueue);
          newQueue.splice(newQueue.indexOf(max), 1);
        } else if (operation[1] === "-1") {
          let min = Math.min(...newQueue);
          newQueue.splice(newQueue.indexOf(min), 1);
        }
      }
    }
  });
  if (newQueue.length === 0) {
    return [0, 0];
  } else {
    return [Math.max(...newQueue), Math.min(...newQueue)];
  }
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);

console.log(
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
);
