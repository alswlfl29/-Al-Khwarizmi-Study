/**
 * 프로세스
 * 문제 설명: 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다.
 *          이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.
 *          1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
 *          2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
 *          3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
 *             3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
 *          예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.
 *          현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.
 */
function solution(priorities, location) {
  let answer = 0;
  // array에 priorities의 값과 index를 넣어줌
  const array = priorities.map((process, index) => {
    return [process, index];
  });
  // array의 길이만큼 반복
  while (array.length) {
    // array의 첫번째 원소 빼기
    const queue = array.shift();
    // queue[0] 값보다 큰 경우 queue를 다시 array뒤에 넣기
    if (array.some((element) => element[0] > queue[0])) {
      array.push(queue);
    } else {
      // 크지 않은 경우 answer에 1 더하기
      answer++;
      // queue의 인덱스와 location이 같은 경우 반복문 종료
      if (queue[1] === location) break;
    }
  }
  return answer;
}

// function solution(priorities, location) {
//   let answer = 0;
//   let processStack = [];
//   let popProcess = [];
//   priorities.map((priority, index) => {
//     while (
//       processStack.length > 0 &&
//       processStack[processStack.length - 1][0] < priority
//     ) {
//       let popItem = processStack.pop();
//       popProcess.push(popItem);
//     }
//     while (
//       popProcess.length > 0 &&
//       popProcess[popProcess.length - 1][0] > priority
//     ) {
//       let popItem = popProcess.pop();
//       processStack.push(popItem);
//     }
//     // popProcess.unshift([priority, index]);
//     processStack.push([priority, index]);
//   });
//   while (popProcess.length > 0) {
//     let popItem = popProcess.pop();
//     processStack.push(popItem);
//   }
//   console.log(processStack);
//   answer = processStack.findIndex((process) => process[1] === location) + 1;
//   return answer;
// }

console.log(solution([2, 1, 3, 2], 2));
// console.log(solution([1, 1, 9, 1, 1, 1], 0));

// 풀이 참조
