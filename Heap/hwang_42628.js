//이중 우선 순위 큐

//답 참조 너무 어려움

function solution(operations) {
  const twoWayPriorityQueue = [];
  const temp = [];

  for (const operation of operations) {
    const [op, val] = operation.split(' ');
    const value = parseInt(val);

    if (op === 'I') {
      twoWayPriorityQueue.push(value);
    } else if (op === 'D') {
      if (value === 1) {
        if (twoWayPriorityQueue.length > 0) {
          const maxIndex = twoWayPriorityQueue.indexOf(
            Math.max(...twoWayPriorityQueue)
          );
          twoWayPriorityQueue.splice(maxIndex, 1);
        }
      } else if (value === -1) {
        if (twoWayPriorityQueue.length > 0) {
          const minIndex = twoWayPriorityQueue.indexOf(
            Math.min(...twoWayPriorityQueue)
          );
          twoWayPriorityQueue.splice(minIndex, 1);
        }
      }
    }
  }

  twoWayPriorityQueue.sort((a, b) => a - b);

  const answer = [];
  if (twoWayPriorityQueue.length === 0) {
    answer.push(0);
    answer.push(0);
  } else {
    answer.push(twoWayPriorityQueue[twoWayPriorityQueue.length - 1]);
    answer.push(twoWayPriorityQueue[0]);
  }

  return answer;
}
console.log(
  solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1'])
);
