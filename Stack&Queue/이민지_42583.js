/**
 * 다리를 지나는 트럭
 * 문제 설명: 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다.
 *          모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
 *          다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다.
 *          단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 *          예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다.
 *          무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 *          따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
 *          solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다.
 *          이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.
 */

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0); // 현재 다리를 지나고 있는 트럭 배열(0으로 채우기)
  let bridge_weight = 0; // 현재 다리를 건너고 있는 무게

  while (bridge.length > 0) {
    let popItem = bridge.shift(); // bridge의 첫번째 원소 빼고, 현재 다리 무게에서 빼기
    bridge_weight -= popItem;
    time += 1; // 시간 1초 추가
    // 만약 대기 트럭이 남아있는 경우
    if (truck_weights.length > 0) {
      // 현재 다리 무게와 대기 트럭의 첫번째 원소의 합이 weight보다 작거나 같은 경우 다리를 건너는 트럭 배열에 추가
      if (bridge_weight + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        bridge_weight += truck;
        bridge.push(truck);
      } else {
        // 0을 추가하여 bridge_length와 같은 길이를 유지
        bridge.push(0);
      }
    }
  }
  return time;
}
console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
