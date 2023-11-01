/* 의상
문제 설명
코니는 매일 다른 옷을 조합하여 입는것을 좋아합니다.

예를 들어 코니가 가진 옷이 아래와 같고, 오늘 코니가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트
코니는 각 종류별로 최대 1가지 의상만 착용할 수 있습니다. 예를 들어 위 예시의 경우 동그란 안경과 검정 선글라스를 동시에 착용할 수는 없습니다.
착용한 의상의 일부가 겹치더라도, 다른 의상이 겹치지 않거나, 혹은 의상을 추가로 더 착용한 경우에는 서로 다른 방법으로 옷을 착용한 것으로 계산합니다.
코니는 하루에 최소 한 개의 의상은 입습니다.
코니가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요. */

function solution(clothes) {
  const clothesMap = new Map();

  // 의상 종류별로 개수를 카운트하여 clothesMap에 저장
  for (const [name, type] of clothes) {
    if (clothesMap.has(type)) {
      clothesMap.set(type, clothesMap.get(type) + 1); // clothesMap에 이미 존재하는 경우에는 개수를 1 증가
    } else {
      clothesMap.set(type, 1); // 새로운 종류의 의상이 나타날 때마다 개수를 1로 초기화
    }
  }

  let answer = 1; // 조합의 수를 계산하고 저장함, 초기값은 1로 설정

  // 각 종류별 의상을 입거나 입지 않는 경우의 수를 계산
  for (const count of clothesMap.values()) {
    answer *= count + 1; // 해당 종류의 의상을 입지 않는 경우까지 포함(+1)
  }

  // 모든 의상을 입지 않는 경우는 제외
  return answer - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5
console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
); // 3
