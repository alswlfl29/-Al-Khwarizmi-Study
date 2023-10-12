/**
 * K번째 수
 * 문제 설명: 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
 *          예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 *          1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 *          2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 *          3. 2에서 나온 배열의 3번째 숫자는 5입니다.
 *          배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */

function solution(array, commands) {
  let answer = [];
  commands.map((command) => {
    let newArray = [...array]; // 원본 배열을 복사
    // command[0]부터 command[1]까지의 복사한 배열을 잘라 오름차순으로 정렬
    newArray = newArray.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    // command[2]번째수를 answer에 push
    answer.push(newArray[command[2] - 1]);
  });
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

/**
 * splice와 slice의 차이
 * slice(start[,end]): start부터 end전까지의 복사본을 새로운 배열 객체로 반환
 * splice(start[,deleteCount[,item1[,item2[,...]]]]): start부터 deleteCount만큼의 요소를 제거하고, 제거한 요소를 배열로 반환
 * -> items는 배열에 추가할 요소 지정
 */
