// 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  var answer = 1;
  let ongoingQueue = [];
  let timerQueue = [];
  let carWeight = 0;

  while (truck_weights.length || ongoingQueue.length) {
    answer++;
    if (carWeight + truck_weights[0] <= weight) {
      carWeight += truck_weights[0];
      ongoingQueue.push(truck_weights.shift());
      timerQueue.push(0);
    }
    timerQueue = timerQueue.map((val) => {
      return ++val;
    });
    if (timerQueue[0] === bridge_length) {
      timerQueue.shift();
      carWeight -= ongoingQueue.shift();
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
